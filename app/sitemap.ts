import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { portfolio } from "@/lib/portfolio";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/request-quote", "/contact", "/faq", "/privacy-policy", "/terms", "/cookie-policy"];
  const routes = [...staticRoutes, ...services.map((value) => `/services/${value.slug}`), ...portfolio.map((value) => `/portfolio/${value.slug}`)];
  return routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route.includes("privacy") || route.includes("terms") || route.includes("cookie") ? .3 : .7 }));
}
