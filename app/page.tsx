import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { HomeHero } from "@/components/HomeHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { featuredPortfolio } from "@/lib/portfolio";
import { processSteps } from "@/lib/site";

const reasons = [
  ["العربية ليست طبقة إضافية", "نصمّم اتجاه القراءة والمسافات والتسلسل من البداية للغة العربية وRTL."],
  ["الوضوح قبل الاستعراض", "كل صفحة تؤدي وظيفة مفهومة: شرح، إثبات، أو توجيه إلى الخطوة التالية."],
  ["تصميم خاص بالنشاط", "لا نعيد تدوير قالب ثابت؛ نبني النظام حول المحتوى والجمهور والهوية."],
  ["تنفيذ Frontend منظم", "مكوّنات قابلة للصيانة، سلوك متجاوب، وحالات تفاعل محسوبة."],
];

const industries = ["عيادات", "مطاعم ومقاهٍ", "شركات خدمات", "عقارات", "متاجر محلية", "صالونات", "مكاتب مهنية", "مشاريع ناشئة", "أعمال شخصية"];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section section--ivory portfolio-home-section">
        <div className="shell">
          <div className="featured-opening">
            <div className="featured-opening__copy">
              <h2>أعمال مختارة،<br />مبنية على مشكلات حقيقية.</h2>
              <p>نماذج صريحة حول طبيعتها. ما هو تجريبي يُسمّى تجريبيًا، وما يهمّنا هو دقة التفكير والتنفيذ.</p>
              <Link className="text-link" href="/portfolio">عرض جميع الأعمال <span aria-hidden="true">←</span></Link>
            </div>
            <PortfolioCard item={featuredPortfolio[0]} priority />
          </div>
          <div className="featured-more">
            {featuredPortfolio.slice(1).map((item) => <PortfolioCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell intro-grid">
          <p className="intro-statement">موقعك ليس ملفًا تعريفيًا فقط. إنّه المكان الذي يقرر فيه العميل إن كان عملك يستحق التواصل.</p>
          <div>
            <h2>نرتّب ما تريد قوله، ثم نبنيه بصورة تليق به.</h2>
            <p>نحوّل خدماتك ومعلوماتك إلى تجربة واضحة: انطباع أول أقوى، وصول أسهل إلى ما تقدّمه، وتواصل مباشر من الهاتف أو المكتب.</p>
            <Link className="text-link" href="/about">اعرف كيف نفكّر <span aria-hidden="true">←</span></Link>
          </div>
        </div>
      </section>

      <section className="section services-home">
        <div className="shell services-home__grid">
          <div className="services-sticky">
            <h2>خدمات محددة.<br />تنفيذ بلا مبالغة.</h2>
            <p>نركّز على المواقع التعريفية وتجارب الواجهة الأمامية التي يحتاجها العمل فعلًا. الأنظمة الخلفية الثقيلة ليست ضمن عرضنا الأساسي.</p>
            <Link className="button button--navy" href="/services">تفاصيل الخدمات</Link>
          </div>
          <div className="service-ledger">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div><h3>{service.shortTitle}</h3><p>{service.summary}</p></div>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy why-section">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <h2>جودة تُرى في التفاصيل،<br />لا في الادعاءات.</h2>
            <p>حين لا توجد أرقام أو جوائز موثّقة، يجب أن يتحدث العمل نفسه: بنية مفهومة، محتوى دقيق، واستجابة لا تنهار على الهاتف.</p>
          </div>
          <div className="reasons-grid">
            {reasons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell process-grid">
          <div><h2>مسار عمل واضح من أول حديث إلى الإطلاق.</h2><p>لكل مرحلة قرار ومخرجات ومراجعة. بهذه الطريقة يبقى المشروع مفهومًا ولا يتحوّل إلى سلسلة تعديلات بلا اتجاه.</p></div>
          <ol>
            {processSteps.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section section--ivory industries-section">
        <div className="shell industries-grid">
          <div><h2>مواقع لأعمال تريد أن تظهر بصورة أكثر جدية.</h2><p>نكيّف البنية واللغة والصور مع طبيعة النشاط، لا مع قالب قطاع جاهز.</p></div>
          <ul>{industries.map((industry) => <li key={industry}>{industry}</li>)}</ul>
        </div>
      </section>

      <section className="section faq-preview">
        <div className="shell faq-preview__grid">
          <div><h2>قبل أن تبدأ.</h2><p>إجابات مباشرة عن النطاق والوقت والمحتوى وطريقة التسعير.</p><Link className="text-link" href="/faq">جميع الأسئلة <span aria-hidden="true">←</span></Link></div>
          <div>{faqs.slice(0, 5).map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
        </div>
      </section>
    </>
  );
}
