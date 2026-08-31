"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";

type FormData = {
  name: string; company: string; phone: string; email: string; projectType: string; service: string;
  pageCount: string; contentReady: string; brandReady: string; language: string; timeline: string;
  details: string; contactMethod: string; budget: string;
};

const initialData: FormData = {
  name: "", company: "", phone: "", email: "", projectType: "", service: "", pageCount: "",
  contentReady: "", brandReady: "", language: "العربية", timeline: "", details: "", contactMethod: "واتساب", budget: "",
};
const draftKey = "codeylon-quote-draft";

const labels: Record<keyof FormData, string> = {
  name: "الاسم", company: "المشروع أو الشركة", phone: "رقم الهاتف", email: "البريد الإلكتروني",
  projectType: "نوع المشروع", service: "الخدمة المطلوبة", pageCount: "عدد الصفحات التقريبي",
  contentReady: "هل المحتوى جاهز؟", brandReady: "هل توجد هوية بصرية؟", language: "لغة الموقع",
  timeline: "الموعد المتوقع", details: "تفاصيل المشروع", contactMethod: "طريقة التواصل المفضلة", budget: "نطاق الميزانية الاختياري",
};

export function QuoteForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(draftKey);
    const timer = window.setTimeout(() => {
      if (stored) {
        try { setData({ ...initialData, ...JSON.parse(stored) }); setRestored(true); } catch { localStorage.removeItem(draftKey); }
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => localStorage.setItem(draftKey, JSON.stringify(data)), 250);
    return () => window.clearTimeout(timer);
  }, [data]);

  const summary = useMemo(() => {
    const rows = (Object.keys(labels) as (keyof FormData)[]).filter((key) => data[key].trim()).map((key) => `${labels[key]}: ${data[key]}`);
    return `طلب مشروع جديد — Codeylon\n\n${rows.join("\n")}`;
  }, [data]);

  const update = (key: keyof FormData, value: string) => {
    setData((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    setPrepared(false);
  };

  const validate = () => {
    const next: Partial<Record<keyof FormData, string>> = {};
    const required: (keyof FormData)[] = ["name", "phone", "projectType", "service", "details", "contactMethod"];
    required.forEach((key) => { if (!data[key].trim()) next[key] = "هذا الحقل مطلوب لإعداد الطلب."; });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "أدخل بريدًا إلكترونيًا صحيحًا.";
    if (data.phone && data.phone.replace(/\D/g, "").length < 9) next.phone = "أدخل رقم هاتف كاملًا مع رمز الدولة إن أمكن.";
    if (data.details && data.details.trim().length < 30) next.details = "أضف وصفًا أوضح للمشروع (30 حرفًا على الأقل).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      requestAnimationFrame(() => document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
      return;
    }
    setPrepared(true);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  const clearDraft = () => {
    localStorage.removeItem(draftKey);
    setData(initialData);
    setPrepared(false);
    setRestored(false);
  };

  return (
    <form className="quote-form" onSubmit={submit} noValidate>
      {restored && <div className="draft-notice" role="status"><span>استعدنا المسودة المحفوظة على هذا الجهاز.</span><button type="button" onClick={clearDraft}>ابدأ من جديد</button></div>}
      <fieldset>
        <legend>معلومات التواصل</legend>
        <div className="form-grid">
          <Field label="الاسم" name="name" value={data.name} error={errors.name} required onChange={update} autoComplete="name" />
          <Field label="اسم المشروع أو الشركة" name="company" value={data.company} error={errors.company} onChange={update} autoComplete="organization" />
          <Field label="رقم الهاتف" name="phone" value={data.phone} error={errors.phone} required onChange={update} autoComplete="tel" inputMode="tel" dir="ltr" />
          <Field label="البريد الإلكتروني" name="email" value={data.email} error={errors.email} onChange={update} autoComplete="email" inputMode="email" dir="ltr" />
        </div>
      </fieldset>
      <fieldset>
        <legend>نطاق المشروع</legend>
        <div className="form-grid">
          <SelectField label="نوع المشروع" name="projectType" value={data.projectType} error={errors.projectType} required onChange={update} options={["موقع جديد", "إعادة تصميم موقع", "صفحة حملة", "تنفيذ تصميم جاهز", "غير متأكد"]} />
          <SelectField label="الخدمة المطلوبة" name="service" value={data.service} error={errors.service} required onChange={update} options={["صفحة هبوط", "موقع أعمال", "موقع شركة", "إعادة تصميم", "تطوير Frontend", "أحتاج اقتراحكم"]} />
          <SelectField label="عدد الصفحات التقريبي" name="pageCount" value={data.pageCount} error={errors.pageCount} onChange={update} options={["صفحة واحدة", "2–5 صفحات", "6–10 صفحات", "أكثر من 10", "غير محدد"]} />
          <SelectField label="لغة الموقع" name="language" value={data.language} error={errors.language} onChange={update} options={["العربية", "العربية والإنكليزية", "الإنكليزية", "أخرى"]} />
          <SelectField label="هل يوجد محتوى جاهز؟" name="contentReady" value={data.contentReady} error={errors.contentReady} onChange={update} options={["جاهز بالكامل", "جاهز جزئيًا", "أحتاج مساعدة", "غير موجود بعد"]} />
          <SelectField label="هل توجد هوية بصرية أو شعار؟" name="brandReady" value={data.brandReady} error={errors.brandReady} onChange={update} options={["هوية كاملة", "شعار فقط", "تحتاج تحديثًا", "لا توجد"]} />
          <Field label="الموعد المتوقع" name="timeline" value={data.timeline} error={errors.timeline} onChange={update} placeholder="مثال: خلال 6 أسابيع" />
          <SelectField label="نطاق الميزانية (اختياري)" name="budget" value={data.budget} error={errors.budget} onChange={update} options={["أفضل تحديده بعد فهم النطاق", "لدي نطاق مبدئي وسأذكره في التفاصيل"]} />
        </div>
        <label className="field field--wide">
          <span>تفاصيل المشروع <b aria-hidden="true">*</b></span>
          <textarea rows={7} value={data.details} onChange={(e) => update("details", e.target.value)} aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? "details-error" : undefined} placeholder="ما الذي يقدّمه عملك؟ ما الهدف من الموقع؟ وما أهم الصفحات أو الوظائف التي تتوقعها؟" />
          {errors.details && <small className="field-error" id="details-error">{errors.details}</small>}
        </label>
        <div className="form-grid">
          <SelectField label="طريقة التواصل المفضلة" name="contactMethod" value={data.contactMethod} error={errors.contactMethod} required onChange={update} options={["واتساب", "بريد إلكتروني", "مكالمة"]} />
        </div>
      </fieldset>
      <div className="form-submit">
        <button className="button button--gold" type="submit">راجع وجهّز الطلب</button>
        <p>لن يُرسل شيء تلقائيًا. بعد المراجعة تختار واتساب أو البريد أو نسخ الملخص.</p>
      </div>
      {prepared && (
        <section className="prepared-request" aria-live="polite">
          <div><h2>طلبك جاهز للإرسال.</h2><p>راجع الملخص ثم اختر القناة المناسبة. حفظناه كمسودة على جهازك حتى لا تفقده.</p></div>
          <pre dir="rtl">{summary}</pre>
          <div className="prepared-actions">
            <a className="button button--gold" href={`https://wa.me/${site.phoneInternational}?text=${encodeURIComponent(summary)}`} target="_blank" rel="noreferrer">إرسال عبر واتساب</a>
            <a className="button button--line-light" href={`mailto:${site.email}?subject=${encodeURIComponent(`طلب مشروع — ${data.company || data.name}`)}&body=${encodeURIComponent(summary)}`}>إرسال عبر البريد</a>
            <button className="text-button text-button--light" type="button" onClick={copy}>{copied ? "تم النسخ" : "نسخ الملخص"}</button>
          </div>
        </section>
      )}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof FormData;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (key: keyof FormData, value: string) => void;
  autoComplete?: string;
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
  dir?: "ltr" | "rtl" | "auto";
  placeholder?: string;
};
function Field({ label, name, value, error, required, onChange, ...props }: FieldProps) {
  return <label className="field"><span>{label} {required && <b aria-hidden="true">*</b>}</span><input name={name} value={value} onChange={(e) => onChange(name, e.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} {...props} />{error && <small className="field-error" id={`${name}-error`}>{error}</small>}</label>;
}

function SelectField({ label, name, value, error, required, onChange, options }: Omit<FieldProps, "children"> & { options: string[] }) {
  return <label className="field"><span>{label} {required && <b aria-hidden="true">*</b>}</span><select name={name} value={value} onChange={(e) => onChange(name, e.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined}><option value="">اختر</option>{options.map((option) => <option key={option}>{option}</option>)}</select>{error && <small className="field-error" id={`${name}-error`}>{error}</small>}</label>;
}
