import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-heading">
      <div className="home-hero__copy">
        <h1 id="home-heading">موقع يليق<br /><em>بجدية عملك.</em></h1>
        <p>نصمّم ونطوّر مواقع للأعمال في العراق. عربية أولًا، واضحة على كل شاشة، وتسهّل على عملائك الوصول إليك.</p>
        <div className="hero-actions">
          <Link className="button button--gold" href="/request-quote">ناقش مشروعك معنا</Link>
          <Link className="text-link" href="/portfolio">شاهد أعمالنا <ArrowIcon /></Link>
        </div>
      </div>
      <div className="home-hero__photo">
        <Image
          src="/images/hero-studio.png"
          alt="تخطيط صفحات موقع عربي على طاولة عمل بجانب شاشة تعرض تصميم الموقع"
          fill
          sizes="(max-width: 860px) 100vw, 48vw"
          priority
        />
      </div>
    </section>
  );
}
