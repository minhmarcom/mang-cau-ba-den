import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

const siteUrl = "https://mangcaubaden.vn";

export const metadata: Metadata = {
  title: "Thùng Mãng Cầu Bà Đen 5KG Tuyển Chọn | Mãng Cầu Bà Đen",
  description:
    "Thùng 5KG Mãng Cầu Bà Đen Tây Ninh chính gốc: Từng trái già loại 1 tuyển chọn kỹ lưỡng, bọc xốp lưới êm ái, đóng thùng carton thoáng khí. Chuẩn VietGAP & OCOP 3 sao, ngọt thanh dẻo dai.",
  keywords: [
    "thùng mãng cầu bà đen 5kg",
    "giá mãng cầu bà đen 5kg",
    "mãng cầu tây ninh 5kg",
    "đặt mua mãng cầu 5kg",
    "mãng cầu bà đen gia đình",
    "mua mãng cầu biếu tặng 5kg",
  ],
  alternates: {
    canonical: `${siteUrl}/san-pham/thung-mang-cau-ba-den-5kg`,
  },
  openGraph: {
    title: "Thùng Mãng Cầu Bà Đen 5KG Tuyển Chọn | Mãng Cầu Bà Đen",
    description:
      "Thùng 5kg Mãng Cầu Bà Đen Tây Ninh tuyển chọn loại 1: Bọc xốp lưới từng quả, đóng thùng carton có quai xách tiện dụng, thích hợp thưởng thức gia đình và biếu tặng.",
    url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-5kg`,
    siteName: "Mãng Cầu Bà Đen",
    images: [
      {
        url: `${siteUrl}/thung-5kg.png`,
        width: 1200,
        height: 630,
        alt: "Thùng 5KG Mãng Cầu Bà Đen Tây Ninh Tuyển Chọn",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thùng Mãng Cầu Bà Đen 5KG Tuyển Chọn | Mãng Cầu Bà Đen",
    description:
      "Quy cách đóng thùng 5kg chuyên dụng, trái già loại 1 bọc xốp êm ái, chuẩn OCOP 3 sao Tây Ninh.",
    images: [`${siteUrl}/thung-5kg.png`],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Thùng 5KG Mãng Cầu Bà Đen Tuyển Chọn (OCOP 3 Sao)",
  image: `${siteUrl}/thung-5kg.png`,
  description:
    "Quy cách đóng thùng carton 5kg chuẩn OCOP Tây Ninh, từng trái già tuyển chọn kỹ lưỡng, giữ trọn độ tươi ngọt tự nhiên.",
  sku: "MCBD-THUNG-05KG",
  mpn: "NAB-05KG",
  brand: {
    "@type": "Brand",
    name: "Mãng Cầu Bà Đen NABADEN",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "VND",
    price: "Liên hệ",
    availability: "https://schema.org/InStock",
    url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-5kg`,
    seller: {
      "@type": "Organization",
      name: "Mãng Cầu Bà Đen Tây Ninh",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "96",
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
      name: "Thùng 5KG Tuyển Chọn",
      item: `${siteUrl}/san-pham/thung-mang-cau-ba-den-5kg`,
    },
  ],
};

export default function Thung5kgPage() {
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
            aria-label="Tư vấn đặt thùng 5kg qua Zalo"
          >
            <span>Đặt thùng 5kg Zalo</span>
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
          <span className="current">Thùng 5KG Tuyển Chọn</span>
        </nav>

        {/* PRODUCT HERO */}
        <div className="product-detail-hero">
          <div className="product-gallery-main">
            <img
              src="/thung-5kg.png"
              alt="Thùng 5KG Mãng Cầu Bà Đen Tây Ninh Tuyển Chọn"
            />
          </div>

          <div className="product-specs-box">
            <span className="product-item-tag">OCOP 3 Sao • Thưởng Thức & Biếu Tặng</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 2.5vw, 32px)", margin: "8px 0 14px", lineHeight: 1.25 }}>
              Thùng 5KG Mãng Cầu Bà Đen Tuyển Chọn
            </h1>
            <p style={{ fontSize: "14.5px", color: "var(--ink-muted)", lineHeight: 1.65, margin: "0 0 18px" }}>
              Quy cách đóng thùng 5kg chuyên dụng được đông đảo khách hàng ưa chuộng nhất: Từng quả già loại 1 đồng đều, bọc lưới xốp êm ái, lý tưởng để gia đình thưởng thức hoặc làm quà biếu người thân bạn bè.
            </p>

            <h3 className="product-specs-title">Thông Số & Quy Cách Sản Phẩm</h3>
            <div className="specs-grid">
              <div className="specs-row">
                <span className="specs-label">Khối lượng:</span>
                <span className="specs-value">Thùng 5KG tịnh (Cân đủ ký)</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Chất lượng quả:</span>
                <span className="specs-value">Trái già loại 1 tuyển chọn kỹ lưỡng</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Độ ngọt (Brix):</span>
                <span className="specs-value">19 – 22° Brix (Thơm mát, dẻo dai)</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Đóng gói:</span>
                <span className="specs-value">Thùng carton quai xách + xốp lưới từng quả</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Tiêu chuẩn:</span>
                <span className="specs-value">VietGAP, OCOP 3 sao Tây Ninh</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Thời gian chín:</span>
                <span className="specs-value">Chín dẻo tự nhiên sau 1-2 ngày</span>
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
                <span>Nhắn Zalo Đặt Thùng 5KG</span>
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
          <h2>1. Tại Sao Thùng 5KG Mãng Cầu Bà Đen Là Lựa Chọn Hàng Đầu?</h2>
          <p>
            Đối với các hộ gia đình hoặc khách hàng mua quà gửi người thân ở các tỉnh xa, <strong>Thùng 5KG Mãng Cầu Bà Đen</strong> là quy cách vừa vặn và tiện dụng nhất:
          </p>
          <ul>
            <li>
              <strong>Khối lượng vừa vặn:</strong> 5kg vừa đủ cho gia đình 4-6 người thưởng thức trong 3-5 ngày khi trái chín dần lần lượt, không lo bị chín ồ ạt ăn không kịp.
            </li>
            <li>
              <strong>Bảo vệ từng trái:</strong> Mỗi quả đều được lồng một lớp lưới xốp mềm co giãn, giúp giảm thiểu ma sát giữa các quả khi xe di chuyển, giữ mắt na nguyên vẹn không bị thâm đen.
            </li>
            <li>
              <strong>Bao bì carton thông thoáng:</strong> Thùng được dập lỗ thoáng khí hai bên hông, chống hấp hơi nóng và giữ quả luôn khô ráo, tươi ngon từ vườn đến bàn ăn.
            </li>
          </ul>

          <figure className="article-inline-image">
            <img
              src="/thuc-te-thu-hoach.jpg"
              alt="Thu hoạch mãng cầu Bà Đen già đều đóng thùng 5kg tại vườn Tây Ninh"
              loading="lazy"
            />
            <figcaption>
              Trái được thu hoạch đúng độ già vào sáng sớm tinh mơ trước khi phân loại đóng thùng 5kg.
            </figcaption>
          </figure>

          <h2>2. Quy Trình Thu Hoạch & Đóng Gói Thùng 5KG Chuẩn Vườn</h2>
          <div className="highlights-grid" style={{ marginBottom: "28px" }}>
            <div className="highlight-item">
              <strong>1. Tuyển Trái Trên Cây</strong>
              <p>Chỉ cắt những quả có mắt na đã nở phẳng, rãnh quả chuyển sang màu trắng ngà đặc trưng của trái đủ ngày tuổi.</p>
            </div>
            <div className="highlight-item">
              <strong>2. Bọc Xốp Từng Trái</strong>
              <p>Lồng lưới xốp co giãn bao trọn thân trái ngay sau khi cắt tỉa cuống gọn gàng.</p>
            </div>
            <div className="highlight-item">
              <strong>3. Xếp Thùng Khoa Học</strong>
              <p>Xếp quả đều tay theo tầng, chèn đệm êm ái, đảm bảo thùng cứng cáp không bị xô lệch.</p>
            </div>
          </div>

          <h2>3. Cách Ủ Chín & Thưởng Thức Mãng Cầu 5KG Ngon Nhất</h2>
          <p>
            Khi nhận được thùng 5kg, bạn nên mở nắp thùng để trái tiếp xúc với không khí thoáng mát. Sau 1-2 ngày, trái sẽ chín thơm tự nhiên. Cơm mãng cầu dai dẻo, vị ngọt thanh mát, rất tốt cho hệ tiêu hóa, bổ sung vitamin C và tăng cường đề kháng cho cả gia đình.
          </p>
        </section>

        {/* RELATED PRODUCTS */}
        <section style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 3vw, 26px)", color: "var(--ink)", marginBottom: "16px" }}>
            Xem Thêm Các Quy Cách Đóng Gói Khác
          </h2>
          <div className="related-products-grid">
            <Link href="/san-pham/hop-mang-cau-ba-den-3-trai-vip" className="related-product-card">
              <div className="related-product-thumb">
                <img src="/hop-qua-3-trai-vip.jpg" alt="Hộp Đặc Biệt (3 Quả VIP)" loading="lazy" />
              </div>
              <div className="related-product-body">
                <h3 className="related-product-title">Hộp Đặc Biệt (3 Quả VIP)</h3>
                <span className="related-product-link">Xem chi tiết →</span>
              </div>
            </Link>

            <Link href="/san-pham/thung-mang-cau-ba-den-15kg" className="related-product-card">
              <div className="related-product-thumb">
                <img src="/thung-15kg.png" alt="Thùng 15KG Tuyển Chọn" loading="lazy" />
              </div>
              <div className="related-product-body">
                <h3 className="related-product-title">Thùng 15KG Tuyển Chọn</h3>
                <span className="related-product-link">Xem chi tiết →</span>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA BOX */}
        <section className="article-cta-box" style={{ marginTop: "40px" }}>
          <h3>Đặt mua Thùng 5KG Mãng Cầu Bà Đen hôm nay</h3>
          <p>
            Liên hệ trực tiếp với vườn để kiểm tra lứa trái già hôm nay và nhận báo giá tốt nhất cùng chính sách giao hàng tận nhà.
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
      <Footer backLink={{ href: "/san-pham", label: "Quay về Danh mục Sản phẩm" }} />
    </div>
  );
}
