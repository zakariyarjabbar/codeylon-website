import Link from "next/link";

export function PageHero({ title, text, action = true }: { title: string; text: string; action?: boolean }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <h1>{title}</h1>
        <div>
          <p>{text}</p>
          {action && <Link className="text-link text-link--light" href="/request-quote">ناقش مشروعك معنا <span aria-hidden="true">←</span></Link>}
        </div>
      </div>
    </section>
  );
}
