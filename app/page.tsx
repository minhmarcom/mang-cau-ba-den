"use client";

import { useEffect, useState } from "react";
import { articles } from "./data/articles";

const products = [
  {
    no: "01",
    title: "Hộp Đặc Biệt (3 Quả)",
    slug: "/san-pham/hop-mang-cau-ba-den-3-trai-vip",
    tag: "OCOP 3 Sao • Quà biếu VIP",
    image: "/hop-dac-biet-3-qua.png",
    copy: "Hộp quà quai xách cao cấp với thiết kế cửa sổ trong suốt, tuyển chọn 3 trái mãng cầu thượng hạng, bọc lưới an toàn, thích hợp biếu tặng đối tác và người thân.",
    featured: true,
    badge: "⭐ Hộp quà đặc biệt",
  },
  {
    no: "02",
    title: "Thùng 5KG Tuyển Chọn",
    slug: "/san-pham/thung-mang-cau-ba-den-5kg",
    tag: "OCOP 3 Sao • Thưởng thức & Biếu tặng",
    image: "/thung-5kg.png",
    copy: "Quy cách đóng thùng carton 5kg chuẩn OCOP Tây Ninh, từng trái già tuyển chọn kỹ lưỡng, bọc lưới xốp bảo vệ, giữ trọn độ tươi ngọt tự nhiên cho gia đình.",
    featured: false,
  },
  {
    no: "03",
    title: "Thùng 15KG Tuyển Chọn",
    slug: "/san-pham/thung-mang-cau-ba-den-15kg",
    tag: "OCOP 3 Sao • Đơn sỉ & Vận chuyển xa",
    image: "/thung-15kg.png",
    copy: "Thùng carton 15kg dày dặn nhiều lớp chuyên dụng, bảo quản thông thoáng chống va đập hoàn hảo khi vận chuyển nhanh đến TP.HCM, Hà Nội và toàn quốc.",
    featured: false,
  },
];

const gallery = [
  {
    src: "/vuon-mang-cau-tay-ninh-bao-trai.jpg",
    alt: "Vườn mãng cầu Tây Ninh xanh ngát bọc bao trái an toàn dưới trời xanh",
    caption: "Vườn mãng cầu bọc bao trái an toàn dưới trời xanh Tây Ninh",
    shape: "gallery-wide",
  },
  {
    src: "/nong-dan-thu-hoach-mang-cau.jpg",
    alt: "Nhà nông thu hoạch mãng cầu già trực tiếp tại vườn",
    caption: "Thu hoạch trái già chọn lọc vào sáng sớm",
    shape: "gallery-tall",
  },
  {
    src: "/vuon-nui-ba-den.jpg",
    alt: "Vườn mãng cầu xanh ngát bao trái trắng dưới chân Núi Bà Đen Tây Ninh",
    caption: "Vườn mãng cầu xanh ngát dưới chân Núi Bà Đen",
    shape: "gallery-half",
  },
  {
    src: "/hop-qua-3-trai-vip.jpg",
    alt: "Hộp quà mãng cầu Bà Đen 3 trái tuyển chọn cao cấp",
    caption: "Hộp quà 3 trái tuyển chọn thượng hạng",
    shape: "gallery-tall",
  },
  {
    src: "/thuc-te-thu-hoach.jpg",
    alt: "Thu hoạch mãng cầu trực tiếp tại vườn",
    caption: "Thu hoạch trực tiếp tại vườn",
    shape: "gallery-half",
  },
  {
    src: "/thuc-te-mang-cau-tuoi.jpg",
    alt: "Mãng cầu tươi được bọc lưới bảo vệ",
    caption: "Bảo vệ từng trái trước khi giao",
    shape: "gallery-half",
  },
  {
    src: "/thuc-te-phan-loai.jpg",
    alt: "Mãng cầu được tập kết và phân loại sau thu hoạch",
    caption: "Phân loại chuẩn kích cỡ",
    shape: "gallery-half",
  },
  {
    src: "/thuc-te-dong-goi-nhieu-thung.jpg",
    alt: "Nhiều thùng mãng cầu đã đóng gói sẵn sàng giao",
    caption: "Sẵn sàng giao nhận toàn quốc",
    shape: "gallery-half",
  },
];


const faqs = [
  {
    question: "Mãng cầu Bà Đen là gì và được trồng ở đâu?",
    answer:
      "Mãng cầu Bà Đen là cách gọi quen thuộc của mãng cầu ta, hay quả na, được canh tác tại vùng Tây Ninh, đặc biệt quanh khu vực núi Bà Đen. Điều kiện nắng ấm và kinh nghiệm nhà vườn góp phần tạo nên hương vị đặc trưng của trái.",
  },
  {
    question: "Mãng cầu Bà Đen có gì đặc biệt?",
    answer:
      "Trái thường được yêu thích nhờ mùi thơm rõ, vị ngọt thanh và phần thịt mềm dẻo khi chín đúng độ. Chất lượng thực tế còn phụ thuộc giống, vườn trồng, thời điểm thu hoạch và cách bảo quản.",
  },
  {
    question: "Mùa mãng cầu Tây Ninh vào thời gian nào?",
    answer:
      "Mãng cầu có mùa vụ và sản lượng thay đổi theo thời tiết, lịch xử lý ra hoa của từng vườn. Để đặt mua mãng cầu Bà Đen đúng độ chín và ngày giao phù hợp, khách hàng nên liên hệ trực tiếp trước khi đặt.",
  },
  {
    question: "Cách chọn mãng cầu Bà Đen ngon và nhận biết trái chín?",
    answer:
      "Nên chọn trái có mắt nở tương đối đều, vỏ chuyển xanh nhạt, cầm chắc nhưng không quá cứng. Trái bắt đầu chín thường tỏa mùi thơm nhẹ và mềm dần; tránh bóp mạnh làm dập thịt.",
  },
  {
    question: "Mãng cầu bao lâu thì chín và bảo quản thế nào?",
    answer:
      "Thời gian chín phụ thuộc độ già khi hái và nhiệt độ môi trường. Nên để trái ở nơi khô thoáng, kiểm tra mỗi ngày; khi vừa chín có thể cho vào ngăn mát và dùng sớm để giữ hương vị.",
  },
  {
    question: "Mãng cầu có để tủ lạnh được không?",
    answer:
      "Có, nhưng nên làm lạnh sau khi trái đã chín vừa. Trái còn xanh để trong tủ lạnh có thể chín chậm hoặc không đều. Nên bọc nhẹ, tránh đè lên nhau và sử dụng sớm.",
  },
  {
    question: "Mua mãng cầu Bà Đen ở đâu và có giao tận nơi không?",
    answer:
      "Khách hàng có thể gọi hoặc nhắn Zalo 0907 215 521 để đặt mua mãng cầu Bà Đen, chọn quy cách, giá theo thời điểm và khu vực giao. Đơn lẻ, đơn quà tặng và nhu cầu mua sỉ sẽ được trao đổi riêng.",
  },
  {
    question: "Có tiêu chuẩn VietGAP hoặc hồ sơ nguồn gốc vùng trồng không?",
    answer:
      "Tiêu chuẩn và hồ sơ truy xuất nguồn gốc được xác nhận theo từng vườn và thời điểm cung ứng. Khách hàng và đối tác có thể liên hệ trực tiếp để trao đổi chi tiết và xem mẫu thực tế trước khi thống nhất đơn hàng.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProduceFarm", "Store"],
  "@id": "https://mangcaubaden.vn/#business",
  name: "Mãng Cầu Bà Đen Tây Ninh — Vùng Trồng Chính Gốc",
  alternateName: ["Mãng Cầu Bà Đen NABADEN", "Na Bà Đen Tây Ninh", "Đặc Sản Mãng Cầu Tây Ninh"],
  url: "https://mangcaubaden.vn/",
  logo: "https://mangcaubaden.vn/logo.png",
  image: [
    "https://mangcaubaden.vn/vuon-nui-ba-den.jpg",
    "https://mangcaubaden.vn/hop-dac-biet-3-qua.png",
    "https://mangcaubaden.vn/thung-5kg.png"
  ],
  description:
    "Chuyên cung cấp Mãng Cầu Bà Đen chính gốc chân Núi Bà Đen Tây Ninh, đạt chuẩn VietGAP và OCOP 3 Sao. Thu hoạch hái tươi trong ngày, giao nhanh tận nơi toàn quốc.",
  telephone: "+84907215521",
  priceRange: "$$",
  currenciesAccepted: "VND",
  paymentAccepted: "Tiền mặt, Chuyển khoản ngân hàng",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khu vực chân Núi Bà Đen",
    addressLocality: "Thành phố Tây Ninh",
    addressRegion: "Tây Ninh",
    postalCode: "84000",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.3742,
    longitude: 106.1685,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Việt Nam" },
    { "@type": "City", name: "Hồ Chí Minh" },
    { "@type": "City", name: "Hà Nội" },
    { "@type": "AdministrativeArea", name: "Tây Ninh" },
  ],
  sameAs: [
    "https://www.facebook.com/mangcaubaden.vn/",
    "https://zalo.me/0907215521",
    "https://www.tiktok.com/@mangcaubaden",
  ],
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Danh mục Mãng Cầu Bà Đen Tây Ninh Chính Gốc",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Mãng Cầu Bà Đen Hộp Đặc Biệt (3 Quả VIP)",
        image: "https://mangcaubaden.vn/hop-dac-biet-3-qua.png",
        description: "Hộp quà quai xách cao cấp với thiết kế cửa sổ trong suốt, tuyển chọn 3 trái mãng cầu Bà Đen thượng hạng đạt chuẩn OCOP 3 sao.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen NABADEN" },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: "https://mangcaubaden.vn/san-pham/hop-mang-cau-ba-den-3-trai-vip",
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
        name: "Thùng 5KG Mãng Cầu Bà Đen Tuyển Chọn",
        image: "https://mangcaubaden.vn/thung-5kg.png",
        description: "Quy cách đóng thùng carton 5kg chuẩn OCOP Tây Ninh, từng trái già tuyển chọn kỹ lưỡng, giữ trọn độ tươi ngọt tự nhiên.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen NABADEN" },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: "https://mangcaubaden.vn/san-pham/thung-mang-cau-ba-den-5kg",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Thùng 15KG Mãng Cầu Bà Đen Đơn Sỉ & Vận Chuyển Xa",
        image: "https://mangcaubaden.vn/thung-15kg.png",
        description: "Thùng carton 15kg dày dặn nhiều lớp chuyên dụng, bảo quản thông thoáng chống va đập hoàn hảo khi vận chuyển đường dài.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen NABADEN" },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          availability: "https://schema.org/InStock",
          url: "https://mangcaubaden.vn/san-pham/thung-mang-cau-ba-den-15kg",
        },
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mãng Cầu Bà Đen Tây Ninh",
  url: "https://mangcaubaden.vn/",
  inLanguage: "vi-VN",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://mangcaubaden.vn/" },
    { "@type": "ListItem", position: 2, name: "Sản phẩm Trái Tươi", item: "https://mangcaubaden.vn/#san-pham" },
    { "@type": "ListItem", position: 3, name: "Tin tức từ vườn", item: "https://mangcaubaden.vn/tin-tuc" },
    { "@type": "ListItem", position: 4, name: "Liên hệ mua hàng", item: "https://mangcaubaden.vn/#lien-he" },
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = ["top", "cau-chuyen", "san-pham", "hinh-anh", "dat-hang", "tin-tuc", "lien-he"];
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Map activeSection to 5 bottom tabs
  const getActiveTab = () => {
    if (activeSection === "top" || activeSection === "cau-chuyen") return "top";
    if (activeSection === "san-pham") return "san-pham";
    if (activeSection === "hinh-anh") return "hinh-anh";
    if (activeSection === "dat-hang" || activeSection === "tin-tuc") return "dat-hang";
    if (activeSection === "lien-he") return "lien-he";
    return "top";
  };

  const currentTab = getActiveTab();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* STICKY APP HEADER */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mãng Cầu Bà Đen NABADEN - Trang chủ">
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
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#cau-chuyen">Câu chuyện</a>
          <a href="#san-pham">Sản phẩm</a>
          <a href="#hinh-anh">Hình ảnh</a>
          <a href="#dat-hang">Đặt hàng</a>
          <a href="#tin-tuc">Tin tức</a>
          <a href="#lien-he">Liên hệ</a>
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

          <button
            className={`menu-button ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="burger-line top-bar" />
            <span className="burger-line middle-bar" />
            <span className="burger-line bottom-bar" />
          </button>
        </div>

        {/* MOBILE FULL-SCREEN SEAMLESS DRAWER */}
        {menuOpen && (
          <div className="mobile-nav" role="dialog" aria-modal="true">
            <div className="mobile-nav-content">
              <div className="mobile-nav-links">
                <a href="#cau-chuyen" onClick={closeMenu}>
                  <span className="mobile-nav-num">01</span>
                  <span>Câu chuyện vườn nhà</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
                <a href="#san-pham" onClick={closeMenu}>
                  <span className="mobile-nav-num">02</span>
                  <span>Sản phẩm & Quà biếu</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
                <a href="#hinh-anh" onClick={closeMenu}>
                  <span className="mobile-nav-num">03</span>
                  <span>Hình ảnh thực tế</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
                <a href="#dat-hang" onClick={closeMenu}>
                  <span className="mobile-nav-num">04</span>
                  <span>Đặt mua & Quà tặng</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
                <a href="#tin-tuc" onClick={closeMenu}>
                  <span className="mobile-nav-num">05</span>
                  <span>Tin tức từ vườn</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
                <a href="#lien-he" onClick={closeMenu}>
                  <span className="mobile-nav-num">06</span>
                  <span>Kênh liên hệ mua hàng</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
              </div>

              <div className="mobile-nav-actions">
                <a className="mobile-cta-primary" href="tel:0907215521" onClick={closeMenu}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Gọi ngay 0907 215 521</span>
                </a>
                <a
                  className="mobile-cta-secondary"
                  href="https://zalo.me/0907215521"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  <span>Nhắn tin Zalo trực tiếp</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="mobile-nav-footer">
                <span>Đặc sản Tây Ninh chính gốc</span>
                <div className="mobile-nav-socials">
                  <a href="https://www.facebook.com/mangcaubaden.vn/" target="_blank" rel="noreferrer">Facebook</a>
                  <a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">Zalo</a>
                  <a href="https://www.tiktok.com/@mangcaubaden" target="_blank" rel="noreferrer">TikTok</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="top">
        <div
          className="hero-photo"
          role="img"
          aria-label="Mãng cầu tươi trong vườn tại Tây Ninh"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Nông sản quê mình • Tây Ninh</p>
          <h1>
            <span className="hero-line-1">Trái ngọt</span>
            <em className="hero-line-2">từ vườn nhà.</em>
          </h1>
          <p className="hero-copy">
            Mãng Cầu Bà Đen mang đến hương vị chuẩn tự nhiên, tươi ngon và giàu dưỡng chất. Được tuyển chọn kỹ lưỡng từ nguồn nông sản an toàn. Sản phẩm trồng trọt theo tiêu chuẩn VietGAP và OCOP.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#san-pham">
              <span>Khám phá sản phẩm</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span className="note-number">✓</span>
          <p>
            <strong>Chuẩn VietGAP & OCOP</strong>
            <br />
            Hương vị chuẩn tự nhiên, tươi ngon và giàu dưỡng chất.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="intro section-pad" id="cau-chuyen">
        <div>
          <p className="section-kicker">Chuyện của vườn nhà</p>
          <h2>
            <span className="heading-line">Lớn lên</span>
            <em className="heading-line">từ đất lành.</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Khí hậu nắng ấm, đất đai đặc trưng cùng kinh nghiệm canh tác qua nhiều thế hệ đã làm nên hương vị mãng cầu Bà Đen: thơm, ngọt thanh và dẻo dai.
          </p>
          <p>
            Chúng tôi kết nối câu chuyện vùng trồng với những cơ hội mới — từ kênh bán lẻ, quà tặng đến sản phẩm chế biến và trải nghiệm nông nghiệp.
          </p>
          <a className="arrow-link" href="#san-pham">
            Khám phá các dòng sản phẩm <span>→</span>
          </a>
        </div>
        <div className="intro-image">
          <img
            src="/vuon-nui-ba-den.jpg"
            alt="Vườn mãng cầu xanh tốt dưới chân Núi Bà Đen Tây Ninh"
            loading="lazy"
          />
          <span>Vùng trồng chân Núi Bà Đen • Tây Ninh</span>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values">
        <div className="value-lead">
          <p className="section-kicker">Giữ trọn chất quê</p>
          <h2>
            <span className="heading-line">Thuần mùa.</span>
            <span className="heading-line">Sạch lành.</span>
            <em className="heading-line">Tử tế.</em>
          </h2>
        </div>
        <div className="value-list">
          <article>
            <span>01</span>
            <div>
              <h3>Thuận theo mùa vụ</h3>
              <p>
                Tôn trọng nhịp sinh trưởng tự nhiên, độ chín và hương vị riêng của từng mùa trái.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Chăm từ vườn</h3>
              <p>
                Gìn giữ kinh nghiệm nhà nông, chăm chút từ lúc nuôi trái đến khi phân loại.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Gửi đi tử tế</h3>
              <p>
                Trao đổi rõ độ chín, quy cách, bao bì và lịch giao để trái đến tay khách trọn vị.
              </p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Chuẩn VietGAP & OCOP</h3>
              <p>
                Trồng trọt theo tiêu chuẩn an toàn, tuyển chọn kỹ lưỡng, giữ trọn vị ngon thuần khiết và giàu dưỡng chất.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products section-pad" id="san-pham">
        <div className="section-head">
          <div>
            <p className="section-kicker">Từ khu vườn xanh</p>
            <h2>
              <span className="heading-line">Gói ghém</span>
              <em className="heading-line">vị quê.</em>
            </h2>
          </div>
          <p>
            Từ trái tươi theo mùa đến những món quà mộc mạc mang bản sắc vùng đất.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article
              className={`product-card ${product.featured ? "is-featured" : ""}`}
              key={product.no}
            >
              {product.featured && product.badge && (
                <span className="product-featured-ribbon">{product.badge}</span>
              )}
              <div className="product-image">
                <img src={product.image} alt={product.title} loading="lazy" />
                <span>{product.no}</span>
              </div>
              <p className="product-tag">{product.tag}</p>
              <h3>{product.title}</h3>
              <p>{product.copy}</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
                <a
                  href={product.slug}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    background: "var(--leaf)",
                    color: "white",
                    fontSize: "13.5px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                  aria-label={`Xem chi tiết ${product.title}`}
                >
                  <span>Chi tiết</span>
                  <span>→</span>
                </a>
                <a
                  href="https://zalo.me/0907215521"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    background: "#e7edbd",
                    color: "var(--ink)",
                    fontSize: "13.5px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                  aria-label={`Trao đổi về ${product.title} qua Zalo`}
                >
                  {product.featured ? "Đặt hộp quà" : "Đặt qua Zalo"} <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="real-gallery section-pad" id="hinh-anh">
        <div className="gallery-heading">
          <div>
            <p className="section-kicker">Hình ảnh thực tế</p>
            <h2>
              <span className="heading-line">Một ngày</span>
              <em className="heading-line">tại vườn.</em>
            </h2>
          </div>
          <p>
            Từ lúc trái còn trên cành, qua bàn tay thu hoạch, phân loại đến từng thùng hàng được gói ghém cẩn thận.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure className={item.shape} key={item.src}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ORDER & GIFTING SECTION */}
      <section className="cooperation" id="dat-hang">
        <div
          className="coop-image"
          role="img"
          aria-label="Vườn mãng cầu xanh tươi tại Tây Ninh"
        />
        <div className="coop-content">
          <p className="section-kicker light">Đặt mua & Quà biếu</p>
          <h2>
            <span className="heading-line">Gửi trọn vị ngọt</span>
            <em className="heading-line">đến người thân.</em>
          </h2>
          <p>
            Từ thưởng thức gia đình, hộp quà biếu VIP sang trọng đến các đơn sỉ đóng thùng vận chuyển xa — nhà vườn luôn sẵn sàng hỗ trợ đặt mua mãng cầu Bà Đen tươi ngon nhất trong ngày.
          </p>
          <div className="path-list">
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
            >
              <span>01</span>
              Hộp quà 3 trái VIP biếu tặng trang nhã
              <b>→</b>
            </a>
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
            >
              <span>02</span>
              Thùng 5kg tuyển chọn ăn gia đình
              <b>→</b>
            </a>
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
            >
              <span>03</span>
              Thùng 10kg – 15kg đơn sỉ & doanh nghiệp
              <b>→</b>
            </a>
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
            >
              <span>04</span>
              Giao nhanh TP.HCM, Hà Nội & toàn quốc
              <b>→</b>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ & KNOWLEDGE SECTION */}
      <section className="seo-guide section-pad" id="tin-tuc">
        <div className="seo-guide-heading">
          <div>
            <p className="section-kicker">Tin tức từ vườn</p>
            <h2>
              <span className="heading-line">Hiểu trái ngon.</span>
              <em className="heading-line">Chọn đúng mùa.</em>
            </h2>
          </div>
          <p>
            Những câu hỏi thường gặp khi tìm hiểu, chọn mua và bảo quản mãng cầu Bà Đen Tây Ninh.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>0{index + 1}</span>
                {item.question}
                <b aria-hidden="true">＋</b>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        {/* SYNCHRONIZED ARTICLES LIST */}
        <div style={{ marginTop: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p className="section-kicker" style={{ marginBottom: "6px" }}>Cẩm nang & Kinh nghiệm</p>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 2vw, 1.9rem)", margin: 0, color: "var(--ink)" }}>
                Bài viết & tin tức mới nhất từ vườn
              </h3>
            </div>
            <a
              href="/tin-tuc"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 700,
                color: "var(--leaf)",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              <span>Xem tất cả bài viết ({articles.length})</span>
              <span>→</span>
            </a>
          </div>

          <div className="featured-articles-grid" style={{ display: "grid", gap: "24px" }}>
            {articles.map((art) => (
              <article key={art.slug} className="featured-article-card">
                <div className="featured-article-img">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                  />
                  <span className="featured-badge">{art.badge}</span>
                </div>
                <div className="featured-article-content">
                  <span className="featured-kicker">{art.kicker}</span>
                  <h3>{art.title}</h3>
                  <p>{art.description}</p>
                  <div className="featured-article-action">
                    <a href={art.slug} className="featured-read-btn">
                      <span>Đọc bài viết chi tiết</span>
                      <span>→</span>
                    </a>
                    <span className="featured-read-time">{art.readTime} • {art.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a
              href="/tin-tuc"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "var(--leaf)",
                color: "white",
                fontWeight: 700,
                fontSize: "15px",
                boxShadow: "0 8px 20px rgba(45,75,52,0.15)",
                textDecoration: "none",
              }}
            >
              <span>Xem toàn bộ chuyên mục Tin tức & Cẩm nang</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="seo-intent">
          <h3>Tìm mãng cầu Bà Đen chính gốc?</h3>
          <p>
            Liên hệ để hỏi mùa vụ, giá mãng cầu Tây Ninh theo thời điểm, quy cách hộp quà, đơn giao tận nơi hoặc nhu cầu sỉ và đại lý.
          </p>
          <a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">
            Đặt mua mãng cầu Bà Đen <span>→</span>
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="lien-he">
        <div className="contact-title">
          <p className="section-kicker light">Kết nối từ hôm nay</p>
          <h2>
            Bạn muốn<br />
            <em>cùng đi xa?</em>
          </h2>
          <p>
            Gọi trực tiếp hoặc nhắn tin qua kênh thuận tiện nhất. Chúng tôi sẵn sàng trao đổi về phân phối, quà tặng và hợp tác sản phẩm.
          </p>
        </div>
        <div className="contact-channels">
          <a className="contact-main" href="tel:0907215521">
            <span className="channel-label">Hotline tư vấn</span>
            <strong>0907 215 521</strong>
            <b>Gọi ngay ↗</b>
          </a>
          <a href="https://www.facebook.com/mangcaubaden.vn/" target="_blank" rel="noreferrer">
            <span className="channel-icon" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>f</span>
            <div>
              <small>Fanpage chính thức</small>
              <strong>Facebook Mãng Cầu Bà Đen</strong>
            </div>
            <b>↗</b>
          </a>
          <a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">
            <span className="channel-icon">Z</span>
            <div>
              <small>Nhắn tin nhanh</small>
              <strong>Zalo 0907 215 521</strong>
            </div>
            <b>↗</b>
          </a>
          <a href="https://www.tiktok.com/@mangcaubaden" target="_blank" rel="noreferrer">
            <span className="channel-icon">♪</span>
            <div>
              <small>Xem video tại vườn</small>
              <strong>TikTok @mangcaubaden</strong>
            </div>
            <b>↗</b>
          </a>
        </div>
      </section>

      {/* BOTTOM MOBILE APP NAVIGATION (ZERO GAP, FLUSH TO BOTTOM) */}
      <nav className="app-nav" aria-label="Điều hướng ứng dụng di động">
        <a
          href="#top"
          className={currentTab === "top" ? "is-active" : ""}
          aria-current={currentTab === "top" ? "page" : undefined}
        >
          <svg
            className="nav-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Trang chủ</span>
        </a>

        <a
          href="#san-pham"
          className={currentTab === "san-pham" ? "is-active" : ""}
          aria-current={currentTab === "san-pham" ? "page" : undefined}
        >
          <svg
            className="nav-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <span>Sản phẩm</span>
        </a>

        <a
          href="#hinh-anh"
          className={currentTab === "hinh-anh" ? "is-active" : ""}
          aria-current={currentTab === "hinh-anh" ? "page" : undefined}
        >
          <svg
            className="nav-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span>Hình ảnh</span>
        </a>

        <a
          href="#dat-hang"
          className={currentTab === "dat-hang" ? "is-active" : ""}
          aria-current={currentTab === "dat-hang" ? "page" : undefined}
        >
          <svg
            className="nav-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span>Đặt hàng</span>
        </a>

        <a
          href="#lien-he"
          className={currentTab === "lien-he" ? "is-active" : ""}
          aria-current={currentTab === "lien-he" ? "page" : undefined}
        >
          <svg
            className="nav-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Liên hệ</span>
        </a>
      </nav>

      {/* FOOTER */}
      <footer>
        <a className="brand footer-brand" href="#top">
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
        </a>
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
    </main>
  );
}
