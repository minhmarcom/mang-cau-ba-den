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
  const siteUrl = `${protocol}://${host}`;
  const title = "Mãng Cầu Bà Đen Tây Ninh Chính Gốc | Từ Vườn Đến Tận Nơi";
  const description = "Tìm hiểu mãng cầu Bà Đen Tây Ninh: nguồn gốc, mùa vụ, cách chọn trái ngon, bảo quản, giá và kết nối mua lẻ, mua sỉ trực tiếp từ vùng trồng.";
  const keywords = [
    "mãng cầu Bà Đen", "mãng cầu Bà Đen Tây Ninh", "mãng cầu Tây Ninh", "mãng cầu núi Bà Đen", "mãng cầu na Bà Đen",
    "na Bà Đen", "na Tây Ninh", "đặc sản mãng cầu Tây Ninh", "đặc sản Tây Ninh", "đặc sản núi Bà Đen",
    "mua mãng cầu Bà Đen", "mua mãng cầu Tây Ninh", "mãng cầu Bà Đen chính gốc", "mãng cầu Tây Ninh chính gốc",
    "giá mãng cầu Bà Đen", "giá mãng cầu Tây Ninh", "đặt mãng cầu Bà Đen online", "mãng cầu Bà Đen giao tận nơi",
    "vườn mãng cầu Bà Đen", "vườn mãng cầu Tây Ninh", "nhà vườn mãng cầu Tây Ninh", "vựa mãng cầu Tây Ninh",
    "sỉ mãng cầu Bà Đen", "đại lý mãng cầu Tây Ninh", "mãng cầu VietGAP Tây Ninh", "mãng cầu OCOP Tây Ninh",
    "nguồn gốc mãng cầu Bà Đen", "mùa mãng cầu Tây Ninh", "cách chọn mãng cầu ngon", "cách nhận biết mãng cầu chín",
    "cách bảo quản mãng cầu", "mãng cầu Bà Đen và mãng cầu thường", "na dai và na Bà Đen", "dinh dưỡng mãng cầu",
    "hộp quà mãng cầu Tây Ninh", "mãng cầu Tây Ninh làm quà", "mãng cầu Bà Đen tuyển chọn", "mãng cầu Tây Ninh loại 1"
  ];

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: "/" },
    category: "Nông sản Tây Ninh",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    applicationName: "Mãng Cầu Bà Đen",
    manifest: "/manifest.webmanifest",
    appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Mãng Cầu" },
    icons: {
      icon: [{ url: "/app-icon-192.png", sizes: "192x192", type: "image/png" }],
      apple: [{ url: "/app-icon-192.png", sizes: "192x192", type: "image/png" }],
    },
    openGraph: { title, description, url: siteUrl, siteName: "Mãng Cầu Bà Đen", locale: "vi_VN", type: "website", images: [{ url: image, width: 1200, height: 630, alt: "Mãng Cầu Bà Đen Tây Ninh — Trái ngọt từ vườn nhà" }] },
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}<PWARegister /></body>
    </html>
  );
}


