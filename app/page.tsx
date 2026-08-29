"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { articles } from "./data/articles";
import Footer from "./components/Footer";

const products = [
  {
    no: "01",
    title: "Hộp Đặc Biệt (3 Quả)",
    slug: "/san-pham/hop-mang-cau-ba-den-3-trai-vip",
    tag: "OCOP 3 Sao, Quà biếu VIP",
    price: "180.000₫",
    image: "/san-pham-hop-qua-3-trai.jpg",
    copy: "Hộp quà quai xách cao cấp với thiết kế cửa sổ trong suốt, tuyển chọn 3 trái mãng cầu thượng hạng, bọc lưới an toàn, thích hợp biếu tặng đối tác và người thân.",
    featured: true,
    badge: "Hộp quà đặc biệt",
  },
  {
    no: "02",
    title: "Thùng 5KG Tuyển Chọn",
    slug: "/san-pham/thung-mang-cau-ba-den-5kg",
    tag: "OCOP 3 Sao, Thưởng thức & Biếu tặng",
    price: "325.000₫",
    image: "/san-pham-thung-5kg.jpg",
    copy: "Quy cách đóng thùng carton 5kg chuẩn OCOP Tây Ninh, từng trái già tuyển chọn kỹ lưỡng, bọc lưới xốp bảo vệ, giữ trọn độ tươi ngọt tự nhiên cho gia đình.",
    featured: false,
  },
  {
    no: "03",
    title: "Thùng 15KG Tuyển Chọn",
    slug: "/san-pham/thung-mang-cau-ba-den-15kg",
    tag: "OCOP 3 Sao, Đơn sỉ & Vận chuyển xa",
    price: "900.000₫",
    image: "/san-pham-thung-15kg.jpg",
    copy: "Thùng carton 15kg dày dặn nhiều lớp chuyên dụng, bảo quản thông thoáng chống va đập hoàn hảo khi vận chuyển nhanh đến TP.HCM, Hà Nội và toàn quốc.",
    featured: false,
  },
];

const gallery = [
  {
    src: "/vuon-mang-cau-nui-ba-den.jpg",
    alt: "Vườn mãng cầu trù phú bọc túi sinh học dưới chân Núi Bà Đen Tây Ninh",
    caption: "Vườn mãng cầu trù phú dưới chân Núi Bà Đen Tây Ninh",
    shape: "gallery-wide",
  },
  {
    src: "/mang-cau-tren-canh-tay-ninh.jpg",
    alt: "Trái mãng cầu Bà Đen chín già mắt nở to phẳng trên cành",
    caption: "Trái chín già, mắt nở phẳng, bọc túi an toàn trên cành",
    shape: "gallery-half",
  },
  {
    src: "/san-pham-hop-qua-3-trai.jpg",
    alt: "Hộp quà Mãng Cầu Bà Đen 3 trái cao cấp",
    caption: "Hộp quà biếu 3 trái Mãng Cầu Bà Đen",
    shape: "gallery-half",
  },
  {
    src: "/mang-cau-tap-ket-tai-vuon.jpg",
    alt: "Mãng cầu bọc xốp thu hoạch tập kết dồi dào tại vườn Thạnh Tân",
    caption: "Thu hoạch tập kết dồi dào tại vườn Mãng Cầu Bà Đen",
    shape: "gallery-wide",
  },
  {
    src: "/trai-mang-cau-chin-gia-tren-tay.jpg",
    alt: "Trái mãng cầu Bà Đen chín dẻo trên tay nhà vườn",
    caption: "Thịt dai dẻo quánh, vị ngọt thanh tự nhiên",
    shape: "gallery-half",
  },
  {
    src: "/thuc-te-dong-goi.jpg",
    alt: "Đóng thùng carton mãng cầu bọc xốp thoáng khí",
    caption: "Đóng thùng carton thoáng khí bọc xốp chống va đập",
    shape: "gallery-half",
  },
];

const faqs = [
  {
    question: "Mãng cầu Bà Đen là gì và được trồng ở đâu?",
    answer:
      "Mãng cầu Bà Đen là giống na dai đặc sản được canh tác tại vùng đất xám chân núi Bà Đen (Tây Ninh), được tuyển chọn và phân phối trực tiếp từ vùng trồng đạt chuẩn VietGAP & OCOP 3 sao.",
  },
  {
    question: "Mãng cầu Bà Đen giá bao nhiêu 1kg hôm nay?",
    answer:
      "Giá mãng cầu Bà Đen Tây Ninh thay đổi theo từng thời điểm mùa vụ và quy cách đóng thùng. Quý khách vui lòng liên hệ Hotline/Zalo 0907 215 521 để nhận báo giá sỉ & lẻ tại vườn mới nhất hôm nay.",
  },
  {
    question: "Mùa mãng cầu Tây Ninh vào thời gian nào?",
    answer:
      "Mãng cầu Tây Ninh được thu hoạch quanh năm nhờ kỹ thuật rải vụ của nhà vườn. Trong đó, 2 vụ chính ngon nhất là Vụ Đông Xuân (Tháng 12 - Tháng 2) và Vụ Thu Đông (Tháng 8 - Tháng 10).",
  },
  {
    question: "Cách chọn mãng cầu Bà Đen ngon không bị sượng?",
    answer:
      "Chọn quả có mắt na nở to phẳng, kẽ mắt hở rãnh màu trắng hồng, vỏ mỏng hơi mềm tay và cuống tươi. Tránh chọn quả mắt nhỏ còn xanh gắt để không bị sượng.",
  },
  {
    question: "Mua mãng cầu Bà Đen chính gốc giao TPHCM & Hà Nội ở đâu?",
    answer:
      "Đặt mua trực tiếp tại mangcaubaden.vn hoặc Zalo 0907 215 521. Mãng Cầu Bà Đen hái tươi tại vườn Thạnh Tân, bọc xốp đóng thùng carton và giao hỏa tốc toàn quốc.",
  },
  {
    question: "Mãng Cầu Bà Đen có chứng nhận an toàn nào?",
    answer:
      "Mãng Cầu Bà Đen đạt chuẩn VietGAP & OCOP 3 sao tỉnh Tây Ninh, trái được bao bọc an toàn trên cành và có thông tin nguồn gốc rõ ràng.",
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
  alternateName: ["Mãng Cầu Bà Đen", "Na Bà Đen Tây Ninh", "Đặc Sản Mãng Cầu Tây Ninh", "Vựa Mãng Cầu Núi Bà Đen"],
  url: "https://mangcaubaden.vn/",
  logo: "https://mangcaubaden.vn/logo.png",
  image: [
    "https://mangcaubaden.vn/vuon-nui-ba-den.jpg",
    "https://mangcaubaden.vn/san-pham-hop-qua-3-trai.jpg",
    "https://mangcaubaden.vn/san-pham-thung-5kg.jpg"
  ],
  description:
    "Mãng Cầu Bà Đen, còn gọi là na Bà Đen Tây Ninh. Cung cấp sản phẩm trái tươi, hộp quà, thùng 5kg, thùng 15kg và giao tận nơi toàn quốc.",
  knowsAbout: [
    "Mãng cầu Bà Đen",
    "Na Bà Đen",
    "Na Tây Ninh",
    "Mãng cầu núi Bà Đen",
    "Đặc sản mãng cầu Tây Ninh",
  ],
  telephone: "+84907215521",
  priceRange: "$$",
  currenciesAccepted: "VND",
  paymentAccepted: "Tiền mặt, Chuyển khoản ngân hàng, COD",
  hasMap: "https://share.google/mKCDKiRjRo25L0TDN",
  maps: "https://share.google/mKCDKiRjRo25L0TDN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khu vực vườn Thạnh Tân, chân Núi Bà Đen",
    addressLocality: "Xã Thạnh Tân",
    addressRegion: "Thành phố Tây Ninh, Tỉnh Tây Ninh",
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84907215521",
    contactType: "customer service",
    areaServed: "VN",
    availableLanguage: ["vi"],
  },
  sameAs: [
    "https://share.google/mKCDKiRjRo25L0TDN",
    "https://www.facebook.com/mangcaubaden.vn/",
    "https://zalo.me/0907215521",
    "https://www.tiktok.com/@mangcaubaden",
    "https://mangcaubaden.vn",
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
        alternateName: ["Hộp na Bà Đen 3 trái", "Hộp quà mãng cầu Tây Ninh"],
        image: "https://mangcaubaden.vn/san-pham-hop-qua-3-trai.jpg",
        description: "Hộp quà quai xách cao cấp với thiết kế cửa sổ trong suốt, tuyển chọn 3 trái mãng cầu Bà Đen thượng hạng đạt chuẩn OCOP 3 sao.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen" },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          price: "180000",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: "https://mangcaubaden.vn/san-pham/hop-mang-cau-ba-den-3-trai-vip",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Thùng 5KG Mãng Cầu Bà Đen Tuyển Chọn",
        alternateName: ["Thùng na Bà Đen 5kg", "Mãng cầu Tây Ninh thùng 5kg"],
        image: "https://mangcaubaden.vn/san-pham-thung-5kg.jpg",
        description: "Quy cách đóng thùng carton 5kg chuẩn OCOP Tây Ninh, từng trái già tuyển chọn kỹ lưỡng, giữ trọn độ tươi ngọt tự nhiên.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen" },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          price: "325000",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
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
        alternateName: ["Thùng na Bà Đen 15kg", "Mãng cầu Tây Ninh giá sỉ"],
        image: "https://mangcaubaden.vn/san-pham-thung-15kg.jpg",
        description: "Thùng carton 15kg dày dặn nhiều lớp chuyên dụng, bảo quản thông thoáng chống va đập hoàn hảo khi vận chuyển đường dài.",
        brand: { "@type": "Brand", name: "Mãng Cầu Bà Đen" },
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          price: "900000",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: "https://mangcaubaden.vn/san-pham/thung-mang-cau-ba-den-15kg",
        },
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mãng Cầu Bà Đen",
  alternateName: ["Na Bà Đen", "Na Tây Ninh", "Mãng Cầu Tây Ninh", "Mãng Cầu Núi Bà Đen"],
  description:
    "Mãng Cầu Bà Đen – Chuyên trang về đặc sản mãng cầu Tây Ninh. Cập nhật kiến thức, mùa vụ, cách chọn, bảo quản, giá Mãng Cầu Bà Đen và thông tin đặt mua từ Mãng Cầu Bà Đen.",
  url: "https://mangcaubaden.vn/",
  inLanguage: "vi-VN",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://mangcaubaden.vn/" },
    { "@type": "ListItem", position: 2, name: "Sản phẩm Trái Tươi", item: "https://mangcaubaden.vn/#san-pham" },
    { "@type": "ListItem", position: 3, name: "Tin tức từ vườn", item: "https://mangcaubaden.vn/#tin-tuc" },
    { "@type": "ListItem", position: 4, name: "Liên hệ mua hàng", item: "https://mangcaubaden.vn/#lien-he" },
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [scrollProgress, setScrollProgress] = useState(0);

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
    const sections = ["top", "cau-chuyen", "san-pham", "hinh-anh", "tin-tuc", "lien-he"];

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const percent = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollProgress(percent);
      }

      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentSec = sections[0];
      sections.forEach((secId) => {
        const el = document.getElementById(secId);
        if (el && el.offsetTop <= marker) {
          currentSec = secId;
        }
      });
      setActiveSection(currentSec);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Map activeSection to 5 bottom tabs
  const getActiveTab = () => {
    if (activeSection === "top" || activeSection === "cau-chuyen") return "top";
    if (activeSection === "san-pham") return "san-pham";
    if (activeSection === "hinh-anh") return "hinh-anh";
    if (activeSection === "tin-tuc" || activeSection === "dat-hang") return "tin-tuc";
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

      {/* TOP SLIM MAGAZINE READING PROGRESS BAR */}
      <div
        className="magazine-progress-bar-container"
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Tiến độ đọc: ${scrollProgress}%`}
      >
        <div
          className="magazine-progress-bar-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* STICKY APP HEADER */}
      <header className="site-header">
        <a
          className="brand"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (window.location.hash) window.history.replaceState(null, "", "/");
          }}
          aria-label="Mãng Cầu Bà Đen - Trang chủ"
        >
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
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#cau-chuyen">Câu chuyện</a>
          <a href="#san-pham">Sản phẩm</a>
          <a href="#hinh-anh">Hình ảnh</a>
          <a href="#dat-hang">Đặt hàng</a>
          <Link href="/hop-tac" style={{ color: "#2d6a3f", fontWeight: 700 }}>Hợp tác</Link>
          <a href="#tin-tuc">Tin tức</a>
          <a href="#lien-he">Liên hệ</a>
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="tel:0907215521">
            <span>Gọi 0907 215 521</span>

          </a>

          <a
            className="mobile-order-btn"
            href="#san-pham"
            aria-label="Đặt mua Mãng Cầu Bà Đen"
          >
            <span>Đặt mua</span>
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

                </a>
                <a href="#san-pham" onClick={closeMenu}>
                  <span className="mobile-nav-num">02</span>
                  <span>Sản phẩm & Quà biếu</span>

                </a>
                <a href="#hinh-anh" onClick={closeMenu}>
                  <span className="mobile-nav-num">03</span>
                  <span>Hình ảnh thực tế</span>

                </a>
                <a href="#dat-hang" onClick={closeMenu}>
                  <span className="mobile-nav-num">04</span>
                  <span>Đặt mua & Quà tặng</span>

                </a>
                <a href="#tin-tuc" onClick={closeMenu}>
                  <span className="mobile-nav-num">05</span>
                  <span>Tin tức từ vườn</span>

                </a>
                <a href="#lien-he" onClick={closeMenu}>
                  <span className="mobile-nav-num">06</span>
                  <span>Kênh liên hệ mua hàng</span>

                </a>
              </div>

              <div className="mobile-nav-actions">
                <a className="mobile-cta-primary" href="tel:0907215521" onClick={closeMenu}>
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
          <p className="eyebrow">
            Nông sản quê mình, Tây Ninh
          </p>
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

            </a>
          </div>
        </div>
        <div className="hero-note">

          <p>
            <strong>Chuẩn VietGAP & OCOP</strong>
            <br />
            Hương vị chuẩn tự nhiên, tươi ngon và giàu dưỡng chất.
          </p>
        </div>
      </section>

      {/* GEO ENTITY DEFINITION SECTION */}
      <section className="geo-entity-section">
        <div className="geo-entity-container">
          <div className="geo-entity-card">
            <div className="geo-entity-kicker">
              <span> THƯƠNG HIỆU NÔNG SẢN ĐẶC SẢN CHÍNH THỨC</span>
            </div>
            <h2 className="geo-entity-title">
              Mãng Cầu Bà Đen Tây Ninh Là Gì?
            </h2>
            <p className="geo-entity-desc">
              <strong>Mãng Cầu Bà Đen Tây Ninh</strong> là nông sản đặc sản đạt chuẩn <strong>VietGAP &amp; OCOP 3 sao</strong>, được canh tác và thu hoạch trực tiếp tại vùng chân núi Bà Đen (Tây Ninh). Sản phẩm nổi tiếng khắp cả nước nhờ thổ nhưỡng đất xám phù sa đồi núi đặc thù, trái chín mắt nở to phẳng, thịt dai dẻo quánh, vị ngọt thanh tự nhiên và quy trình bao bọc túi bảo vệ an toàn 100% trên cành.
            </p>
            <div className="geo-badges-grid">
              <div className="geo-badge-item">

                <div className="geo-badge-text">
                  <strong>OCOP 3 Tây Ninh</strong>
                  <span>Đặc sản cấp tỉnh chứng nhận</span>
                </div>
              </div>
              <div className="geo-badge-item">

                <div className="geo-badge-text">
                  <strong>Tiêu Chuẩn VietGAP</strong>
                  <span>Canh tác an toàn sinh học</span>
                </div>
              </div>
              <div className="geo-badge-item">

                <div className="geo-badge-text">
                  <strong>Vùng Trồng Núi Bà Đen</strong>
                  <span>Thổ nhưỡng chân núi Tây Ninh</span>
                </div>
              </div>
              <div className="geo-badge-item">

                <div className="geo-badge-text">
                  <strong>Nông Sản Chính Gốc</strong>
                  <span>100% Thu hoạch tại vườn Tây Ninh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="intro section-pad" id="cau-chuyen">
        <div>
          <p className="section-kicker">
            Chuyện của vườn nhà
          </p>
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
            Khám phá các dòng sản phẩm
          </a>
        </div>
        <div className="intro-image">
          <img
            src="/vuon-nui-ba-den.jpg"
            alt="Vườn mãng cầu xanh tốt dưới chân Núi Bà Đen Tây Ninh"
            loading="lazy"
          />
          <span>Vùng trồng chân Núi Bà Đen, Tây Ninh</span>
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
            <p className="section-kicker">
              Từ khu vườn xanh
            </p>
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
              <p className="product-item-price"><strong>{product.price}</strong><span>giá tham khảo</span></p>
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
                  {product.featured ? "Đặt hộp quà" : "Đặt qua Zalo"}
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
            <p className="section-kicker">
              Hình ảnh thực tế
            </p>
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

            </a>
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
            >
              <span>02</span>
              Thùng 5kg tuyển chọn ăn gia đình

            </a>
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
            >
              <span>03</span>
              Thùng 10kg – 15kg đơn sỉ & doanh nghiệp

            </a>
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
            >
              <span>04</span>
              Giao nhanh TP.HCM, Hà Nội & toàn quốc

            </a>
          </div>
        </div>
      </section>

      {/* PARTNER RECRUITMENT HOMEPAGE BANNER */}
      <section className="home-partner-cta-section" style={{
        background: "linear-gradient(135deg, #10361c 0%, #1e4f2c 100%)",
        color: "#ffffff",
        padding: "clamp(48px, 6vw, 72px) 20px",
        margin: "0 0 20px 0"
      }}>
        <div style={{
          maxWidth: "1140px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px"
        }}>
          <div style={{ flex: "1 1 560px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(252, 211, 77, 0.15)",
              border: "1px solid rgba(252, 211, 77, 0.4)",
              color: "#fcd34d",
              padding: "4px 14px",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "16px"
            }}>
              <span> HỢP TÁC KINH DOANH 0 VỐN</span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.6rem, 2.4vw + 0.8rem, 2.4rem)",
              fontWeight: 900,
              lineHeight: 1.25,
              color: "#ffffff",
              marginBottom: "14px"
            }}>
              Tuyển Nhà Phân Phối &amp; Cộng Tác Viên (CTV) Toàn Quốc
            </h2>
            <p style={{
              fontSize: "1.02rem",
              lineHeight: 1.6,
              color: "#d1fae5",
              maxWidth: "620px",
              marginBottom: "24px"
            }}>
              Mãng Cầu Bà Đen hỗ trợ các khâu từ <strong>thu hoạch tại vườn, đóng thùng xốp, điều phối giao hàng và thu hộ COD</strong>. Đối tác &amp; CTV chủ động lên đơn và đối soát chiết khấu minh bạch!
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link
                href="/hop-tac"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#fcd34d",
                  color: "#12381e",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: "0.98rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(252, 211, 77, 0.3)"
                }}
              >
                <span>Xem Quyền Lợi &amp; Đăng Ký Ngay</span>

              </Link>
              <a
                href="https://zalo.me/0907215521"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1.5px solid rgba(255, 255, 255, 0.3)",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "0.98rem",
                  textDecoration: "none"
                }}
              >
                <span>Nhắn Zalo Tư Vấn</span>
              </a>
            </div>
          </div>

          <div style={{
            flex: "0 1 360px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "20px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}>
            <img
              src="/logo.png"
              alt="Mascot Mãng Cầu Bà Đen"
              width="100"
              height="100"
              style={{ objectFit: "contain", marginBottom: "14px", filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))" }}
            />
            <div style={{ color: "#fcd34d", fontWeight: 800, fontSize: "1.1rem", marginBottom: "4px" }}>
              MÃNG CẦU BÀ ĐEN
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.85rem", lineHeight: 1.45 }}>
               Bán hàng theo đơn, Không ôm hàng<br />
               Hái tươi tại vườn &amp; Ship toàn quốc<br />
               Hỗ trợ xử lý &amp; đối soát linh hoạt
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & KNOWLEDGE SECTION */}
      <section className="seo-guide section-pad" id="tin-tuc">
        <div className="seo-guide-heading">
          <div>
            <p className="section-kicker">
              Tin tức từ vườn
            </p>
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

            </a>
          </div>

          <div className="featured-articles-grid" style={{ display: "grid", gap: "24px" }}>
            {articles.map((art) => (
              <article key={art.slug} className="featured-article-card">
                <a href={art.slug} className="featured-article-img" aria-label={art.title}>
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                  />
                  <span className="featured-badge">{art.badge}</span>
                </a>
                <div className="featured-article-content">
                  <span className="featured-kicker">{art.kicker}</span>
                  <h3>
                    <a href={art.slug} className="article-title-link">
                      {art.title}
                    </a>
                  </h3>
                  <p>{art.description}</p>
                  <div className="featured-article-action">
                    <a href={art.slug} className="featured-read-btn">
                      <span>Đọc bài viết chi tiết</span>

                    </a>
                    <span className="featured-read-time">{art.readTime}, {art.date}</span>
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

            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="lien-he">
        <div className="contact-title">
          <p className="section-kicker light">
            Kết nối từ hôm nay
          </p>
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
            <b>Gọi ngay </b>
          </a>
          <a href="https://www.facebook.com/mangcaubaden.vn/" target="_blank" rel="noreferrer">
            <div>
              <small>Fanpage chính thức</small>
              <strong>Facebook Mãng Cầu Bà Đen</strong>
            </div>

          </a>
          <a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">
            <div>
              <small>Nhắn tin nhanh</small>
              <strong>Zalo 0907 215 521</strong>
            </div>

          </a>
          <a href="https://share.google/mKCDKiRjRo25L0TDN" target="_blank" rel="noopener noreferrer">

            <div>
              <small>Vị trí nhà vườn</small>
              <strong>Google Maps: Vườn Mãng Cầu</strong>
            </div>
            <b>Chỉ đường </b>
          </a>
          <a href="https://www.tiktok.com/@mangcaubaden" target="_blank" rel="noreferrer">

            <div>
              <small>Xem video tại vườn</small>
              <strong>TikTok @mangcaubaden</strong>
            </div>

          </a>
        </div>
      </section>

      {/* BOTTOM MOBILE APP NAVIGATION (ZERO GAP, FLUSH TO BOTTOM) */}
      <nav className="app-nav" aria-label="Điều hướng ứng dụng di động">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (window.location.hash) window.history.replaceState(null, "", "/");
          }}
          className={currentTab === "top" ? "is-active" : ""}
          aria-current={currentTab === "top" ? "page" : undefined}
        >
          <span>Trang chủ</span>
        </a>

        <a
          href="#san-pham"
          className={currentTab === "san-pham" ? "is-active" : ""}
          aria-current={currentTab === "san-pham" ? "page" : undefined}
        >
          <span>Sản phẩm</span>
        </a>

        <Link
          href="/hop-tac"
          aria-label="Hợp tác đối tác &amp; CTV"
        >
          <span>Hợp tác</span>
        </Link>

        <a
          href="#tin-tuc"
          className={currentTab === "tin-tuc" ? "is-active" : ""}
          aria-current={currentTab === "tin-tuc" ? "page" : undefined}
        >
          <span>Tin tức</span>
        </a>

        <a
          href="#lien-he"
          className={currentTab === "lien-he" ? "is-active" : ""}
          aria-current={currentTab === "lien-he" ? "page" : undefined}
        >
          <span>Liên hệ</span>
        </a>
      </nav>

      {/* JSON-LD SCHEMA FOR GEO, SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "AgriculturalBusiness", "LocalBusiness"],
                "@id": "https://mangcaubaden.vn/#organization",
                "name": "Mãng Cầu Bà Đen Tây Ninh - Mãng Cầu Bà Đen",
                "alternateName": "Đặc sản Mãng Cầu Bà Đen Tây Ninh",
                "url": "https://mangcaubaden.vn/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mangcaubaden.vn/logo.png",
                  "width": 512,
                  "height": 512
                },
                "image": "https://mangcaubaden.vn/og.png",
                "description": "Mãng Cầu Bà Đen Tây Ninh chính gốc, đạt chuẩn VietGAP & OCOP 3 sao, thu hoạch trực tiếp tại vùng trồng khu vực chân núi Bà Đen.",
                "telephone": "+84907215521",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Đường Bời Lời, Xã Thạnh Tân",
                  "addressLocality": "TP. Tây Ninh",
                  "addressRegion": "Tây Ninh",
                  "postalCode": "840000",
                  "addressCountry": "VN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 11.3742,
                  "longitude": 106.1685
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "06:00",
                  "closes": "21:00"
                },
                "sameAs": [
                  "https://www.facebook.com/mangcaubaden.vn/",
                  "https://mangcaubaden.vn/"
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://mangcaubaden.vn/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Mãng cầu Bà Đen bao nhiêu 1kg hôm nay?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Giá mãng cầu Bà Đen Tây Ninh thay đổi theo từng thời điểm mùa vụ và kích thước trái. Vui lòng liên hệ Hotline/Zalo 0907 215 521 để nhận báo giá sỉ & lẻ tại vườn mới nhất hôm nay."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Mãng cầu Bà Đen Tây Ninh vào mùa tháng mấy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mãng cầu Bà Đen Tây Ninh được thu hoạch quanh năm nhờ kỹ thuật rải vụ của nhà vườn. Trong đó, 2 vụ chính ngon nhất là Vụ Đông Xuân (Tháng 12 - Tháng 2) và Vụ Thu Đông (Tháng 8 - Tháng 10)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Cách chọn mãng cầu Bà Đen ngon không bị sượng?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Chọn quả có mắt na nở to phẳng, kẽ mắt hở rãnh màu trắng hồng, vỏ mỏng hơi mềm tay và cuống còn tươi. Tránh chọn quả mắt nhỏ còn xanh gắt để không bị sượng."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Mua mãng cầu Bà Đen chính gốc Tây Ninh ở đâu giao TPHCM & Hà Nội?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Đặt mua trực tiếp tại mangcaubaden.vn hoặc Zalo 0907 215 521. Mãng Cầu Bà Đen hái tươi tại vườn Thạnh Tân và đóng thùng bọc xốp giao hỏa tốc toàn quốc."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Mãng Cầu Bà Đen có chứng nhận an toàn nào?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mãng Cầu Bà Đen đạt chuẩn VietGAP & OCOP 3 sao tỉnh Tây Ninh, trái được bao bọc an toàn trên cành và có thông tin nguồn gốc rõ ràng."
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
