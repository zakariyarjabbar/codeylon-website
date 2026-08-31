import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/lib/portfolio";
import { ArrowIcon } from "@/components/ArrowIcon";

export function PortfolioCard({ item, priority = false }: { item: PortfolioItem; priority?: boolean }) {
  return (
    <article className="work-card">
      <Link href={`/portfolio/${item.slug}`} className="work-card__image" aria-label={`عرض مشروع ${item.title}`}>
        <Image src={item.heroImage} alt={`عرض موقع ${item.title} على شاشة ضمن بيئة عمل`} fill sizes="(max-width: 760px) 100vw, 50vw" priority={priority} />
      </Link>
      <div className="work-card__meta">
        <div>
          <h3><Link href={`/portfolio/${item.slug}`}>{item.title}</Link></h3>
          <span>{item.label}</span>
          <p>{item.shortDescription}</p>
        </div>
        <Link className="round-link" href={`/portfolio/${item.slug}`} aria-label={`تفاصيل ${item.title}`}><ArrowIcon /></Link>
      </div>
    </article>
  );
}
