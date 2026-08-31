import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "من نحن", description: "Codeylon استوديو عراقي صغير يركّز على تصميم وتطوير مواقع الأعمال العربية والواجهات الأمامية الواضحة.", path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHero title="استوديو صغير، بتركيز واضح: مواقع أعمال مصمّمة كما يجب." text="Codeylon يجمع بين الكود وبابل؛ حرف رقمي مع جذور محلية، بلا تحويل التراث إلى زينة أو قصة أكبر من العمل نفسه." />
      <section className="section about-opening"><div className="shell split-editorial"><div className="editorial-image"><Image src="/images/hero-studio.png" alt="مخططات واجهة عربية ولابتوب داخل استوديو Codeylon" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="long-copy"><h2>نحن نبني الواجهة التي يلتقي فيها عملك مع جمهوره.</h2><p>Codeylon استوديو بوتيك في العراق لتصميم وتطوير المواقع التعريفية. لا نقدّم أنفسنا كفريق ضخم أو منصة تفعل كل شيء؛ نركّز على مساحة محددة نستطيع تنفيذها بعناية: مواقع الشركات والأعمال وصفحات الهبوط وإعادة التصميم والـFrontend.</p><p>نبدأ بالسؤال العملي: ما الذي يحتاج الزائر إلى فهمه؟ ثم نرتّب الصفحات والنصوص والصور والإجراءات حول هذا الجواب.</p></div></div></section>
      <section className="section section--ivory"><div className="shell values-ledger"><div><h2>لماذا Codeylon؟</h2><p>الاسم تركيب من Code وBabylon. الرمز المستوحى من علامة أكادية/بابلية يربط الاستوديو بمكانه، بينما يبقى النظام البصري حديثًا ومناسبًا للأعمال.</p></div><dl><div><dt>الوضوح</dt><dd>قرار التصميم الجيد يجعل المعلومة أسهل، لا أكثر غموضًا.</dd></div><div><dt>الهيكل</dt><dd>الصفحات ومسارات القراءة تُبنى قبل الزخرفة.</dd></div><div><dt>المصداقية</dt><dd>لا أرقام وهمية، ولا قدرات خارج النطاق، ولا نتائج غير موثقة.</dd></div><div><dt>العربية أولًا</dt><dd>نصمم RTL من البداية ونحترم إيقاع النص العربي على كل شاشة.</dd></div></dl></div></section>
      <section className="section"><div className="shell fit-grid"><div><h2>لمن تناسب خدماتنا؟</h2><p>للعمل الذي يحتاج إلى حضور رسمي واضح ويمكن شرحه من خلال محتوى وصفحات وتجربة Frontend قوية.</p></div><div className="fit-columns"><article><h3>مناسبة عندما...</h3><ul><li>تريد موقعًا تعريفيًا أو تسويقيًا جادًا.</li><li>تعتمد الآن على Instagram وحده.</li><li>موقعك قديم أو مربك على الهاتف.</li><li>لديك تصميم جاهز يحتاج إلى تنفيذ دقيق.</li></ul></article><article><h3>تحتاج تقييمًا منفصلًا عندما...</h3><ul><li>المشروع يعتمد على قاعدة بيانات كبيرة.</li><li>يتطلب تسجيل دخول وأدوار مستخدمين معقّدة.</li><li>هو منصة SaaS أو سوق إلكتروني متقدم.</li><li>يحتاج نظامًا خلفيًا مخصصًا واسع النطاق.</li></ul></article></div></div></section>
      <section className="section section--navy"><div className="shell simple-cta"><div><h2>الجدية تبدأ من وصف صريح للمشروع.</h2><p>إذا كان النطاق مناسبًا، سنوضح لك الطريق. وإذا لم يكن ضمن تركيزنا الحالي، سنقول ذلك بوضوح.</p></div><Link className="button button--gold" href="/request-quote">ابدأ مشروعك</Link></div></section>
    </>
  );
}
