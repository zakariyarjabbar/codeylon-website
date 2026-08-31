"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => { delete document.body.dataset.menuOpen; };
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">انتقل إلى المحتوى</a>
      <div className="site-header__inner shell">
        <Logo light />
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--gold header-cta" href="/request-quote">اطلب عرض سعر</Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">{open ? "إغلاق القائمة" : "فتح القائمة"}</span>
          <span /><span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="التنقل على الهاتف">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="button button--gold" href="/request-quote" onClick={() => setOpen(false)}>اطلب عرض سعر</Link>
        </nav>
      </div>
    </header>
  );
}
