import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const exportDirectory = new URL("../out/", import.meta.url);
const exportPath = fileURLToPath(exportDirectory);
const headerPath = join(exportPath, "_headers");

function collectHtmlFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const absolute = join(directory, entry);
    return statSync(absolute).isDirectory()
      ? collectHtmlFiles(absolute)
      : absolute.endsWith(".html")
        ? [absolute]
        : [];
  });
}

const hashes = new Set();
const inlineScriptPattern = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;

collectHtmlFiles(exportPath).forEach((file) => {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(inlineScriptPattern)) {
    if (!match[1]) continue;
    const digest = createHash("sha256").update(match[1], "utf8").digest("base64");
    hashes.add(`'sha256-${digest}'`);
  }
});

if (!hashes.size) throw new Error("No inline Next.js scripts were found to hash.");

const headers = readFileSync(headerPath, "utf8");
const scriptSource = "script-src 'self'";
if (!headers.includes(scriptSource)) throw new Error("The CSP script-src directive is missing from out/_headers.");

const finalized = headers.replace(scriptSource, `${scriptSource} ${Array.from(hashes).sort().join(" ")}`);
writeFileSync(headerPath, finalized, "utf8");
console.log(`Added ${hashes.size} inline-script hashes to out/_headers.`);
