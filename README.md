# Codeylon website

Production-ready Next.js website for Codeylon, a Baghdad-based front-end website studio. It uses the App Router and exports to static HTML for Cloudflare Pages.

## Included

- Contact-first home page with no public pricing
- Scope-based delivery estimates and explicit service boundaries
- Responsive navigation, accessible project form, and inline validation
- Consent controls with analytics disabled until a valid measurement ID is configured
- Privacy, cookie, terms, 404, and form-success pages
- Canonical metadata, structured data, sitemap, robots rules, manifest, and social preview asset
- Security headers for Netlify or Cloudflare Pages-compatible static hosting
- Local fonts and authored SVG assets; no placeholder photography
- Reusable React components for navigation, legal layouts, consent, and the project form
- Next.js metadata, sitemap, robots, manifest, and static route generation
- Automated local/CI build and exported-site checks

## Preview locally

Install dependencies and start the Next.js development server:

```sh
npm install
npm run dev
```

Then open `http://127.0.0.1:4173/`.

## Validate

```sh
npm run check
```

The production build is written to `out/`.

## Before production

Follow [DEPLOYMENT.md](DEPLOYMENT.md). The website is complete from a code and content-structure perspective, but the owner must activate the form inbox, decide whether to configure analytics, and obtain final local legal review.
