import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "تواصل معنا", description: "تواصل مع Codeylon لمشروع موقع أعمال، إعادة تصميم، صفحة هبوط، أو تنفيذ Frontend في العراق.", path: "/contact" });

export default function ContactPage() {
  const shortMessage = encodeURIComponent("مرحبًا Codeylon، أود مناقشة مشروع موقع.\n\nنوع المشروع:\nاسم النشاط:\nالموعد المتوقع:\n");
  return (
    <>
      <PageHero title="أرسل الفكرة كما هي. سنساعدك على ترتيبها." text="استفسارات المشاريع، طلبات إعادة التصميم، التعاون مع فرق التصميم، واستشارات مواقع الأعمال." action={false} />
      <section className="section contact-section"><div className="shell contact-grid"><div className="contact-primary"><h2>اختر القناة التي تناسبك.</h2><a className="contact-line" href={`https://wa.me/${site.phoneInternational}?text=${shortMessage}`} target="_blank" rel="noreferrer"><span>واتساب</span><strong dir="ltr">{site.phoneDisplay}</strong></a><a className="contact-line" href={`mailto:${site.email}?subject=${encodeURIComponent("استفسار مشروع — Codeylon")}`}><span>البريد الإلكتروني</span><strong dir="ltr">{site.email}</strong></a><a className="contact-line" href={site.instagram} target="_blank" rel="noreferrer"><span>Instagram</span><strong dir="ltr">{site.instagramLabel}</strong></a></div><aside className="contact-facts"><dl><div><dt>ساعات التواصل</dt><dd>{site.hours}</dd></div><div><dt>منطقة الخدمة</dt><dd>{site.location}</dd></div><div><dt>الرد الأولي</dt><dd>عادة خلال يومي عمل، بحسب تفاصيل الطلب.</dd></div></dl><Link className="button button--navy" href="/request-quote">استخدم نموذج المشروع المفصّل</Link></aside></div></section>
      <section className="section section--ivory"><div className="shell reason-list"><h2>تواصل معنا إذا كنت تريد...</h2><ul><li>موقعًا رسميًا بدل الاعتماد الكامل على التواصل الاجتماعي.</li><li>إعادة بناء موقع قديم أو صعب الاستخدام على الهاتف.</li><li>صفحة حملة تركّز على إجراء واحد.</li><li>تحويل تصميم UI معتمد إلى Frontend متجاوب.</li><li>معرفة الصفحات المناسبة قبل طلب السعر.</li></ul></div></section>
    </>
  );
}
