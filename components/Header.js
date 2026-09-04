"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { primaryNavigation } from "@/lib/site";

export default function Header({ compact = false, actionLabel = "Start a project", actionHref = "/#contact" }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const mobileNavRef = useRef(null);
  const lockedScrollY = useRef(0);

  function setPageInert(value) {
    document.querySelectorAll("main, .site-footer, .utility-footer").forEach((region) => {
      if ("inert" in region) {
        region.inert = value;
      } else if (value) {
        region.setAttribute("aria-hidden", "true");
      } else {
        region.removeAttribute("aria-hidden");
      }
    });
  }

  function lockPage() {
    lockedScrollY.current = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = `-${lockedScrollY.current}px`;
    document.body.classList.add("nav-open");
    setPageInert(true);
  }

  function unlockPage() {
    document.body.classList.remove("nav-open");
    document.body.style.removeProperty("top");
    setPageInert(false);
    document.documentElement.classList.add("is-restoring-scroll");
    window.scrollTo(0, lockedScrollY.current);
    window.requestAnimationFrame(() => {
      document.documentElement.classList.remove("is-restoring-scroll");
    });
  }

  function openMenu() {
    lockPage();
    setIsOpen(true);
  }

  function closeMenu({ restoreFocus = true } = {}) {
    unlockPage();
    setIsOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => toggleRef.current?.focus());
  }

  function toggleMenu() {
    if (isOpen) closeMenu();
    else openMenu();
  }

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const links = Array.from(mobileNavRef.current?.querySelectorAll("a, button:not([disabled])") || []);
      const focusable = [toggleRef.current, ...links].filter(Boolean);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!focusable.includes(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    }

    function handleResize() {
      if (window.innerWidth > 980) closeMenu({ restoreFocus: false });
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => () => {
    if (document.body.classList.contains("nav-open")) unlockPage();
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Codeylon home">
          <img src="/assets/logo-mark.svg" width="38" height="31" alt="" />
          <span>CODEYLON</span>
        </Link>

        {compact ? (
          <Link className="button button-primary" href={actionHref}>{actionLabel}</Link>
        ) : (
          <>
            <nav className="desktop-nav" aria-label="Primary navigation">
              <ul className="nav-list">
                {primaryNavigation.map((item) => (
                  <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                ))}
              </ul>
              <Link className="button button-primary" href={actionHref}>{actionLabel}</Link>
            </nav>

            <button
              ref={toggleRef}
              className="nav-toggle"
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              onClick={toggleMenu}
            >
              <span className="nav-toggle-lines" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {!compact && (
        <nav
          ref={mobileNavRef}
          className={`mobile-nav${isOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
        >
          <ul>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => closeMenu()}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link className="button button-primary" href={actionHref} onClick={() => closeMenu()}>
            {actionLabel}
          </Link>
        </nav>
      )}
    </header>
  );
}
