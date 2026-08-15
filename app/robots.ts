import type { MetadataRoute } from "next";

const siteUrl = "https://mang-cau-ba-den-tay-ninh.nhatminhmarcom.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
