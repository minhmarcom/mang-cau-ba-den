import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

const siteUrl = "https://mangcaubaden.vn";

export const metadata: Metadata = {
  title: "Mua Hộp Mãng Cầu Bà Đen 3 Trái VIP – Giá 180.000₫",
  description:
    "Hộp quà Mãng Cầu Bà Đen 3 trái VIP thượng hạng: Tuyển chọn 3 quả đỉnh chóp tròn đều, vỏ sáng, lót rơm giấy và xốp lưới sang trọng. Chuẩn VietGAP & OCOP 3 sao làm quà biếu đối tác, dâng lễ.",
  keywords: [
    "hộp mãng cầu bà đen 3 trái",
    "hộp quà mãng cầu bà đen vip",
    "quà biếu mãng cầu tây ninh",
    "mãng cầu dâng lễ chùa bà",
    "mãng cầu biếu tết sang trọng",
    "hộp 3 trái mãng cầu tây ninh",
  ],
  alternates: {
    canonical: `${siteUrl}/san-pham/hop-mang-cau-ba-den-3-trai-vip`,
  },
  openGraph: {
    title: "Mua Hộp Mãng Cầu Bà Đen 3 Trái VIP – Giá 180.000₫",
    description:
      "Hộp quà 3 trái mãng cầu Bà Đen tuyển chọn thượng hạng: Thiết kế quai xách sang trọng, lót rơm giấy & xốp lưới êm ái, thích hợp biếu tặng đối tác, dâng lễ chùa Bà.",
    url: `${siteUrl}/san-pham/hop-mang-cau-ba-den-3-trai-vip`,
    siteName: "Mãng Cầu Bà Đen",
    images: [
      {
        url: `${siteUrl}/san-pham-hop-qua-3-trai.jpg`,
        width: 1200,
        height: 630,
        alt: "Hộp quà Mãng Cầu Bà Đen 3 trái VIP sang trọng",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mua Hộp Mãng Cầu Bà Đen 3 Trái VIP – Giá 180.000₫",
    description:
      "Tuyển chọn 3 trái mãng cầu Bà Đen VIP sang trọng, vỏ sáng đẹp mắt, chuẩn OCOP 3 sao Tây Ninh.",
    images: [`${siteUrl}/san-pham-hop-qua-3-trai.jpg`],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Hộp Quà Mãng Cầu Bà Đen 3 Trái VIP (OCOP 3 Sao)",
  alternateName: ["Hộp na Bà Đen 3 trái", "Hộp quà mãng cầu Tây Ninh"],
  image: `${siteUrl}/san-pham-hop-qua-3-trai.jpg`,
  description:
    "Hộp quà quai xách cao cấp với thiết kế cửa sổ trong suốt, tuyển chọn 3 trái mãng cầu Bà Đen thượng hạng, mã đẹp, vỏ sáng, lót rơm giấy và xốp lưới bảo vệ sang trọng.",
  sku: "MCBD-VIP-03",
  brand: {
    "@type": "Brand",
    name: "Mãng Cầu Bà Đen",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "VND",
    price: "180000",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: `${siteUrl}/san-pham/hop-mang-cau-ba-den-3-trai-vip`,
    seller: {
      "@type": "Organization",
      name: "Mãng Cầu Bà Đen Tây Ninh",
    },
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
      name: "Hộp 3 Trái VIP",
      item: `${siteUrl}/san-pham/hop-mang-cau-ba-den-3-trai-vip`,
    },
  ],
};

export default function Hop3TraiVipPage() {
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
            alt="Mãng Cầu Bà Đen"
            className="brand-logo-img"
            width="42"
            height="42"
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
            href="https://zalo.me/0833184106"
            target="_blank"
            rel="noreferrer"
            aria-label="Tư vấn đặt hộp VIP qua Zalo"
          >
            <span>Đặt hộp quà Zalo</span>

          </a>
          <Link
            className="mobile-order-btn"
            href="/#san-pham"
            aria-label="Đặt mua Mãng Cầu Bà Đen"
          >
            <span>Đặt mua</span>
          </Link>
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
          <span className="current">Hộp 3 Trái VIP</span>
        </nav>

        {/* PRODUCT HERO */}
        <div className="product-detail-hero">
          <div className="product-gallery-main">
            <img
              src="/san-pham-hop-qua-3-trai.jpg"
              alt="Hộp quà Mãng Cầu Bà Đen 3 trái VIP sang trọng"
            />
          </div>

          <div className="product-specs-box">
            <span className="product-item-tag">OCOP 3 Sao, Quà Biếu VIP</span>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 2.5vw, 32px)", margin: "8px 0 14px", lineHeight: 1.25 }}>
              Hộp Quà Mãng Cầu Bà Đen 3 Trái VIP
            </h1>
            <p className="product-item-price"><strong>180.000₫</strong><span>/ hộp 3 trái</span></p>
            <p style={{ fontSize: "14.5px", color: "var(--ink-muted)", lineHeight: 1.65, margin: "0 0 18px" }}>
              Phiên bản quà tặng cao cấp được thiết kế tinh tế với quai xách trang nhã, ô cửa sổ trong suốt tôn vinh 3 quả mãng cầu tuyển chọn đỉnh chóp từ vườn chân Núi Bà Đen Tây Ninh.
            </p>

            <h3 className="product-specs-title">Thông Số & Quy Cách Sản Phẩm</h3>
            <div className="specs-grid">
              <div className="specs-row">
                <span className="specs-label">Quy cách:</span>
                <span className="specs-value">Hộp quà 3 trái VIP + Quai xách</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Trọng lượng trái:</span>
                <span className="specs-value">Tuyển chọn quả to tròn đều loại 1</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Độ ngọt (Brix):</span>
                <span className="specs-value">19 – 23° Brix (Ngọt thanh tao)</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Tiêu chuẩn:</span>
                <span className="specs-value">VietGAP, OCOP 3 sao, 100% bao trái</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Phụ kiện kèm:</span>
                <span className="specs-value">Lưới xốp từng trái & rơm lót bảo vệ</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">Độ chín khi giao:</span>
                <span className="specs-value">Trái già cứng, chín sau 24-48h</span>
              </div>
            </div>

            <div className="product-detail-actions">
              <a
                href="https://zalo.me/0833184106"
                target="_blank"
                rel="noreferrer"
                className="btn-order-zalo"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Nhắn Zalo Đặt Hộp Quà VIP</span>

              </a>
              <a
                href="tel:0833184106"
                className="btn-call"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Hotline: 0833 184 106</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* DETAILED CONTENT SECTION */}
        <section className="article-body" style={{ marginTop: "36px" }}>
          <h2>1. Giá Trị Khác Biệt Của Hộp Quà Mãng Cầu 3 Trái VIP</h2>
          <p>
            Không chỉ đơn thuần là món trái cây giải nhiệt, <strong>Hộp quà 3 trái VIP Mãng Cầu Bà Đen</strong> được ra đời nhằm đáp ứng chuẩn mực biếu tặng cao cấp nhất. Mỗi hộp quà chứa đựng sự trân trọng với những ưu điểm nổi bật:
          </p>
          <ul>
            <li>
              <strong>Tỷ lệ tuyển chọn khắt khe:</strong> Chỉ khoảng 5-10% những quả đẹp nhất trong một lứa thu hoạch mới đủ tiêu chuẩn vào hộp VIP: cuống tươi xanh, mắt na mở to phẳng phiu, vỏ sáng mịn không vết trầy xước.
            </li>
            <li>
              <strong>Đóng gói sang trọng & cứng cáp:</strong> Vỏ hộp carton định hình cao cấp chịu lực, mặt trước có ô bóng kính khoe trọn vẻ đẹp căng mọng của 3 trái bên trong.
            </li>
            <li>
              <strong>Bảo vệ hoàn hảo:</strong> Từng quả được ôm trọn bởi lưới xốp co giãn và lớp rơm giấy mềm mại, đảm bảo không va đập, không cấn dập trong suốt quá trình vận chuyển.
            </li>
          </ul>

          <figure className="article-inline-image">
            <img
              src="/san-pham-hop-qua-3-trai.jpg"
              alt="Cận cảnh hộp quà 3 trái mãng cầu Bà Đen sang trọng với quai xách tiện lợi"
              loading="lazy"
            />
            <figcaption>
              Mẫu hộp quà 3 trái VIP sang trọng với quai xách chắc chắn, lót rơm giấy và lưới xốp êm ái.
            </figcaption>
          </figure>

          <h2>2. Phù Hợp Cho Những Dịp Nào?</h2>
          <div className="highlights-grid" style={{ marginBottom: "28px" }}>
            <div className="highlight-item">
              <strong>Quà Biếu Đối Tác & Khách Hàng VIP</strong>
              <p>Món quà nông sản bản sắc sang trọng, thể hiện sự tinh tế và trân quý sức khỏe của người nhận.</p>
            </div>
            <div className="highlight-item">
              <strong>Dâng Lễ Chùa Bà & Lễ Hội Tây Ninh</strong>
              <p>Những trái mãng cầu tròn đầy, tươi tắn dâng lên Điện Bà Linh Sơn Thánh Mẫu cầu bình an, tài lộc.</p>
            </div>
            <div className="highlight-item">
              <strong>Biếu Tặng Gia Đình & Người Thân</strong>
              <p>Món quà đặc sản Tây Ninh chính gốc dành tặng ông bà, cha mẹ và bạn bè trong các dịp sum vầy.</p>
            </div>
          </div>

          <h2>3. Hướng Dẫn Thưởng Thức & Bảo Quản Đúng Cách</h2>
          <p>
            Để giữ trọn hương vị dẻo ngọt thanh tao của mãng cầu Bà Đen, bạn nên lưu ý:
          </p>
          <ul>
            <li>
              <strong>Giai đoạn chờ chín:</strong> Mở nắp hộp để nơi thoáng mát ở nhiệt độ phòng (25-30°C). Trái sẽ mềm dần và tỏa hương thơm dịu sau 1-2 ngày.
            </li>
            <li>
              <strong>Thời điểm thưởng thức ngon nhất:</strong> Khi chạm nhẹ thấy toàn thân quả mềm đều, vỏ ngả màu vàng nhạt là lúc cơm mãng cầu đạt độ dẻo và ngọt thanh nhất.
            </li>
            <li>
              <strong>Bảo quản lạnh:</strong> Khi quả đã chín mềm, có thể cho vào ngăn mát tủ lạnh (6-10°C) để dùng dần trong 3-4 ngày, hương vị mát lạnh càng thêm đậm đà.
            </li>
          </ul>
        </section>

        {/* RELATED PRODUCTS */}
        <section style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 3vw, 26px)", color: "var(--ink)", marginBottom: "16px" }}>
            Xem Thêm Các Quy Cách Đóng Gói Khác
          </h2>
          <div className="related-products-grid">
            <Link href="/san-pham/thung-mang-cau-ba-den-5kg" className="related-product-card">
              <div className="related-product-thumb">
                <img src="/san-pham-thung-5kg.jpg" alt="Thùng 5KG Tuyển Chọn" loading="lazy" />
              </div>
              <div className="related-product-body">
                <h3 className="related-product-title">Thùng 5KG Tuyển Chọn</h3>
                <span className="related-product-link">Xem chi tiết </span>
              </div>
            </Link>

            <Link href="/san-pham/thung-mang-cau-ba-den-15kg" className="related-product-card">
              <div className="related-product-thumb">
                <img src="/san-pham-thung-15kg.jpg" alt="Thùng 15KG Tuyển Chọn" loading="lazy" />
              </div>
              <div className="related-product-body">
                <h3 className="related-product-title">Thùng 15KG Tuyển Chọn</h3>
                <span className="related-product-link">Xem chi tiết </span>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA BOX */}
        <section className="article-cta-box" style={{ marginTop: "40px" }}>
          <h3>Đặt mua Hộp Quà 3 Trái VIP hôm nay</h3>
          <p>
            Liên hệ trực tiếp với vườn để đặt mẫu hộp quà 3 trái tuyển chọn đẹp nhất, hỗ trợ đóng gói và giao nhanh tận nơi.
          </p>
          <div className="cta-box-buttons">
            <a className="btn-call" href="tel:0833184106">
              <span>Hotline: 0833 184 106</span>
              <span>↗</span>
            </a>
            <a
              className="btn-zalo"
              href="https://zalo.me/0833184106"
              target="_blank"
              rel="noreferrer"
            >
              <span>Nhắn Zalo tư vấn</span>

            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer backLink={{ href: "/san-pham", label: "Quay về Danh mục Sản phẩm" }} />
    </div>
  );
}
