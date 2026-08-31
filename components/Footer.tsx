import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navigation, site } from "@/lib/site";
import { CookieSettingsButton } from "@/components/CookieConsent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-lead">
        <div>
          <h2>إذا كان موقعك يجب أن يبدو أكثر جدية، فلنبدأ من الهدف.</h2>
          <p>أرسل فكرة المشروع وما تعرفه حتى الآن. سنرتّب الأسئلة المتبقية قبل إرسال عرض مناسب.</p>
        </div>
        <Link className="button button--gold" href="/request-quote">ابدأ مشروعك</Link>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>استوديو عراقي صغير لتصميم وتطوير مواقع الأعمال العربية والواجهات الأمامية.</p>
        </div>
        <div>
          <h3>التنقل</h3>
          <ul>{navigation.slice(1).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3>الخدمات</h3>
          <ul>
            <li><Link href="/services/landing-pages">صفحات الهبوط</Link></li>
            <li><Link href="/services/business-websites">مواقع الأعمال</Link></li>
            <li><Link href="/services/company-websites">مواقع الشركات</Link></li>
            <li><Link href="/services/website-redesign">إعادة التصميم</Link></li>
            <li><Link href="/services/frontend-implementation">تطوير Frontend</Link></li>
          </ul>
        </div>
        <div>
          <h3>تواصل</h3>
          <ul>
            <li><a dir="ltr" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a dir="ltr" href={`https://wa.me/${site.phoneInternational}`}>{site.phoneDisplay}</a></li>
            <li><a dir="ltr" href={site.instagram}>{site.instagramLabel}</a></li>
          </ul>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Codeylon. جميع الحقوق محفوظة.</p>
        <div>
          <Link href="/privacy-policy">الخصوصية</Link>
          <Link href="/terms">الشروط</Link>
          <Link href="/cookie-policy">ملفات الارتباط</Link>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
