import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Codeylon", short_name: "Codeylon", description: "تصميم وتطوير مواقع الأعمال العربية في العراق.", start_url: "/", display: "standalone", background_color: "#f4efe5", theme_color: "#081d48", lang: "ar", dir: "rtl", icons: [{ src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" }] };
}
