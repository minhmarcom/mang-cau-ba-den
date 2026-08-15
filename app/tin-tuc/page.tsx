import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tin Tức & Kinh Nghiệm Mãng Cầu Bà Đen Tây Ninh | NABADEN Chính Gốc",
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
    title: "Tin Tức & Kinh Nghiệm Mãng Cầu Bà Đen Tây Ninh | NABADEN Chính Gốc",
    description:
      "Tổng hợp bài viết tin tức nông sản, hướng dẫn chọn mua mãng cầu Bà Đen chính gốc Tây Ninh chuẩn ngon từ nhà vườn.",
    url: "https://mangcaubaden.vn/tin-tuc/",
    siteName: "Mãng Cầu Bà Đen",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tin tức Mãng Cầu Bà Đen Tây Ninh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tin Tức & Kinh Nghiệm Mãng Cầu Bà Đen Tây Ninh | NABADEN",
    description:
      "Khám phá tin tức và kinh nghiệm chọn mua mãng cầu Bà Đen chính gốc Tây Ninh chuẩn sạch, tươi ngon.",
    images: ["/og.png"],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tin Tức & Kinh Nghiệm Mãng Cầu Bà Đen Tây Ninh",
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
  hasPart: [
    {
      "@type": "NewsArticle",
      headline: "Mãng Cầu Bà Đen – Đặc Sản Nổi Tiếng Của Tây Ninh",
      url: "https://mangcaubaden.vn/tin-tuc/mang-cau-ba-den-dac-san-tay-ninh/",
      image: "https://mangcaubaden.vn/hai-trieu-trai-mang-cau-chin.jpg",
    },
    {
      "@type": "NewsArticle",
      headline: "Tìm mãng cầu Bà Đen chính gốc Tây Ninh ở đâu? Kinh nghiệm chọn mua chuẩn ngon",
      url: "https://mangcaubaden.vn/tin-tuc/mua-mang-cau-ba-den-chinh-goc-tay-ninh/",
      image: "https://mangcaubaden.vn/thuc-te-dong-goi-nhieu-thung.jpg",
    },
    {
      "@type": "NewsArticle",
      headline: "Mãng Cầu Bà Đen – Đặc sản Tây Ninh: Tươi ngon chuẩn vị từ vườn nhà",
      url: "https://mangcaubaden.vn/tin-tuc/mang-cau-ba-den-nabaden-dac-san-tay-ninh/",
      image: "https://mangcaubaden.vn/vuon-nui-ba-den.jpg",
    },
  ],
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
  const articles = [
    {
      slug: "/tin-tuc/mang-cau-ba-den-dac-san-tay-ninh/",
      title: "Mãng Cầu Bà Đen – Đặc Sản Nổi Tiếng Của Tây Ninh",
      kicker: "Nông sản bản sắc",
      tag: "Đặc sản nổi tiếng",
      image: "/hai-trieu-trai-mang-cau-chin.jpg",
      date: "Tháng 8/2026",
      readTime: "4 phút đọc",
      description:
        "Khám phá mãng cầu Bà Đen Tây Ninh – đặc sản nổi tiếng với thịt dai, vị ngọt thanh, thơm ngon, vùng chuyên canh trù phú và được bảo hộ chỉ dẫn địa lý.",
    },
    {
      slug: "/tin-tuc/mua-mang-cau-ba-den-chinh-goc-tay-ninh/",
      title: "Tìm mãng cầu Bà Đen chính gốc Tây Ninh ở đâu? Kinh nghiệm chọn mua chuẩn ngon",
      kicker: "Tin tức mùa vụ",
      tag: "Kinh nghiệm chọn mua",
      image: "/thuc-te-dong-goi-nhieu-thung.jpg",
      date: "Tháng 8/2026",
      readTime: "5 phút đọc",
      description:
        "Hướng dẫn chi tiết cách nhận biết độ già của trái, phân biệt mãng cầu chuẩn gốc Tây Ninh, quy cách đóng gói chống va đập và bảng phân loại trái ăn gia đình hoặc biếu tặng.",
    },
    {
      slug: "/tin-tuc/mang-cau-ba-den-nabaden-dac-san-tay-ninh/",
      title: "Mãng Cầu Bà Đen – Đặc sản Tây Ninh: Tươi ngon chuẩn vị từ vườn nhà",
      kicker: "Đặc sản quê nhà",
      tag: "Văn hóa nhà nông",
      image: "/thuc-te-vuon-mang-cau.jpg",
      date: "Tháng 8/2026",
      readTime: "4 phút đọc",
      description:
        "Khám phá nét độc đáo của mãng cầu Bà Đen: vị ngọt thanh dai dẻo, quy trình bao trái an toàn trên cành, thu hoạch trong ngày và chuẩn chất lượng VietGAP & OCOP.",
    },
  ];

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
            alt="Mãng Cầu Bà Đen NABADEN"
            className="brand-logo-img"
            width="130"
            height="38"
          />
          <span className="brand-divider" aria-hidden="true">|</span>
          <span className="brand-text">
            Mãng Cầu<br />Bà Đen
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng">
          <Link href="/#cau-chuyen">Câu chuyện</Link>
          <Link href="/#san-pham">Sản phẩm</Link>
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
          <a
            className="mobile-quick-call"
            href="tel:0907215521"
            aria-label="Gọi ngay 0907 215 521"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
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
              <div className="featured-article-img" style={{ minHeight: "220px" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span className="featured-badge">{item.tag}</span>
              </div>
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
      <footer>
        <nav className="article-navigation-back" aria-label="Điều hướng bài viết">
          <Link href="/" className="back-home-link">
            ← Quay về Trang chủ Mãng Cầu Bà Đen
          </Link>
        </nav>

        <Link className="brand footer-brand" href="/">
          <img
            src="/logo.png"
            alt="Mãng Cầu Bà Đen NABADEN"
            className="brand-logo-img"
            width="130"
            height="38"
          />
          <span className="brand-divider" aria-hidden="true" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <span style={{ color: "white" }}>
            Mãng Cầu<br />Bà Đen
          </span>
        </Link>
        <p>
          Đặc sản từ vùng trồng Tây Ninh.
          <br />
          <a href="tel:0907215521">Hotline / Zalo: 0907 215 521</a>
        </p>
        <div>
          <a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">
            Zalo
          </a>
          <a href="https://www.tiktok.com/@mangcaubaden" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
        <small>© 2026 Mãng Cầu Bà Đen • Giữ trọn vị quê nhà</small>
      </footer>
    </div>
  );
}
