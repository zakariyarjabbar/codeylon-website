import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItem, portfolio } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return portfolio.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getPortfolioItem((await params).slug);
  if (!item) return {};
  return pageMetadata({ title: item.title, description: item.shortDescription, path: `/portfolio/${item.slug}`, image: item.heroImage });
}

export default async function PortfolioDetailPage({ params }: Props) {
  const item = getPortfolioItem((await params).slug);
  if (!item) notFound();
  return (
    <article>
      <header className="project-hero"><div className="shell project-hero__copy"><div><span>{item.label}</span><h1>{item.title}</h1><p>{item.shortDescription}</p></div><dl><div><dt>القطاع</dt><dd>{item.industry}</dd></div><div><dt>الموقع</dt><dd>{item.location}</dd></div><div><dt>السنة</dt><dd>{item.year}</dd></div><div><dt>النوع</dt><dd dir="ltr">{item.category}</dd></div></dl></div><div className="project-hero__image"><Image src={item.heroImage} alt={`عرض واجهة مشروع ${item.title}`} fill sizes="100vw" priority /></div></header>
      <section className="section"><div className="shell project-overview"><h2>عن المشروع</h2><div><p className="lead-copy">{item.fullOverview}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div></section>
      <section className="section section--ivory"><div className="shell challenge-solution"><article><h2>المشكلة</h2><p>{item.challenge}</p></article><article><h2>المعالجة</h2><p>{item.solution}</p></article></div></section>
      <section className="project-gallery shell">{item.gallery.map((image, index) => <div key={`${image}-${index}`}><Image src={image} alt={`${index === 0 ? "المشهد الرئيسي" : "تفصيل إضافي"} من مفهوم ${item.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>)}</section>
      <section className="section"><div className="shell project-lists"><div><h2>الخدمات</h2><ul>{item.services.map((value) => <li key={value}>{value}</li>)}</ul></div><div><h2>المخرجات</h2><ul>{item.deliverables.map((value) => <li key={value}>{value}</li>)}</ul></div><div><h2>الصفحات</h2><ul>{item.pages.map((value) => <li key={value}>{value}</li>)}</ul></div><div><h2>التقنيات</h2><ul>{item.tech.map((value) => <li key={value}>{value}</li>)}</ul></div></div></section>
      <section className="section section--navy"><div className="shell simple-cta"><div><h2>هل تحتاج إلى عمل قريب من هذا النطاق؟</h2><p>أرسل تفاصيل نشاطك والصفحات التي تتوقعها، وسنقترح بنية مناسبة بدل نسخ هذا النموذج.</p></div><Link className="button button--gold" href="/request-quote">اطلب مشروعًا مشابهًا</Link></div></section>
    </article>
  );
}
