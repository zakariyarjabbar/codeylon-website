"use client";

export default function CookieSettingsButton({ className = "", children = "Cookie settings" }) {
  return (
    <button
      className={className}
      type="button"
      onClick={() => window.dispatchEvent(new Event("codeylon:open-consent"))}
    >
      {children}
    </button>
  );
}
