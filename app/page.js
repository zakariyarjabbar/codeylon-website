import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectForm from "@/components/ProjectForm";
import { CONTACT_EMAIL, INSTAGRAM_URL, SITE_URL } from "@/lib/site";

export const metadata = {
  title: { absolute: "Codeylon — Websites Built for Real Businesses" },
  description:
    "Codeylon is a Baghdad-based web agency building fast, accessible front-end websites for businesses in Iraq and beyond. Start with a project brief.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Codeylon — Websites Built for Real Businesses",
    description: "Clear scope, realistic timelines, and custom front-end websites from Baghdad to anywhere.",
    url: "/",
  },
  twitter: {
    title: "Codeylon — Websites Built for Real Businesses",
    description: "Custom front-end websites from Baghdad to anywhere.",
  },
};

const estimates = [
  ["Focused landing page", "One goal, one responsive page", "5–8 working days", "P5D"],
  ["Small business website", "Usually 4–6 core pages", "2–3 weeks", "P10D"],
  ["Larger marketing website", "Usually 7–12 pages", "3–5 weeks", "P15D"],
];

const services = [
  ["Business websites", "Structured multi-page sites for companies, clinics, practices, restaurants, consultants, and local organizations."],
  ["Landing pages", "Focused pages for a launch, campaign, service, event, or paid-ad destination with one clear conversion path."],
  ["Portfolios", "Clear presentation for designers, photographers, architects, studios, and independent professionals."],
  ["Website redesigns", "A new information structure and front-end for an existing site that feels dated, confusing, slow, or difficult on mobile."],
  ["Front-end integrations", "Practical additions such as secure enquiry forms, maps, analytics, booking links, social links, and embedded third-party tools."],
];

const goodFit = [
  "Marketing and information pages",
  "Responsive layouts and interactions",
  "Contact forms and third-party embeds",
  "On-page SEO and performance setup",
  "Legal, error, and utility pages",
];

const specialistFit = [
  "Custom user accounts or authentication",
  "Database-backed products",
  "Complex dashboards or admin systems",
  "Custom checkout and inventory logic",
  "Large custom backend workflows",
];

const timeline = [
  ["Focused landing page", "5–8 working days", "Content readiness, one clear offer, limited integrations"],
  ["Small business website, 4–6 pages", "10–15 working days", "Number of page types, content edits, decision speed"],
  ["Larger marketing website, 7–12 pages", "15–25 working days", "Content volume, languages, custom sections, integrations"],
  ["Redesign with unclear content", "Quoted after audit", "Migration, old-page review, missing assets, approvals"],
];

const process = [
  ["Scope the project", "We review your business, goals, required pages, content, integrations, and timeline. Then we confirm what belongs in the quote."],
  ["Plan the content and structure", "We organize the navigation, page hierarchy, calls to action, and the content each page must carry."],
  ["Set the visual direction", "We establish typography, color, spacing, components, and key page composition before expanding the system."],
  ["Build and test", "We implement real responsive code, forms, interactions, metadata, accessibility, performance, and mobile behavior."],
  ["Review and launch", "We complete the agreed revision pass, check production configuration, connect the domain, and hand over the website files."],
];

const standards = [
  ["Search foundations", "Unique titles and descriptions, canonical URLs, structured data, sitemap, robots rules, and social sharing metadata."],
  ["Accessibility", "Keyboard operation, visible focus, semantic structure, form labels and errors, contrast, reduced motion, and zoom resilience."],
  ["Performance", "Lean code, local fonts, reserved media dimensions, restrained motion, and no unnecessary third-party scripts."],
  ["Privacy controls", "Consent before optional analytics, equal accept and refuse choices, a persistent settings link, and clear cookie information."],
  ["Utility pages", "A useful 404 page, privacy policy, cookie policy, terms, and a success state for submitted enquiries."],
  ["Launch safety", "Security headers, HTTPS guidance, form spam protection, backup instructions, and a pre-launch checklist."],
];

const faqs = [
  ["Why are there no prices on the website?", "The same number of pages can require very different content, design, migration, and integration work. We quote after reviewing the real scope so you can compare a defined deliverable, not a vague package."],
  ["How long will my website take?", "A focused landing page commonly takes 5–8 working days. A 4–6 page business website commonly takes 2–3 weeks. Larger or content-heavy sites often take 3–5 weeks. Your proposal will include a project-specific range."],
  ["Do you build accounts, databases, or complex backends?", "Not currently. Codeylon focuses on public-facing front-end websites and straightforward third-party integrations. If the brief requires complex backend work, we will identify that before quoting rather than hiding it inside the build."],
  ["What do you need before starting?", "We need a decision-maker, the business goal, expected pages, available content and brand assets, required integrations, and a realistic feedback schedule. Missing content can be planned, but it changes the timeline."],
  ["Can Codeylon work with clients outside Iraq?", "Yes. The work is delivered online, and the process is designed for remote review and feedback."],
  ["Will I receive the website files?", "The handover scope is confirmed in the proposal. For standard static websites, the website files and launch documentation are prepared for your ownership and future maintenance."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Codeylon",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/codeylon-logo.svg`,
  image: `${SITE_URL}/assets/og-codeylon.png`,
  email: CONTACT_EMAIL,
  description: "A Baghdad-based web agency building public-facing front-end websites for businesses and organizations.",
  address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
  areaServed: "Worldwide",
  sameAs: [INSTAGRAM_URL],
  knowsAbout: ["Web design", "Front-end development", "Landing pages", "Accessibility", "Search engine optimization"],
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy">
              <h1 id="hero-title">Websites for businesses ready to look <span>established.</span></h1>
              <p className="lede">Codeylon designs and builds clear, responsive front-end websites for businesses in Iraq and beyond. No generic package, no public price list—every project begins with its real scope.</p>
              <div className="button-row">
                <Link className="button button-primary" href="#contact">Send a project brief</Link>
                <Link className="button button-secondary" href="#services">See what we build</Link>
              </div>
              <div className="hero-meta" aria-label="Studio details">
                <span>Based in Baghdad, Iraq</span>
                <span>Available for remote projects</span>
                <span>Front-end websites only</span>
              </div>
            </div>

            <aside className="scope-sheet" aria-labelledby="estimate-title">
              <div className="scope-sheet-head">
                <h2 id="estimate-title">Typical build windows</h2>
                <span className="scope-status">Taking enquiries</span>
              </div>
              <ul className="estimate-list">
                {estimates.map(([title, note, duration, dateTime]) => (
                  <li key={title}>
                    <span><strong>{title}</strong><small>{note}</small></span>
                    <time dateTime={dateTime}>{duration}</time>
                  </li>
                ))}
              </ul>
              <p className="sheet-note">Estimates begin after scope, content, and feedback responsibilities are agreed. Complex integrations or delayed client feedback extend the schedule.</p>
            </aside>
          </div>
        </section>

        <div className="principle-band" aria-label="How Codeylon works">
          <ul className="container principle-list">
            <li>Scope before quote</li>
            <li>Responsive by default</li>
            <li>No fabricated proof</li>
            <li>Files built to be kept</li>
          </ul>
        </div>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="container intro-grid">
            <div><h2 id="services-title">A focused website studio, not a software factory.</h2></div>
            <div className="intro-copy">
              <p className="lede">We concentrate on the public-facing part of the web: the pages people use to understand, trust, and contact your business.</p>
              <ul className="service-list">
                {services.map(([title, copy]) => (
                  <li className="service-item" key={title}><h3>{title}</h3><p>{copy}</p></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="scope-title">
          <div className="container scope-boundary">
            <div>
              <h2 id="scope-title">Front-end is our lane.</h2>
              <p className="lede">Being clear about the boundary protects the schedule and gives you an honest proposal.</p>
            </div>
            <div className="boundary-columns">
              <div>
                <p className="boundary-title">Good fit now</p>
                <ul className="boundary-list">{goodFit.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <p className="boundary-title">Needs another specialist</p>
                <ul className="boundary-list">{specialistFit.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="timeline" aria-labelledby="timeline-title">
          <div className="container">
            <div className="timeline-head">
              <div><h2 id="timeline-title">Realistic time, shown before the project starts.</h2></div>
              <p className="lede">A simple page can move quickly. A good multi-page website needs time for decisions, content, responsive behavior, review, and launch checks.</p>
            </div>
            <div className="timeline-table-wrap">
              <table className="timeline-table">
                <thead><tr><th scope="col">Typical scope</th><th scope="col">Estimated build</th><th scope="col">What most affects it</th></tr></thead>
                <tbody>
                  {timeline.map(([scope, duration, factors]) => (
                    <tr key={scope}>
                      <th scope="row">{scope}</th>
                      <td data-label="Estimated build"><strong>{duration}</strong></td>
                      <td data-label="What affects it">{factors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="assumption-note">These are planning ranges, not guarantees. Your proposal will state the exact scope, revision allowance, responsibilities, and target schedule before work begins.</p>
          </div>
        </section>

        <section className="section section-dark" id="process" aria-labelledby="process-title">
          <div className="container process-grid">
            <div>
              <h2 id="process-title">A visible process from brief to launch.</h2>
              <p className="lede">You should always know what is being decided, what is being built, and what we need from you next.</p>
            </div>
            <ol className="process-list">
              {process.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="section" id="quality" aria-labelledby="quality-title">
          <div className="container">
            <h2 id="quality-title">The invisible work is still part of the website.</h2>
            <p className="lede">A finished site is more than the home page. These are included in the build standard and checked before handover.</p>
            <div className="quality-grid">
              {standards.map(([title, copy]) => <article className="quality-item" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section section-rule" id="faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div>
              <h2 id="faq-title">Before you send the brief.</h2>
              <p className="lede">Straight answers to the questions that change scope most often.</p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}><summary>{question}</summary><div className="faq-answer">{answer}</div></details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-copy">
              <h2 id="contact-title">Start with the project, not the price.</h2>
              <p className="lede">Tell us what the business does, what the website needs to achieve, and what you already have. We will review fit before discussing a quote.</p>
              <div className="contact-direct">
                <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
                <p><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram @codeylon</a></p>
                <p className="microcopy">Baghdad, Iraq · Remote projects welcome</p>
              </div>
            </div>
            <ProjectForm />
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
