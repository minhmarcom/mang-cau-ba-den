import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title:
    "Thuê xe lăn Núi Bà Đen ở đâu? Hướng dẫn sử dụng dịch vụ từ A-Z | TAYNA",
  description:
    "Hướng dẫn thuê xe lăn Núi Bà Đen chi tiết: Địa điểm đăng ký miễn phí tại quầy CSKH, cách đi cáp treo cùng xe lăn, tham quan đỉnh 986m, nhà hàng buffet và gợi ý lịch trình 1 ngày an toàn cho người cao tuổi.",
  keywords: [
    "thuê xe lăn Núi Bà Đen",
    "mượn xe lăn Núi Bà Đen",
    "xe lăn đi cáp treo Núi Bà Đen",
    "dịch vụ xe lăn Sun World Bà Đen",
    "kinh nghiệm đi Núi Bà Đen cho người già",
    "du lịch Núi Bà Đen cho người cao tuổi",
    "tiện ích người khuyết tật Núi Bà Đen",
    "đặt vé cáp treo Núi Bà Đen",
    "du lịch Tây Ninh 2026",
  ],
  alternates: {
    canonical: "/thue-xe-lan-nui-ba-den/",
  },
  openGraph: {
    title:
      "Thuê xe lăn Núi Bà Đen ở đâu? Hướng dẫn sử dụng dịch vụ từ A-Z | Du Lịch Tây Ninh",
    description:
      "Cẩm nang thuê xe lăn miễn phí tại Núi Bà Đen: Hỗ trợ người cao tuổi và người khó khăn di chuyển, hướng dẫn đi cáp treo, tiếp cận đỉnh 986m và lịch trình 1 ngày trọn vẹn.",
    url: "https://mangcaubaden.vn/thue-xe-lan-nui-ba-den/",
    siteName: "TAYNA – Mãng Cầu Bà Đen",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "https://mangcaubaden.vn/vuon-nui-ba-den.jpg",
        width: 1200,
        height: 630,
        alt: "Hướng dẫn thuê xe lăn Núi Bà Đen chi tiết từ A-Z",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuê xe lăn Núi Bà Đen ở đâu? Hướng dẫn sử dụng dịch vụ từ A-Z",
    description:
      "Cẩm nang sử dụng xe lăn miễn phí tại Núi Bà Đen dành cho người cao tuổi và người khó di chuyển.",
    images: ["https://mangcaubaden.vn/vuon-nui-ba-den.jpg"],
  },
};

const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Khu du lịch quốc gia Núi Bà Đen - Dịch vụ hỗ trợ xe lăn",
  description:
    "Quần thể du lịch tâm linh Núi Bà Đen với cơ sở hạ tầng hiện đại, cung cấp dịch vụ xe lăn miễn phí hỗ trợ người cao tuổi và du khách gặp khó khăn khi di chuyển tham quan đỉnh 986m.",
  url: "https://mangcaubaden.vn/thue-xe-lan-nui-ba-den/",
  image: "https://mangcaubaden.vn/vuon-nui-ba-den.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khu phố Ninh Phú, Phường Ninh Sơn",
    addressLocality: "Thành phố Tây Ninh",
    addressRegion: "Tây Ninh",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.3789,
    longitude: 106.1683,
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Dịch vụ xe lăn miễn phí",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Lối đi hỗ trợ người khuyết tật (Wheelchair accessible)",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Hệ thống cáp treo hỗ trợ xe lăn",
      value: true,
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Thuê xe lăn Núi Bà Đen ở đâu? Hướng dẫn sử dụng dịch vụ từ A-Z",
  description:
    "Để mọi du khách đều có thể tận hưởng hành trình khám phá đỉnh núi thuận tiện hơn, thuê xe lăn Núi Bà Đen là dịch vụ được nhiều người quan tâm, đặc biệt với người cao tuổi hoặc gặp khó khăn khi di chuyển. Cùng tìm hiểu chi tiết địa điểm đăng ký, cách đi cáp treo và gợi ý lịch trình 1 ngày.",
  image: [
    "https://mangcaubaden.vn/vuon-nui-ba-den.jpg",
    "https://mangcaubaden.vn/le-phat-ram-thang-gieng-nui-ba-den.jpg",
    "https://mangcaubaden.vn/vuon-mang-cau-nui-ba-den-troi-xanh.jpg",
    "https://mangcaubaden.vn/hop-qua-mang-cau-ba-den-tayna.jpg",
  ],
  datePublished: "2026-09-17T08:00:00+07:00",
  dateModified: "2026-09-19T05:00:00+07:00",
  author: {
    "@type": "Organization",
    name: "TAYNA – Cẩm Nang Du Lịch Tây Ninh",
    url: "https://mangcaubaden.vn",
  },
  publisher: {
    "@type": "Organization",
    name: "TAYNA – Mãng Cầu Bà Đen",
    logo: {
      "@type": "ImageObject",
      url: "https://mangcaubaden.vn/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mangcaubaden.vn/thue-xe-lan-nui-ba-den/",
  },
};

const faqItems = [
  [
    "Thuê xe lăn tại Núi Bà Đen có mất phí không?",
    "Du khách được hỗ trợ mượn/sử dụng xe lăn hoàn toàn miễn phí tại Núi Bà Đen (Sun World Ba Den Mountain) nhằm hỗ trợ người cao tuổi, người khuyết tật hoặc người gặp khó khăn khi di chuyển tham quan khu du lịch.",
  ],
  [
    "Đăng ký thuê xe lăn Núi Bà Đen ở đâu?",
    "Du khách có thể đến trực tiếp Quầy Chăm sóc khách hàng (CSKH) ngay khi đến khu du lịch tại ga đi cáp treo để hỏi thông tin và làm thủ tục mượn xe, hoặc liên hệ hotline của ban quản lý Sun World để được hướng dẫn cụ thể.",
  ],
  [
    "Xe lăn có mang lên cabin cáp treo Núi Bà Đen được không?",
    "Hoàn toàn được. Hệ thống cabin cáp treo hiện đại tại Núi Bà Đen có kích thước rộng rãi, cửa cabin mở rộng và sàn phẳng ngang bằng với mặt sàn nhà ga. Đội ngũ nhân viên nhà ga luôn sẵn sàng hỗ trợ du khách đẩy xe lăn lên xuống cabin một cách an toàn và nhẹ nhàng.",
  ],
  [
    "Trên đỉnh Núi Bà Đen người đi xe lăn có tham quan thuận tiện không?",
    "Rất thuận lợi. Quảng trường đỉnh núi cao 986m có diện tích bằng phẳng, có dốc thoai thoải (ramp) và thang máy nối các tầng tham quan, giúp du khách dễ dàng chiêm bái Tượng Phật Bà Tây Bổ Đà Sơn, Tượng Di Lặc, Vườn Ưu Đàm và dùng bữa tại các nhà hàng.",
  ],
  [
    "Đi cùng người sử dụng xe lăn nên ăn uống ở đâu trên đỉnh núi?",
    "Nhà hàng buffet Vân Sơn và Sol Kitchen trên đỉnh núi là những lựa chọn thuận tiện nhất với lối đi rộng rãi không vật cản, thực đơn đa dạng phong phú cho cả gia đình, có ghế ngồi nghỉ ngơi thoải mái ngắm toàn cảnh mây trời Tây Ninh.",
  ],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
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
      name: "Cẩm nang Du lịch Tây Ninh",
      item: "https://mangcaubaden.vn/du-lich/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Thuê xe lăn Núi Bà Đen",
      item: "https://mangcaubaden.vn/thue-xe-lan-nui-ba-den/",
    },
  ],
};

const sunworldBookingUrl = "https://tayninh.lnm.vn";

export default function WheelchairGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HEADER */}
      <header className="site-header" role="banner">
        <Link className="brand" href="/" aria-label="Mãng Cầu Bà Đen - Trang chủ">
          <img
            src="/logo.png"
            alt="TAYNA Mãng Cầu Bà Đen"
            className="brand-logo-img"
            width="42"
            height="42"
          />
          <span className="brand-divider" aria-hidden="true">
            |
          </span>
          <span className="brand-text">
            TAYNA - Mãng Cầu
            <br />
            Bà Đen
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <Link href="/">Trang chủ</Link>
          <Link href="/san-pham">Sản phẩm</Link>
          <Link href="/du-lich" className="active" style={{ color: "#2d6a3f", fontWeight: 700 }}>
            Du lịch Tây Ninh
          </Link>
          <Link href="/tin-tuc">Tin tức &amp; Cẩm nang</Link>
          <Link href="/hop-tac">Hợp tác</Link>
          <Link href="/#lien-he">Liên hệ</Link>
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="tel:0907215521">
            <span>0907 215 521</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>
      </header>

      <main className="news-article-system article-main">
        {/* BREADCRUMB */}
        <div className="article-breadcrumb-bar">
          <div className="article-container">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/">Trang chủ</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/du-lich">Cẩm nang Du lịch Tây Ninh</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">
                Thuê xe lăn Núi Bà Đen
              </span>
            </nav>
          </div>
        </div>

        <article className="article-layout">
          {/* ARTICLE HEADER */}
          <header className="article-header">
            <div className="article-container">
              <div className="article-meta-top">
                <span className="article-kicker-badge">
                  Cẩm nang du lịch • Tiện ích Núi Bà
                </span>
                <span className="article-read-time">⏱ 6 phút đọc</span>
                <span className="article-pub-date">📅 17/09/2026</span>
              </div>

              <h1 className="article-title">
                Thuê xe lăn Núi Bà Đen ở đâu?{" "}
                <em>Hướng dẫn sử dụng dịch vụ từ A-Z</em>
              </h1>

              <p className="article-lead">
                Để mọi du khách đều có thể tận hưởng hành trình khám phá đỉnh núi thuận tiện hơn, thuê xe lăn Núi Bà Đen là dịch vụ được nhiều người quan tâm, đặc biệt với người cao tuổi hoặc gặp khó khăn khi di chuyển. Vậy đăng ký ở đâu, sử dụng như thế nào và cần lưu ý những gì? Cùng tìm hiểu chi tiết trong bài viết dưới đây để chuẩn bị cho chuyến đi trọn vẹn hơn.
              </p>
            </div>
          </header>

          {/* MAIN HERO IMAGE */}
          <div className="article-hero-media">
            <div className="article-container">
              <figure className="article-figure-main">
                <img
                  src="/vuon-nui-ba-den.jpg"
                  alt="Dịch vụ hỗ trợ du khách và cơ sở hạ tầng tham quan hiện đại tại Núi Bà Đen Tây Ninh"
                  className="article-img"
                  width="1200"
                  height="630"
                  style={{ maxHeight: "580px", objectFit: "cover" }}
                />
                <figcaption className="article-figcaption">
                  Khu du lịch Núi Bà Đen được đầu tư hạ tầng hiện đại, thân thiện và hỗ trợ chu đáo cho người cao tuổi và người khó khăn khi di chuyển.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* ARTICLE BODY CONTENT */}
          <div className="article-body">
            <div className="article-container article-prose">
              {/* TABLE OF CONTENTS */}
              <div className="article-toc" id="toc">
                <p className="toc-title">Mục lục bài viết</p>
                <ol>
                  <li>
                    <a href="#dich-vu-thue-xe-lan">1. Dịch vụ thuê xe lăn tại Núi Bà Đen</a>
                  </li>
                  <li>
                    <a href="#trai-nghiem-thuan-tien">2. Trải nghiệm Núi Bà Đen trọn vẹn và thuận tiện</a>
                    <ol>
                      <li><a href="#di-chuyen-cap-treo">2.1. Di chuyển thuận tiện bằng cáp treo</a></li>
                      <li><a href="#quan-the-tam-linh">2.2. Tham quan quần thể tâm linh và các điểm check-in</a></li>
                      <li><a href="#nghi-ngoi-tien-ich">2.3. Nghỉ ngơi và sử dụng tiện ích trên đỉnh núi</a></li>
                    </ol>
                  </li>
                  <li>
                    <a href="#kinh-nghiem-su-dung">3. Kinh nghiệm sử dụng xe lăn khi tham quan Núi Bà Đen</a>
                    <ol>
                      <li><a href="#sap-xep-lich-trinh">3.1. Sắp xếp lịch trình hợp lý để tham quan thuận tiện hơn</a></li>
                      <li><a href="#chuan-bi-ky">3.2. Chuẩn bị kỹ để hành trình thêm thoải mái</a></li>
                    </ol>
                  </li>
                  <li>
                    <a href="#goi-y-lich-trinh">4. Gợi ý lịch trình 1 ngày khám phá Núi Bà Đen cùng người sử dụng xe lăn</a>
                  </li>
                  <li>
                    <a href="#dac-san-lam-qua">5. Đặc sản Mãng Cầu Bà Đen TAYNA làm quà ý nghĩa</a>
                  </li>
                  <li>
                    <a href="#faq">6. Câu hỏi thường gặp (FAQ)</a>
                  </li>
                </ol>
              </div>

              {/* SECTION 1 */}
              <h2 id="dich-vu-thue-xe-lan">1. Dịch vụ thuê xe lăn tại Núi Bà Đen</h2>
              <p>
                Du khách đi cùng người cao tuổi hoặc người gặp khó khăn khi di chuyển có thể <strong>sử dụng xe lăn miễn phí tại Núi Bà Đen</strong>. Dịch vụ này giúp việc tham quan trở nên thuận tiện hơn, đặc biệt với những du khách cần hỗ trợ trong quá trình di chuyển giữa các khu vực trong khu du lịch.
              </p>
              <p>
                Để sử dụng dịch vụ thuê xe lăn Núi Bà Đen, du khách có thể đến <strong>quầy Chăm sóc khách hàng</strong> để hỏi thông tin ngay khi đến khu du lịch (tại khu vực ga đi cáp treo dưới chân núi). Nhân viên sẽ cung cấp thông tin cần thiết và hướng dẫn du khách về quy trình sử dụng xe lăn.
              </p>
              <p>
                Chủ động liên hệ quầy Chăm sóc khách hàng từ đầu hành trình giúp du khách dễ dàng sắp xếp lịch trình, kết hợp tham quan các điểm đến và sử dụng hệ thống cáp treo phù hợp. Nhờ đó, người sử dụng xe lăn cùng gia đình có thể hoàn toàn an tâm tận hưởng trọn vẹn hành trình khám phá Núi Bà Đen.
              </p>

              <figure className="article-figure-inline">
                <img
                  src="/vuon-mang-cau-nui-ba-den-troi-xanh.jpg"
                  alt="Không gian thoáng đãng dưới chân Núi Bà Đen Tây Ninh"
                  loading="lazy"
                  style={{ maxHeight: "500px", objectFit: "cover", width: "100%", borderRadius: "16px" }}
                />
                <figcaption>
                  Du khách liên hệ hotline hoặc quầy Chăm sóc khách hàng Sun World Ba Den Mountain để cập nhật thông tin thuê xe lăn cụ thể. (Nguồn: Sưu tầm)
                </figcaption>
              </figure>

              {/* SECTION 2 */}
              <h2 id="trai-nghiem-thuan-tien">2. Trải nghiệm Núi Bà Đen trọn vẹn và thuận tiện</h2>

              <h3 id="di-chuyen-cap-treo">2.1. Di chuyển thuận tiện bằng cáp treo</h3>
              <p>
                Sau khi hoàn tất thủ tục thuê xe lăn Núi Bà Đen, du khách có thể bắt đầu hành trình tại khu vực ga cáp treo. Hệ thống cáp treo hiện đại giúp rút ngắn thời gian di chuyển lên đỉnh núi, đồng thời giảm đáng kể quãng đường phải đi bộ, đặc biệt phù hợp với người cao tuổi hoặc người gặp khó khăn khi di chuyển.
              </p>
              <p>
                Tại nhà ga, đội ngũ nhân viên luôn sẵn sàng hướng dẫn và hỗ trợ đưa xe lăn lên xuống cabin khi cần thiết, giúp quá trình di chuyển diễn ra hết sức thuận lợi và an toàn. Nhờ kết hợp xe lăn và cáp treo, du khách có thể tiết kiệm sức lực, giữ thể trạng thoải mái để dành nhiều thời gian khám phá các công trình tâm linh, ngắm cảnh và tận hưởng không gian thoáng mát trên đỉnh Núi Bà Đen.
              </p>

              {/* BOOKING CABLE CAR CTA */}
              <div
                style={{
                  background: "linear-gradient(135deg, #eef9f1 0%, #e0f2e5 100%)",
                  border: "2px solid #2d6a3f",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  margin: "28px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.6rem" }}>🚡</span>
                  <h4 style={{ margin: 0, color: "#1b4332", fontSize: "1.2rem", fontWeight: 800 }}>
                    Đặt Vé Cáp Treo Sun World Núi Bà Đen Trực Tuyến
                  </h4>
                </div>
                <p style={{ margin: 0, color: "#2d6a3f", fontSize: "14px", lineHeight: 1.6 }}>
                  Để chuyến đi của gia đình và người lớn tuổi diễn ra thuận lợi, không phải xếp hàng chờ đợi lâu tại quầy vé giờ cao điểm, du khách nên đặt trước vé combo cáp treo trực tiếp qua cổng trực tuyến chính thức của Sun World:
                </p>
                <div>
                  <a
                    href={sunworldBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#2d6a3f",
                      color: "#ffffff",
                      padding: "12px 24px",
                      borderRadius: "999px",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(45,106,63,0.35)",
                    }}
                  >
                    <span>Đặt Vé Cáp Treo Sun World Nhận Ưu Đãi</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <h3 id="quan-the-tam-linh">2.2. Tham quan quần thể tâm linh và các điểm check-in</h3>
              <p>
                Lên đến đỉnh Núi Bà Đen ở độ cao 986 m, du khách sẽ có nhiều thời gian hơn để cảm nhận không gian tâm linh thanh tịnh và khám phá những công trình biểu tượng của khu du lịch. Việc kết hợp cáp treo cùng xe lăn giúp hành trình diễn ra nhẹ nhàng, để mỗi điểm dừng đều là cơ hội chiêm bái, ngắm cảnh và lưu giữ những khoảnh khắc đáng nhớ cùng người thân yêu.
              </p>
              <p>
                Từ khu vực quảng trường bằng phẳng, du khách có thể dễ dàng chiêm bái:
              </p>
              <ul>
                <li>
                  <strong>Tượng Phật Bà Tây Bổ Đà Sơn cao 72 m:</strong> Được đúc từ 170 tấn đồng đỏ tinh xảo, xác lập kỷ lục Tượng Phật Bà bằng đồng cao nhất châu Á tọa lạc trên đỉnh núi.
                </li>
                <li>
                  <strong>Trụ kinh Bát Nhã:</strong> Được khắc tinh tế ngay dưới chân tượng Phật Bà trong không gian trang nghiêm, thanh tịnh.
                </li>
                <li>
                  <strong>Tượng Phật Di Lặc cao 36 m:</strong> Nổi bật với nụ cười hoan hỷ, an lạc, được ghép từ hàng ngàn phiến đá sa thạch tự nhiên.
                </li>
                <li>
                  <strong>Vườn Ưu Đàm thanh tịnh:</strong> Nơi an vị tôn tượng Phật Câu Na Hàm Mâu Ni trên đài sen giữa mặt hồ nước trong lành.
                </li>
                <li>
                  <strong>Chùa Linh Sơn Tiên Thạch (Chùa Bà):</strong> Với lịch sử gần 300 năm ở lưng chừng núi, nếu còn thời gian du khách có thể kết hợp tuyến cáp treo Chùa Hang để tìm hiểu văn hóa tín ngưỡng gắn liền với ngọn núi thiêng.
                </li>
              </ul>

              <figure className="article-figure-inline">
                <img
                  src="/le-phat-ram-thang-gieng-nui-ba-den.jpg"
                  alt="Du khách tham quan chiêm bái các tôn tượng Phật trên đỉnh Núi Bà Đen"
                  loading="lazy"
                  style={{ maxHeight: "500px", objectFit: "cover", width: "100%", borderRadius: "16px" }}
                />
                <figcaption>
                  Du khách tham quan, chiêm bái các tôn tượng Phật uy nghiêm trên đỉnh Núi Bà Đen. (Nguồn: Sưu tầm)
                </figcaption>
              </figure>

              <p>
                Đối với du khách sử dụng dịch vụ thuê xe lăn Núi Bà Đen, việc lựa chọn tham quan tuần tự theo từng khu vực và kết hợp nghỉ chân giữa các điểm sẽ giúp hành trình vô cùng thoải mái. Nhờ đó, mọi thành viên trong đoàn đều có thể tận hưởng trọn vẹn vẻ đẹp của quần thể tâm linh mà không phải quá bận tâm đến vấn đề đi lại.
              </p>

              <h3 id="nghi-ngoi-tien-ich">2.3. Nghỉ ngơi và sử dụng tiện ích trên đỉnh núi</h3>
              <p>
                Sau khi tham quan các công trình tâm linh, du khách có thể nghỉ chân tại quảng trường hoặc các khu vực bố trí ghế ngồi râm mát trên đỉnh núi trước khi tiếp tục hành trình.
              </p>
              <p>
                Nếu muốn dùng bữa, <strong>nhà hàng buffet Vân Sơn</strong> và <strong>Sol Kitchen</strong> là những lựa chọn hết sức thuận tiện với thực đơn đa dạng hàng trăm món phong phú, phù hợp cho nhiều nhóm khách và người lớn tuổi. Bên cạnh đó, hệ thống nhà vệ sinh sạch sẽ đạt chuẩn và các tiện ích phục vụ du khách được bố trí rộng rãi tại nhiều vị trí, có lối tiếp cận riêng biệt, giúp quá trình tham quan diễn ra êm đẹp.
              </p>

              {/* SECTION 3 */}
              <h2 id="kinh-nghiem-su-dung">3. Kinh nghiệm sử dụng xe lăn khi tham quan Núi Bà Đen</h2>

              <h3 id="sap-xep-lich-trinh">3.1. Sắp xếp lịch trình hợp lý để tham quan thuận tiện hơn</h3>
              <p>
                Để hành trình khám phá Núi Bà Đen diễn ra êm ả, du khách nên lên kế hoạch tham quan ngay từ trước chuyến đi:
              </p>
              <ul>
                <li>
                  <strong>Khởi hành từ sáng sớm:</strong> Nên bắt đầu hành trình vào buổi sáng hoặc những khung giờ ít đông khách để việc lên xuống cáp treo và di chuyển trong khu du lịch diễn ra nhẹ nhàng, không phải chen lấn.
                </li>
                <li>
                  <strong>Ưu tiên kết hợp cáp treo với xe lăn:</strong> Cách này giúp tiết kiệm tối đa thời gian và thể lực, tránh phải di chuyển qua lại nhiều lần giữa các tầng bậc thang.
                </li>
                <li>
                  <strong>Tham quan theo tuyến cụm:</strong> Khám phá trọn vẹn cụm đỉnh núi trước (Tượng Phật Bà, Di Lặc, Vườn Ưu Đàm), sau đó mới di chuyển đến các khu vực khác.
                </li>
              </ul>

              <h3 id="chuan-bi-ky">3.2. Chuẩn bị kỹ để hành trình thêm thoải mái</h3>
              <p>
                Bên cạnh việc sắp xếp lịch trình, một vài lưu ý chuẩn bị nhỏ trước chuyến đi sẽ giúp cả gia đình an tâm:
              </p>
              <ol>
                <li>
                  <strong>Luôn có người thân đồng hành:</strong> Nếu đi cùng người cao tuổi hoặc người cần hỗ trợ, du khách nên có ít nhất 1-2 thành viên đi kèm để hỗ trợ đẩy xe và trông nom đồ đạc.
                </li>
                <li>
                  <strong>Liên hệ trước với khu du lịch:</strong> Trước ngày khởi hành, có thể liên hệ với ban quản lý Sun World Ba Den Mountain để cập nhật thông tin dịch vụ hỗ trợ mới nhất, đồng thời chủ động trao đổi với nhân viên tại ga cáp treo khi cần trợ giúp.
                </li>
                <li>
                  <strong>Vật dụng cá nhân cần thiết:</strong> Chuẩn bị đầy đủ nước uống, thuốc men cá nhân thường dùng, mũ nón rộng vành, ô che nắng mưa hoặc áo khoác mỏng vì nhiệt độ trên đỉnh núi thường thấp hơn dưới đồng bằng từ 3 - 5 độ C.
                </li>
                <li>
                  <strong>Trang phục và giày dép:</strong> Người đồng hành nên mang giày chống trượt êm chân, trang phục nhã nhặn phù hợp nơi thờ tự tâm linh.
                </li>
              </ol>

              {/* SECTION 4 */}
              <h2 id="goi-y-lich-trinh">4. Gợi ý lịch trình 1 ngày khám phá Núi Bà Đen cùng người sử dụng xe lăn</h2>
              <p>
                Dưới đây là lịch trình tham quan mẫu 1 ngày được thiết kế khoa học, thư thả dành cho gia đình có người lớn tuổi hoặc người dùng xe lăn:
              </p>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                  margin: "20px 0",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ marginBottom: "18px" }}>
                  <span style={{ background: "#e8f5e9", color: "#2d6a3f", padding: "4px 10px", borderRadius: "6px", fontWeight: 700, fontSize: "12px" }}>
                    BUỔI SÁNG (07:30 – 11:30)
                  </span>
                  <h4 style={{ margin: "8px 0 6px 0", color: "#111827", fontSize: "1.1rem" }}>
                    Khởi hành, mượn xe lăn &amp; Chinh phục đỉnh 986 m
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#4b5563", fontSize: "14px", lineHeight: 1.6 }}>
                    <li><strong>07:30 – 08:30:</strong> Đến Khu du lịch Núi Bà Đen. Vào quầy Chăm sóc khách hàng để làm thủ tục mượn xe lăn miễn phí.</li>
                    <li><strong>08:30 – 09:00:</strong> Di chuyển lên cáp treo tuyến đỉnh Vân Sơn. Nhân viên hỗ trợ đẩy xe lăn vào cabin an toàn.</li>
                    <li><strong>09:00 – 11:30:</strong> Chiêm bái Tượng Phật Bà Tây Bổ Đà Sơn, dạo quanh quảng trường mây ngắm cảnh đồng bằng Tây Ninh, viếng Trụ kinh Bát Nhã, đảnh lễ Tượng Phật Di Lặc sa thạch và Vườn Ưu Đàm.</li>
                  </ul>
                </div>

                <hr style={{ border: "none", borderTop: "1px dashed #e5e7eb", margin: "16px 0" }} />

                <div style={{ marginBottom: "18px" }}>
                  <span style={{ background: "#fff3cd", color: "#856404", padding: "4px 10px", borderRadius: "6px", fontWeight: 700, fontSize: "12px" }}>
                    BUỔI TRƯA (11:30 – 13:30)
                  </span>
                  <h4 style={{ margin: "8px 0 6px 0", color: "#111827", fontSize: "1.1rem" }}>
                    Thưởng thức ẩm thực buffet &amp; Nghỉ ngơi thư giãn
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#4b5563", fontSize: "14px", lineHeight: 1.6 }}>
                    <li><strong>11:30 – 13:00:</strong> Dùng bữa trưa tại nhà hàng buffet Vân Sơn hoặc Sol Kitchen ngay trên đỉnh núi. Không gian rộng rãi, thoáng mát, lối đi bằng phẳng lý tưởng cho xe lăn.</li>
                    <li><strong>13:00 – 13:30:</strong> Nghỉ ngơi tại sảnh nhà ga có điều hòa hoặc khu vực ghế nghỉ có mái che để phục hồi thể lực.</li>
                  </ul>
                </div>

                <hr style={{ border: "none", borderTop: "1px dashed #e5e7eb", margin: "16px 0" }} />

                <div>
                  <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "4px 10px", borderRadius: "6px", fontWeight: 700, fontSize: "12px" }}>
                    BUỔI CHIỀU (13:30 – 16:30)
                  </span>
                  <h4 style={{ margin: "8px 0 6px 0", color: "#111827", fontSize: "1.1rem" }}>
                    Viếng Chùa Bà hoặc xuống núi &amp; Mua đặc sản Mãng Cầu TAYNA
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#4b5563", fontSize: "14px", lineHeight: 1.6 }}>
                    <li><strong>13:30 – 15:00:</strong> Đi tuyến cáp nối Tâm An xuống viếng Chùa Bà (Linh Sơn Tiên Thạch Tự) và Điện Bà (nếu thể trạng cho phép), hoặc đi cáp treo thẳng về chân núi.</li>
                    <li><strong>15:00 – 15:30:</strong> Hoàn trả xe lăn tại quầy CSKH với sự hỗ trợ của nhân viên.</li>
                    <li><strong>15:30 – 16:30:</strong> Ghé vùng trồng chân núi mua <strong>Mãng Cầu Bà Đen TAYNA</strong> chính gốc đóng hộp làm quà biếu gia đình và người thân.</li>
                  </ul>
                </div>
              </div>

              {/* SECTION 5 */}
              <h2 id="dac-san-lam-qua">5. Đặc sản Mãng Cầu Bà Đen TAYNA làm quà ý nghĩa</h2>
              <p>
                Sau chuyến hành hương và tham quan Núi Bà Đen trọn vẹn, không món quà nào ý nghĩa và đậm đà bản sắc địa phương hơn những trái <strong>Mãng Cầu Bà Đen Tây Ninh</strong> tươi ngon, ngọt thanh, dẻo dai.
              </p>

              <figure className="article-figure-inline">
                <img
                  src="/hop-qua-mang-cau-ba-den-tayna.jpg"
                  alt="Hộp quà 3 Trái VIP Mãng Cầu Bà Đen TAYNA thích hợp dâng lễ và làm quà"
                  loading="lazy"
                  style={{ maxHeight: "520px", objectFit: "cover", width: "100%", borderRadius: "16px" }}
                />
                <figcaption>
                  Hộp quà 3 Trái VIP Mãng Cầu Bà Đen TAYNA – thiết kế quai xách chỉn chu, trái tuyển chọn chuẩn dâng cúng Chùa Bà và biếu tặng người thân.
                </figcaption>
              </figure>

              {/* TAYNA CALLOUT BOX */}
              <div className="article-callout-box">
                <div className="callout-badge">🌿 ĐẶC SẢN NÚI BÀ ĐEN LÀM QUÀ</div>
                <h3>Đặt Mãng Cầu Bà Đen TAYNA – Trái Tuyển Chọn Vùng Trồng Chân Núi</h3>
                <p>
                  Nhà vườn <strong>TAYNA</strong> mang đến những trái mãng cầu chuẩn giống địa phương, được chăm sóc tỉ mỉ dưới chân Núi Bà Đen:
                </p>
                <ul>
                  <li><strong>Hái mới mỗi ngày:</strong> Trái già đều, mắt nở căng phẳng, độ ngọt thanh mát tự nhiên.</li>
                  <li><strong>Hộp quà 3 trái VIP sang trọng:</strong> Quai xách cứng cáp, lót rơm xốp cao cấp, thuận tiện mang lên xe hoặc xách tay dâng lễ.</li>
                  <li><strong>Thùng 5kg &amp; 15kg vận chuyển toàn quốc:</strong> Bọc lưới xốp từng trái chống va đập, bảo hành chất lượng tận tay khách hàng.</li>
                </ul>
                <div className="callout-actions">
                  <Link href="/san-pham/hop-mang-cau-ba-den-3-trai-vip" className="callout-btn primary">
                    Xem Hộp 3 Trái VIP ➔
                  </Link>
                  <a href="tel:0907215521" className="callout-btn secondary">
                    Hotline: 0907 215 521
                  </a>
                </div>
              </div>

              <p>
                Thuê xe lăn Núi Bà Đen là giải pháp hỗ trợ thiết thực giúp người cao tuổi, người khuyết tật và du khách gặp khó khăn khi di chuyển có một hành trình tham quan nhẹ nhàng, thoải mái. Chủ động tìm hiểu thông tin dịch vụ, liên hệ trước với khu du lịch và sắp xếp lịch trình phù hợp sẽ giúp việc khám phá các công trình tâm linh, ngắm cảnh và sử dụng tiện ích trên đỉnh núi diễn ra thuận tiện. Nhờ đó, mỗi chuyến đi đều trở nên trọn vẹn và ý nghĩa hơn đối với mọi thành viên trong đoàn!
              </p>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="article-container" id="faq">
            <section className="article-faq-section" aria-label="Câu hỏi thường gặp về thuê xe lăn Núi Bà Đen">
              <div className="faq-header">
                <span className="faq-kicker">Giải đáp thắc mắc</span>
                <h2 className="faq-title">
                  Câu hỏi thường gặp về dịch vụ xe lăn Núi Bà Đen
                </h2>
              </div>

              <div className="faq-accordion">
                {faqItems.map(([question, answer], idx) => (
                  <details className="faq-item" key={idx} open={idx === 0}>
                    <summary className="faq-question">
                      <span>{question}</span>
                      <b aria-hidden="true">＋</b>
                    </summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* RELATED ARTICLES SECTION */}
          <section
            className="article-related-section"
            aria-label="Cẩm nang du lịch cùng chuyên mục"
          >
            <div className="article-container">
              <div className="related-section-header">
                <span className="related-section-kicker">Góc đọc thêm</span>
                <h2 className="related-section-title">Cẩm nang Du lịch Tây Ninh liên quan</h2>
              </div>

              <div className="related-articles-grid">
                <Link
                  href="/kinh-nghiem-hanh-huong-nui-ba-den/"
                  className="related-article-card"
                >
                  <div className="related-card-thumb">
                    <img
                      src="/le-phat-ram-thang-gieng-nui-ba-den.jpg"
                      alt="Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa"
                      loading="lazy"
                    />
                    <span className="related-thumb-tag">Hành hương Núi Bà</span>
                  </div>
                  <div className="related-card-body">
                    <div className="related-card-meta">
                      <span>9 phút đọc</span>
                      <span>•</span>
                      <time>10/09/2026</time>
                    </div>
                    <h3 className="related-card-title">
                      Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa
                    </h3>
                    <p className="related-card-desc">
                      Tổng hợp kinh nghiệm chiêm bái Chùa Bà, Điện Linh Sơn Thánh Mẫu và cụm tượng Phật trên đỉnh cao 986m.
                    </p>
                    <span className="related-card-link">
                      Đọc bài viết <span>→</span>
                    </span>
                  </div>
                </Link>

                <Link
                  href="/di-tay-ninh-mua-mang-cau-ba-den-o-dau/"
                  className="related-article-card"
                >
                  <div className="related-card-thumb">
                    <img
                      src="/thuc-te-mang-cau-tuoi.jpg"
                      alt="Đi Tây Ninh mua Mãng Cầu Bà Đen ở đâu?"
                      loading="lazy"
                    />
                    <span className="related-thumb-tag">Kinh nghiệm du lịch</span>
                  </div>
                  <div className="related-card-body">
                    <div className="related-card-meta">
                      <span>5 phút đọc</span>
                      <span>•</span>
                      <time>Tháng 8/2026</time>
                    </div>
                    <h3 className="related-card-title">
                      Đi Tây Ninh mua Mãng Cầu Bà Đen ở đâu? Kinh nghiệm chọn mua ngon, chuẩn
                    </h3>
                    <p className="related-card-desc">
                      Khám phá kinh nghiệm chọn mãng cầu ngon mua làm quà du lịch Tây Ninh, cách bảo quản và địa chỉ vườn uy tín.
                    </p>
                    <span className="related-card-link">
                      Đọc bài viết <span>→</span>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="related-bottom-nav">
                <Link href="/du-lich" className="nav-pill-btn">
                  ← Về chuyên mục Du lịch Tây Ninh
                </Link>
                <Link href="/" className="nav-pill-btn secondary">
                  ← Về trang chủ
                </Link>
              </div>
            </div>
          </section>
        </article>

        {/* FOOTER */}
        <Footer
          backLink={{
            href: "/du-lich",
            label: "Quay về Cẩm nang Du lịch Tây Ninh",
          }}
        />
      </main>
    </>
  );
}
