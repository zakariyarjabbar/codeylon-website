import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getService, services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({ title: service.shortTitle, description: service.summary, path: `/services/${service.slug}` });
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return (
    <>
      <PageHero title={service.title} text={service.summary} />
      <section className="section"><div className="shell service-detail-intro"><div><h2>ما هي هذه الخدمة؟</h2></div><div><p className="lead-copy">{service.description}</p><p>{service.deliverable}</p></div></div></section>
      <section className="section section--ivory"><div className="shell detail-columns"><article><h2>لمن تناسب؟</h2><ul>{service.audience.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h2>ما الذي يشمله العمل؟</h2><ul>{service.included.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h2>صفحات أو مخرجات نموذجية</h2><ul>{service.pages.map((item) => <li key={item}>{item}</li>)}</ul></article></div></section>
      <section className="section"><div className="shell timeline-panel"><div><h2>المدة والتسعير</h2><p>{service.duration}</p></div><div><p>لا نعرض سعرًا عامًا لأن النطاق يتغير مع عدد الصفحات، جاهزية المحتوى، اللغات، مستوى التصميم، والمراجعات. بعد مناقشة هذه النقاط تحصل على عرض واضح ومحدد.</p><Link className="button button--navy" href={`/request-quote?service=${service.slug}`}>اطلب عرضًا لهذه الخدمة</Link></div></div></section>
    </>
  );
}
