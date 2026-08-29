import type { MetadataRoute } from "next";

const siteUrl = "https://mangcaubaden.vn";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap-san-pham.xml`,
      `${siteUrl}/sitemap-tin-tuc.xml`,
    ],
    host: siteUrl,
  };
}
