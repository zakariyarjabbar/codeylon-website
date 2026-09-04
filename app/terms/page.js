import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Website Terms",
  description: "Terms governing use of codeylon.com and project enquiries sent to Codeylon.",
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: "Website Terms — Codeylon",
    description: "Terms governing use of codeylon.com and project enquiries sent to Codeylon.",
    url: "/terms/",
  },
  twitter: {
    title: "Website Terms — Codeylon",
    description: "Terms governing use of codeylon.com and project enquiries sent to Codeylon.",
  },
};

const toc = [
  ["#acceptance", "Acceptance"],
  ["#enquiries", "Enquiries"],
  ["#estimates", "Estimates"],
  ["#content", "Website content"],
  ["#acceptable-use", "Acceptable use"],
  ["#third-parties", "Third parties"],
  ["#liability", "Liability"],
  ["#law", "Applicable law"],
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Website terms."
      lede="These terms cover use of codeylon.com and the enquiry process. Any paid project is governed by its own accepted proposal or agreement."
      meta={["Effective: 1 September 2026", "Codeylon · Baghdad, Iraq"]}
      tocLabel="Terms contents"
      toc={toc}
      current="terms"
    >
      <p className="legal-notice"><strong>Professional review recommended:</strong> These terms are a practical baseline for a Baghdad-based studio website, not a replacement for a project contract. Codeylon should have an Iraqi lawyer verify the operator details, jurisdiction clause, liability language, and any tax or consumer obligations before commercial launch.</p>

      <section id="acceptance">
        <h2>1. Acceptance of these terms</h2>
        <p>By using codeylon.com, you agree to these website terms and the documents linked from them. If you do not agree, do not submit information through the website. These terms may be updated by publishing a revised version with a new effective date.</p>
      </section>

      <section id="enquiries">
        <h2>2. Enquiries are not project agreements</h2>
        <p>Submitting a project brief, sending an email, or receiving an initial reply does not create a client relationship, reserve production time, or require either party to proceed. A project begins only after the parties accept a written proposal, statement of work, or other agreement and complete any stated starting requirements.</p>
        <p>Codeylon may decline an enquiry that is outside the studio&apos;s capability, availability, legal or ethical standards, or front-end scope.</p>
      </section>

      <section id="estimates">
        <h2>3. Timelines and quotes</h2>
        <p>Time ranges shown on the website are planning estimates for typical scopes. They are not delivery guarantees or offers at a fixed price. Actual timing depends on the confirmed pages, content readiness, integrations, revision scope, client feedback, dependencies, and events outside reasonable control.</p>
        <p>No public price list applies. Any price, payment schedule, deliverable, revision allowance, launch target, and handover item must be stated in the accepted project proposal. If these website terms conflict with an accepted project agreement, the project agreement controls for that project.</p>
      </section>

      <section>
        <h2>4. Project responsibilities</h2>
        <p>Project-specific responsibilities are defined in the proposal. Unless stated otherwise, a client is responsible for providing accurate instructions, lawful content, timely decisions, access to required accounts, and confirmation that submitted names, logos, text, media, and other materials may be used.</p>
        <p>Codeylon&apos;s current service focuses on public-facing front-end websites. Custom authentication, database systems, complex backends, and other excluded functionality require separate specialist scope and are not implied by a general website enquiry.</p>
      </section>

      <section id="content">
        <h2>5. Website content and intellectual property</h2>
        <p>The Codeylon name, logo, site design, text, illustrations, and source code published on this website are owned by Codeylon or used with permission, except where another owner is identified. You may view and use the website for its intended informational purpose. You may not copy, resell, republish, scrape at scale, remove ownership notices, or create a misleading imitation without permission.</p>
        <p>Ownership and licensing of work created for a client are defined in the accepted project agreement. Nothing on this public website transfers project files, trademarks, or other rights.</p>
      </section>

      <section id="acceptable-use">
        <h2>6. Acceptable use</h2>
        <p>You must not:</p>
        <ul>
          <li>use the website to send unlawful, deceptive, abusive, or unsolicited material;</li>
          <li>submit malware, credentials, payment information, or sensitive personal data through the project form;</li>
          <li>attempt to bypass security, disrupt availability, or access systems without authorization;</li>
          <li>impersonate another person or misrepresent your authority to act for an organization; or</li>
          <li>use automated requests in a way that harms the website or its service providers.</li>
        </ul>
        <p>Codeylon may restrict or report misuse where reasonably necessary to protect the service, other people, or legal rights.</p>
      </section>

      <section id="third-parties">
        <h2>7. Third-party services and links</h2>
        <p>The website links to or uses third-party services, including Instagram and the FormSubmit form service. Those services operate under their own terms and privacy practices. Codeylon is not responsible for content, availability, or actions on a third-party site, although providers are selected and configured with reasonable care.</p>
      </section>

      <section>
        <h2>8. Availability and accuracy</h2>
        <p>Codeylon aims to keep this website accurate and available, but the website is provided on an “as available” basis. Content may be corrected, replaced, or removed. Temporary interruption may occur for maintenance, hosting problems, security events, or circumstances outside reasonable control.</p>
        <p>General information on the website is not legal, financial, tax, security, or other regulated professional advice.</p>
      </section>

      <section id="liability">
        <h2>9. Limitation of liability</h2>
        <p>To the maximum extent permitted by applicable law, Codeylon is not liable for indirect, incidental, special, or consequential loss arising only from use of this public website or reliance on general website content. Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for fraud or deliberate misconduct.</p>
        <p>Liability related to a paid client project is governed by that project&apos;s accepted agreement, not this public website clause.</p>
      </section>

      <section id="law">
        <h2>10. Applicable law and disputes</h2>
        <p>Unless an accepted project agreement states otherwise, these website terms are intended to be governed by the applicable laws of the Republic of Iraq. Disputes relating only to use of this website should first be raised with Codeylon in good faith. Any jurisdiction or venue requirement remains subject to mandatory law and should be confirmed by local legal counsel.</p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>Questions about these terms can be sent to <a href="mailto:hello@codeylon.com">hello@codeylon.com</a>.</p>
      </section>
    </LegalPage>
  );
}
