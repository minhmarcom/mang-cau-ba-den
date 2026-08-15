import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { PWARegister } from "./pwa-register";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#365c3c",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const image = `${protocol}://${host}/og.png`;
  const title = "Mãng Cầu Bà Đen | Đặc sản Tây Ninh";
  const description = "Kết nối sản phẩm, hợp tác và phân phối mãng cầu Bà Đen từ vùng trồng Tây Ninh.";

  return {
    title,
    description,
    applicationName: "Mãng Cầu Bà Đen",
    manifest: "/manifest.webmanifest",
    appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Mãng Cầu" },
    icons: {
      icon: [{ url: "/app-icon-192.png", sizes: "192x192", type: "image/png" }],
      apple: [{ url: "/app-icon-192.png", sizes: "192x192", type: "image/png" }],
    },
    openGraph: { title, description, images: [{ url: image, width: 1200, height: 630, alt: "Mãng Cầu Bà Đen — Trái ngọt từ vườn nhà" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}<PWARegister /></body>
    </html>
  );
}
