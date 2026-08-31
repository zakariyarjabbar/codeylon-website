# Codeylon

Arabic-first RTL studio website built with Next.js 16, TypeScript, Tailwind CSS, and locally bundled Arabic fonts. Includes 20 public pages, JSON-driven portfolio content, and a frontend-only quote flow.

## Run locally

Use Node.js 24 (see `.nvmrc` and `package.json`). Dependencies are pinned and `package-lock.json` is committed for reproducible installs.

```bash
npm ci
npm run dev
```

Production verification:

```bash
npm run check
npm run start
```

`npm run check` runs lint, generates Next.js route types, checks TypeScript, builds the production site, and verifies generated pages, metadata, portfolio routes, image assets, sitemap, and the SVG logo. GitHub Actions runs the same checks on pushes to `main` and pull requests, plus a production dependency audit.

The production build uses webpack, which is supported by Next.js on Vercel. No static-export configuration, custom server, database, or special Vercel adapter is needed.

## Deploy on Vercel

1. Import `zakariyarjabbar/codeylon-website` from GitHub.
2. Use the **Next.js** framework preset and repository root (`./`).
3. Use Node.js **24.x**, install command `npm ci`, and build command `npm run build`. Leave Output Directory at its Next.js default; do not set it to `out` or `public`.
4. Set `NEXT_PUBLIC_SITE_URL` to the final public origin, such as `https://codeylon.com`. If initially using only a Vercel subdomain, use that production URL instead. The fallback is `https://codeylon.com`.
5. Deploy. Add your custom domain in Vercel when ready; update `NEXT_PUBLIC_SITE_URL` and redeploy if the public origin changes.

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, social metadata, structured data, sitemap, and robots.txt. It is public, not a secret. No API keys or backend environment variables are required. `.env.example` documents the optional local setting; real `.env` files are excluded from Git.

After deployment, check the homepage, a service page, a portfolio detail page, the quote-summary flow, `/sitemap.xml`, and `/robots.txt` on the deployed domain.

References: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [supported Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

## Content

- Portfolio source: `data/portfolio.json`
- Services: `data/services.ts`
- FAQs: `data/faqs.ts`
- Business contact constants: `lib/site.ts`

Portfolio examples are explicitly labeled as concepts or presentation models. **Before public launch, replace the mock WhatsApp number in `lib/site.ts` and verify the email, Instagram, location, and business hours.** Also review the legal pages against the actual business and data-handling practices. Deployment success alone does not verify those business details.

## Forms and privacy

The quote form has no backend. It validates locally, saves a browser-only draft, and prepares WhatsApp, email, and copyable summaries. Cookie preferences are stored locally and optional categories remain disabled by default.

## Design and assets

The homepage uses `components/HomeHero.tsx`: ivory editorial copy, navy typography, one gold inquiry action, and studio photography. It stacks copy before photography on mobile. The transparent logo is `public/brand/codeylon-mark.svg`.

Product and design notes are in `PRODUCT.md` and `DESIGN.md`. Raster provenance is recorded in adjacent `.png.json` files. Local design explorations, screenshots, agent state, dependency folders, and generated build files are excluded from the repository; all runtime assets are included.
