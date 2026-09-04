import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { ANALYTICS_ID, SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Codeylon — Websites Built for Real Businesses",
    template: "%s — Codeylon",
  },
  description:
    "Codeylon is a Baghdad-based web agency building fast, accessible front-end websites for businesses in Iraq and beyond.",
  applicationName: "Codeylon",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/assets/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "Codeylon",
    locale: "en_US",
    images: [
      {
        url: "/assets/og-codeylon.png",
        width: 1200,
        height: 630,
        alt: "Codeylon — websites built with a clear scope",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og-codeylon.png"],
  },
};

export const viewport = {
  themeColor: "#07162d",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsent analyticsId={ANALYTICS_ID} />
      </body>
    </html>
  );
}
