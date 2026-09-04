"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function fieldLabel(field) {
  if (field.dataset.errorLabel) return field.dataset.errorLabel;
  const label = document.querySelector(`label[for="${field.id}"]`);
  return label ? label.textContent.replace("(required)", "").trim().replace(/[?.:]+$/, "") : "This field";
}

function fieldMessage(field) {
  if (field.validity.valueMissing) {
    if (field.type === "checkbox") return "Please agree to the privacy policy before sending.";
    if (field.tagName === "SELECT") return "Choose an option.";
    return `Enter ${fieldLabel(field).toLowerCase()}.`;
  }
  if (field.validity.typeMismatch && field.type === "email") {
    return "Enter a complete email address, such as name@company.com.";
  }
  if (field.validity.tooShort) return `Use at least ${field.minLength} characters.`;
  if (field.validity.tooLong) return `Use no more than ${field.maxLength} characters.`;
  return "Check this field and try again.";
}

export default function ProjectForm() {
  const formRef = useRef(null);
  const summaryRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [minimumDate, setMinimumDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setMinimumDate(new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10));
  }, []);

  function validate(field) {
    const message = field.validity.valid ? "" : fieldMessage(field);
    setErrors((current) => ({ ...current, [field.id]: message }));
    return message;
  }

  function validateIfNeeded(event) {
    if (errors[event.currentTarget.id]) validate(event.currentTarget);
  }

  function handleSubmit(event) {
    const fields = Array.from(formRef.current.querySelectorAll("input[required], select[required], textarea[required]"));
    const nextErrors = {};
    fields.forEach((field) => {
      if (!field.validity.valid) nextErrors[field.id] = fieldMessage(field);
    });

    if (Object.keys(nextErrors).length) {
      event.preventDefault();
      setErrors(nextErrors);
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setErrors({});
    setSending(true);
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", { form_name: "project_brief" });
    }
  }

  const summaryItems = Object.entries(errors).filter(([, message]) => Boolean(message));

  return (
    <form
      ref={formRef}
      className="contact-form"
      id="project-form"
      action="https://formsubmit.co/hello@codeylon.com"
      method="post"
      acceptCharset="UTF-8"
      noValidate
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="New project brief from codeylon.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://codeylon.com/thank-you/" />
      <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="honeypot" aria-hidden="true" />

      <div className="form-intro">
        <h3>Project brief</h3>
        <p>Required fields are marked. Most useful briefs take 3–5 minutes.</p>
      </div>

      <div
        ref={summaryRef}
        className={`form-error-summary${summaryItems.length ? " is-visible" : ""}`}
        role="alert"
        tabIndex="-1"
        aria-labelledby="form-error-title"
      >
        <h4 id="form-error-title">Please fix the highlighted fields.</h4>
        <ul>
          {summaryItems.map(([id, message]) => {
            const field = formRef.current?.elements.namedItem(id === "project-type" ? "project_type" : id);
            return <li key={id}><a href={`#${id}`}>{field ? fieldLabel(field) : id}: {message}</a></li>;
          })}
        </ul>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name <span className="required-note">(required)</span></label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            minLength="2"
            maxLength="100"
            required
            aria-describedby="name-error"
            aria-invalid={errors.name ? "true" : undefined}
            data-error-label="Name"
            onBlur={(event) => validate(event.currentTarget)}
            onInput={validateIfNeeded}
          />
          <span className="field-error" id="name-error" aria-live="polite">{errors.name}</span>
        </div>

        <div className="field">
          <label htmlFor="email">Email <span className="required-note">(required)</span></label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength="160"
            required
            aria-describedby="email-error"
            aria-invalid={errors.email ? "true" : undefined}
            data-error-label="Email"
            onBlur={(event) => validate(event.currentTarget)}
            onInput={validateIfNeeded}
          />
          <span className="field-error" id="email-error" aria-live="polite">{errors.email}</span>
        </div>

        <div className="field">
          <label htmlFor="business">Business or organization</label>
          <input id="business" name="business" type="text" autoComplete="organization" maxLength="140" aria-describedby="business-hint" />
          <span className="field-hint" id="business-hint">Leave blank if the name is not decided yet.</span>
        </div>

        <div className="field">
          <label htmlFor="project-type">Project type <span className="required-note">(required)</span></label>
          <select
            id="project-type"
            name="project_type"
            required
            aria-describedby="project-type-error"
            aria-invalid={errors["project-type"] ? "true" : undefined}
            data-error-label="Project type"
            onBlur={(event) => validate(event.currentTarget)}
            onChange={validateIfNeeded}
          >
            <option value="">Choose the closest fit</option>
            <option value="Landing page">Landing page</option>
            <option value="Small business website">Small business website</option>
            <option value="Larger marketing website">Larger marketing website</option>
            <option value="Portfolio">Portfolio</option>
            <option value="Website redesign">Website redesign</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
          <span className="field-error" id="project-type-error" aria-live="polite">{errors["project-type"]}</span>
        </div>

        <div className="field">
          <label htmlFor="page-count">Expected size</label>
          <select id="page-count" name="expected_size" defaultValue="Not sure">
            <option value="Not sure">Not sure yet</option>
            <option value="1 page">1 page</option>
            <option value="2–6 pages">2–6 pages</option>
            <option value="7–12 pages">7–12 pages</option>
            <option value="More than 12 pages">More than 12 pages</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="target-date">Preferred launch date</label>
          <input id="target-date" name="preferred_launch_date" type="date" min={minimumDate} aria-describedby="date-hint" />
          <span className="field-hint" id="date-hint">A target, not a guaranteed deadline.</span>
        </div>

        <div className="field field-full">
          <label htmlFor="message">What should the website achieve? <span className="required-note">(required)</span></label>
          <textarea
            id="message"
            name="message"
            minLength="30"
            maxLength="2000"
            required
            aria-describedby="message-hint message-error"
            aria-invalid={errors.message ? "true" : undefined}
            data-error-label="Project goal"
            onBlur={(event) => validate(event.currentTarget)}
            onInput={validateIfNeeded}
          />
          <span className="field-hint" id="message-hint">Include the audience, main goal, required pages, current website if any, and known integrations.</span>
          <span className="field-error" id="message-error" aria-live="polite">{errors.message}</span>
        </div>

        <div className="field field-full checkbox-row">
          <input
            id="privacy-consent"
            name="privacy_consent"
            type="checkbox"
            value="I agree"
            required
            aria-describedby="privacy-error"
            aria-invalid={errors["privacy-consent"] ? "true" : undefined}
            data-error-label="Privacy consent"
            onBlur={(event) => validate(event.currentTarget)}
            onChange={validateIfNeeded}
          />
          <label htmlFor="privacy-consent">
            I agree that Codeylon may use this information to review and respond to my enquiry, as described in the <Link href="/privacy/">privacy policy</Link>. <span className="required-note">(required)</span>
            <span className="field-error" id="privacy-error" aria-live="polite">{errors["privacy-consent"]}</span>
          </label>
        </div>
      </div>

      <div className="form-footer">
        <button className="button button-ink" type="submit" disabled={sending}>{sending ? "Sending…" : "Send project brief"}</button>
        <p className="microcopy">Submitted securely through FormSubmit. No marketing list.</p>
      </div>
    </form>
  );
}
