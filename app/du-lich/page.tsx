import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Cẩm Nang Du Lịch Tây Ninh 2026: Điểm Đến, Hành Hương & Đặc Sản | TAYNA",
  description:
    "Tổng hợp kinh nghiệm du lịch Tây Ninh chi tiết: Cẩm nang hành hương Núi Bà Đen, vé cáp treo Sun World, Toà Thánh Tây Ninh, Ma Thiên Lãnh và địa chỉ mua Mãng Cầu Bà Đen chính gốc làm quà.",
  keywords: [
    "du lịch Tây Ninh",
    "cẩm nang du lịch Tây Ninh",
    "kinh nghiệm đi Núi Bà Đen",
    "hành hương Núi Bà Đen",
    "địa điểm du lịch Tây Ninh",
    "đặc sản Tây Ninh làm quà",
    "mãng cầu Bà Đen Tây Ninh",
    "vé cáp treo Núi Bà Đen",
    "du lịch tâm linh Tây Ninh",
  ],
  alternates: {
    canonical: "/du-lich/",
  },
  openGraph: {
    title:
      "Cẩm Nang Du Lịch Tây Ninh 2026: Điểm Đến, Hành Hương & Đặc Sản | TAYNA",
    description:
      "Khám phá Tây Ninh trọn vẹn: Hành hương Núi Bà Đen, viếng Chùa Bà, chiêm ngưỡng tượng Phật Bà 72m, ẩm thực chay và đặc sản Mãng Cầu Bà Đen ngọt thơm.",
    url: "https://mangcaubaden.vn/du-lich/",
    siteName: "TAYNA – Mãng Cầu Bà Đen",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://mangcaubaden.vn/vuon-mang-cau-nui-ba-den-troi-xanh.jpg",
        width: 1200,
        height: 630,
        alt: "Cẩm nang Du lịch Tây Ninh và Hành hương Núi Bà Đen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cẩm Nang Du Lịch Tây Ninh 2026: Điểm Đến, Hành Hương & Đặc Sản",
    description:
      "Tổng hợp cẩm nang du lịch và kinh nghiệm hành hương Núi Bà Đen Tây Ninh chi tiết nhất.",
    images: ["https://mangcaubaden.vn/vuon-mang-cau-nui-ba-den-troi-xanh.jpg"],
  },
};

const travelCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cẩm Nang Du Lịch Tây Ninh & Kinh Nghiệm Hành Hương",
  description:
    "Chuyên mục giới thiệu cẩm nang du lịch, hướng dẫn điểm đến, kinh nghiệm hành hương Núi Bà Đen và mua đặc sản Mãng Cầu Bà Đen Tây Ninh.",
  url: "https://mangcaubaden.vn/du-lich/",
  publisher: {
    "@type": "Organization",
    name: "TAYNA – Mãng Cầu Bà Đen",
    logo: {
      "@type": "ImageObject",
      url: "https://mangcaubaden.vn/logo.png",
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
      item: "https://mangcaubaden.vn/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Du lịch Tây Ninh",
      item: "https://mangcaubaden.vn/du-lich/",
    },
  ],
};

const travelArticles = [
  {
    slug: "/thue-xe-lan-nui-ba-den",
    title: "Thuê xe lăn Núi Bà Đen ở đâu? Hướng dẫn sử dụng dịch vụ từ A-Z",
    badge: "Tiện ích du khách",
    image: "/vuon-nui-ba-den.jpg",
    readTime: "6 phút đọc",
    date: "17/09/2026",
    description:
      "Hướng dẫn sử dụng xe lăn miễn phí tại Núi Bà Đen: Đăng ký tại quầy CSKH, đi cáp treo an toàn, tham quan đỉnh 986m và gợi ý lịch trình 1 ngày.",
  },
  {
    slug: "/kinh-nghiem-hanh-huong-nui-ba-den",
    title: "Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa",
    badge: "Tiêu điểm tâm linh",
    image: "/le-phat-ram-thang-gieng-nui-ba-den.jpg",
    readTime: "9 phút đọc",
    date: "10/09/2026",
    description:
      "Chi tiết lộ trình chiêm bái từ Chùa Trung, Chùa Bà, Điện Linh Sơn Thánh Mẫu đến cụm tượng Phật Bà Tây Bổ Đà Sơn và Tượng Di Lặc trên đỉnh 986m.",
  },
  {
    slug: "/di-tay-ninh-mua-mang-cau-ba-den-o-dau",
    title: "Đi Tây Ninh mua Mãng Cầu Bà Đen ở đâu? Kinh nghiệm chọn mua ngon, chuẩn",
    badge: "Đặc sản làm quà",
    image: "/thuc-te-mang-cau-tuoi.jpg",
    readTime: "5 phút đọc",
    date: "Tháng 8/2026",
    description:
      "Bí quyết chọn mua mãng cầu chín già ngon, chuẩn nguồn gốc Tây Ninh, cách nhận biết độ già và địa chỉ nhà vườn uy tín chân núi.",
  },
  {
    slug: "/mang-cau-ba-den-le-hoi-nong-san-ocop-2026",
    title: "Mãng cầu Bà Đen dự Lễ hội nông sản đặc trưng và sản phẩm OCOP 2026 tại Núi Bà Đen",
    badge: "Sự kiện & Lễ hội",
    image: "/le-hoi-nong-san-ocop-tay-ninh-2026.jpg",
    readTime: "7 phút đọc",
    date: "Tháng 9/2026",
    description:
      "Sự kiện nông sản OCOP lớn nhất năm 2026 quy tụ 244 gian hàng tiêu chuẩn tại KDL Quốc gia Núi Bà Đen từ ngày 22 - 26/09/2026.",
  },
  {
    slug: "/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den",
    title: "Các dịp lễ lớn cúng trong năm của người Việt và ý nghĩa của mãng cầu Bà Đen",
    badge: "Văn hóa dâng lễ",
    image: "/cung-le-trai-cay-mang-cau-ba-den.jpg",
    readTime: "7 phút đọc",
    date: "Tháng 8/2026",
    description:
      "Tìm hiểu ý nghĩa dâng cúng Mãng Cầu Bà Đen trên mâm ngũ quả ngày Tết, Rằm tháng Giêng, Lễ Vía Bà và các dịp đại lễ cầu bình an.",
  },
  {
    slug: "/mua-mang-cau-ba-den-thang-may",
    title: "Mùa Mãng Cầu Bà Đen tháng mấy? Mùa thu hoạch mãng cầu Tây Ninh",
    badge: "Mùa vụ thu hoạch",
    image: "/vuon-mang-cau-tay-ninh-bao-trai.jpg",
    readTime: "5 phút đọc",
    date: "Tháng 8/2026",
    description:
      "Kinh nghiệm đi du lịch Tây Ninh đúng mùa mãng cầu ngon nhất: Mùa chính vụ tự nhiên và kỹ thuật rải vụ nghịch phục vụ quanh năm.",
  },
  {
    slug: "/mang-cau-ba-den-dac-san-tay-ninh",
    title: "Mãng Cầu Bà Đen – Đặc Sản Nổi Tiếng Của Tây Ninh",
    badge: "Sản vật địa phương",
    image: "/hai-trieu-trai-mang-cau-chin.jpg",
    readTime: "4 phút đọc",
    date: "Tháng 8/2026",
    description:
      "Khám phá vì sao mãng cầu trồng dưới chân Núi Bà Đen lại có hương vị dẻo dai, ngọt thanh mát và được bảo hộ chỉ dẫn địa lý quốc gia.",
  },
];

const destinations = [
  {
    name: "Quần thể Núi Bà Đen (986 m)",
    desc: "Nóc nhà Nam Bộ với Chùa Bà 300 năm tuổi, tượng Phật Bà Tây Bổ Đà Sơn bằng đồng cao 72m và tượng Di Lặc sa thạch lớn hàng đầu thế giới.",
    tag: "Tâm linh & Cảnh quan",
    icon: "⛰️",
  },
  {
    name: "Toà Thánh Tây Ninh",
    desc: "Thánh địa Đạo Cao Đài với kiến trúc nguy nga, rực rỡ và các nghi lễ tế tự trang nghiêm diễn ra vào 12h trưa mỗi ngày.",
    tag: "Văn hóa & Tôn giáo",
    icon: "🏛️",
  },
  {
    name: "Thung lũng Ma Thiên Lãnh",
    desc: "Được ví như 'Đà Lạt của miền Đông Nam Bộ' với rừng cây xanh mát, suối vàng róc rách và hang Ông Hổ hoang sơ kỳ bí.",
    tag: "Khám phá & Trekking",
    icon: "🌲",
  },
  {
    name: "Vườn Mãng Cầu Sinh Thái Chân Núi",
    desc: "Tham quan những khu vườn mãng cầu xanh bạt ngàn, tận tay hái trái già thơm ngọt và thưởng thức đặc sản tươi ngon tại chỗ.",
    tag: "Nông nghiệp sinh thái",
    icon: "🍈",
  },
];

export default function TravelHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelCollectionSchema) }}
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

      <main className="travel-hub-page" style={{ background: "#fbfaf6", minHeight: "100vh", paddingBottom: "60px" }}>
        {/* HERO SECTION */}
        <section
          style={{
            background: "linear-gradient(rgba(20, 50, 30, 0.75), rgba(20, 50, 30, 0.85)), url('/vuon-mang-cau-nui-ba-den-troi-xanh.jpg') center/cover no-repeat",
            color: "#ffffff",
            padding: "80px 20px 60px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <span
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(6px)",
                color: "#ffd166",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              Cẩm Nang &amp; Hướng Dẫn Điểm Đến
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, margin: "0 0 16px 0", lineHeight: 1.25 }}>
              Du Lịch &amp; Hành Hương Tây Ninh 2026
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.65, opacity: 0.95, margin: "0 auto", maxWidth: "680px" }}>
              Khám phá vùng đất thiêng phương Nam với ngọn núi cao nhất Nam Bộ (986 m), các điểm tâm linh cổ kính, hệ sinh thái trong lành và sản vật Mãng Cầu Bà Đen trứ danh.
            </p>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div style={{ background: "#f0ede4", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "10px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "14px", color: "#666" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Trang chủ</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <strong style={{ color: "#2d6a3f" }}>Cẩm nang Du lịch Tây Ninh</strong>
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "40px auto 0 auto", padding: "0 20px" }}>
          {/* SPOTLIGHT FEATURED GUIDE */}
          <section
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              border: "1px solid rgba(45,106,63,0.15)",
              marginBottom: "50px",
            }}
          >
            <div style={{ position: "relative", minHeight: "300px" }}>
              <img
                src="/le-phat-ram-thang-gieng-nui-ba-den.jpg"
                alt="Kinh nghiệm hành hương Núi Bà Đen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "#2d6a3f",
                  color: "#ffffff",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Cẩm Nang Nổi Bật 2026
              </span>
            </div>
            <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ color: "#2d6a3f", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>
                Hành hương • Chiêm bái Núi Bà Đen
              </span>
              <h2 style={{ fontSize: "1.65rem", fontWeight: 800, margin: "0 0 14px 0", color: "#1a1a1a", lineHeight: 1.35 }}>
                <Link
                  href="/kinh-nghiem-hanh-huong-nui-ba-den"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa
                </Link>
              </h2>
              <p style={{ color: "#555", lineHeight: 1.65, fontSize: "15px", margin: "0 0 24px 0" }}>
                Hướng dẫn chi tiết thứ tự viếng Chùa Bà, Điện Linh Sơn Thánh Mẫu, chiêm bái cụm tượng Phật Bà Tây Bổ Đà Sơn và Tượng Di Lặc sa thạch trên đỉnh cao 986m, kèm hướng dẫn đặt vé cáp treo Sun World nhanh chóng.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <Link
                  href="/kinh-nghiem-hanh-huong-nui-ba-den"
                  style={{
                    background: "#2d6a3f",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(45,106,63,0.3)",
                  }}
                >
                  Đọc cẩm nang chi tiết ➔
                </Link>
                <span style={{ color: "#888", fontSize: "13px" }}>⏱ 9 phút đọc • Cập nhật 2026</span>
              </div>
            </div>
          </section>

          {/* TOP DESTINATIONS OVERVIEW */}
          <section style={{ marginBottom: "50px" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span style={{ color: "#2d6a3f", fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>
                Khám Phá Miền Đất Thánh
              </span>
              <h2 style={{ fontSize: "1.85rem", fontWeight: 800, margin: "6px 0", color: "#1f2937" }}>
                4 Điểm Đến Hấp Dẫn Không Thể Bỏ Qua Tại Tây Ninh
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              {destinations.map((dest, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "24px",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  }}
                >
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "12px" }}>{dest.icon}</span>
                  <span style={{ background: "#e8f5e9", color: "#2d6a3f", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "6px" }}>
                    {dest.tag}
                  </span>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "10px 0 8px 0", color: "#111827" }}>
                    {dest.name}
                  </h3>
                  <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                    {dest.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ARTICLES GRID */}
          <section style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <span style={{ color: "#2d6a3f", fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>
                  Bài Viết Hữu Ích
                </span>
                <h2 style={{ fontSize: "1.85rem", fontWeight: 800, margin: "6px 0", color: "#1f2937" }}>
                  Cẩm Nang Du Lịch &amp; Ẩm Thực Bản Địa
                </h2>
              </div>
              <Link
                href="/tin-tuc"
                style={{ color: "#2d6a3f", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}
              >
                Xem tất cả tin tức ({travelArticles.length}+) ➔
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
              {travelArticles.map((art) => (
                <article
                  key={art.slug}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link href={art.slug} style={{ position: "relative", display: "block", height: "200px" }}>
                    <img
                      src={art.image}
                      alt={art.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "rgba(30, 41, 59, 0.8)",
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: "999px",
                        fontSize: "11px",
                        fontWeight: 700,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {art.badge}
                    </span>
                  </Link>

                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                      <span>{art.readTime}</span>
                      <span style={{ margin: "0 6px" }}>•</span>
                      <span>{art.date}</span>
                    </div>

                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: "0 0 10px 0", lineHeight: 1.4 }}>
                      <Link href={art.slug} style={{ color: "#1f2937", textDecoration: "none" }}>
                        {art.title}
                      </Link>
                    </h3>

                    <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.6, margin: "0 0 18px 0", flexGrow: 1 }}>
                      {art.description}
                    </p>

                    <Link
                      href={art.slug}
                      style={{
                        color: "#2d6a3f",
                        fontWeight: 700,
                        fontSize: "14px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span>Xem chi tiết</span>
                      <span>➔</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* DÂNG LỄ & ĐẶC SẢN LÀM QUÀ CALLOUT */}
          <section
            style={{
              background: "linear-gradient(135deg, #2d6a3f 0%, #1b4332 100%)",
              color: "white",
              borderRadius: "20px",
              padding: "40px 32px",
              marginBottom: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <div>
              <span style={{ background: "#ffd166", color: "#1b4332", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase" }}>
                Đặc Sản Núi Bà Đen Làm Quà
              </span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "14px 0 10px 0" }}>
                Hộp Quà 3 Trái VIP Dâng Lễ &amp; Biếu Tặng
              </h3>
              <p style={{ lineHeight: 1.65, opacity: 0.92, margin: "0 0 20px 0", fontSize: "15px" }}>
                Người hành hương viếng Núi Bà Đen luôn trân trọng dâng cúng Mãng Cầu Bà Đen với ý nghĩa "cầu tài, cầu lộc, cầu bình an". Hộp quà 3 trái VIP của TAYNA được thiết kế sang trọng, trái to đều đẹp, hái mới trong ngày từ vườn chân núi.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link
                  href="/san-pham/hop-mang-cau-ba-den-3-trai-vip"
                  style={{
                    background: "#ffd166",
                    color: "#1b4332",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontWeight: 800,
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Xem Hộp Quà 3 Trái VIP ➔
                </Link>
                <a
                  href="tel:0907215521"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Hotline: 0907 215 521
                </a>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="/hop-qua-mang-cau-ba-den-tayna.jpg"
                alt="Hộp quà Mãng Cầu Bà Đen TAYNA"
                style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "14px", objectFit: "cover", boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
              />
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <Footer
          backLink={{
            href: "/",
            label: "Quay về Trang chủ Mãng Cầu Bà Đen",
          }}
        />
      </main>
    </>
  );
}
