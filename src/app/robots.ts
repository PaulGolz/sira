import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Design-Prototypen nicht indexieren.
      disallow: ["/1", "/2", "/3", "/4", "/5", "/6", "/7", "/8", "/versionen"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
