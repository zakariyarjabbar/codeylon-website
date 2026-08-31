import Link from "next/link";
import { Logo } from "@/components/Logo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "الصفحة غير موجودة", description: "تعذّر العثور على الصفحة المطلوبة في موقع Codeylon.", path: "/404" });

export default function NotFound() {
  return <section className="not-found"><div><Logo light /><span dir="ltr">404</span><h1>هذه الصفحة ليست هنا.</h1><p>قد يكون الرابط قديمًا أو العنوان غير صحيح. يمكنك العودة إلى البداية أو مشاهدة نماذج الأعمال.</p><div><Link className="button button--gold" href="/">العودة للرئيسية</Link><Link className="button button--line-light" href="/portfolio">مشاهدة الأعمال</Link></div></div></section>;
}
