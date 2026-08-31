import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const buildRoot = path.resolve(".next/server/app");
const publicRoot = path.resolve("public");
const projects = JSON.parse(await readFile("data/portfolio.json", "utf8"));

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(entryPath);
    return entry.name.endsWith(".html") && !entry.name.startsWith("_") ? [entryPath] : [];
  }));
  return nested.flat();
}

const requiredRoutes = [
  "index", "about", "contact", "services", "portfolio", "request-quote", "faq",
  "privacy-policy", "terms", "cookie-policy",
  "services/landing-pages", "services/business-websites", "services/company-websites",
  "services/website-redesign", "services/frontend-implementation",
  ...projects.map((project) => `portfolio/${project.slug}`),
];
for (const route of requiredRoutes) await access(path.join(buildRoot, `${route}.html`));

const files = await htmlFiles(buildRoot);
const canonicals = new Set();
const origins = new Set();
const publicAssets = new Set(["/brand/codeylon-mark.svg"]);

for (const file of files) {
  const html = await readFile(file, "utf8");
  assert.match(html, /<html[^>]*lang="ar"[^>]*dir="rtl"/, `${file}: Arabic RTL root`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${file}: one H1`);
  assert.match(html, /<meta name="description" content="[^"]+"/, `${file}: description`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `${file}: missing canonical`);
  assert.ok(!canonicals.has(canonical[1]), `${file}: duplicate canonical`);
  canonicals.add(canonical[1]);
  origins.add(new URL(canonical[1]).origin);
  assert.ok(!/prototype-switcher|hero-prototype/.test(html), `${file}: prototype markup`);
  assert.ok(!/\/Users\/|\/private\/var\//.test(html), `${file}: local machine path`);

  for (const [image] of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image, /\balt="[^"]*"/, `${file}: image alt attribute`);
    const src = image.match(/\bsrc="([^"]+)"/)?.[1];
    if (!src || !src.startsWith("/")) continue;
    const url = new URL(src.replaceAll("&amp;", "&"), "https://assets.example");
    const asset = url.pathname === "/_next/image" ? url.searchParams.get("url") : url.pathname;
    if (asset?.startsWith("/") && !asset.startsWith("/_next/")) publicAssets.add(asset);
  }
}

assert.equal(origins.size, 1, "Pages must use one canonical origin");
for (const asset of publicAssets) {
  const assetPath = path.resolve(publicRoot, `.${asset}`);
  assert.ok(assetPath.startsWith(`${publicRoot}${path.sep}`), `Invalid asset path: ${asset}`);
  await access(assetPath);
}

const home = await readFile(path.join(buildRoot, "index.html"), "utf8");
assert.match(home, /class="home-hero"/, "Shipping hero is missing");
assert.match(home, /src="\/brand\/codeylon-mark.svg"/, "Transparent SVG logo is missing");
const sitemap = await readFile(path.join(buildRoot, "sitemap.xml.body"), "utf8");
for (const canonical of canonicals) assert.ok(sitemap.includes(`<loc>${canonical.replace(/\/$/, "")}</loc>`) || sitemap.includes(`<loc>${canonical}</loc>`), `Sitemap missing ${canonical}`);
const robots = await readFile(path.join(buildRoot, "robots.txt.body"), "utf8");
assert.ok(robots.includes(`${[...origins][0]}/sitemap.xml`), "Robots sitemap origin mismatch");

console.log(`Build checks passed: ${files.length} pages, ${projects.length} portfolio projects, ${publicAssets.size} image assets, Arabic RTL, SEO metadata, sitemap, and SVG logo.`);
