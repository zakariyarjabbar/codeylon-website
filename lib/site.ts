export const site = {
  name: "Codeylon",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://codeylon.com").origin,
  email: "hello@codeylon.com",
  phoneDisplay: "+964 770 555 2076",
  phoneInternational: "9647705552076",
  instagram: "https://instagram.com/codeylon",
  instagramLabel: "@codeylon",
  location: "بغداد، العراق — نخدم المشاريع في جميع المحافظات",
  hours: "السبت–الخميس، 9:00 ص–6:00 م",
};

export const navigation = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "خدماتنا" },
  { href: "/portfolio", label: "أعمالنا" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/contact", label: "تواصل" },
];

export const processSteps = [
  ["فهم المشروع", "نراجع النشاط والجمهور والهدف وما هو متوفر فعليًا."],
  ["تحديد الصفحات والمحتوى", "نبني خريطة واضحة ونحدد مسؤولية كل صفحة."],
  ["التصميم والتوجيه البصري", "نحوّل الهوية والرسالة إلى تجربة مناسبة للعمل."],
  ["التطوير والاختبار", "ننفّذ الواجهة ونختبر الاستجابة والوصول والأداء."],
  ["المراجعة والإطلاق", "نغلق الملاحظات ونجهّز النشر والتسليم بصورة منظمة."],
] as const;
