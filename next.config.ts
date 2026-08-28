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
    ];
  },
};

export default nextConfig;
