import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-kufi-arabic";
import "@fontsource-variable/noto-sans-arabic";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Codeylon | تصميم وتطوير مواقع الأعمال في العراق", template: "%s | Codeylon" },
  description: "استوديو عراقي لتصميم وتطوير مواقع الأعمال وصفحات الهبوط ومواقع الشركات العربية السريعة والمتجاوبة.",
  applicationName: "Codeylon",
  authors: [{ name: "Codeylon", url: site.url }],
  creator: "Codeylon",
  publisher: "Codeylon",
  category: "Web Design and Frontend Development",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: site.url,
    siteName: "Codeylon",
    title: "Codeylon | مواقع عربية واضحة لأعمال جادّة",
    description: "تصميم وتطوير مواقع الأعمال في العراق — عربي أولًا، متجاوب، ومنفّذ بعناية.",
    images: [{ url: "/images/hero-studio.png", width: 1536, height: 2048, alt: "استوديو Codeylon أثناء تصميم موقع عربي" }],
  },
  twitter: { card: "summary_large_image", title: "Codeylon", description: "مواقع عربية واضحة لأعمال جادّة.", images: ["/images/hero-studio.png"] },
  icons: { icon: "/brand/icon-192.png", apple: "/brand/icon-192.png" },
};

export const viewport: Viewport = { themeColor: "#081d48", colorScheme: "light" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Codeylon",
  url: site.url,
  email: site.email,
  telephone: site.phoneDisplay,
  areaServed: { "@type": "Country", name: "Iraq" },
  address: { "@type": "PostalAddress", addressLocality: "Baghdad", addressCountry: "IQ" },
  sameAs: [site.instagram],
  knowsAbout: ["Web Design", "Arabic RTL Websites", "Frontend Development", "Landing Pages"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
