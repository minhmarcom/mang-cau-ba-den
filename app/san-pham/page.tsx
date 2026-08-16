import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://mangcaubaden.vn";

export const metadata: Metadata = {
  title: "Sản Phẩm Mãng Cầu Bà Đen Tây Ninh Chính Gốc | NABADEN OCOP",
  description:
    "Danh mục sản phẩm Mãng Cầu Bà Đen Tây Ninh chính gốc: Hộp quà 3 trái VIP, Thùng 5kg biếu tặng gia đình, Thùng 15kg đơn sỉ. Chuẩn VietGAP & OCOP 3 sao, hái tươi giao nhanh toàn quốc.",
  keywords: [
    "sản phẩm mãng cầu bà đen",
    "mãng cầu bà đen tây ninh",
    "hộp mãng cầu bà đen 3 trái",
    "thùng mãng cầu 5kg",
    "thùng mãng cầu 15kg",
    "giá mãng cầu bà đen",
    "mua mãng cầu tây ninh",
    "mãng cầu biếu tặng",
    "mãng cầu bà đen giá sỉ",
  ],
  alternates: {
    canonical: `${siteUrl}/san-pham`,
  },
  openGraph: {
    title: "Sản Phẩm Mãng Cầu Bà Đen Tây Ninh Chính Gốc | NABADEN OCOP",
    description:
      "Tuyển chọn những dòng sản phẩm Mãng Cầu Bà Đen Tây Ninh thượng hạng: Hộp quà 3 trái VIP, Thùng 5kg & Thùng 15kg. Trồng theo chuẩn VietGAP & OCOP, tươi ngon từ vườn.",
    url: `${siteUrl}/san-pham`,
    siteName: "Mãng Cầu Bà Đen Tây Ninh",
    images: [
      {
        url: `${siteUrl}/hop-qua-3-trai-vip.jpg`,
        width: 1200,
        height: 630,
        alt: "Danh mục sản phẩm Mãng Cầu Bà Đen Tây Ninh",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sản Phẩm Mãng Cầu Bà Đen Tây Ninh Chính Gốc | NABADEN OCOP",
    description:
      "Danh mục sản phẩm Mãng Cầu Bà Đen Tây Ninh chính gốc: Hộp 3 trái VIP, Thùng 5kg, Thùng 15kg chuẩn OCOP 3 sao.",
    images: [`${siteUrl}/hop-qua-3-trai-vip.jpg`],
  },
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Danh Mục Sản Phẩm Mãng Cầu Bà Đen Tây Ninh",
  description: "Các dòng sản phẩm mãng cầu Bà Đen tươi ngon chuẩn OCOP Tây Ninh",
  url: `${siteUrl}/san-pham`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Hộp Đặc Biệt (3 Quả) – Quà Biếu VIP",
        image: `${siteUrl}/hop-qua-3-trai-vip.jpg`,
        description: "Hộp quà quai xách cao cấp với thiết kế cửa sổ trong suốt, tuyển chọn 3 trái mãng cầu Bà Đen thượng hạng đạt chuẩn OCOP 3 sao.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen NABADEN" },
        sku: "MCBD-VIP-03",
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/san-pham/hop-mang-cau-ba-den-3-trai-vip`,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "128",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Thùng 5KG Tuyển Chọn – Thưởng Thức & Biếu Tặng",
        image: `${siteUrl}/thung-5kg.png`,
        description: "Quy cách đóng thùng carton 5kg chuẩn OCOP Tây Ninh, từng trái già tuyển chọn kỹ lưỡng, giữ trọn độ tươi ngọt tự nhiên.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen NABADEN" },
        sku: "MCBD-THUNG-05KG",
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-5kg`,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "96",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Thùng 15KG Tuyển Chọn – Đơn Sỉ & Vận Chuyển Xa",
        image: `${siteUrl}/thung-15kg.png`,
        description: "Thùng carton 15kg dày dặn nhiều lớp chuyên dụng, bảo quản thông thoáng chống va đập hoàn hảo khi vận chuyển đường dài toàn quốc.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen NABADEN" },
        sku: "MCBD-THUNG-15KG",
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/san-pham/thung-mang-cau-ba-den-15kg`,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "74",
        },
      },
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
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sản phẩm",
      item: `${siteUrl}/san-pham`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mãng cầu Bà Đen sau khi nhận hàng bao lâu thì chín ăn được?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mãng cầu được hái khi mắt na đã nở to, đạt đủ độ già. Sau khi đóng thùng vận chuyển 1-2 ngày đến tay bạn, quả sẽ mềm tay dần và chín thơm hoàn hảo sau khoảng 24-48 giờ.",
      },
    },
    {
      "@type": "Question",
      name: "Vườn có hỗ trợ giao hàng đi tỉnh xa và Hà Nội không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Nhà vườn hỗ trợ đóng thùng chống sốc và gửi xe khách, tàu hỏa hoặc chuyển phát nhanh đường bay toàn quốc, đảm bảo trái nguyên vẹn không bị dập nát.",
      },
    },
    {
      "@type": "Question",
      name: "Chính sách đổi trả hoặc đền bù sản phẩm hư hỏng như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chúng tôi cam kết bảo hành 1 đổi 1 hoặc hoàn tiền tương ứng nếu quả bị dập nát, hư hỏng trong quá trình vận chuyển.",
      },
    },
  ],
};

export default function ProductHubPage() {
  const products = [
    {
      id: "hop-3-trai",
      tag: "OCOP 3 Sao • Quà Biếu VIP",
      title: "Hộp Đặc Biệt (3 Quả)",
      slug: "/san-pham/hop-mang-cau-ba-den-3-trai-vip",
      image: "/hop-qua-3-trai-vip.jpg",
      desc: "Hộp quà quai xách cao cấp với thiết kế cửa sổ trong suốt, tuyển chọn 3 trái mãng cầu Bà Đen thượng hạng, mã đẹp, vỏ sáng, lót rơm giấy và xốp lưới bảo vệ sang trọng.",
      features: [
        "Trái tuyển chọn đỉnh chóp",
        "Vỏ hộp quà quai xách cao cấp",
        "Kèm xốp lưới & rơm giấy bảo vệ",
        "Phù hợp biếu tặng đối tác, dâng lễ",
      ],
      ctaText: "Xem chi tiết Hộp 3 Trái",
    },
    {
      id: "thung-5kg",
      tag: "OCOP 3 Sao • Thưởng Thức & Biếu Tặng",
      title: "Thùng 5KG Tuyển Chọn",
      slug: "/san-pham/thung-mang-cau-ba-den-5kg",
      image: "/thung-5kg.png",
      desc: "Quy cách đóng thùng carton 5kg chuyên dụng, từng trái già loại 1 bọc lưới xốp êm ái, thích hợp dùng cho gia đình hoặc làm quà biếu người thân bạn bè.",
      features: [
        "Trái tuyển đồng đều loại 1",
        "Bọc lưới xốp từng quả chống va đập",
        "Thùng carton thông thoáng có quai xách",
        "Chín dẻo ngọt thanh tự nhiên sau 1-2 ngày",
      ],
      ctaText: "Xem chi tiết Thùng 5KG",
    },
    {
      id: "thung-15kg",
      tag: "OCOP 3 Sao • Đơn Sỉ & Vận Chuyển Xa",
      title: "Thùng 15KG Tuyển Chọn",
      slug: "/san-pham/thung-mang-cau-ba-den-15kg",
      image: "/thung-15kg.png",
      desc: "Thùng carton 15kg dày dặn nhiều lớp chịu lực, lỗ thoáng khí chống hấp hơi, tối ưu cho việc gửi xe khách liên tỉnh, máy bay hoặc cung cấp cho đại lý hoa quả sạch.",
      features: [
        "Thùng carton 3-5 lớp dày chịu lực",
        "Lỗ thoáng khí chống hầm hơi quả",
        "Mức giá sỉ ưu đãi tận vườn",
        "Gửi xe khách, đường bay toàn quốc",
      ],
      ctaText: "Xem chi tiết Thùng 15KG",
    },
  ];

  return (
    <div className="product-hub-wrap">
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

        <nav className="desktop-nav" aria-label="Điều hướng trang sản phẩm">
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
            aria-label="Tư vấn mua hàng qua Zalo"
          >
            <span>Đặt hàng Zalo</span>
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

      {/* MAIN CONTAINER */}
      <main className="article-container" style={{ maxWidth: "980px" }}>
        {/* BREADCRUMB */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <span className="current">Sản phẩm Mãng Cầu Bà Đen</span>
        </nav>

        {/* HUB HEADER */}
        <section className="product-hub-header">
          <div className="article-meta-badge" style={{ justifyContent: "center" }}>
            <span className="badge-kicker">Nông Sản OCOP Tây Ninh</span>
            <span className="badge-dot">•</span>
            <span>Chính Gốc Núi Bà Đen</span>
          </div>

          <h1 className="article-title">
            Danh Mục Sản Phẩm <em>Mãng Cầu Bà Đen</em>
          </h1>

          <p>
            Tuyển chọn những trái mãng cầu ta ngon nhất dưới chân Núi Bà Đen Tây Ninh, canh tác an toàn theo quy trình VietGAP, bao trái 100% trên cành, giữ trọn vị ngọt thanh, dẻo dai và thơm ngát.
          </p>

          <div className="product-hub-badges">
            <span className="hub-badge">✓ Chuẩn VietGAP An Toàn</span>
            <span className="hub-badge">✓ Chứng Nhận OCOP 3 Sao</span>
            <span className="hub-badge">✓ Bảo Hộ Chỉ Dẫn Địa Lý</span>
            <span className="hub-badge">✓ Giao Nhanh Toàn Quốc</span>
          </div>
        </section>

        {/* PRODUCT LIST */}
        <section className="product-list-section" aria-label="Danh sách các dòng sản phẩm">
          {products.map((item) => (
            <article className="product-item-card" key={item.id}>
              <div className="product-item-media">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="product-item-info">
                <span className="product-item-tag">{item.tag}</span>
                <h2>{item.title}</h2>
                <p className="product-item-desc">{item.desc}</p>
                <ul className="product-item-features">
                  {item.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
                <div className="product-item-actions">
                  <Link href={item.slug} className="btn-detail">
                    <span>{item.ctaText}</span>
                    <span>→</span>
                  </Link>
                  <a
                    href="https://zalo.me/0907215521"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-order-zalo"
                    aria-label={`Đặt mua ${item.title} qua Zalo`}
                  >
                    <span>Nhắn Zalo Báo Giá</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* COMPARISON TABLE */}
        <section style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 3vw, 28px)", color: "var(--ink)", marginBottom: "16px" }}>
            Bảng So Sánh Quy Cách Các Dòng Sản Phẩm
          </h2>
          <p style={{ color: "var(--ink-muted)", marginBottom: "20px", fontSize: "15px" }}>
            Tham khảo chi tiết quy cách đóng gói và mục đích sử dụng để chọn lựa sản phẩm phù hợp nhất với nhu cầu của bạn:
          </p>

          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Dòng Sản Phẩm</th>
                  <th>Mục Đích Sử Dụng</th>
                  <th>Quy Cách Đóng Gói</th>
                  <th>Đặc Điểm Trái</th>
                  <th>Chính Sách Giao</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hộp 3 Trái VIP</strong></td>
                  <td>Quà biếu VIP, đối tác, sự kiện, dâng lễ</td>
                  <td>Hộp quai xách cao cấp, ô kính trong, lót rơm & xốp lưới</td>
                  <td>Trái tuyển chọn đỉnh chóp, quả tròn đều mã sáng</td>
                  <td>Giao hỏa tốc hoặc gửi theo yêu cầu</td>
                </tr>
                <tr>
                  <td><strong>Thùng 5KG</strong></td>
                  <td>Thưởng thức gia đình, biếu người thân bạn bè</td>
                  <td>Thùng carton 5kg chuyên dụng, bọc lưới xốp từng trái</td>
                  <td>Trái già loại 1, mắt nở đều, ngọt thanh dẻo dai</td>
                  <td>Giao nhanh trong ngày hoặc gửi liên tỉnh</td>
                </tr>
                <tr>
                  <td><strong>Thùng 15KG</strong></td>
                  <td>Khách mua sỉ, đại lý trái cây sạch, tiệc lớn</td>
                  <td>Thùng carton 3-5 lớp dày dặn, lỗ thoáng khí chống hấp hơi</td>
                  <td>Trái già đều ngày, phân loại chuẩn kích cỡ</td>
                  <td>Gửi xe khách, chành xe, máy bay toàn quốc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* QUALITY COMMITMENT */}
        <section className="product-highlights">
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 3vw, 28px)", color: "var(--ink)", marginBottom: "16px" }}>
            4 Cam Kết Vàng Từ Vườn Mãng Cầu Bà Đen NABADEN
          </h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <strong>1. Bao Trái 100% Trên Cành</strong>
              <p>Trái được bao bọc an toàn từ khi còn nhỏ, cách ly côn trùng và sâu hại, không dư lượng thuốc hóa học độc hại.</p>
            </div>
            <div className="highlight-item">
              <strong>2. Thu Hoạch Đúng Độ Già</strong>
              <p>Chỉ hái những quả đã nở to mắt na vào sáng sớm, đảm bảo trái tích tụ tối đa lượng đường và chín tự nhiên chuẩn vị.</p>
            </div>
            <div className="highlight-item">
              <strong>3. Đóng Gói Chống Va Đập</strong>
              <p>Mỗi trái đều được bảo vệ bằng lưới xốp êm ái, xếp cẩn thận vào thùng carton thoáng khí giúp giữ nguyên mẫu mã đẹp.</p>
            </div>
            <div className="highlight-item">
              <strong>4. Đổi Trả & Bảo Hành 1-1</strong>
              <p>Cam kết hoàn tiền hoặc bù hàng mới nếu sản phẩm bị hư hỏng, dập nát trong quá trình vận chuyển đến tay bạn.</p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 3vw, 28px)", color: "var(--ink)", marginBottom: "20px" }}>
            Câu Hỏi Thường Gặp Khi Đặt Mua Mãng Cầu Bà Đen
          </h2>
          <div className="faq-list">
            <details>
              <summary>
                <span>Q</span>
                <span>Mãng cầu sau khi nhận hàng bao lâu thì chín ăn được?</span>
                <b>+</b>
              </summary>
              <p>
                Trái được hái khi đã già đều mắt na. Khi vận chuyển 1-2 ngày đến nơi, trái sẽ mềm tay dần và chín dẻo hoàn hảo sau 24-48 giờ ở nhiệt độ phòng thoáng mát.
              </p>
            </details>
            <details>
              <summary>
                <span>Q</span>
                <span>Tôi muốn đặt số lượng lớn gửi ra Hà Nội hoặc miền Trung được không?</span>
                <b>+</b>
              </summary>
              <p>
                Được. Nhà vườn thường xuyên gửi thùng 5kg, 15kg bằng đường hàng không hoặc xe khách liên tỉnh ra các tỉnh phía Bắc và miền Trung, đảm bảo trái tươi nguyên khi đến nơi.
              </p>
            </details>
            <details>
              <summary>
                <span>Q</span>
                <span>Làm sao để liên hệ nhận báo giá theo thời điểm tốt nhất?</span>
                <b>+</b>
              </summary>
              <p>
                Bạn có thể gọi trực tiếp Hotline 0907 215 521 hoặc nhắn tin qua Zalo 0907 215 521 để nhận hình ảnh thực tế lứa trái thu hoạch trong ngày và báo giá chuẩn vườn.
              </p>
            </details>
          </div>
        </section>

        {/* CTA BOX */}
        <section className="article-cta-box" style={{ marginTop: "40px" }}>
          <h3>Đặt mua mãng cầu Bà Đen chính gốc hôm nay</h3>
          <p>
            Liên hệ trực tiếp với vườn để kiểm tra độ già của lứa trái hôm nay, nhận hình ảnh thực tế và hỗ trợ giao nhanh toàn quốc.
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
        <nav className="article-navigation-back" aria-label="Điều hướng quay về">
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
