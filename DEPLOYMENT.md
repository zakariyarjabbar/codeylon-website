# Production launch checklist

The Next.js site is configured with `output: "export"` and builds to the static `out/` directory. The items below require owner credentials or operational decisions and cannot be completed safely in source code alone.

## 1. Confirm business details

- Confirm `hello@codeylon.com` is the inbox Codeylon wants published and monitored.
- Confirm the Instagram URL `https://www.instagram.com/codeylon/`.
- Replace or expand copy only with verified claims. Do not add client logos, testimonials, awards, or performance numbers without evidence.

## 2. Activate the project form

The form posts to FormSubmit for `hello@codeylon.com`. On the first real submission, FormSubmit sends an activation email to that address. The inbox owner must approve it before later enquiries will be forwarded normally.

After activation:

1. Send a real low-risk test brief.
2. Confirm it arrives in the inbox and redirects to `/thank-you/`.
3. Confirm spam filtering does not hide it.
4. Record FormSubmit as a processor in Codeylon's internal provider list.

If Codeylon changes form provider, update the form action, Content Security Policy `form-action`, privacy policy, and retention process together.

## 3. Decide on analytics

Analytics is deliberately disabled because no account ID was provided. The consent controls and Google Analytics 4 loader are ready.

To enable it locally, create `.env.local` and set the public measurement ID:

```sh
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-REALID
```

For Cloudflare Pages, configure the same variable in the project build settings before deploying.

Before deploying that change:

- configure the analytics property for `codeylon.com`;
- use the shortest practical retention period;
- keep Google Signals and ad personalization disabled unless separately justified;
- update the cookie policy page with the exact active cookies and retention;
- verify no request to Google occurs before consent and that withdrawal stops future loading.

## 4. Legal review

The privacy, cookie, and website terms pages are practical drafts matched to the current static site. An Iraqi lawyer should verify the operator identity, jurisdiction, liability language, retention commitment, and any local tax or consumer requirements. Project proposals still need their own scope, payment, revision, IP, cancellation, and liability terms.

## 5. Hosting, DNS, and security

- Use build command `npm run build` and output directory `out`.
- Deploy only the generated `out/` directory; do not deploy local backups or repository secrets.
- Connect `codeylon.com` and `www.codeylon.com`, choose one canonical host, and redirect the other.
- Force HTTPS.
- Confirm the host reads `_headers` and `_redirects`. If it does not, reproduce them in the host configuration.
- Check the live Content Security Policy, permissions policy, referrer policy, frame protection, and MIME protection.
- Add HSTS only after all subdomains are permanently HTTPS-ready.
- Protect registrar, DNS, hosting, email, form, and analytics accounts with multi-factor authentication.

## 6. Backups and recovery

Use a 3-2-1 approach:

1. Keep the website in a private or controlled Git repository with protected default branch history.
2. Keep the hosting provider's deployments/version history enabled.
3. Keep a separate encrypted archive outside the hosting account at least monthly and before every major edit.

The included GitHub Actions workflow validates every push and creates a 90-day downloadable archive each week when the project is hosted on GitHub. Test a restore at least twice a year. A backup is not complete until it has been restored successfully.

## 7. Final live checks

- Test at 360, 390, 768, 1024, and 1440 pixel widths.
- Test keyboard navigation, 200% zoom, reduced motion, and a screen reader smoke test.
- Test the contact form without transmitting sensitive data.
- Open every legal link, the 404 page, the success page, sitemap, robots file, and social preview image.
- Confirm there is no mixed content and no unexpected third-party request before consent.
- Run a Lighthouse production audit and investigate regressions rather than chasing a perfect lab score.
- Submit `https://codeylon.com/sitemap.xml` in the search console used by Codeylon.

## 8. Cloudflare Pages commands

For Git integration, use:

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Build output directory: `out`

For a direct Wrangler deployment:

```sh
npm run deploy
```
