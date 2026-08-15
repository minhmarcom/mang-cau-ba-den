import type { MetadataRoute } from "next";

const siteUrl = "https://mang-cau-ba-den-tay-ninh.nhatminhmarcom.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
