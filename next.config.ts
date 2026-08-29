import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
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
