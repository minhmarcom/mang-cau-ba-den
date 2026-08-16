import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://mangcaubaden.vn";

export const metadata: Metadata = {
  title: "Thùng Mãng Cầu Bà Đen 15KG Đơn Sỉ & Vận Chuyển Toàn Quốc | Giá Vườn",
  description:
    "Thùng 15KG Mãng Cầu Bà Đen Tây Ninh chuyên dụng đơn sỉ: Thùng carton dày dặn 3-5 lớp chịu lực, lỗ thông gió chống hấp hơi, trái già đều đẹp. Hỗ trợ gửi xe khách & đường bay toàn quốc.",
  keywords: [
    "thùng mãng cầu bà đen 15kg",
    "sỉ mãng cầu bà đen tây ninh",
    "mua sỉ mãng cầu tây ninh",
    "mãng cầu bà đen giá sỉ",
    "mãng cầu gửi xe khách toàn quốc",
    "đại lý mãng cầu bà đen",
  ],
  alternates: {
    canonical: `${siteUrl}/san-pham/thung-mang-cau-ba-den-15kg`,
  },
  openGraph: {
    title: "Thùng Mãng Cầu Bà Đen 15KG Đơn Sỉ & Vận Chuyển Toàn Quốc | Giá Vườn",
    description:
      "Thùng carton 15kg dày dặn nhiều lớp chuyên dụng, bảo quản thông thoáng chống va đập hoàn hảo khi vận chuyển đường dài toàn quốc.",
    url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-15kg`,
    siteName: "Mãng Cầu Bà Đen Tây Ninh",
    images: [
      {
        url: `${siteUrl}/thung-15kg.png`,
        width: 1200,
        height: 630,
        alt: "Thùng 15KG Mãng Cầu Bà Đen Tây Ninh Đơn Sỉ",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thùng Mãng Cầu Bà Đen 15KG Đơn Sỉ & Vận Chuyển Toàn Quốc",
    description:
      "Thùng carton 15kg dày dặn 3-5 lớp chịu lực, chuyên gửi xe khách & máy bay toàn quốc, giá sỉ tận vườn.",
    images: [`${siteUrl}/thung-15kg.png`],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Thùng 15KG Mãng Cầu Bà Đen Tuyển Chọn (OCOP 3 Sao)",
  image: `${siteUrl}/thung-15kg.png`,
  description:
    "Thùng carton 15kg dày dặn nhiều lớp chuyên dụng, bảo quản thông thoáng chống va đập hoàn hảo khi vận chuyển đường dài toàn quốc.",
  sku: "MCBD-THUNG-15KG",
  mpn: "NAB-15KG",
  brand: {
    "@type": "Brand",
    name: "Mãng Cầu Bà Đen NABADEN",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "VND",
    price: "Liên hệ",
    availability: "https://schema.org/InStock",
    url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-15kg`,
    seller: {
      "@type": "Organization",
      name: "Mãng Cầu Bà Đen Tây Ninh",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "74",
    bestRating: "5",
    worstRating: "1",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sản phẩm",
      item: `${siteUrl}/san-pham`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Thùng 15KG Tuyển Chọn",
      item: `${siteUrl}/san-pham/thung-mang-cau-ba-den-15kg`,
    },
  ],
};

export default function Thung15kgPage() {
  return (
    <div className="product-hub-wrap">
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HEADER */}
      <header className="site-header" role="banner">
        <Link className="brand" href="/">
          <img
            src="/logo.png"
            alt="Mãng Cầu Bà Đen NABADEN"
            className="brand-logo-img"
            width="130"
            height="38"
          />
          <span className="brand-divider" aria-hidden="true">|</span>
          <span>
            Mãng Cầu<br />Bà Đen
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng">
          <Link href="/">Trang chủ</Link>
          <Link href="/san-pham" className="is-active" style={{ color: "var(--leaf)", fontWeight: 700 }}>
            Sản phẩm
          </Link>
          <Link href="/tin-tuc">Tin tức</Link>
          <Link href="/#lien-he">Liên hệ</Link>
        </nav>

        <div className="header-actions">
          <a
            className="header-cta"
            href="https://zalo.me/0907215521"
            target="_blank"
            rel="noreferrer"
            aria-label="Tư vấn đơn sỉ 15kg qua Zalo"
          >
            <span>Báo giá sỉ Zalo</span>
            <span className="btn-arrow">↗</span>
          </a>
          <a
            className="mobile-quick-call"
            href="tel:0907215521"
            aria-label="Gọi hotline tư vấn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="article-container" style={{ maxWidth: "860px" }}>
        {/* BREADCRUMB */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <Link href="/san-pham">Sản phẩm</Link>
          <span aria-hidden="true">/</span>
          <span className="current">Thùng 15KG Tuyển Chọn</span>
        </nav>

        {/* PRODUCT HERO */}
        <div className="product-detail-hero">
          <div className="product-gallery-main">
            <img
              src="/thung-15kg.png"
              alt="Thùng 15KG Mãng Cầu Bà Đen Tây Ninh Đơn Sỉ"
            />
          </div>

          <div className="product-specs-box">
            <span className="product-item-tag">OCOP 3 Sao • Đơn Sỉ & Vận Chuyển Xa</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 2.5vw, 32px)", margin: "8px 0 14px", lineHeight: 1.25 }}>
              Thùng 15KG Mãng Cầu Bà Đen Tuyển Chọn
            </h1>
            <p style={{ fontSize: "14.5px", color: "var(--ink-muted)", lineHeight: 1.65, margin: "0 0 18px" }}>
              Giải pháp tối ưu cho khách mua sỉ, đại lý phân phối hoa quả sạch, nhà hàng tiệc cưới hoặc khách hàng có nhu cầu gửi hàng đi tỉnh xa bằng đường bộ hoặc máy bay.
            </p>

            <h3 className="product-specs-title">Thông Số & Quy Cách Sản Phẩm</h3>
            <div className="specs-grid">
              <div className="specs-row">
                <span className="specs-label">Khối lượng:</span>
                <span className="specs-value">Thùng 15KG tịnh (Cân đủ ký tại vườn)</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Cấu tạo thùng:</span>
                <span className="specs-value">Carton 3 – 5 lớp dày chịu lực cao</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Thông gió:</span>
                <span className="specs-value">Lỗ thoáng khí 4 mặt chống hầm hơi</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Chất lượng:</span>
                <span className="specs-value">Trái già loại 1 đồng đều ngày tuổi</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Tiêu chuẩn:</span>
                <span className="specs-value">VietGAP, OCOP 3 sao Tây Ninh</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Vận chuyển:</span>
                <span className="specs-value">Gửi xe khách, chành xe, máy bay toàn quốc</span>
              </div>
            </div>

            <div className="product-detail-actions">
              <a
                href="https://zalo.me/0907215521"
                target="_blank"
                rel="noreferrer"
                className="btn-order-zalo"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Nhắn Zalo Báo Giá Sỉ Thùng 15KG</span>
                <span>↗</span>
              </a>
              <a
                href="tel:0907215521"
                className="btn-call"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Hotline: 0907 215 521</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* DETAILED CONTENT SECTION */}
        <section className="article-body" style={{ marginTop: "36px" }}>
          <h2>1. Ưu Điểm Chuyên Biệt Của Thùng 15KG Vận Chuyển Xa</h2>
          <p>
            Vận chuyển mãng cầu ta đi xa là bài toán đòi hỏi kỹ thuật đóng thùng nghiêm ngặt vì vỏ mãng cầu có nhiều mắt na dễ bị cọ xát. <strong>Thùng 15KG Mãng Cầu Bà Đen</strong> được nghiên cứu và thiết kế chuyên biệt:
          </p>
          <ul>
            <li>
              <strong>Độ chịu lực vượt trội:</strong> Thùng carton sóng 3-5 lớp dầy dặn, có thể xếp chồng nhiều tầng trên xe tải hoặc khoang hành lý máy bay mà không bị móp méo hay đè nén vào quả.
            </li>
            <li>
              <strong>Hệ thống thoát khí khoa học:</strong> Bố trí các lỗ thoáng khí dọc 4 vách thùng giúp luồng khí mát lưu thông liên tục, ngăn chặn tình trạng hấp nhiệt làm trái chín non hoặc thối ủng bên trong.
            </li>
            <li>
              <strong>Trái già đồng đều ngày cắt:</strong> Tất cả quả trong thùng được thu hoạch trong cùng một buổi sáng, đảm bảo khi đến nơi trái chín đều cùng một thời điểm, rất thuận tiện cho các cửa hàng trưng bày bán lẻ.
            </li>
          </ul>

          <figure className="article-inline-image">
            <img
              src="/hai-trieu-van-chuyen-vuon.jpg"
              alt="Vận chuyển mãng cầu Bà Đen trong vườn chuẩn bị đóng thùng 15kg"
              loading="lazy"
            />
            <figcaption>
              Trái được thu hoạch và vận chuyển nhanh về kho mát để phân loại đóng thùng carton 15kg chuyên dụng.
            </figcaption>
          </figure>

          <h2>2. Chính Sách Dành Cho Khách Mua Sỉ & Đại Lý</h2>
          <div className="highlights-grid" style={{ marginBottom: "28px" }}>
            <div className="highlight-item">
              <strong>Mức Giá Tận Vườn Cạnh Tranh</strong>
              <p>Chiết khấu giá sỉ tốt nhất không qua trung gian, hỗ trợ ổn định nguồn hàng quanh năm.</p>
            </div>
            <div className="highlight-item">
              <strong>Hỗ Trợ Giao Tận Bến Xe / Chành Xe</strong>
              <p>Đóng gói cẩn thận và chuyển ra bến xe miền Đông, miền Tây hoặc chành xe liên tỉnh theo yêu cầu.</p>
            </div>
            <div className="highlight-item">
              <strong>Cam Kết Đền Bù Hàng Hỏng 1-1</strong>
              <p>Chính sách bảo hành rõ ràng, đền bù nhanh chóng nếu hàng bị sự cố dập nát do lỗi đóng gói.</p>
            </div>
          </div>

          <h2>3. Hướng Dẫn Nhận Hàng & Bảo Quản Cho Đại Lý</h2>
          <p>
            Khi các thùng 15kg về đến cửa hàng hoặc kho, bạn nên mở nắp thùng và phân loại theo độ chín. Để trái ở nơi thoáng gió, tránh ánh nắng trực tiếp. Trái sẽ chín đẹp đều màu sau 24-48 giờ, thịt quả dẻo dai thơm lừng, thu hút khách hàng ngay từ cái nhìn đầu tiên.
          </p>
        </section>

        {/* RELATED PRODUCTS */}
        <section style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 3vw, 26px)", color: "var(--ink)", marginBottom: "20px" }}>
            Xem Thêm Các Quy Cách Đóng Gói Khác
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            <div className="product-item-card" style={{ padding: "20px" }}>
              <div className="product-item-media" style={{ height: "180px" }}>
                <img src="/hop-qua-3-trai-vip.jpg" alt="Hộp Quà 3 Trái VIP" loading="lazy" />
              </div>
              <div className="product-item-info">
                <span className="product-item-tag">Quà Biếu VIP</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", margin: "6px 0 8px" }}>Hộp Đặc Biệt (3 Quả)</h3>
                <p style={{ fontSize: "14px", color: "var(--ink-muted)", marginBottom: "14px" }}>Hộp quà quai xách cửa sổ bóng kính sang trọng biếu đối tác.</p>
                <Link href="/san-pham/hop-mang-cau-ba-den-3-trai-vip" className="btn-detail" style={{ fontSize: "13px", padding: "8px 16px" }}>
                  Xem Hộp 3 Trái →
                </Link>
              </div>
            </div>

            <div className="product-item-card" style={{ padding: "20px" }}>
              <div className="product-item-media" style={{ height: "180px" }}>
                <img src="/thung-5kg.png" alt="Thùng 5kg Mãng Cầu Bà Đen" loading="lazy" />
              </div>
              <div className="product-item-info">
                <span className="product-item-tag">Thưởng Thức & Biếu Tặng</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", margin: "6px 0 8px" }}>Thùng 5KG Tuyển Chọn</h3>
                <p style={{ fontSize: "14px", color: "var(--ink-muted)", marginBottom: "14px" }}>Thùng carton chuyên dụng bọc xốp từng trái dùng cho gia đình.</p>
                <Link href="/san-pham/thung-mang-cau-ba-den-5kg" className="btn-detail" style={{ fontSize: "13px", padding: "8px 16px" }}>
                  Xem Thùng 5KG →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BOX */}
        <section className="article-cta-box" style={{ marginTop: "40px" }}>
          <h3>Liên hệ đặt Thùng 15KG giá sỉ hôm nay</h3>
          <p>
            Trao đổi trực tiếp với nhà vườn để nhận báo giá sỉ theo số lượng thùng, lịch cắt trái mới nhất và phương thức giao nhận linh hoạt.
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
              <span>Nhắn Zalo tư vấn sỉ</span>
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <nav className="article-navigation-back" aria-label="Điều hướng quay về">
          <Link href="/san-pham" className="back-home-link">
            ← Quay về Danh mục Sản phẩm
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
