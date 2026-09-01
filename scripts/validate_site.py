#!/usr/bin/env python3
"""Small dependency-free validator for the Codeylon static site."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = sorted(ROOT.glob("*.html"))
SKIP_SCHEMES = ("http://", "https://", "mailto:", "tel:", "data:", "javascript:")
PLACEHOLDER_PATTERN = re.compile(r"\b(lorem ipsum|todo|tbd|coming soon|g-xxxx)\b", re.I)
CURRENCY_PATTERN = re.compile(r"(?:[$€£]\s?\d|\b(?:USD|EUR|IQD)\s?\d)", re.I)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.links: list[tuple[str, str]] = []
        self.images: list[dict[str, str | None]] = []
        self.inputs: list[dict[str, str | None]] = []
        self.labels_for: set[str] = set()
        self.title_parts: list[str] = []
        self.in_title = False
        self.meta_description = False
        self.canonical = False
        self.noindex = False
        self.target_blank_links: list[dict[str, str | None]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = dict(attrs)
        if data.get("id"):
            self.ids.append(str(data["id"]))
        if tag in {"a", "link", "script", "img", "source", "form"}:
            key = {"a": "href", "link": "href", "script": "src", "img": "src", "source": "src", "form": "action"}[tag]
            if data.get(key):
                self.links.append((tag, str(data[key])))
        if tag == "img":
            self.images.append(data)
        if tag in {"input", "select", "textarea"}:
            self.inputs.append(data)
        if tag == "label" and data.get("for"):
            self.labels_for.add(str(data["for"]))
        if tag == "title":
            self.in_title = True
        if tag == "meta" and data.get("name", "").lower() == "description" and data.get("content"):
            self.meta_description = True
        if tag == "meta" and data.get("name", "").lower() == "robots" and "noindex" in (data.get("content") or "").lower():
            self.noindex = True
        if tag == "link" and data.get("rel") == "canonical" and data.get("href"):
            self.canonical = True
        if tag == "a" and data.get("target") == "_blank":
            self.target_blank_links.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)


def local_target(page: Path, value: str) -> Path | None:
    value = value.strip()
    if not value or value.startswith("#") or value.lower().startswith(SKIP_SCHEMES):
        return None
    path = unquote(urlsplit(value).path)
    if not path or path == "/":
        return ROOT / "index.html"
    return (ROOT / path.lstrip("/")) if path.startswith("/") else (page.parent / path)


def validate_page(page: Path) -> list[str]:
    errors: list[str] = []
    text = page.read_text(encoding="utf-8")
    parser = PageParser()
    parser.feed(text)

    if not "".join(parser.title_parts).strip():
        errors.append("missing <title>")
    if not parser.meta_description:
        errors.append("missing meta description")
    if not parser.noindex and not parser.canonical:
        errors.append("indexable page is missing a canonical URL")
    if len(parser.ids) != len(set(parser.ids)):
        duplicates = sorted({item for item in parser.ids if parser.ids.count(item) > 1})
        errors.append("duplicate IDs: " + ", ".join(duplicates))

    for image in parser.images:
        if "alt" not in image:
            errors.append(f"image is missing alt: {image.get('src', '(no src)')}")
        if not image.get("width") or not image.get("height"):
            errors.append(f"image is missing width/height: {image.get('src', '(no src)')}")

    for field in parser.inputs:
        field_type = (field.get("type") or "").lower()
        if field_type in {"hidden", "submit", "button"} or field.get("aria-hidden") == "true":
            continue
        field_id = field.get("id")
        if not field_id or field_id not in parser.labels_for:
            errors.append(f"form control lacks an associated label: {field.get('name', field_id or '(unnamed)')}")
        if "placeholder" in field:
            errors.append(f"placeholder attribute is not allowed: {field.get('name', field_id or '(unnamed)')}")

    for tag, value in parser.links:
        target = local_target(page, value)
        if target is not None and not target.exists():
            errors.append(f"broken local {tag} reference: {value}")

    for link in parser.target_blank_links:
        rel = set((link.get("rel") or "").split())
        if not {"noopener", "noreferrer"}.issubset(rel):
            errors.append(f"target=_blank link lacks noopener noreferrer: {link.get('href')}")

    placeholder = PLACEHOLDER_PATTERN.search(text)
    if placeholder:
        errors.append(f"placeholder phrase found: {placeholder.group(0)!r}")
    if page.name == "index.html" and CURRENCY_PATTERN.search(text):
        errors.append("public home page contains a currency amount")
    return errors


def main() -> int:
    all_errors: list[tuple[Path, str]] = []
    for page in HTML_FILES:
        for error in validate_page(page):
            all_errors.append((page, error))

    required = {
        "styles.css", "script.js", "site-config.js", "robots.txt", "sitemap.xml",
        "privacy.html", "cookies.html", "terms.html", "404.html", "thank-you.html",
        "_headers", "assets/og-codeylon.png",
    }
    for relative in sorted(required):
        if not (ROOT / relative).exists():
            all_errors.append((ROOT / relative, "required file is missing"))

    if all_errors:
        print(f"Site validation failed with {len(all_errors)} issue(s):")
        for path, message in all_errors:
            print(f"- {path.relative_to(ROOT) if path.is_relative_to(ROOT) else path}: {message}")
        return 1

    print(f"Site validation passed: {len(HTML_FILES)} HTML pages checked.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
