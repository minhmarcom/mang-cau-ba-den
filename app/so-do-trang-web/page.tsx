import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sơ Đồ Trang Web (HTML Sitemap) | Mãng Cầu Bà Đen NABADEN",
  description:
    "Sơ đồ trang web chính thức của Mãng Cầu Bà Đen NABADEN Tây Ninh. Tra cứu toàn bộ danh mục sản phẩm, bài viết cẩm nang, quy trình nhà vườn và thông tin liên hệ.",
  alternates: {
    canonical: "/so-do-trang-web/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sitemapSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sơ Đồ Trang Web Mãng Cầu Bà Đen",
  description:
    "Tổng hợp toàn bộ liên kết, trang sản phẩm và bài viết tin tức trên website mangcaubaden.vn.",
  url: "https://mangcaubaden.vn/so-do-trang-web/",
  publisher: {
    "@type": "Organization",
    name: "Mãng Cầu Bà Đen NABADEN",
    url: "https://mangcaubaden.vn/",
  },
};

export default function HtmlSitemapPage() {
  return (
    <div className="article-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapSchema) }}
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
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="article-container article-content" style={{ paddingBottom: "60px" }}>
        {/* BREADCRUMB */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <span className="current">Sơ đồ trang web</span>
        </nav>

        {/* HEADER */}
        <header className="article-header" style={{ marginBottom: "36px" }}>
          <div className="article-meta-badge">
            <span className="badge-kicker">Cấu trúc Website</span>
            <span className="badge-dot">•</span>
            <span>HTML Sitemap</span>
          </div>

          <h1 className="article-title" style={{ marginBottom: "16px" }}>
            Sơ Đồ Trang Web <em>(HTML Sitemap)</em>
          </h1>

          <p className="article-lead">
            Tra cứu nhanh toàn bộ cấu trúc trang, danh mục sản phẩm, bộ sưu tập hình ảnh thực tế và các bài viết tin tức cẩm nang về Mãng Cầu Bà Đen Tây Ninh.
          </p>
        </header>

        {/* SITEMAP GRID STRUCTURE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "30px",
          }}
        >
          {/* SECTION 1: TRANG CHÍNH */}
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid var(--border-soft)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px" }}>🏡</span>
              <h2 style={{ fontSize: "20px", margin: 0, fontWeight: 700, color: "var(--ink)" }}>
                Trang chính & Mục chính
              </h2>
            </div>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.8 }}>
              <li>
                <Link href="/" style={{ fontWeight: 600, color: "var(--leaf)" }}>
                  Trang chủ (Homepage)
                </Link>
              </li>
              <li>
                <Link href="/#cau-chuyen">Câu chuyện Mãng Cầu Bà Đen</Link>
              </li>
              <li>
                <Link href="/#san-pham">Danh mục Sản phẩm chuẩn OCOP 3 Sao</Link>
              </li>
              <li>
                <Link href="/#hinh-anh">Thư viện ảnh thực tế nhà vườn</Link>
              </li>
              <li>
                <Link href="/#dat-hang">Hướng dẫn Đặt hàng & Báo giá</Link>
              </li>
              <li>
                <Link href="/#lien-he">Thông tin liên hệ & Địa chỉ vườn</Link>
              </li>
            </ul>
          </div>

          {/* SECTION 2: SẢN PHẨM & QUY CÁCH */}
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid var(--border-soft)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px" }}>🎁</span>
              <h2 style={{ fontSize: "20px", margin: 0, fontWeight: 700, color: "var(--ink)" }}>
                Sản phẩm & Quy cách
              </h2>
            </div>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.8 }}>
              <li>
                <Link href="/san-pham" style={{ fontWeight: 700, color: "var(--leaf)" }}>
                  Danh mục Sản Phẩm Mãng Cầu Bà Đen (Tổng hợp)
                </Link>
              </li>
              <li style={{ marginTop: "8px" }}>
                <Link href="/san-pham/hop-mang-cau-ba-den-3-trai-vip" style={{ fontWeight: 600, color: "var(--leaf)" }}>
                  Hộp Đặc Biệt (3 Quả VIP)
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  OCOP 3 Sao • Quà biếu sang trọng, đối tác, dâng lễ
                </span>
              </li>
              <li style={{ marginTop: "8px" }}>
                <Link href="/san-pham/thung-mang-cau-ba-den-5kg" style={{ fontWeight: 600, color: "var(--leaf)" }}>
                  Thùng 5KG Tuyển Chọn
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  OCOP 3 Sao • Thưởng thức gia đình, bọc lưới xốp
                </span>
              </li>
              <li style={{ marginTop: "8px" }}>
                <Link href="/san-pham/thung-mang-cau-ba-den-15kg" style={{ fontWeight: 600, color: "var(--leaf)" }}>
                  Thùng 15KG Tuyển Chọn
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  OCOP 3 Sao • Đơn sỉ, gửi xe khách & máy bay toàn quốc
                </span>
              </li>
            </ul>
          </div>

          {/* SECTION 3: TIN TỨC & BÀI VIẾT */}
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid var(--border-soft)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
              gridColumn: "1 / -1",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px" }}>📰</span>
              <h2 style={{ fontSize: "20px", margin: 0, fontWeight: 700, color: "var(--ink)" }}>
                Chuyên mục Tin tức & Cẩm nang
              </h2>
            </div>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9 }}>
              <li>
                <Link href="/tin-tuc" style={{ fontWeight: 700, color: "var(--leaf)" }}>
                  Góc Tin Tức Mãng Cầu Bà Đen (Trang tổng hợp)
                </Link>
              </li>
              <li style={{ marginTop: "6px" }}>
                <Link href="/cach-bao-quan-mang-cau-ba-den">
                  <strong>Cách bảo quản Mãng Cầu Bà Đen đúng cách tại nhà</strong>
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  Hướng dẫn chi tiết từ lúc nhận hàng, mẹo kiểm tra độ chín, giải đáp có nên để tủ lạnh và công thức 5 bước bảo quản dễ nhớ.
                </span>
              </li>
              <li style={{ marginTop: "6px" }}>
                <Link href="/mua-mang-cau-ba-den-thang-may">
                  <strong>Mùa Mãng Cầu Bà Đen tháng mấy? Mùa thu hoạch mãng cầu Tây Ninh</strong>
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  Tìm hiểu thời điểm thu hoạch, chính vụ thuận tự nhiên và kỹ thuật rải vụ nghịch phục vụ quanh năm.
                </span>
              </li>
              <li style={{ marginTop: "6px" }}>
                <Link href="/di-tay-ninh-mua-mang-cau-ba-den-o-dau">
                  <strong>Đi Tây Ninh mua Mãng Cầu Bà Đen ở đâu? Kinh nghiệm chọn mua ngon, chuẩn</strong>
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  Cẩm nang chọn mua mãng cầu làm quà du lịch Tây Ninh, cách nhận biết trái chín và bảo quản vận chuyển đi xa.
                </span>
              </li>
              <li style={{ marginTop: "6px" }}>
                <Link href="/mang-cau-ba-den-dac-san-tay-ninh">
                  <strong>Mãng Cầu Bà Đen – Đặc Sản Nổi Tiếng Của Tây Ninh</strong>
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  Khám phá vùng chuyên canh, chỉ dẫn địa lý, đặc điểm trái và nguồn gốc trù phú.
                </span>
              </li>
              <li style={{ marginTop: "6px" }}>
                <Link href="/mua-mang-cau-ba-den-chinh-goc-tay-ninh">
                  <strong>Tìm mãng cầu Bà Đen chính gốc Tây Ninh ở đâu? Kinh nghiệm chọn mua chuẩn ngon</strong>
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  Bí quyết nhận biết độ già của trái, cách chọn mãng cầu sạch và bảng quy cách đóng thùng.
                </span>
              </li>
              <li style={{ marginTop: "6px" }}>
                <Link href="/mang-cau-ba-den-nabaden-dac-san-tay-ninh">
                  <strong>Mãng Cầu Bà Đen – Đặc sản Tây Ninh: Tươi ngon chuẩn vị từ vườn nhà</strong>
                </Link>
                <span style={{ display: "block", fontSize: "13px", color: "var(--ink-muted)" }}>
                  Quy trình chăm sóc sạch, bao trái trên cây và cam kết chuẩn OCOP 3 Sao NABADEN.
                </span>
              </li>
            </ul>
          </div>

          {/* SECTION 4: KỸ THUẬT & SITEMAP XML */}
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid var(--border-soft)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px" }}>🤖</span>
              <h2 style={{ fontSize: "20px", margin: 0, fontWeight: 700, color: "var(--ink)" }}>
                Sơ đồ XML cho máy quét
              </h2>
            </div>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.8 }}>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noreferrer">
                  XML Sitemap chính (sitemap.xml)
                </a>
              </li>
              <li style={{ marginTop: "6px" }}>
                <a href="/sitemap-san-pham.xml" target="_blank" rel="noreferrer">
                  XML Sitemap sản phẩm (sitemap-san-pham.xml)
                </a>
              </li>
              <li style={{ marginTop: "6px" }}>
                <a href="/sitemap-tin-tuc.xml" target="_blank" rel="noreferrer">
                  XML Sitemap tin tức (sitemap-tin-tuc.xml)
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noreferrer">
                  Tệp chỉ dẫn Robots (robots.txt)
                </a>
              </li>
            </ul>
          </div>

          {/* SECTION 5: KÊNH KẾT NỐI */}
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid var(--border-soft)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px" }}>📞</span>
              <h2 style={{ fontSize: "20px", margin: 0, fontWeight: 700, color: "var(--ink)" }}>
                Kênh kết nối & Mạng xã hội
              </h2>
            </div>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.8 }}>
              <li>
                <a href="tel:0907215521">Hotline / Tư vấn: 0907 215 521</a>
              </li>
              <li>
                <a href="https://www.facebook.com/mangcaubaden.vn/" target="_blank" rel="noreferrer">
                  Fanpage Facebook: Mãng Cầu Bà Đen
                </a>
              </li>
              <li>
                <a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">
                  Zalo OA: Mãng Cầu Bà Đen
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@mangcaubaden" target="_blank" rel="noreferrer">
                  Kênh TikTok: @mangcaubaden
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer>
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
          <a href="https://www.facebook.com/mangcaubaden.vn/" target="_blank" rel="noreferrer">
            Facebook
          </a>
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
