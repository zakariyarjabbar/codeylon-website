import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/site";

export function UtilityFooter() {
  return (
    <footer className="utility-footer">
      <div className="container utility-footer-inner">
        <span>© {new Date().getFullYear()} Codeylon</span>
        <span className="utility-footer-links">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/cookies/">Cookies</Link>
          <CookieSettingsButton />
        </span>
      </div>
    </footer>
  );
}

export default function Footer({ current }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Codeylon home">
            <img src="/assets/logo-mark.svg" width="38" height="31" alt="" />
            <span>CODEYLON</span>
          </Link>
          <p>Front-end websites with a clear scope, realistic schedule, and production-ready details.</p>
        </div>
        <div>
          <p className="footer-title">Studio</p>
          <ul className="footer-links">
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#timeline">Timeline</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/#contact">Start a project</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Legal</p>
          <ul className="footer-links">
            <li><Link href="/privacy/" aria-current={current === "privacy" ? "page" : undefined}>Privacy</Link></li>
            <li><Link href="/cookies/" aria-current={current === "cookies" ? "page" : undefined}>Cookies</Link></li>
            <li><Link href="/terms/" aria-current={current === "terms" ? "page" : undefined}>Terms</Link></li>
            <li><CookieSettingsButton /></li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <ul className="footer-links">
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li>Baghdad, Iraq</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Codeylon. All rights reserved.</span>
        <span>Built for the open web.</span>
      </div>
    </footer>
  );
}
