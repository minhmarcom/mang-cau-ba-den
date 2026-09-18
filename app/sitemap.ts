import type { MetadataRoute } from "next";
import { articles } from "./data/articles";

const siteUrl = "https://mangcaubaden.vn";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/san-pham/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/san-pham/hop-mang-cau-ba-den-3-trai-vip/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-5kg/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-15kg/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tin-tuc/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hop-tac/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tuyen-dai-ly-ctv/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/doi-tac/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Dynamic article routes: both root slug and /tin-tuc/ slug
  const articlePages: MetadataRoute.Sitemap = articles.flatMap((art) => {
    const cleanSlug = art.slug.replace(/^\//, "");
    return [
      {
        url: `${siteUrl}/${cleanSlug}/`,
        lastModified: now,
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: `${siteUrl}/tin-tuc/${cleanSlug}/`,
        lastModified: now,
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
    ];
  });

  return [...staticPages, ...articlePages];
}
