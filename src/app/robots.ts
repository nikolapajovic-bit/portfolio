import { MetadataRoute } from "next";

// NOTE: replace with your real deployed domain once you have one — must
// match metadataBase in layout.tsx.
const SITE_URL = "https://nikolas-portfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
