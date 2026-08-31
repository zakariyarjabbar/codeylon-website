"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Preferences = { necessary: true; analytics: boolean; marketing: boolean };
const defaultPreferences: Preferences = { necessary: true, analytics: false, marketing: false };
const storageKey = "codeylon-cookie-preferences";

export function CookieSettingsButton() {
  return <button className="text-button" type="button" onClick={() => window.dispatchEvent(new Event("codeylon:cookie-settings"))}>إعدادات الارتباط</button>;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const timer = window.setTimeout(() => {
      if (!stored) setVisible(true);
      else {
        try { setPreferences(JSON.parse(stored)); } catch { setVisible(true); }
      }
    }, 0);
    const open = () => dialogRef.current?.showModal();
    window.addEventListener("codeylon:cookie-settings", open);
    return () => { window.clearTimeout(timer); window.removeEventListener("codeylon:cookie-settings", open); };
  }, []);

  const save = (next: Preferences) => {
    localStorage.setItem(storageKey, JSON.stringify({ ...next, savedAt: new Date().toISOString() }));
    setPreferences(next);
    setVisible(false);
    dialogRef.current?.close();
  };

  return (
    <>
      {visible && (
        <aside className="cookie-banner" aria-label="موافقة ملفات تعريف الارتباط">
          <div>
            <strong>نستخدم الحد الأدنى من ملفات الارتباط.</strong>
            <p>الضرورية فقط تعمل افتراضيًا. يمكنك قبول التحليلات والتسويق أو ضبطها بنفسك. <Link href="/cookie-policy">اقرأ السياسة</Link></p>
          </div>
          <div className="cookie-actions">
            <button className="button button--gold" onClick={() => save({ necessary: true, analytics: true, marketing: true })}>قبول الكل</button>
            <button className="button button--line-light" onClick={() => save(defaultPreferences)}>الضرورية فقط</button>
            <button className="text-button text-button--light" onClick={() => dialogRef.current?.showModal()}>تخصيص</button>
          </div>
        </aside>
      )}
      <dialog className="cookie-dialog" ref={dialogRef} aria-labelledby="cookie-title">
        <form method="dialog" onSubmit={(event) => event.preventDefault()}>
          <div className="dialog-head">
            <div>
              <h2 id="cookie-title">تفضيلات ملفات الارتباط</h2>
              <p>غيّر الموافقات الاختيارية في أي وقت.</p>
            </div>
            <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="إغلاق">×</button>
          </div>
          <label className="preference-row">
            <span><strong>ضرورية</strong><small>تحفظ التفضيلات وتدعم الوظائف الأساسية.</small></span>
            <input type="checkbox" checked disabled />
          </label>
          <label className="preference-row">
            <span><strong>تحليلات</strong><small>تساعدنا على فهم استخدام الصفحات إذا فُعّلت خدمة تحليل.</small></span>
            <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })} />
          </label>
          <label className="preference-row">
            <span><strong>تسويق</strong><small>تُستخدم فقط إذا أُضيفت أدوات حملات مستقبلًا.</small></span>
            <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })} />
          </label>
          <button className="button button--navy button--full" type="button" onClick={() => save(preferences)}>حفظ التفضيلات</button>
        </form>
      </dialog>
    </>
  );
}
