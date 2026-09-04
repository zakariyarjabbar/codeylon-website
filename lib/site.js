export const SITE_URL = "https://codeylon.com";
export const CONTACT_EMAIL = "hello@codeylon.com";
export const INSTAGRAM_URL = "https://www.instagram.com/codeylon/";
export const ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

export const primaryNavigation = [
  { href: "/#services", label: "Services" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#process", label: "Process" },
  { href: "/#quality", label: "Standards" },
  { href: "/#faq", label: "FAQ" },
];
