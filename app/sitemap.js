import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date("2026-09-04T00:00:00+03:00");
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
