import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How Codeylon collects, uses, stores, and protects information submitted through codeylon.com.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "Privacy Policy — Codeylon",
    description: "How Codeylon collects, uses, stores, and protects information submitted through codeylon.com.",
    url: "/privacy/",
  },
  twitter: {
    title: "Privacy Policy — Codeylon",
    description: "How Codeylon collects, uses, stores, and protects information submitted through codeylon.com.",
  },
};

const toc = [
  ["#who-we-are", "Who we are"],
  ["#information", "Information collected"],
  ["#use", "How it is used"],
  ["#sharing", "Service providers"],
  ["#retention", "Retention"],
  ["#rights", "Your rights"],
  ["#security", "Security"],
  ["#contact-privacy", "Contact"],
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy."
      lede="This policy explains what information Codeylon receives through this website, why it is used, and the choices available to you."
      meta={["Effective: 1 September 2026", "Operator: Codeylon, Baghdad, Iraq"]}
      tocLabel="Privacy policy contents"
      toc={toc}
      current="privacy"
    >
      <p className="legal-notice"><strong>Important:</strong> This policy is written for the current static website and its enquiry form. If Codeylon adds new analytics, advertising, account features, or processors, this policy and the consent controls must be updated before those tools are activated.</p>

      <section id="who-we-are">
        <h2>1. Who we are</h2>
        <p>Codeylon is a web design and front-end development studio based in Baghdad, Iraq. For questions about this policy or information submitted through the website, contact <a href="mailto:hello@codeylon.com">hello@codeylon.com</a>.</p>
      </section>

      <section id="information">
        <h2>2. Information we collect</h2>
        <h3>Information you choose to send</h3>
        <p>When you submit the project brief form or email us, we may receive your name, email address, business or organization name, expected project type and size, preferred launch date, and the project details you write. Do not include passwords, payment card information, government identifiers, medical information, or other highly sensitive information in the form.</p>
        <h3>Technical information</h3>
        <p>The hosting provider and form provider may process standard technical logs such as IP address, device and browser type, requested page, time of access, and security or error events. These logs are used to deliver and protect the service.</p>
        <h3>Privacy preferences</h3>
        <p>The website stores your privacy preference in your browser&apos;s local storage for up to six months. This prevents the preference notice from appearing on every visit. See the <Link href="/cookies/">cookie policy</Link> for details.</p>
        <h3>Analytics</h3>
        <p>Analytics is not active in the current website configuration. If Codeylon activates analytics later, it will remain disabled until a visitor gives consent, and this policy will identify the provider and data involved.</p>
      </section>

      <section id="use">
        <h2>3. How information is used</h2>
        <p>Codeylon uses enquiry information to:</p>
        <ul>
          <li>review whether a project fits the studio&apos;s services;</li>
          <li>reply to the enquiry and ask necessary scope questions;</li>
          <li>prepare a proposal or take steps requested before a possible agreement;</li>
          <li>prevent spam, fraud, misuse, and security incidents;</li>
          <li>maintain business and legal records where required; and</li>
          <li>improve the clarity and operation of the website.</li>
        </ul>
        <p>Submitting an enquiry does not add you to a marketing mailing list. Codeylon does not sell personal information.</p>
      </section>

      <section id="sharing">
        <h2>4. Service providers and transfers</h2>
        <p>Codeylon may use service providers that process limited information to operate the website. The current enquiry form is delivered through FormSubmit, which forwards the form content to Codeylon&apos;s email inbox. The website host and email provider also process information needed to deliver their services.</p>
        <p>These providers may operate infrastructure outside Iraq. Where privacy law requires safeguards for an international transfer, Codeylon is responsible for using an appropriate provider agreement or transfer mechanism.</p>
        <p>Information may also be disclosed when reasonably necessary to comply with law, respond to a valid legal request, protect rights or safety, or investigate abuse. Codeylon does not share enquiry information for third-party advertising.</p>
      </section>

      <section id="retention">
        <h2>5. How long information is kept</h2>
        <p>Enquiries that do not become active projects are kept for up to 12 months after the last meaningful contact, then deleted or anonymized unless a longer period is required for a dispute, legal obligation, or documented business need. If a project begins, relevant correspondence and project records may be retained for the duration of the engagement and any required accounting, contractual, or legal period.</p>
        <p>The local privacy preference expires after approximately six months, at which point the website asks again.</p>
      </section>

      <section id="rights">
        <h2>6. Your choices and rights</h2>
        <p>Depending on the law that applies to you, you may have rights to ask for access, correction, deletion, restriction, portability, or objection to certain uses of personal information. You may also withdraw consent for optional analytics at any time through <CookieSettingsButton className="text-link">cookie settings</CookieSettingsButton>.</p>
        <p>To make a privacy request, email <a href="mailto:hello@codeylon.com">hello@codeylon.com</a> with enough detail to identify the relevant enquiry. Codeylon may need to verify the request before acting. If a local supervisory authority applies to you, you may also have the right to complain to that authority.</p>
      </section>

      <section id="security">
        <h2>7. Security</h2>
        <p>Codeylon uses reasonable technical and organizational measures for this website, including HTTPS at the hosting layer, restrictive browser security headers, limited third-party scripts, spam-reduction fields, and access controls on service accounts. No internet transmission or storage system can be guaranteed completely secure.</p>
        <p>If you believe information submitted through the website has been exposed or misused, contact Codeylon promptly.</p>
      </section>

      <section>
        <h2>8. Children</h2>
        <p>This website is intended for business enquiries and is not directed to children. Do not submit personal information about a child through the project form.</p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>Codeylon may update this policy when the website, service providers, or legal obligations change. The effective date at the top identifies the current version. Material changes should be reviewed before new data collection begins.</p>
      </section>

      <section id="contact-privacy">
        <h2>10. Contact</h2>
        <p>Privacy questions and requests can be sent to <a href="mailto:hello@codeylon.com">hello@codeylon.com</a>.</p>
      </section>
    </LegalPage>
  );
}
