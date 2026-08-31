import { PageHero } from "@/components/PageHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolio } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "أعمالنا", description: "نماذج مواقع عربية للأعمال والشركات وصفحات الهبوط، مع توضيح صريح للمشاريع التجريبية ومفاهيم التصميم.", path: "/portfolio", image: "/images/portfolio-print.png" });

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="أعمال توضّح كيف نفكّر، لا مجرد صور جميلة." text="نستخدم المشاريع التجريبية بصدق لعرض قدرتنا على حل مشكلات قطاعات مختلفة. كل نموذج مميّز بوضوح بطبيعته." />
      <section className="section"><div className="shell portfolio-list">{portfolio.map((item, index) => <PortfolioCard key={item.slug} item={item} priority={index < 2} />)}</div></section>
      <section className="section section--ivory"><div className="shell scope-note"><h2>عن المشاريع التجريبية.</h2><div><p>المشروع التجريبي ليس ادعاءً بوجود عميل أو نتيجة تجارية. هو نموذج مكتمل الفكرة يوضح طريقة التعامل مع البنية والمحتوى والتصميم والتنفيذ.</p><p>عندما نعرض عملًا حقيقيًا موثّقًا، سنذكر نطاقه وحقائقه بصورة منفصلة. لا نضع أسماء شركات معروفة أو نتائج غير قابلة للتحقق.</p></div></div></section>
    </>
  );
}
