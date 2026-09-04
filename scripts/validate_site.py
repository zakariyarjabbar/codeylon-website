#!/usr/bin/env python3
"""Dependency-free checks for the generated Codeylon Next.js export."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
EXPORT = ROOT / "out"
HTML_FILES = sorted(EXPORT.rglob("*.html")) if EXPORT.exists() else []
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
        if tag == "link" and "canonical" in (data.get("rel") or "").split() and data.get("href"):
            self.canonical = True
        if tag == "a" and data.get("target") == "_blank":
            self.target_blank_links.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)


def exported_target(value: str) -> Path | None:
    value = value.strip()
    if not value or value.startswith("#") or value.lower().startswith(SKIP_SCHEMES):
        return None
    path = unquote(urlsplit(value).path)
    if not path or path == "/":
        return EXPORT / "index.html"
    candidate = EXPORT / path.lstrip("/")
    if candidate.exists():
        return candidate
    if path.endswith("/") or not Path(path).suffix:
        return candidate / "index.html"
    return candidate


def validate_page(page: Path) -> list[str]:
    errors: list[str] = []
    text = page.read_text(encoding="utf-8")
    visible_source = re.sub(r"<(?:script|style)\b[^>]*>.*?</(?:script|style)>", "", text, flags=re.I | re.S)
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
        target = exported_target(value)
        if target is not None and not target.exists():
            errors.append(f"broken local {tag} reference: {value}")

    for link in parser.target_blank_links:
        rel = set((link.get("rel") or "").split())
        if not {"noopener", "noreferrer"}.issubset(rel):
            errors.append(f"target=_blank link lacks noopener noreferrer: {link.get('href')}")

    placeholder = PLACEHOLDER_PATTERN.search(visible_source)
    if placeholder:
        errors.append(f"placeholder phrase found: {placeholder.group(0)!r}")
    if page == EXPORT / "index.html" and CURRENCY_PATTERN.search(visible_source):
        errors.append("public home page contains a currency amount")
    return errors


def main() -> int:
    all_errors: list[tuple[Path, str]] = []
    if not EXPORT.exists():
        print("Site validation failed: out/ does not exist. Run npm run build first.")
        return 1

    expected_pages = {
        "index.html",
        "404.html",
        "privacy/index.html",
        "cookies/index.html",
        "terms/index.html",
        "thank-you/index.html",
    }
    for relative in sorted(expected_pages):
        if not (EXPORT / relative).exists():
            all_errors.append((EXPORT / relative, "generated page is missing"))

    required = {
        "_headers",
        "_redirects",
        "robots.txt",
        "sitemap.xml",
        "manifest.webmanifest",
        "assets/og-codeylon.png",
        "assets/logo-mark.svg",
    }
    for relative in sorted(required):
        if not (EXPORT / relative).exists():
            all_errors.append((EXPORT / relative, "required exported file is missing"))

    headers = (EXPORT / "_headers").read_text(encoding="utf-8") if (EXPORT / "_headers").exists() else ""
    if "'unsafe-inline'" in headers:
        all_errors.append((EXPORT / "_headers", "CSP must not allow unrestricted inline scripts"))
    if "'sha256-" not in headers:
        all_errors.append((EXPORT / "_headers", "CSP is missing generated inline-script hashes"))

    for page in HTML_FILES:
        for error in validate_page(page):
            all_errors.append((page, error))

    if all_errors:
        print(f"Site validation failed with {len(all_errors)} issue(s):")
        for path, message in all_errors:
            display = path.relative_to(ROOT) if path.is_relative_to(ROOT) else path
            print(f"- {display}: {message}")
        return 1

    print(f"Site validation passed: {len(HTML_FILES)} generated HTML pages checked.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
