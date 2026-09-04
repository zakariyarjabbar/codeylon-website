"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const CONSENT_KEY = "codeylon-consent-v1";
const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;

function readConsent() {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1 || typeof parsed.savedAt !== "number") return null;
    if (Date.now() - parsed.savedAt > CONSENT_MAX_AGE) {
      window.localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function removeAnalytics() {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
  document.querySelector("script[data-codeylon-analytics]")?.remove();
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.codeylon.com; SameSite=Lax`;
  });
}

export default function CookieConsent({ analyticsId }) {
  const dialogRef = useRef(null);
  const analyticsAvailable = useMemo(() => /^G-[A-Z0-9]+$/i.test(analyticsId), [analyticsId]);
  const [privacySignal, setPrivacySignal] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  const loadAnalytics = useCallback(() => {
    if (!analyticsAvailable || privacySignal || document.querySelector("script[data-codeylon-analytics]")) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("config", analyticsId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_flags: "SameSite=None;Secure",
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
    script.dataset.codeylonAnalytics = "true";
    document.head.appendChild(script);
  }, [analyticsAvailable, analyticsId, privacySignal]);

  const storeChoice = useCallback((allowAnalytics) => {
    const choice = {
      version: 1,
      essential: true,
      analytics: Boolean(allowAnalytics && analyticsAvailable && !privacySignal),
      savedAt: Date.now(),
    };
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(choice));
    } catch {
      // The choice still applies for the current page if browser storage is unavailable.
    }
    setAnalyticsAllowed(choice.analytics);
    return choice;
  }, [analyticsAvailable, privacySignal]);

  const openDialog = useCallback(() => {
    const latest = readConsent();
    setAnalyticsAllowed(Boolean(latest?.analytics && analyticsAvailable && !privacySignal));
    if (typeof dialogRef.current?.showModal === "function") {
      if (!dialogRef.current.open) dialogRef.current.showModal();
    } else {
      dialogRef.current?.setAttribute("open", "");
    }
  }, [analyticsAvailable, privacySignal]);

  const closeDialog = useCallback(() => {
    if (typeof dialogRef.current?.close === "function" && dialogRef.current.open) dialogRef.current.close();
    else dialogRef.current?.removeAttribute("open");
  }, []);

  useEffect(() => {
    const signal = navigator.globalPrivacyControl === true || navigator.doNotTrack === "1";
    setPrivacySignal(signal);
    let stored = readConsent();
    if (signal && stored?.analytics) {
      stored = storeChoice(false);
      removeAnalytics();
    }
    if (!stored) {
      const timer = window.setTimeout(() => setBannerVisible(true), 450);
      return () => window.clearTimeout(timer);
    }
    setAnalyticsAllowed(Boolean(stored.analytics));
    if (stored.analytics && analyticsAvailable && !signal) loadAnalytics();
    return undefined;
  }, [analyticsAvailable, loadAnalytics, storeChoice]);

  useEffect(() => {
    window.addEventListener("codeylon:open-consent", openDialog);
    return () => window.removeEventListener("codeylon:open-consent", openDialog);
  }, [openDialog]);

  const analyticsUnavailable = !analyticsAvailable || privacySignal;
  const message = privacySignal
    ? "Your browser privacy preference keeps analytics off. We only store this choice."
    : analyticsAvailable
      ? "We use essential storage to remember this choice. Optional analytics only loads after you allow it."
      : "This site only stores your privacy choice. Analytics is not active.";
  const description = privacySignal
    ? "Analytics is unavailable because your browser sends a privacy preference."
    : analyticsAvailable
      ? "Helps us understand which pages are useful. Disabled unless you choose it."
      : "Analytics is prepared but not active on this site. No analytics data is collected.";

  function chooseEssential() {
    storeChoice(false);
    removeAnalytics();
    setBannerVisible(false);
  }

  function chooseAnalytics() {
    const choice = storeChoice(true);
    setBannerVisible(false);
    if (choice.analytics) loadAnalytics();
  }

  function saveChoice() {
    const choice = storeChoice(analyticsAllowed);
    setBannerVisible(false);
    closeDialog();
    if (choice.analytics) loadAnalytics();
    else removeAnalytics();
  }

  return (
    <>
      <section className={`consent-banner${bannerVisible ? " is-visible" : ""}`} aria-labelledby="consent-title">
        <h2 id="consent-title">Your privacy choice</h2>
        <p>{message}</p>
        <div className="consent-actions">
          <button className="button button-quiet" type="button" onClick={chooseEssential}>
            {analyticsUnavailable ? "Continue" : "Essential only"}
          </button>
          {!analyticsUnavailable && (
            <button className="button button-ink" type="button" onClick={chooseAnalytics}>Allow analytics</button>
          )}
          <button className="button button-quiet" type="button" onClick={openDialog}>Settings</button>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="consent-dialog"
        aria-labelledby="preferences-title"
        onClick={(event) => { if (event.target === dialogRef.current) closeDialog(); }}
      >
        <div className="dialog-inner">
          <div className="dialog-head">
            <div>
              <h2 id="preferences-title">Privacy settings</h2>
              <p className="microcopy">Change this choice any time from the footer.</p>
            </div>
            <button className="dialog-close" type="button" aria-label="Close privacy settings" onClick={closeDialog}>
              <span className="close-icon" aria-hidden="true" />
            </button>
          </div>
          <div className="preference-row">
            <div>
              <strong>Essential storage</strong>
              <p>Remembers your privacy choice for up to six months. It cannot be switched off here.</p>
            </div>
            <span aria-label="Always active">Always on</span>
          </div>
          <div className="preference-row">
            <div>
              <strong>Analytics</strong>
              <p>{description}</p>
            </div>
            <label className="switch" htmlFor="analytics-consent-toggle">
              <span className="sr-only">Allow analytics</span>
              <input
                id="analytics-consent-toggle"
                type="checkbox"
                checked={analyticsAllowed}
                disabled={analyticsUnavailable}
                onChange={(event) => setAnalyticsAllowed(event.target.checked)}
              />
              <span className="switch-track" aria-hidden="true" />
            </label>
          </div>
          <div className="dialog-actions">
            <Link className="button button-quiet" href="/cookies/" onClick={closeDialog}>Read cookie policy</Link>
            <button className="button button-ink" type="button" onClick={saveChoice}>Save choices</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
