# Security policy

## Reporting a website security issue

Email `hello@codeylon.com` with the subject `Security report`. Include the affected URL, a clear description, reproduction steps, and the impact. Do not include unrelated personal data or publicly disclose an unresolved issue.

## Static-site security model

The website intentionally has no accounts, authentication, database, custom API, or backend application. Its main external processor is the FormSubmit endpoint used by the project brief form. Optional Google Analytics code remains disabled until a valid measurement ID is added and a visitor consents.

The `_headers` file defines a restrictive Content Security Policy, clickjacking protection, browser feature restrictions, referrer controls, and MIME-sniffing protection for compatible static hosts.

## Deployment requirements

- Force HTTPS and redirect HTTP to HTTPS.
- Confirm the host applies `_headers`; if it does not, recreate the same headers in its control panel.
- Do not enable HSTS preload until every Codeylon subdomain is confirmed to support HTTPS permanently.
- Protect hosting, DNS, email, FormSubmit, Instagram, and analytics accounts with unique passwords and multi-factor authentication.
- Review provider access quarterly and remove accounts that are no longer required.
- Keep form data out of public repositories and issue trackers.
- Retest headers after changing hosts, form providers, analytics, or third-party embeds.
