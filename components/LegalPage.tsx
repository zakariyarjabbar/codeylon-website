import Link from "next/link";

export type LegalSection = { title: string; paragraphs: string[]; bullets?: string[] };

export function LegalPage({ title, intro, updated, sections }: { title: string; intro: string; updated: string; sections: LegalSection[] }) {
  return (
    <><header className="legal-hero"><div className="shell"><h1>{title}</h1><p>{intro}</p><span>آخر تحديث: {updated}</span></div></header><section className="section legal-section"><div className="shell legal-layout"><aside><strong>في هذه الصفحة</strong><nav>{sections.map((section, index) => <a key={section.title} href={`#legal-${index}`}>{section.title}</a>)}</nav><Link href="/contact">سؤال عن هذه السياسة؟</Link></aside><div className="legal-copy">{sections.map((section, index) => <section key={section.title} id={`legal-${index}`}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div></div></section></>
  );
}
