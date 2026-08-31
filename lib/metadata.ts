import type { Metadata } from "next";

export function pageMetadata({ title, description, path, image = "/images/hero-studio.png" }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | Codeylon`, description, url: path, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title: `${title} | Codeylon`, description, images: [image] },
  };
}
