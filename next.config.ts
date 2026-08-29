import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mangcaubaden.vn",
          },
        ],
        destination: "https://mangcaubaden.vn/:path*",
        permanent: true,
      },
      {
        source: "/mua-mang-cau-ba-den",
        destination: "/san-pham",
        permanent: true,
      },
      {
        source: "/dat-mang-cau-ba-den",
        destination: "/san-pham",
        permanent: true,
      },
      {
        source: "/mua-na-ba-den",
        destination: "/san-pham",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
