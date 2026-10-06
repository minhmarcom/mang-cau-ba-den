import type { NextConfig } from "next";

const cspHeader = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://mangcaubaden.vn",
  "connect-src 'self'",
  "frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader },
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
