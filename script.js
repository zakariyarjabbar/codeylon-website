(function () {
  "use strict";

  var config = window.CODEYLON_CONFIG || {};
  var analyticsConfig = config.analytics || {};
  var analyticsId = typeof analyticsConfig.measurementId === "string" ? analyticsConfig.measurementId.trim() : "";
  var analyticsAvailable = /^G-[A-Z0-9]+$/i.test(analyticsId);
  var consentKey = "codeylon-consent-v1";
  var consentMaxAge = 180 * 24 * 60 * 60 * 1000;
  var privacySignalActive = navigator.globalPrivacyControl === true || navigator.doNotTrack === "1";

  function safeRun(callback) {
    try {
      callback();
    } catch (error) {
      if (window.console && typeof window.console.warn === "function") {
        window.console.warn("Codeylon enhancement unavailable:", error);
      }
    }
  }

  function setCurrentYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll("[data-current-year]").forEach(function (node) {
      node.textContent = year;
    });
  }

  function setupNavigation() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");
    if (!toggle || !mobileNav) return;
    var obscuredRegions = document.querySelectorAll("main, .site-footer, .utility-footer");
    var fallbackTabState = [];
    var lockedScrollY = 0;

    function lockPageScroll() {
      lockedScrollY = window.scrollY || window.pageYOffset || 0;
      document.body.style.top = "-" + lockedScrollY + "px";
      document.body.classList.add("nav-open");
    }

    function unlockPageScroll() {
      document.body.classList.remove("nav-open");
      document.body.style.removeProperty("top");
      document.documentElement.classList.add("is-restoring-scroll");
      window.scrollTo(0, lockedScrollY);
      window.requestAnimationFrame(function () {
        document.documentElement.classList.remove("is-restoring-scroll");
      });
    }

    function setPageInert(isOpen) {
      obscuredRegions.forEach(function (region) {
        if ("inert" in region) {
          region.inert = isOpen;
          return;
        }
        if (isOpen) {
          region.setAttribute("aria-hidden", "true");
          region.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach(function (element) {
            fallbackTabState.push({ element: element, tabindex: element.getAttribute("tabindex") });
            element.setAttribute("tabindex", "-1");
          });
        } else {
          region.removeAttribute("aria-hidden");
        }
      });
      if (!isOpen && fallbackTabState.length) {
        fallbackTabState.forEach(function (item) {
          if (item.tabindex === null) item.element.removeAttribute("tabindex");
          else item.element.setAttribute("tabindex", item.tabindex);
        });
        fallbackTabState = [];
      }
    }

    function setOpen(isOpen, restoreFocus) {
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      mobileNav.setAttribute("aria-hidden", String(!isOpen));
      mobileNav.classList.toggle("is-open", isOpen);
      if (isOpen) lockPageScroll();
      else unlockPageScroll();
      setPageInert(isOpen);
      if (!isOpen && restoreFocus !== false) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true", true);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false, true);
      });
    });

    document.addEventListener("keydown", function (event) {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (event.key === "Escape" && isOpen) {
        setOpen(false, true);
        return;
      }
      if (event.key === "Tab" && isOpen) {
        var focusable = [toggle].concat(Array.prototype.slice.call(mobileNav.querySelectorAll("a, button:not([disabled])")));
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        } else if (focusable.indexOf(document.activeElement) === -1) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 980 && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false, false);
      }
    }, { passive: true });
  }

  function getStoredConsent() {
    try {
      var raw = window.localStorage.getItem(consentKey);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== 1 || typeof parsed.savedAt !== "number") return null;
      if (Date.now() - parsed.savedAt > consentMaxAge) {
        window.localStorage.removeItem(consentKey);
        return null;
      }
      return parsed;
    } catch (error) {
      return null;
    }
  }

  function storeConsent(analyticsAllowed) {
    var choice = {
      version: 1,
      essential: true,
      analytics: Boolean(analyticsAllowed && analyticsAvailable && !privacySignalActive),
      savedAt: Date.now()
    };
    try {
      window.localStorage.setItem(consentKey, JSON.stringify(choice));
    } catch (error) {
      return choice;
    }
    return choice;
  }

  function loadAnalytics() {
    if (!analyticsAvailable || privacySignalActive || document.querySelector("script[data-codeylon-analytics]")) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    window.gtag("config", analyticsId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_flags: "SameSite=None;Secure"
    });

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(analyticsId);
    script.dataset.codeylonAnalytics = "true";
    document.head.appendChild(script);
  }

  function disableAnalytics() {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
      });
    }
    var analyticsScript = document.querySelector("script[data-codeylon-analytics]");
    if (analyticsScript) analyticsScript.remove();
    document.cookie.split(";").forEach(function (cookie) {
      var name = cookie.split("=")[0].trim();
      if (name.indexOf("_ga") !== 0) return;
      document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax";
      document.cookie = name + "=; Max-Age=0; path=/; domain=.codeylon.com; SameSite=Lax";
    });
  }

  function trackEvent(name, parameters) {
    var consent = getStoredConsent();
    if (!consent || !consent.analytics || typeof window.gtag !== "function") return;
    window.gtag("event", name, parameters || {});
  }

  function setupConsent() {
    var banner = document.querySelector("[data-consent-banner]");
    var dialog = document.querySelector("[data-consent-dialog]");
    if (!banner || !dialog) return;

    var acceptButton = banner.querySelector("[data-consent-accept]");
    var essentialButton = banner.querySelector("[data-consent-essential]");
    var message = banner.querySelector("[data-consent-message]");
    var analyticsToggle = dialog.querySelector("[data-analytics-toggle]");
    var analyticsDescription = dialog.querySelector("[data-analytics-description]");
    var saveButton = dialog.querySelector("[data-save-consent]");
    var closeButton = dialog.querySelector("[data-close-consent]");
    var openButtons = document.querySelectorAll("[data-open-consent]");
    var stored = getStoredConsent();
    var privacySignal = privacySignalActive;

    function hideBanner() {
      banner.classList.remove("is-visible");
    }

    function showDialog() {
      var latest = getStoredConsent();
      analyticsToggle.checked = Boolean(latest && latest.analytics && analyticsAvailable);
      if (typeof dialog.showModal === "function") {
        if (!dialog.open) dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    }

    function closeDialog() {
      if (typeof dialog.close === "function" && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    }

    if (!analyticsAvailable || privacySignal) {
      analyticsToggle.disabled = true;
      analyticsToggle.checked = false;
      if (analyticsDescription) {
        analyticsDescription.textContent = privacySignal
          ? "Analytics is unavailable because your browser sends a privacy preference."
          : "Analytics is prepared but not active on this site. No analytics data is collected.";
      }
    }

    if (!analyticsAvailable || privacySignal) {
      if (acceptButton) acceptButton.hidden = true;
      if (essentialButton) essentialButton.textContent = "Continue";
      if (message) {
        message.textContent = privacySignal
          ? "Your browser privacy preference keeps analytics off. We only store this choice."
          : "This site only stores your privacy choice. Analytics is not active.";
      }
    }

    if (privacySignal && stored && stored.analytics) {
      stored = storeConsent(false);
      disableAnalytics();
    }

    if (!stored) {
      window.setTimeout(function () {
        banner.classList.add("is-visible");
      }, 450);
    } else if (stored.analytics) {
      loadAnalytics();
    }

    if (essentialButton) {
      essentialButton.addEventListener("click", function () {
        storeConsent(false);
        disableAnalytics();
        analyticsToggle.checked = false;
        hideBanner();
      });
    }

    if (acceptButton) {
      acceptButton.addEventListener("click", function () {
        var choice = storeConsent(true);
        analyticsToggle.checked = choice.analytics;
        hideBanner();
        if (choice.analytics) loadAnalytics();
      });
    }

    openButtons.forEach(function (button) {
      button.addEventListener("click", showDialog);
    });

    if (closeButton) closeButton.addEventListener("click", closeDialog);

    if (saveButton) {
      saveButton.addEventListener("click", function () {
        var choice = storeConsent(analyticsToggle.checked);
        hideBanner();
        closeDialog();
        if (choice.analytics) loadAnalytics();
        else disableAnalytics();
      });
    }

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeDialog();
    });
  }

  function fieldMessage(field) {
    if (field.validity.valueMissing) {
      if (field.type === "checkbox") return "Please agree to the privacy policy before sending.";
      if (field.tagName === "SELECT") return "Choose an option.";
      return "Enter " + fieldLabel(field).toLowerCase() + ".";
    }
    if (field.validity.typeMismatch && field.type === "email") return "Enter a complete email address, such as name@company.com.";
    if (field.validity.tooShort) return "Use at least " + field.minLength + " characters.";
    if (field.validity.tooLong) return "Use no more than " + field.maxLength + " characters.";
    return "Check this field and try again.";
  }

  function fieldLabel(field) {
    if (field.dataset.errorLabel) return field.dataset.errorLabel;
    var label = document.querySelector("label[for=\"" + field.id + "\"]");
    if (!label) return "this field";
    return label.textContent.replace("(required)", "").trim().replace(/[?.:]+$/, "");
  }

  function showFieldError(field) {
    var errorNode = document.getElementById(field.id + "-error");
    if (!errorNode && field.getAttribute("aria-describedby")) {
      var describedIds = field.getAttribute("aria-describedby").split(/\s+/);
      describedIds.some(function (id) {
        var node = document.getElementById(id);
        if (node && node.classList.contains("field-error")) {
          errorNode = node;
          return true;
        }
        return false;
      });
    }
    if (field.validity.valid) {
      field.removeAttribute("aria-invalid");
      if (errorNode) errorNode.textContent = "";
      return "";
    }
    var message = fieldMessage(field);
    field.setAttribute("aria-invalid", "true");
    if (errorNode) errorNode.textContent = message;
    return message;
  }

  function setupProjectForm() {
    var form = document.querySelector("[data-project-form]");
    if (!form) return;
    var summary = form.querySelector("[data-error-summary]");
    var errorList = form.querySelector("[data-error-list]");
    var submitButton = form.querySelector("[data-submit-button]");
    var dateField = form.querySelector("input[type=\"date\"]");
    var fields = Array.prototype.slice.call(form.querySelectorAll("input[required], select[required], textarea[required]"));

    if (dateField) {
      var now = new Date();
      var localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      dateField.min = localDate;
    }

    fields.forEach(function (field) {
      field.addEventListener("blur", function () {
        showFieldError(field);
      });
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid") === "true") showFieldError(field);
      });
      field.addEventListener("change", function () {
        if (field.getAttribute("aria-invalid") === "true") showFieldError(field);
      });
    });

    form.addEventListener("submit", function (event) {
      if (errorList) errorList.textContent = "";
      var invalidFields = fields.filter(function (field) {
        return !field.validity.valid;
      });

      if (invalidFields.length) {
        event.preventDefault();
        invalidFields.forEach(function (field) {
          var message = showFieldError(field);
          if (!errorList) return;
          var item = document.createElement("li");
          var link = document.createElement("a");
          link.href = "#" + field.id;
          link.textContent = fieldLabel(field) + ": " + message;
          item.appendChild(link);
          errorList.appendChild(item);
        });
        if (summary) {
          summary.classList.add("is-visible");
          summary.focus();
        }
        return;
      }

      if (summary) summary.classList.remove("is-visible");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending…";
      }
      trackEvent("generate_lead", { form_name: "project_brief" });
    });
  }

  safeRun(setCurrentYear);
  safeRun(setupNavigation);
  safeRun(setupConsent);
  safeRun(setupProjectForm);
}());
