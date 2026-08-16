import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#365c3c",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host");
  const isLocal = host?.startsWith("localhost") || host?.startsWith("127.0.0.1");
  const siteUrl = isLocal ? `http://${host}` : "https://mangcaubaden.vn";
  const image = "https://mangcaubaden.vn/og.png";
  const title = 'Mãng cầu Bà Đen Tây Ninh - Sản vật vùng "đất Thánh"';
  const description = "Mãng Cầu Bà Đen – Chuyên trang về đặc sản mãng cầu Tây Ninh. Cập nhật kiến thức, mùa vụ, cách chọn, bảo quản, giá Mãng Cầu Bà Đen và thông tin đặt mua từ NABADEN.";
  const keywords = [
    // Từ khóa hạt nhân (Core Keywords)
    "mãng cầu Bà Đen", "mang cau ba den", "mãng cầu Bà Đen Tây Ninh", "mang cau tay ninh",
    "mãng cầu Tây Ninh", "đặc sản Tây Ninh", "đặc sản núi Bà Đen", "na Bà Đen", "na Tây Ninh",
    "mãng cầu na Bà Đen", "trái mãng cầu Bà Đen", "quả mãng cầu Tây Ninh",
    
    // Từ khóa thương mại & Đặt mua (Commercial & Transactional)
    "mua mãng cầu Bà Đen chính gốc", "mua mang cau ba den", "giá mãng cầu Bà Đen hôm nay",
    "giá mãng cầu Tây Ninh tại vườn", "đặt mua mãng cầu Bà Đen online", "mãng cầu Bà Đen giao tận nơi",
    "hộp đặc biệt 3 quả mãng cầu", "hộp quà mãng cầu 3 trái VIP", "hộp quà mãng cầu Tây Ninh",
    "thùng mãng cầu 5kg", "thùng mãng cầu 15kg", "sỉ mãng cầu Bà Đen", "vựa mãng cầu Tây Ninh",
    "mãng cầu Tây Ninh giao TPHCM", "mãng cầu Tây Ninh giao Hà Nội",
    
    // Từ khóa tiêu chuẩn chất lượng (Quality & Standards)
    "mãng cầu VietGAP Tây Ninh", "mãng cầu OCOP 3 sao", "mãng cầu bao trái an toàn",
    "mãng cầu sạch Tây Ninh", "mãng cầu tươi thu hoạch trong ngày", "mãng cầu loại 1 Tây Ninh",
    
    // Từ khóa thông tin & Hướng dẫn (Informational)
    "vườn mãng cầu núi Bà Đen", "mùa mãng cầu Tây Ninh tháng mấy", "cách chọn mãng cầu Bà Đen ngon",
    "phân biệt mãng cầu Bà Đen chính gốc", "cách nhận biết mãng cầu chín", "cách bảo quản mãng cầu không bị sượng"
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
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    applicationName: "Mãng Cầu Bà Đen",
    manifest: "/manifest.webmanifest",
    appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Mãng Cầu Bà Đen" },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.png", sizes: "64x64", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/app-icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/app-icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        { url: "/app-icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/app-icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Mãng Cầu Bà Đen Tây Ninh",
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Mãng Cầu Bà Đen Tây Ninh — Trái ngọt từ vườn nhà",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    other: {
      "geo.region": "VN-37",
      "geo.placename": "Núi Bà Đen, Tây Ninh",
      "geo.position": "11.3742;106.1685",
      "ICBM": "11.3742, 106.1685",
      "dc.coverage": "Tây Ninh, Việt Nam",
      "dc.language": "vi",
      "format-detection": "telephone=yes",
      "article:publisher": "https://www.facebook.com/mangcaubaden.vn/",
      "og:see_also": "https://www.facebook.com/mangcaubaden.vn/",
    },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(regs) {
                    for (var r of regs) { r.unregister(); }
                  });
                }
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var n of names) { caches.delete(n); }
                  });
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


