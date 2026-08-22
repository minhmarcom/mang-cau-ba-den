import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "../data/articles";
import Footer from "../components/Footer";
import MagazineArticleCard from "../components/MagazineArticleCard";

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
  const [featuredArticle, ...latestArticles] = articles;

  return (
    <div className="article-page-wrap news-magazine-page">
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

      <main className="news-magazine-container">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <span className="current">Tin tức</span>
        </nav>

        <header className="news-magazine-masthead">
          <p className="news-magazine-eyebrow">Tạp chí từ vườn · Tây Ninh</p>
          <h1>
            Chuyện mùa vụ, <em>chuyện Bà Đen</em>
          </h1>
          <p className="news-magazine-intro">
            Những câu chuyện văn hóa vùng trồng, kinh nghiệm chọn trái và cẩm nang
            chăm sóc được kể trực tiếp từ nhà vườn Tây Ninh.
          </p>
          <div className="news-magazine-edition" aria-label="Thông tin ấn bản">
            <span>Ấn bản tháng 8 · 2026</span>
            <span>{articles.length} bài viết</span>
          </div>
        </header>

        <section className="news-featured" aria-label="Bài viết nổi bật">
          <div className="news-section-label">
            <span>Bài nổi bật</span>
            <span aria-hidden="true">01</span>
          </div>
          <MagazineArticleCard article={featuredArticle} featured />
        </section>

        <section className="news-latest" aria-labelledby="news-latest-title">
          <div className="news-section-heading">
            <div>
              <span className="news-section-kicker">Mới từ nhà vườn</span>
              <h2 id="news-latest-title">Đọc tiếp trong số này</h2>
            </div>
            <span className="news-section-count">{latestArticles.length.toString().padStart(2, "0")} bài</span>
          </div>

          <div className="news-magazine-grid">
            {latestArticles.map((article) => (
              <MagazineArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="article-cta-box news-magazine-cta" aria-label="Tư vấn đặt hàng trực tiếp">
          <span className="news-cta-kicker">Từ vườn đến tận tay</span>
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

      <Footer backLink={{ href: "/", label: "Quay về Trang chủ Mãng Cầu Bà Đen" }} />
    </div>
  );
}
