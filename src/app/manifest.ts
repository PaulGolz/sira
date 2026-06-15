import type { MetadataRoute } from "next";
import { siteName, siteDescription } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} – Wärmepumpen-Service`,
    short_name: "SiRa Service",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0e0e0e",
    theme_color: "#0e0e0e",
    lang: "de",
    categories: ["business", "utilities"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo-sira-service.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
