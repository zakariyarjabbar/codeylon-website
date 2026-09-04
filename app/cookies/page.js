import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Cookie Policy",
  description: "The cookies and browser storage used by codeylon.com, including how to change analytics preferences.",
  alternates: { canonical: "/cookies/" },
  openGraph: {
    title: "Cookie Policy — Codeylon",
    description: "The cookies and browser storage used by codeylon.com, including how to change analytics preferences.",
    url: "/cookies/",
  },
  twitter: {
    title: "Cookie Policy — Codeylon",
    description: "The cookies and browser storage used by codeylon.com, including how to change analytics preferences.",
  },
};

const toc = [
  ["#what", "What storage means"],
  ["#current", "Current storage"],
  ["#analytics", "Optional analytics"],
  ["#control", "Your controls"],
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie policy."
      lede="Codeylon keeps tracking off by default. This page lists the browser storage used by the current website and explains how to change your choice."
      meta={["Effective: 1 September 2026", "Analytics status: disabled"]}
      tocLabel="Cookie policy contents"
      toc={toc}
      current="cookies"
    >
      <section id="what">
        <h2>1. Cookies and similar browser storage</h2>
        <p>A cookie is a small text file stored by a website. Similar technologies, including local storage, can also save information in your browser. Privacy rules may apply to both. Codeylon uses these technologies only for the purposes described here.</p>
      </section>

      <section id="current">
        <h2>2. Storage used now</h2>
        <p>The current website does not activate analytics or advertising cookies. It uses one first-party local-storage item to remember whether you reviewed the privacy notice.</p>
        <div className="timeline-table-wrap">
          <table className="cookie-table">
            <thead><tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Purpose</th><th scope="col">Duration</th></tr></thead>
            <tbody>
              <tr>
                <td data-label="Name"><code>codeylon-consent-v1</code></td>
                <td data-label="Type">First-party local storage</td>
                <td data-label="Purpose">Remembers essential and analytics preferences. This is necessary to respect your choice across pages.</td>
                <td data-label="Duration">Up to 180 days, then the site asks again</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="analytics">
        <h2>3. Optional analytics</h2>
        <p>The website includes a consent-ready integration for Google Analytics 4, but no measurement ID is configured and no analytics script is currently loaded. If Codeylon activates it, the script will load only after a visitor actively allows analytics. Refusing analytics will not block any page or form.</p>
        <p>Before activation, Codeylon must update this table with the exact cookie names, purposes, provider information, retention settings, and any cross-border transfer details. Advertising signals and ad personalization are disabled in the prepared configuration.</p>
        <p>The site also respects supported Global Privacy Control and Do Not Track browser signals by keeping analytics unavailable.</p>
      </section>

      <section id="control">
        <h2>4. How to change or remove your choice</h2>
        <p>Use the button below or the “Cookie settings” link in the footer to review your preference. You can also clear this website&apos;s cookies and local storage in your browser settings. If storage is blocked or cleared, the notice may appear again.</p>
        <p><CookieSettingsButton className="button button-ink">Open cookie settings</CookieSettingsButton></p>
        <p>For questions about this policy, email <a href="mailto:hello@codeylon.com">hello@codeylon.com</a>. For broader information about how enquiry data is handled, read the <Link href="/privacy/">privacy policy</Link>.</p>
      </section>
    </LegalPage>
  );
}
