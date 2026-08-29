import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Mãng Cầu Bà Đen – Đặc sản Tây Ninh: Tươi ngon chuẩn vị từ vườn nhà | Mãng Cầu Bà Đen",
  description:
    "Khám phá nét độc đáo của mãng cầu Bà Đen Tây Ninh: hương vị ngọt thanh dai dẻo, quy trình bao trái an toàn trên cành, thu hoạch trong ngày và chuẩn chất lượng VietGAP & OCOP.",
  keywords: [
    "mãng cầu Bà Đen",
    "mãng cầu Tây Ninh",
    "đặc sản Tây Ninh",
    "mãng cầu Bà Đen chính gốc",
    "hộp quà mãng cầu 3 trái",
    "mãng cầu VietGAP Tây Ninh",
    "mãng cầu OCOP Tây Ninh",
    "mua mãng cầu Tây Ninh",
    "vườn mãng cầu núi Bà Đen",
  ],
  alternates: {
    canonical: "/mang-cau-ba-den-nabaden-dac-san-tay-ninh/",
  },
  openGraph: {
    title: "Mãng Cầu Bà Đen – Đặc sản Tây Ninh: Tươi ngon chuẩn vị từ vườn nhà | Mãng Cầu Bà Đen",
    description:
      "Khám phá nét độc đáo của mãng cầu Bà Đen Tây Ninh: hương vị ngọt thanh dai dẻo, quy trình bao trái an toàn trên cành, thu hoạch trong ngày và chuẩn chất lượng VietGAP & OCOP.",
    url: "https://mangcaubaden.vn/mang-cau-ba-den-nabaden-dac-san-tay-ninh/",
    siteName: "Mãng Cầu Bà Đen",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "https://mangcaubaden.vn/vuon-mang-cau-tay-ninh-bao-trai.jpg",
        width: 1200,
        height: 630,
        alt: "Vườn mãng cầu xanh ngát dưới chân Núi Bà Đen Tây Ninh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mãng Cầu Bà Đen – Đặc sản Tây Ninh: Tươi ngon chuẩn vị từ vườn nhà | Mãng Cầu Bà Đen",
    description:
      "Khám phá nét độc đáo của mãng cầu Bà Đen Tây Ninh: hương vị ngọt thanh dai dẻo, quy trình bao trái an toàn trên cành và chất lượng chuẩn VietGAP & OCOP.",
    images: ["https://mangcaubaden.vn/vuon-mang-cau-tay-ninh-bao-trai.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Mãng Cầu Bà Đen – Đặc sản Tây Ninh, tươi ngon từ vườn đến tay khách hàng",
  description:
    "Mãng Cầu Bà Đen mang đến hương vị chuẩn tự nhiên, tươi ngon và giàu dưỡng chất. Được tuyển chọn kỹ lưỡng từ nguồn nông sản an toàn, trồng trọt theo tiêu chuẩn VietGAP và OCOP.",
  image: ["https://mangcaubaden.vn/vuon-mang-cau-tay-ninh-bao-trai.jpg"],
  datePublished: "2026-08-07T08:00:00+07:00",
  dateModified: "2026-08-15T08:00:00+07:00",
  author: {
    "@type": "Organization",
    name: "Mãng Cầu Bà Đen NABADEN",
    url: "https://mangcaubaden.vn/",
  },
  publisher: {
    "@type": "Organization",
    name: "Mãng Cầu Bà Đen Tây Ninh",
    logo: {
      "@type": "ImageObject",
      url: "https://mangcaubaden.vn/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mangcaubaden.vn/mang-cau-ba-den-nabaden-dac-san-tay-ninh/",
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
      name: "Tin tức",
      item: "https://mangcaubaden.vn/tin-tuc/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mãng Cầu Bà Đen – Đặc sản Tây Ninh",
      item: "https://mangcaubaden.vn/tin-tuc/mang-cau-ba-den-nabaden-dac-san-tay-ninh/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mãng cầu Bà Đen Tây Ninh có tươi ngon khi giao đến tay khách hàng không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà vườn ưu tiên thu hoạch trái trong ngày vào sáng sớm khi trái đạt độ già chuẩn, phân loại thủ công kỹ lưỡng, bọc lưới bảo vệ chống dập và đóng thùng thông khí chắc chắn nên trái giữ trọn độ tươi ngon tự nhiên khi giao.",
      },
    },
    {
      "@type": "Question",
      name: "Mãng cầu Bà Đen Tây Ninh có thích hợp làm quà biếu tặng không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hộp quà 3 trái VIP và các thùng quà mãng cầu Tây Ninh tuyển chọn có ngoại hình tròn đều bắt mắt, hương thơm thanh khiết, đạt chuẩn VietGAP & OCOP, đóng gói trang nhã rất thích hợp làm quà biếu tặng gia đình, đối tác và khách hàng.",
      },
    },
    {
      "@type": "Question",
      name: "Vì sao mãng cầu trồng dưới chân núi Bà Đen lại có hương vị ngon khác biệt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Do thổ nhưỡng đất xám phù sa cổ quanh chân núi lửa cổ Bà Đen có khả năng thoát nước lý tưởng, cùng nền nhiệt nhiều nắng và biên độ nhiệt ngày đêm cao giúp cây mãng cầu tích tụ lượng đường tự nhiên đậm đà, thịt dai và thơm thanh.",
      },
    },
  ],
};

export default function ArticleBrandPage() {
  return (
    <div className="article-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Mãng Cầu Bà Đen NABADEN - Trang chủ">
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
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng">
          <Link href="/#cau-chuyen">Câu chuyện</Link>
          <Link href="/san-pham">Sản phẩm</Link>
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
          <Link
            className="mobile-order-btn"
            href="/#san-pham"
            aria-label="Đặt mua Mãng Cầu Bà Đen"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span>Đặt mua</span>
          </Link>
        </div>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="article-container article-content">
        {/* BREADCRUMB */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <Link href="/tin-tuc">Tin tức</Link>
          <span aria-hidden="true">/</span>
          <span className="current">Đặc sản Mãng Cầu Tây Ninh</span>
        </nav>

        {/* ARTICLE HEADER */}
        <header className="article-header">
          <div className="article-meta-badge">
            <span className="badge-kicker">Nông sản bản sắc</span>
            <span className="badge-dot">•</span>
            <time dateTime="2026-08-07">Tháng 8/2026</time>
            <span className="badge-dot">•</span>
            <span>4 phút đọc</span>
          </div>

          <h1 className="article-title">
            Mãng Cầu Bà Đen – <em>Đặc sản Tây Ninh</em>, tươi ngon từ vườn đến tay khách hàng
          </h1>

          <p className="article-lead">
            Mãng Cầu Bà Đen mang đến hương vị chuẩn tự nhiên, tươi ngon và giàu dưỡng chất. Được tuyển chọn kỹ lưỡng từ nguồn nông sản an toàn, từng trái mãng cầu kết tinh hương nắng gió phương Nam và tình đất lành dưới chân Núi Bà Đen.
          </p>
        </header>

        {/* FEATURED IMAGE */}
        <figure className="article-hero-media">
          <img
            src="/vuon-mang-cau-tay-ninh-bao-trai.jpg"
            alt="Vườn mãng cầu xanh ngát bao trái an toàn dưới trời xanh Tây Ninh"
          />
          <figcaption>
            Vùng trồng mãng cầu trù phú xanh ngát, từng trái được bao bọc an toàn trên cành dưới bầu trời Tây Ninh.
          </figcaption>
        </figure>

        {/* TABLE OF CONTENTS */}
        <div className="article-toc">
          <p className="toc-title">Mục lục nội dung bài viết</p>
          <ol>
            <li>
              <a href="#tinh-hoa-tay-ninh">1. Mãng cầu Bà Đen – Tinh hoa từ vùng đất Tây Ninh</a>
            </li>
            <li>
              <a href="#quy-trinh-bao-trai">2. Quy trình bao trái an toàn chuẩn VietGAP – OCOP</a>
            </li>
            <li>
              <a href="#thu-hoach-trong-ngay">3. Thu hoạch trong ngày – Gửi trọn sự tươi ngon</a>
            </li>
            <li>
              <a href="#hop-qua-y-nghia">4. Hộp quà 3 trái VIP – Món quà biếu trang nhã</a>
            </li>
            <li>
              <a href="#faq">5. Câu hỏi thường gặp về Mãng Cầu Bà Đen</a>
            </li>
          </ol>
        </div>

        {/* MAIN BODY */}
        <div className="article-body">
          <section id="tinh-hoa-tay-ninh">
          <h2>1. Mãng cầu Bà Đen – Tinh hoa từ vùng đất Tây Ninh</h2>
          <p>
            Khi nhắc đến ẩm thực và nông sản Tây Ninh, bên cạnh bánh tráng phơi sương Trảng Bàng hay muối tôm nức tiếng, <strong>mãng cầu Bà Đen</strong> luôn giữ vị trí đặc biệt trong lòng người tiêu dùng trên khắp cả nước.
          </p>
          <p>
            Được canh tác trực tiếp dưới chân <strong>Núi Bà Đen</strong> – ngọn núi cao nhất miền Nam Việt Nam, cây mãng cầu hưởng trọn nguồn nước ngầm tự nhiên thanh mát và tầng đất phù sa cổ giàu khoáng chất vi lượng. Điều kiện nhiệt độ ngày nắng chan hòa, đêm se lạnh giúp quả tích tụ hàm lượng đường tự nhiên cao, thịt quả trắng ngà, mịn màng, ít hạt và có vị ngọt thanh tao không gắt.
          </p>
        </section>

        <section id="quy-trinh-bao-trai">
          <h2>2. Quy trình bao trái an toàn chuẩn VietGAP – OCOP</h2>
          <p>
            Chất lượng vượt trội của mãng cầu Bà Đen không chỉ đến từ thiên nhiên ưu đãi mà còn là kết quả của kỹ thuật canh tác tỉ mỉ từ những người nông dân lành nghề:
          </p>
          <ul>
            <li>
              <strong>Bao trái 100% trên cành:</strong> Ngay từ khi trái còn nhỏ bằng ngón tay cái, nhà vườn đã dùng túi bọc chuyên dụng để bảo vệ trái trước côn trùng, ruồi vàng và thời tiết khắc nghiệt.
            </li>
            <li>
              <strong>Tiêu chuẩn VietGAP & OCOP an toàn:</strong> Quy trình bón phân hữu cơ sinh học, cắt tỉa cành thoáng khí, không sử dụng thuốc hóa học độc hại trong giai đoạn nuôi trái.
            </li>
            <li>
              <strong>Kiểm soát độ ngọt và hàm lượng dinh dưỡng:</strong> Trái phát triển tự nhiên đầy đủ ngày tuổi, giàu Vitamin C, B6, chất xơ và khoáng chất có lợi cho sức khỏe.
            </li>
          </ul>

          <figure className="article-inline-image">
            <img
              src="/nong-dan-thu-hoach-mang-cau.jpg"
              alt="Nhà nông tỉ mỉ thu hoạch từng trái mãng cầu tươi tại vườn Tây Ninh"
              loading="lazy"
            />
            <figcaption>
              Nhà vườn cẩn trọng thu hoạch từng trái đạt chuẩn độ già vào sáng sớm tinh mơ.
            </figcaption>
          </figure>
        </section>

          <section id="thu-hoach-trong-ngay">
            <h2>3. Thu hoạch trong ngày – Gửi trọn sự tươi ngon</h2>
            <p>
              Đối với mãng cầu ta, yếu tố then chốt quyết định hương vị khi đến tay người dùng là <strong>độ tươi và thời điểm thu hoạch</strong>:
            </p>
            <p>
              Những lứa trái chỉ được cắt vào sáng sớm khi mắt na đã nở to phẳng, gờ rãnh mở rộng màu trắng ngà. Sau đó, trái lập tức được vận chuyển về khu vực phân loại râm mát, kiểm tra từng quả, bọc lưới xốp bảo vệ chống va đập và đóng thùng carton thoáng khí.
            </p>
            <p>
              Việc rút ngắn tối đa thời gian từ lúc hái trên cành đến khi đóng thùng giúp trái giữ nguyên hương thơm tự nhiên và chín dẻo hoàn hảo sau 1-2 ngày vận chuyển.
            </p>
          </section>

          <section id="hop-qua-y-nghia">
            <h2>4. Hộp quà 3 trái VIP – Món quà biếu trang nhã</h2>
            <p>
              Đáp ứng nhu cầu biếu tặng cao cấp trong các dịp lễ tết, sự kiện, tri ân đối tác hay làm quà du lịch Tây Ninh, dòng sản phẩm <strong>Hộp quà 3 trái VIP</strong> được ra đời với sự chuẩn mực cao nhất:
            </p>

            <figure className="article-inline-image">
              <img
                src="/hop-qua-3-trai-vip.jpg"
                alt="Hộp quà mãng cầu Bà Đen 3 trái tuyển chọn thượng hạng"
                loading="lazy"
              />
              <figcaption>
                Hộp quà 3 trái VIP trang nhã với quai xách tiện lợi, tuyển chọn những quả mãng cầu tròn đều đẹp mắt nhất.
              </figcaption>
            </figure>

            {/* CALLOUT BOX */}
            <div className="article-cta-box">
              <h3>Thưởng thức mãng cầu Bà Đen chuẩn vị từ vườn hôm nay</h3>
              <p>
                Liên hệ trực tiếp với chúng tôi để đặt mua mãng cầu Bà Đen mới hái, chọn hộp quà biếu hoặc thùng sỉ với mức giá tốt nhất tại vườn.
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
            </div>
          </section>

          {/* FAQ SECTION */}
          <section id="faq" className="article-faq-section">
            <h2>5. Câu hỏi thường gặp về Mãng Cầu Bà Đen</h2>
            <div className="faq-list">
              <details open>
                <summary>
                  <span>01</span>
                  Mãng cầu Bà Đen Tây Ninh có tươi ngon khi giao đến tay khách hàng không?
                  <b aria-hidden="true">＋</b>
                </summary>
                <p>
                  Nhà vườn ưu tiên thu hoạch trái trong ngày vào sáng sớm khi trái đạt độ già chuẩn, phân loại thủ công kỹ lưỡng, bọc lưới bảo vệ chống dập và đóng thùng thông khí chắc chắn nên trái giữ trọn độ tươi ngon tự nhiên khi giao.
                </p>
              </details>

              <details>
                <summary>
                  <span>02</span>
                  Mãng cầu Bà Đen Tây Ninh có thích hợp làm quà biếu tặng không?
                  <b aria-hidden="true">＋</b>
                </summary>
                <p>
                  Hộp quà 3 trái VIP và các thùng quà mãng cầu Tây Ninh tuyển chọn có ngoại hình tròn đều bắt mắt, hương thơm thanh khiết, đạt chuẩn VietGAP & OCOP, đóng gói trang nhã rất thích hợp làm quà biếu tặng gia đình, đối tác và khách hàng.
                </p>
              </details>

              <details>
                <summary>
                  <span>03</span>
                  Vì sao mãng cầu trồng dưới chân núi Bà Đen lại có hương vị ngon khác biệt?
                  <b aria-hidden="true">＋</b>
                </summary>
                <p>
                  Do thổ nhưỡng đất xám phù sa cổ quanh chân núi lửa cổ Bà Đen có khả năng thoát nước lý tưởng, cùng nền nhiệt nhiều nắng và biên độ nhiệt ngày đêm cao giúp cây mãng cầu tích tụ lượng đường tự nhiên đậm đà, thịt dai và thơm thanh.
                </p>
              </details>
            </div>
          </section>
        </div>

        {/* RELATED ARTICLES SECTION */}
        <section className="article-related-section" aria-label="Bài viết cùng chuyên mục">
          <div className="related-section-header">
            <span className="related-section-kicker">Góc đọc thêm</span>
            <h2 className="related-section-title">Bài viết liên quan</h2>
          </div>

          <div className="related-articles-grid">
            <Link
              href="/tin-tuc/mua-mang-cau-ba-den-chinh-goc-tay-ninh/"
              className="related-article-card"
            >
              <div className="related-card-thumb">
                <img
                  src="/thuc-te-dong-goi-nhieu-thung.jpg"
                  alt="Kinh nghiệm chọn mua mãng cầu Bà Đen chính gốc Tây Ninh"
                  loading="lazy"
                />
                <span className="related-thumb-tag">Kinh nghiệm mua</span>
              </div>
              <div className="related-card-body">
                <div className="related-card-meta">
                  <span>5 phút đọc</span>
                  <span>•</span>
                  <time>Tháng 8/2026</time>
                </div>
                <h3 className="related-card-title">
                  Tìm mãng cầu Bà Đen chính gốc Tây Ninh ở đâu? Kinh nghiệm chọn mua chuẩn ngon
                </h3>
                <p className="related-card-desc">
                  Hướng dẫn chi tiết cách nhận biết độ già, phân biệt trái chuẩn gốc Tây Ninh, quy cách đóng gói chống va đập và bảng phân loại trái ăn gia đình hoặc biếu tặng.
                </p>
                <span className="related-card-link">
                  Đọc bài viết <span>→</span>
                </span>
              </div>
            </Link>
          </div>

          <div className="related-bottom-nav">
            <Link href="/tin-tuc" className="nav-pill-btn">
              ← Xem tất cả tin tức
            </Link>
            <Link href="/" className="nav-pill-btn secondary">
              ← Về trang chủ
            </Link>
          </div>
        </section>
      </article>

      {/* FOOTER */}
      <Footer backLink={{ href: "/tin-tuc", label: "Quay về Chuyên mục Tin tức & Cẩm nang" }} />
    </div>
  );
}
