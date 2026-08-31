import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "الأسئلة الشائعة", description: "إجابات واضحة عن خدمات Codeylon، الوقت، المحتوى، التسعير، الاستضافة، الدعم، وحدود مشاريع الواجهة الخلفية.", path: "/faq" });

export default function FAQPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  return (
    <><PageHero title="أسئلة عملية قبل بدء المشروع." text="عن النطاق، المدة، المحتوى، التسعير، وما يمكن تنفيذه الآن بصورة واقعية." action={false} /><section className="section"><div className="shell faq-page-grid"><aside><h2>لم تجد جوابك؟</h2><p>أرسل سؤالك أو استخدم نموذج المشروع لترتيب التفاصيل.</p><Link className="button button--navy" href="/contact">تواصل معنا</Link></aside><div>{faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /></>
  );
}
