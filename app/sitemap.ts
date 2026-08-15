import type { MetadataRoute } from "next";

const siteUrl = "https://mangcaubaden.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/tin-tuc/mua-mang-cau-ba-den-chinh-goc-tay-ninh/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];
}
