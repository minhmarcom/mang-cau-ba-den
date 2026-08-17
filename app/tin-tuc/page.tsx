import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "../data/articles";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tin Tức & Cẩm Nang Mãng Cầu Bà Đen Tây Ninh | Mãng Cầu Bà Đen",
  description:
    "Tổng hợp bài viết tin tức nông sản, hướng dẫn chọn mua mãng cầu Bà Đen chính gốc Tây Ninh, quy trình chăm sóc bao trái an toàn và tiêu chuẩn VietGAP & OCOP.",
  keywords: [
    "tin tức mãng cầu Bà Đen",
    "kinh nghiệm mua mãng cầu",
    "mãng cầu Bà Đen Tây Ninh",
    "đặc sản Tây Ninh",
    "mãng cầu VietGAP",
    "mãng cầu OCOP",
    "mua mãng cầu chính gốc",
  ],
  alternates: {
    canonical: "/tin-tuc/",
  },
  openGraph: {
    title: "Tin Tức & Cẩm Nang Mãng Cầu Bà Đen Tây Ninh | Mãng Cầu Bà Đen",
    description:
      "Tổng hợp các bài viết thông tin, tin tức chọn mua và quy trình canh tác mãng cầu Bà Đen chính gốc Tây Ninh.",
    url: "https://mangcaubaden.vn/tin-tuc/",
    siteName: "Mãng Cầu Bà Đen",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://mangcaubaden.vn/hai-trieu-trai-mang-cau-chin.jpg",
        width: 1200,
        height: 630,
        alt: "Tin tức Mãng Cầu Bà Đen Tây Ninh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tin Tức & Cẩm Nang Mãng Cầu Bà Đen Tây Ninh | Mãng Cầu Bà Đen",
    description:
      "Tổng hợp các bài viết hướng dẫn chọn mua, đặc điểm trái và cẩm nang nông sản Tây Ninh.",
    images: ["https://mangcaubaden.vn/hai-trieu-trai-mang-cau-chin.jpg"],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tin Tức & Cẩm Nang Mãng Cầu Bà Đen Tây Ninh",
  description:
    "Tổng hợp các bài viết thông tin, tin tức chọn mua và quy trình canh tác mãng cầu Bà Đen chính gốc Tây Ninh.",
  url: "https://mangcaubaden.vn/tin-tuc/",
  publisher: {
    "@type": "Organization",
    name: "Mãng Cầu Bà Đen NABADEN",
    logo: {
      "@type": "ImageObject",
      url: "https://mangcaubaden.vn/logo.png",
    },
  },
  hasPart: articles.map((art) => ({
    "@type": "NewsArticle",
    headline: art.title,
    url: `https://mangcaubaden.vn${art.slug}`,
    image: `https://mangcaubaden.vn${art.image}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: "https://mangcaubaden.vn/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tin tức",
      item: "https://mangcaubaden.vn/tin-tuc/",
    },
  ],
};

export default function NewsHubPage() {
  return (
    <div className="article-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HEADER */}
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Mãng Cầu Bà Đen NABADEN - Trang chủ">
          <img
            src="/logo.png"
            alt="Mãng Cầu Bà Đen"
            className="brand-logo-img"
            width="42"
            height="42"
          />
          <span className="brand-divider" aria-hidden="true">|</span>
          <span className="brand-text">
            Mãng Cầu<br />Bà Đen
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng">
          <Link href="/#cau-chuyen">Câu chuyện</Link>
          <Link href="/san-pham">Sản phẩm</Link>
          <Link href="/#hinh-anh">Hình ảnh</Link>
          <Link href="/#dat-hang">Đặt hàng</Link>
          <Link href="/tin-tuc">Tin tức</Link>
          <Link href="/#lien-he">Liên hệ</Link>
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="tel:0907215521">
            <span>Gọi 0907 215 521</span>
            <span className="cta-arrow">↗</span>
          </a>
          <Link
            className="mobile-order-btn"
            href="/#san-pham"
            aria-label="Đặt mua Mãng Cầu Bà Đen"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span>Đặt mua</span>
          </Link>
        </div>
      </header>

      {/* HUB MAIN CONTENT */}
      <main className="article-container" style={{ maxWidth: "1024px" }}>
        {/* BREADCRUMB */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <span className="current">Tin tức</span>
        </nav>

        {/* HUB HEADER */}
        <header className="article-header" style={{ marginBottom: "40px" }}>
          <div className="article-meta-badge">
            <span className="badge-kicker">Tin tức nhà nông</span>
            <span className="badge-dot">•</span>
            <span>Kiến thức & Mùa vụ</span>
          </div>

          <h1 className="article-title">
            Góc Tin Tức <em>Mãng Cầu</em> Bà Đen
          </h1>

          <p className="article-lead">
            Tổng hợp câu chuyện văn hóa vùng trồng, quy trình chăm sóc bao trái an toàn và những kinh nghiệm quý giá từ nhà vườn giúp bạn chọn mua những trái mãng cầu Tây Ninh tươi ngon, chuẩn gốc nhất.
          </p>
        </header>

        {/* ARTICLES LIST */}
        <section aria-label="Danh sách bài viết tin tức" style={{ display: "grid", gap: "28px" }}>
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="featured-article-card"
              style={{
                background: "rgba(255, 252, 240, 0.88)",
                border: "1px solid var(--border-soft)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(61, 80, 52, 0.06)",
              }}
            >
              <Link href={item.slug} className="featured-article-img" style={{ minHeight: "220px", display: "block" }} aria-label={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span className="featured-badge">{item.badge}</span>
              </Link>
              <div className="featured-article-content" style={{ padding: "24px 28px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "12px", color: "var(--leaf)", fontWeight: 700 }}>
                  <span className="featured-kicker">{item.kicker}</span>
                  <span>•</span>
                  <time>{item.date}</time>
                </div>
                <h3>
                  <Link href={item.slug} style={{ color: "var(--ink)", textDecoration: "none" }}>
                    {item.title}
                  </Link>
                </h3>
                <p>{item.description}</p>
                <div className="featured-article-action">
                  <Link href={item.slug} className="featured-read-btn">
                    <span>Đọc bài viết chi tiết</span>
                    <span>→</span>
                  </Link>
                  <span className="featured-read-time">{item.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* SEO CALLOUT BOX */}
        <section
          className="article-cta-box"
          style={{ marginTop: "48px" }}
          aria-label="Tư vấn đặt hàng trực tiếp"
        >
          <h3>Đặt mua mãng cầu Bà Đen chính gốc hôm nay</h3>
          <p>
            Liên hệ trực tiếp với vườn Mãng Cầu Bà Đen để kiểm tra độ chín, nhận báo giá theo thời điểm và hỗ trợ giao nhanh tận nơi toàn quốc.
          </p>
          <div className="cta-box-buttons">
            <a className="btn-call" href="tel:0907215521">
              <span>Hotline: 0907 215 521</span>
              <span>↗</span>
            </a>
            <a
              className="btn-zalo"
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
            >
              <span>Nhắn Zalo tư vấn</span>
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer backLink={{ href: "/", label: "Quay về Trang chủ Mãng Cầu Bà Đen" }} />
    </div>
  );
}
