import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";
import { processSteps } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "خدماتنا", description: "صفحات هبوط، مواقع أعمال، مواقع شركات، إعادة تصميم، وتنفيذ واجهات Frontend عربية ومتجاوبة.", path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHero title="نبني المواقع التي تحتاجها الأعمال لتظهر بوضوح." text="خدمات محددة لمواقع الشركات والأعمال والحملات. لا نبيع نظامًا ضخمًا عندما يكون المطلوب موقعًا جيدًا." />
      <section className="section"><div className="shell service-index">{services.map((service) => <article key={service.slug}><div><h2>{service.shortTitle}</h2><p>{service.summary}</p></div><div><p>{service.description}</p><ul>{service.included.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul></div><Link className="round-link" href={`/services/${service.slug}`} aria-label={`تفاصيل ${service.shortTitle}`}><ArrowIcon /></Link></article>)}</div></section>
      <section className="section section--ivory"><div className="shell scope-note"><h2>ما لا نضعه داخل العرض الأساسي.</h2><div><p>أنظمة تسجيل الدخول، لوحات التحكم المعقّدة، منصات SaaS، الأسواق الإلكترونية، قواعد البيانات الكبيرة، والأنظمة الخلفية الواسعة تحتاج إلى نطاق وفريق مختلفين.</p><p>إذا ظهرت وظيفة خلفية محدودة ومهمة للموقع، نراجعها بصورة منفصلة قبل إدخالها في النطاق. الوضوح هنا يحمي الوقت والميزانية وجودة التسليم.</p></div></div></section>
      <section className="section"><div className="shell process-grid"><div><h2>طريقة تنفيذ واحدة، مع نطاق يناسب كل مشروع.</h2><p>المراحل ثابتة بما يكفي لتكون مفهومة، ومرنة بما يكفي لتناسب محتوى عملك.</p></div><ol>{processSteps.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
    </>
  );
}
