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
        source: "/mang-cau-ba-den-nabaden-dac-san-tay-ninh",
        destination: "/mang-cau-ba-den-dac-san-tay-ninh",
        permanent: true,
      },
      {
        source: "/tin-tuc/mang-cau-ba-den-nabaden-dac-san-tay-ninh",
        destination: "/tin-tuc/mang-cau-ba-den-dac-san-tay-ninh",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
