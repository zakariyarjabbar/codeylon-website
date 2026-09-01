# Codeylon website

Production-ready static website for Codeylon, a Baghdad-based front-end website studio.

## Included

- Contact-first home page with no public pricing
- Scope-based delivery estimates and explicit service boundaries
- Responsive navigation, accessible project form, and inline validation
- Consent controls with analytics disabled until a valid measurement ID is configured
- Privacy, cookie, terms, 404, and form-success pages
- Canonical metadata, structured data, sitemap, robots rules, manifest, and social preview asset
- Security headers for Netlify or Cloudflare Pages-compatible static hosting
- Local fonts and authored SVG assets; no placeholder photography
- Automated local/CI site checks

## Preview locally

Run this from the project directory:

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Validate

```sh
python3 scripts/validate_site.py
```

## Before production

Follow [DEPLOYMENT.md](DEPLOYMENT.md). The website is complete from a code and content-structure perspective, but the owner must activate the form inbox, decide whether to configure analytics, and obtain final local legal review.
