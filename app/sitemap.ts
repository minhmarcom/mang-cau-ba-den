import type { MetadataRoute } from "next";

const siteUrl = "https://mangcaubaden.vn";
const lastModified = new Date("2026-08-29T00:00:00+07:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/san-pham/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/san-pham/hop-mang-cau-ba-den-3-trai-vip/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-5kg/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-15kg/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tin-tuc/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/cach-bao-quan-mang-cau-ba-den/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/mua-mang-cau-ba-den-thang-may/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/di-tay-ninh-mua-mang-cau-ba-den-o-dau/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/mang-cau-ba-den-dac-san-tay-ninh/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/mua-mang-cau-ba-den-chinh-goc-tay-ninh/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hop-tac/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tuyen-dai-ly-ctv/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/doi-tac/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/van-chuyen-mang-cau-ba-den/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tin-tuc/van-chuyen-mang-cau-ba-den/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tin-tuc/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/mang-cau-va-qua-na-co-phai-la-mot/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tin-tuc/mang-cau-va-qua-na-co-phai-la-mot/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/mang-cau-bao-lau-thi-chin/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tin-tuc/mang-cau-bao-lau-thi-chin/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/vi-sao-mang-cau-ba-den-doi-khi-co-sau/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tin-tuc/vi-sao-mang-cau-ba-den-doi-khi-co-sau/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/mang-cau-va-qua-na-co-phai-la-mot/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tin-tuc/mang-cau-va-qua-na-co-phai-la-mot/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/mang-cau-bao-lau-thi-chin/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tin-tuc/mang-cau-bao-lau-thi-chin/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/vi-sao-mang-cau-ba-den-doi-khi-co-sau/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/tin-tuc/vi-sao-mang-cau-ba-den-doi-khi-co-sau/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];
}
