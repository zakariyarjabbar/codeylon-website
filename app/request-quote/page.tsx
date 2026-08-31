import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "اطلب عرض سعر", description: "رتّب معلومات مشروعك واحصل على ملخص جاهز لإرساله إلى Codeylon عبر واتساب أو البريد.", path: "/request-quote" });

export default function RequestQuotePage() {
  return <><PageHero title="أخبرنا عن المشروع، وسنرتّب النطاق قبل السعر." text="لا توجد باقات مخفية أو أرقام عشوائية. نحتاج إلى فهم الصفحات والمحتوى والموعد حتى يكون العرض واقعيًا." action={false} /><section className="section quote-section"><div className="shell quote-layout"><aside><h2>ما الذي يحدث بعد الإرسال؟</h2><ol><li>نراجع المعلومات ونحدّد أي أسئلة ناقصة.</li><li>نتواصل بالطريقة التي اخترتها.</li><li>نوضّح النطاق والمدة والمسؤوليات.</li><li>نرسل عرضًا مناسبًا للمشروع نفسه.</li></ol><p>إعداد الطلب لا يشكّل عقدًا أو التزامًا بالدفع.</p></aside><QuoteForm /></div></section></>;
}
