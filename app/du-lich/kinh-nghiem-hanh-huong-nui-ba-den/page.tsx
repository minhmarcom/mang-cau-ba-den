import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title:
    "Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa 2026 | Du Lịch Tây Ninh",
  description:
    "Cẩm nang kinh nghiệm hành hương Núi Bà Đen Tây Ninh chi tiết: Thời điểm lý tưởng, sơ đồ viếng Chùa Bà - Điện Bà, quần thể tượng Phật đỉnh 986m, đặt vé cáp treo và mẹo chuẩn bị lễ vật.",
  keywords: [
    "kinh nghiệm hành hương Núi Bà Đen",
    "hành hương Núi Bà Đen Tây Ninh",
    "viếng Chùa Bà Núi Bà Đen",
    "Điện Bà Linh Sơn Thánh Mẫu",
    "đặt vé cáp treo Núi Bà Đen",
    "tượng Phật Bà Tây Bổ Đà Sơn",
    "tượng Di Lặc Núi Bà Đen",
    "lễ vật cúng Núi Bà Đen",
    "mãng cầu dâng Chùa Bà",
    "du lịch tâm linh Tây Ninh 2026",
  ],
  alternates: {
    canonical: "/kinh-nghiem-hanh-huong-nui-ba-den/",
  },
  openGraph: {
    title:
      "Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa 2026 | Cẩm Nang Du Lịch Tây Ninh",
    description:
      "Hướng dẫn chi tiết lịch trình chiêm bái Núi Bà Đen từ chùa Trung, chùa Bà, Điện Linh Sơn Thánh Mẫu đến cụm tượng Phật và Vườn Ưu Đàm trên đỉnh 986m.",
    url: "https://mangcaubaden.vn/kinh-nghiem-hanh-huong-nui-ba-den/",
    siteName: "TAYNA – Mãng Cầu Bà Đen",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "https://mangcaubaden.vn/le-phat-ram-thang-gieng-nui-ba-den.jpg",
        width: 1200,
        height: 630,
        alt: "Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa 2026",
    description:
      "Cẩm nang hành hương Núi Bà Đen: Thời điểm, các điểm chùa cổ, đỉnh mây 986m và đặt vé cáp treo thuận tiện.",
    images: ["https://mangcaubaden.vn/le-phat-ram-thang-gieng-nui-ba-den.jpg"],
  },
};

const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Khu du lịch quốc gia Núi Bà Đen",
  description:
    "Quần thể danh thắng và di tích lịch sử tâm linh nổi tiếng bậc nhất Nam Bộ với độ cao 986m, nơi thờ Linh Sơn Thánh Mẫu và quần thể tượng Phật uy nghiêm trên đỉnh núi.",
  url: "https://mangcaubaden.vn/kinh-nghiem-hanh-huong-nui-ba-den/",
  image: "https://mangcaubaden.vn/le-phat-ram-thang-gieng-nui-ba-den.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khu phố Ninh Phú, Phường Bình Minh",
    addressLocality: "Thành phố Tây Ninh",
    addressRegion: "Tây Ninh",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.3789,
    longitude: 106.1683,
  },
  touristType: ["Pilgrimage", "Cultural Tourism", "Sightseeing"],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kinh nghiệm hành hương Núi Bà Đen trọn vẹn và ý nghĩa",
  description:
    "Tổng hợp kinh nghiệm hành hương Núi Bà Đen: Thời điểm chiêm bái, lộ trình viếng chùa Bà, Điện Bà, tượng Phật Bà Tây Bổ Đà Sơn, tượng Di Lặc sa thạch và hướng dẫn đặt vé cáp treo.",
  image: [
    "https://mangcaubaden.vn/le-phat-ram-thang-gieng-nui-ba-den.jpg",
    "https://mangcaubaden.vn/cung-le-trai-cay-mang-cau-ba-den.jpg",
    "https://mangcaubaden.vn/vuon-mang-cau-nui-ba-den-troi-xanh.jpg",
    "https://mangcaubaden.vn/hop-qua-mang-cau-ba-den-tayna.jpg",
  ],
  datePublished: "2026-09-10T08:00:00+07:00",
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
    "@id": "https://mangcaubaden.vn/kinh-nghiem-hanh-huong-nui-ba-den/",
  },
};

const faqItems = [
  [
    "Hành hương Núi Bà Đen nên đi vào mùa nào trong năm?",
    "Bạn có thể đi quanh năm, nhưng cao điểm tâm linh ý nghĩa nhất là: Lễ hội Xuân Núi Bà (từ mùng 4 đến hết tháng Giêng âm lịch), Lễ Vía Bà Linh Sơn Thánh Mẫu (mùng 4 - 6 tháng 5 âm lịch), và các dịp Đại lễ Phật Đản (15/4 âm lịch), Lễ Vu Lan (15/7 âm lịch).",
  ],
  [
    "Thứ tự các điểm chiêm bái tại Núi Bà Đen như thế nào là thuận tiện nhất?",
    "Lộ trình truyền thống và thuận tiện nhất: Dâng hương Chùa Trung (Linh Sơn Phước Trung Tự) ở chân núi -> Đi cáp treo tuyến Chùa Hang lên viếng Chùa Bà (Linh Sơn Tiên Thạch Tự) và Điện Bà -> Thăm Chùa Hòa Đồng, Chùa Hang, Động Ba Cô -> Đi cáp treo lên đỉnh 986m chiêm bái Tượng Phật Bà Tây Bổ Đà Sơn, Trụ kinh Bát Nhã, Tượng Di Lặc và Vườn Ưu Đàm.",
  ],
  [
    "Chuẩn bị lễ vật viếng Chùa Bà và Linh Sơn Thánh Mẫu cần những gì?",
    "Lễ vật viếng Bà và lễ Phật nên chuẩn bị hoa tươi (hoa sen, hoa huệ, hoa cúc), nhang đèn và trái cây tươi. Người miền Nam đặc biệt chuộng Mãng Cầu Bà Đen vì mang ý nghĩa 'cầu được ước thấy' thơm thảo, thành kính. Bạn có thể chọn Hộp quà 3 Trái Mãng Cầu Bà Đen VIP đóng hộp trang nhã của TAYNA để dâng lễ.",
  ],
  [
    "Đặt vé cáp treo Núi Bà Đen ở đâu nhanh và có ưu đãi?",
    "Bạn có thể đặt vé trực tuyến trực tiếp qua hệ thống Sun World để chủ động lịch trình, không phải xếp hàng chờ đợi tại quầy vé vào các ngày lễ Tết đông đúc.",
  ],
  [
    "Đi hành hương Núi Bà Đen cần lưu ý trang phục và những điều kiêng kỵ gì?",
    "Nên mặc trang phục kín đáo, lịch sự, không mặc váy ngắn, áo sát nách hay quần ngắn trên đầu gối khi vào chùa và điện thờ. Đi giày thể thao hoặc giày bệt êm chân vì cần đi bộ nhiều bậc thang. Giữ tâm thái trang nghiêm, nói nhỏ nhẹ và bảo vệ vệ sinh cảnh quan chung.",
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
      name: "Kinh nghiệm hành hương Núi Bà Đen",
      item: "https://mangcaubaden.vn/kinh-nghiem-hanh-huong-nui-ba-den/",
    },
  ],
};

export default function PilgrimageGuideArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SITE HEADER */}
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
                Kinh nghiệm hành hương Núi Bà Đen
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
                  Cẩm nang du lịch • Hành hương Tây Ninh
                </span>
                <span className="article-read-time">⏱ 9 phút đọc</span>
                <span className="article-pub-date">📅 10/09/2026</span>
              </div>

              <h1 className="article-title">
                Kinh nghiệm hành hương Núi Bà Đen{" "}
                <em>trọn vẹn và ý nghĩa</em>
              </h1>

              <p className="article-lead">
                Kinh nghiệm hành hương Núi Bà Đen là thông tin hữu ích dành cho du khách muốn chuẩn bị một chuyến chiêm bái thuận tiện, trang nghiêm và trọn vẹn tại ngọn núi linh thiêng của Tây Ninh. Từ hệ thống chùa cổ ở lưng chừng núi đến quần thể Phật giáo trên đỉnh cao 986 m, việc xác định trước thời điểm, lộ trình và đặt vé cáp treo sẽ giúp hành trình thanh tịnh, an yên hơn.
              </p>
            </div>
          </header>

          {/* MAIN HERO IMAGE */}
          <div className="article-hero-media">
            <div className="article-container">
              <figure className="article-figure-main">
                <img
                  src="/le-phat-ram-thang-gieng-nui-ba-den.jpg"
                  alt="Không khí hành hương và chiêm bái trang nghiêm tại quần thể Núi Bà Đen Tây Ninh"
                  className="article-img"
                  width="1200"
                  height="630"
                  style={{ maxHeight: "580px", objectFit: "cover" }}
                />
                <figcaption className="article-figcaption">
                  Núi Bà Đen là điểm hành hương nổi bật với quần thể tâm linh quy mô lớn bậc nhất Nam Bộ.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* ARTICLE BODY CONTENT */}
          <div className="article-body">
            <div className="article-container article-prose">
              {/* TABLE OF CONTENTS */}
              <div className="article-toc" id="toc">
                <p className="toc-title">Mục lục cẩm nang hành hương</p>
                <ol>
                  <li>
                    <a href="#diem-hanh-huong-noi-tieng">1. Núi Bà Đen là điểm hành hương nổi tiếng tại Nam Bộ</a>
                  </li>
                  <li>
                    <a href="#thoi-diem-hanh-huong">2. Nên hành hương Núi Bà Đen vào thời điểm nào?</a>
                    <ol>
                      <li><a href="#dau-nam">2.1. Hành hương vào dịp đầu năm</a></li>
                      <li><a href="#le-via-ba">2.2. Hành hương vào dịp Lễ Vía Bà</a></li>
                      <li><a href="#le-phat-giao">2.3. Các dịp lễ Phật giáo đáng chú ý</a></li>
                    </ol>
                  </li>
                  <li>
                    <a href="#diem-den-lung-chung-nui">3. Những điểm nên đi khi hành hương Núi Bà Đen (Khu vực Chùa Bà)</a>
                    <ol>
                      <li><a href="#chua-trung">3.1. Linh Sơn Phước Trung Tự (Chùa Trung)</a></li>
                      <li><a href="#chua-ba">3.2. Linh Sơn Tiên Thạch Tự (Chùa Bà)</a></li>
                      <li><a href="#dien-ba">3.3. Điện Bà Linh Sơn Thánh Mẫu</a></li>
                      <li><a href="#chua-hoa-dong-chua-hang">3.4. Chùa Hòa Đồng và Chùa Hang</a></li>
                      <li><a href="#chua-quan-am-dong-ba-co">3.5. Chùa Quan Âm và Động Ba Cô</a></li>
                    </ol>
                  </li>
                  <li>
                    <a href="#diem-den-dinh-nui">4. Những điểm chiêm bái trên đỉnh Núi Bà Đen (986 m)</a>
                    <ol>
                      <li><a href="#phat-ba-tay-bo-da-son">4.1. Tượng Phật Bà Tây Bổ Đà Sơn</a></li>
                      <li><a href="#tru-kinh-bat-nha">4.2. Trụ kinh Bát Nhã và Kinh Luân</a></li>
                      <li><a href="#tuong-di-lac">4.3. Tượng Di Lặc Bồ Tát sa thạch</a></li>
                      <li><a href="#vuon-uu-dam">4.4. Tượng Đức Phật Câu Na Hàm Mâu Ni và Vườn Ưu Đàm</a></li>
                    </ol>
                  </li>
                  <li>
                    <a href="#chuan-bi-le-vat">5. Gợi ý chuẩn bị lễ vật trang nghiêm &amp; Mãng Cầu Bà Đen dâng lễ</a>
                  </li>
                  <li>
                    <a href="#faq">6. Câu hỏi thường gặp khi hành hương Núi Bà Đen (FAQ)</a>
                  </li>
                </ol>
              </div>

              <h2 id="diem-hanh-huong-noi-tieng">1. Núi Bà Đen là điểm hành hương nổi tiếng tại Nam Bộ</h2>
              <p>
                Với độ cao 986 m, <strong>Núi Bà Đen</strong> được biết đến là nóc nhà Nam Bộ và cũng là biểu tượng nổi bật của vùng đất Tây Ninh. Khi đến đây, bạn không chỉ được chiêm ngưỡng cảnh quan núi non kỳ vĩ, mây ngàn bồng bềnh mà còn có thể bước vào một hành trình tâm linh sâu sắc kéo dài từ chân núi, lưng chừng núi đến đỉnh cao.
              </p>
              <p>
                Hệ thống chùa, điện thờ cổ kính hòa cùng các công trình Phật giáo kỳ vĩ tạo nên một không gian hành hương linh thiêng, phù hợp với du khách muốn tìm sự thanh tịnh trong tâm hồn và khám phá văn hóa bản địa.
              </p>

              <figure className="article-figure-inline">
                <img
                  src="/vuon-mang-cau-nui-ba-den-troi-xanh.jpg"
                  alt="Núi Bà Đen sừng sững nóc nhà Nam Bộ giữa nền trời xanh Tây Ninh"
                  loading="lazy"
                  style={{ maxHeight: "520px", objectFit: "cover", width: "100%", borderRadius: "16px" }}
                />
                <figcaption>
                  Núi Bà Đen – ngọn núi cao nhất Nam Bộ (986m), biểu tượng văn hóa và tâm linh của vùng đất Tây Ninh.
                </figcaption>
              </figure>

              <p>
                Điểm đặc biệt của Núi Bà Đen nằm ở tín ngưỡng thờ <strong>Linh Sơn Thánh Mẫu</strong>, gắn liền với nhiều truyền thuyết linh ứng được lưu truyền qua nhiều thế hệ. Từ năm 1989, Núi Bà Đen đã được công nhận là Di tích lịch sử và danh thắng cấp Quốc gia, khẳng định vị trí tôn quý trong đời sống tinh thần của nhân dân Nam Bộ.
              </p>

              <h2 id="thoi-diem-hanh-huong">2. Nên hành hương Núi Bà Đen vào thời điểm nào?</h2>

              <h3 id="dau-nam">2.1. Hành hương vào dịp đầu năm</h3>
              <p>
                Nếu bạn muốn kết hợp hành hương với không khí lễ hội truyền thống rộn ràng, đầu năm là thời điểm lý tưởng nhất. <strong>Lễ hội Xuân Núi Bà Đen</strong> diễn ra từ ngày 4 đến ngày 30 tháng Giêng âm lịch, gắn với nhiều hoạt động như dâng hương, lễ dâng đăng cầu an và chiêm bái đầu năm.
              </p>
              <p>
                Khi hành hương vào dịp này, bạn nên sắp xếp chiêm bái khu Chùa Bà ở lưng chừng núi trước, sau đó tiếp tục lên đỉnh núi để ngắm mây và viếng tượng Phật Bà Tây Bổ Đà Sơn. Việc chia chặng hợp lý sẽ giúp hành trình diễn ra nhẹ nhàng, tránh mệt mỏi.
              </p>

              <h3 id="le-via-ba">2.2. Hành hương vào dịp Lễ Vía Bà</h3>
              <p>
                Nếu bạn muốn cảm nhận trọn vẹn nét đặc trưng của tín ngưỡng thờ Mẫu, <strong>Lễ Vía Bà Linh Sơn Thánh Mẫu</strong> là thời điểm quan trọng nhất trong năm. Lễ diễn ra từ <strong>ngày 4 đến ngày 6 tháng 5 âm lịch</strong>, quy tụ nhiều nghi thức cổ truyền: trình thập cúng, lễ rước, lễ tắm Bà và đại lễ dâng đăng lung linh.
              </p>
              <p>
                Lễ Vía Bà Linh Sơn Thánh Mẫu đã được công nhận là <em>Di sản văn hóa phi vật thể quốc gia</em>. Hành hương vào dịp này tại Linh Sơn Tiên Thạch Tự và Điện Bà sẽ giúp bạn thấu hiểu sâu sắc đời sống tinh thần được gìn giữ qua hàng trăm năm của người dân Tây Ninh.
              </p>

              <h3 id="le-phat-giao">2.3. Các dịp lễ Phật giáo đáng chú ý</h3>
              <p>
                Bên cạnh Lễ hội Xuân và Lễ Vía Bà, bạn có thể lựa chọn các ngày đại lễ Phật giáo giàu ý nghĩa:
              </p>
              <ul>
                <li><strong>Ngày 19 tháng 2 âm lịch:</strong> Lễ Vía Quán Thế Âm Bồ Tát đản sinh.</li>
                <li><strong>Ngày 15 tháng 4 âm lịch:</strong> Đại lễ Phật Đản (Vesak).</li>
                <li><strong>Ngày 15 tháng 7 âm lịch:</strong> Đại lễ Vu Lan báo hiếu công ơn cha mẹ.</li>
                <li><strong>Ngày 19 tháng 9 âm lịch:</strong> Lễ Vía Quán Thế Âm Bồ Tát xuất gia.</li>
              </ul>

              <h2 id="diem-den-lung-chung-nui">3. Những điểm nên đi khi hành hương Núi Bà Đen (Khu vực Chùa Bà)</h2>

              <h3 id="chua-trung">3.1. Linh Sơn Phước Trung Tự (Chùa Trung)</h3>
              <p>
                Tọa lạc ngay dưới chân núi, <strong>Linh Sơn Phước Trung Tự</strong> (thường gọi là Chùa Trung) là điểm dừng chân đầu tiên. Ngôi chùa mang nét kiến trúc Phật giáo miền Nam cổ kính với các hoa văn chạm khắc tinh xảo, khuôn viên thanh tịnh với vườn bồ đề và giảng đường Tâm Hòa rợp bóng cây.
              </p>

              {/* BOOKING CALLOUT 1 - CÁP TREO CHÙA HANG KHỨ HỒI */}
              <div
                style={{
                  background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                  border: "2px solid #22c55e",
                  borderRadius: "16px",
                  padding: "24px",
                  margin: "28px 0",
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(34,197,94,0.12)",
                }}
              >
                <span style={{ background: "#22c55e", color: "white", padding: "4px 12px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
                  Tuyến Viếng Chùa Bà Thuận Tiện
                </span>
                <h4 style={{ margin: "12px 0 8px 0", color: "#14532d", fontSize: "1.3rem", fontWeight: 800 }}>
                  Vé Cáp Treo Chùa Hang Khứ Hồi (Lên Chùa Bà &amp; Điện Bà)
                </h4>
                <p style={{ color: "#166534", margin: "0 0 16px 0", fontSize: "15px", lineHeight: 1.6 }}>
                  Di chuyển êm ái chỉ trong 5 phút từ chân núi lên Chùa Bà, tiết kiệm sức lực, ngắm trọn cảnh sắc thung lũng xanh mướt.
                </p>
                <a
                  href="https://tayninh.lnm.vn"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#16a34a",
                    color: "white",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    fontWeight: 800,
                    fontSize: "16px",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(22,163,74,0.3)",
                  }}
                >
                  <span>👉 ĐẶT VÉ CÁP TREO CHÙA HANG NGAY!</span>
                  <span>➔</span>
                </a>
              </div>

              <h3 id="chua-ba">3.2. Linh Sơn Tiên Thạch Tự (Chùa Bà)</h3>
              <p>
                Lên đến lưng chừng núi, bạn sẽ đến <strong>Linh Sơn Tiên Thạch Tự</strong> (thường gọi là Chùa Bà) – ngôi chùa cổ nhất trong hệ thống chùa tại Núi Bà Đen được khai sơn từ giữa thế kỷ XVIII. Trải qua hơn 300 năm, chùa vẫn lưu giữ hai cột đá xanh chạm hình rồng uy nghi ở tiền đường và tôn trí ngọc xá lợi Phật linh thiêng.
              </p>

              <h3 id="dien-ba">3.3. Điện Bà Linh Sơn Thánh Mẫu</h3>
              <p>
                Ngay sát cạnh Linh Sơn Tiên Thạch Tự là <strong>Điện Bà Linh Sơn Thánh Mẫu</strong> – nơi chiêm bái trang nghiêm nhất trên sườn núi. Điện được xây dựng nương theo vách đá tự nhiên nhô ra từ lòng núi, tạo nên không gian thờ phụng vừa huyền bí vừa linh thiêng. Đây là nơi hàng triệu du khách đến dâng hương, cầu bình an, may mắn và tài lộc mỗi năm.
              </p>

              <figure className="article-figure-inline">
                <img
                  src="/cung-le-trai-cay-mang-cau-ba-den.jpg"
                  alt="Mâm cúng lễ trái cây trang nghiêm dâng Chùa Bà và Điện Linh Sơn Thánh Mẫu"
                  loading="lazy"
                  style={{ maxHeight: "520px", objectFit: "cover", width: "100%", borderRadius: "16px" }}
                />
                <figcaption>
                  Mâm lễ trái cây trang nghiêm với Mãng Cầu Bà Đen tươi sạch – lễ vật thảo thơm dâng cúng Linh Sơn Thánh Mẫu.
                </figcaption>
              </figure>

              <h3 id="chua-hoa-dong-chua-hang">3.4. Chùa Hòa Đồng và Chùa Hang</h3>
              <p>
                Rời khu Chùa Bà, bạn có thể men theo đường đá rợp bóng cây để đến <strong>Chùa Hòa Đồng</strong> nhỏ nhắn tĩnh mịch, chiêm bái tượng Phật Thích Ca Mâu Ni Nhập Niết Bàn.
              </p>
              <p>
                Tiếp đó là <strong>Linh Sơn Long Châu (Chùa Hang)</strong> được hình thành từ năm 1864, gắn liền với huyền thoại Ông Đá Nứt. Không gian chánh điện nằm lọt thỏm trong lòng hang đá tự nhiên mang lại cảm giác mát lạnh và thanh tịnh lạ thường.
              </p>

              <h3 id="chua-quan-am-dong-ba-co">3.5. Chùa Quan Âm và Động Ba Cô</h3>
              <p>
                Nằm ở vị trí cao trên sườn núi, <strong>Chùa Quan Âm</strong> là nơi thờ Quan Thế Âm Bồ Tát và Linh Sơn Thánh Mẫu. Ngay gần đó là <strong>Động Ba Cô</strong> – hang đá gắn liền với truyền thuyết về ba vị nữ cư sĩ lên núi tu hành, bốc thuốc cứu người, được nhân dân lập bàn thờ phụng nhớ ơn.
              </p>

              <h2 id="diem-den-dinh-nui">4. Những điểm chiêm bái trên đỉnh Núi Bà Đen (986 m)</h2>

              {/* BOOKING CALLOUT 2 - COMBO TÂM LINH ĐỈNH VÂN SƠN & CHÙA HANG */}
              <div
                style={{
                  background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                  border: "2px solid #3b82f6",
                  borderRadius: "16px",
                  padding: "24px",
                  margin: "28px 0",
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(59,130,246,0.12)",
                }}
              >
                <span style={{ background: "#2563eb", color: "white", padding: "4px 12px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
                  Trọn Vẹn Hành Trình Tâm Linh 2026
                </span>
                <h4 style={{ margin: "12px 0 8px 0", color: "#1e3a8a", fontSize: "1.3rem", fontWeight: 800 }}>
                  Combo Cáp Treo Đỉnh Vân Sơn Khứ Hồi &amp; Chùa Hang
                </h4>
                <p style={{ color: "#1e40af", margin: "0 0 16px 0", fontSize: "15px", lineHeight: 1.6 }}>
                  Vé trọn gói viếng cả Chùa Bà và chinh phục đỉnh cao 986m chiêm bái Đại tượng Phật Bà Tây Bổ Đà Sơn, Tượng Di Lặc và Vườn Ưu Đàm.
                </p>
                <a
                  href="https://tayninh.lnm.vn"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#2563eb",
                    color: "white",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    fontWeight: 800,
                    fontSize: "16px",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
                  }}
                >
                  <span>👉 ĐẶT VÉ COMBO HÀNH TRÌNH TÂM LINH NGAY!</span>
                  <span>➔</span>
                </a>
              </div>

              <h3 id="phat-ba-tay-bo-da-son">4.1. Tượng Phật Bà Tây Bổ Đà Sơn</h3>
              <p>
                Trên đỉnh núi cao 986 m, công trình kỳ vĩ nổi bật giữa mây trời là <strong>Đại tượng Phật Bà Tây Bổ Đà Sơn</strong>. Tượng có chiều cao 72 m, đúc từ hơn 170 tấn đồng đỏ nguyên chất, xác lập kỷ lục tượng Phật Bà bằng đồng cao nhất châu Á tọa lạc trên đỉnh núi. Tượng mang dáng đứng trang nghiêm, tay cầm bình cam lộ hướng ánh nhìn nhân từ xuống đồng bằng Tây Ninh.
              </p>
              <p>
                Ngay dưới chân tượng là <strong>Trung tâm triển lãm Phật giáo</strong> 4 tầng hiện đại, nơi tôn trí và trưng bày các phiên bản mô phỏng những kiệt tác điêu khắc Phật giáo kinh điển của Việt Nam và thế giới, cùng hệ thống công nghệ 3D mapping sống động.
              </p>

              <h3 id="tru-kinh-bat-nha">4.2. Trụ kinh Bát Nhã và Kinh Luân</h3>
              <p>
                Quanh quảng trường đỉnh núi là cụm <strong>5 Trụ kinh Bát Nhã</strong> bằng đá granite đen kim sa, trong đó trụ lớn nhất cao 19,8 m, đường kính 2 m. Trên thân các trụ kinh được khắc dát vàng hơn 12.000 chữ kinh Tây Tạng, tượng trưng cho ngọn đuốc trí tuệ xua tan vô minh.
              </p>
              <p>
                Gần đó là dãy <strong>Kinh Luân (bánh xe cầu nguyện)</strong> xoay quanh trục. Khách hành hương có thể vừa chậm rãi xoay từng kinh luân vừa niệm Phật, gửi gắm lời cầu nguyện an lành đến gia đình và vạn vật.
              </p>

              <h3 id="tuong-di-lac">4.3. Tượng Di Lặc Bồ Tát sa thạch</h3>
              <p>
                Điểm nhấn mới đầy ấn tượng trên đỉnh núi là <strong>Đại tượng Phật Di Lặc</strong> cao 36 m, rộng 45 m, được ghép từ 6.688 viên đá sa thạch tự nhiên. Nụ cười hỷ xả, bao dung của Đức Di Lặc mang đến cảm giác an vui, nhẹ nhõm vô cùng cho du khách sau hành trình dài.
              </p>
              <p>
                Phía trước tượng là <strong>Cầu Ước</strong> uốn cong giữa biển mây và hồ thác nước chảy róc rách, là chốn chiêm bái gửi gắm những ước nguyện tốt lành cho tương lai.
              </p>

              <h3 id="vuon-uu-dam">4.4. Tượng Đức Phật Câu Na Hàm Mâu Ni và Vườn Ưu Đàm</h3>
              <p>
                Tiếp nối hành trình là <strong>Vườn Ưu Đàm</strong>, nơi tôn trí tượng Đức Phật Câu Na Hàm Mâu Ni cao 7,2 m bằng đồng đỏ ngự dưới bóng cây sung thiêng. Cụm công trình tạo nên trục kết nối tâm linh hoàn hảo: <em>Quá khứ (Phật Câu Na Hàm Mâu Ni) – Hiện tại (Phật Bà Tây Bổ Đà Sơn) – Tương lai (Đức Di Lặc Bồ Tát)</em>.
              </p>

              <h2 id="chuan-bi-le-vat">5. Gợi ý chuẩn bị lễ vật trang nghiêm &amp; Mãng Cầu Bà Đen dâng lễ</h2>
              <p>
                Trong văn hóa tâm linh Nam Bộ, người hành hương viếng Núi Bà Đen luôn chuộng dâng cúng <strong>Mãng Cầu Bà Đen</strong> trên mâm ngũ quả. Chữ "Cầu" trong mãng cầu biểu trưng cho lời sở cầu như ý, cầu tài cầu lộc, cầu bình an cho gia đạo.
              </p>

              <figure className="article-figure-inline">
                <img
                  src="/hop-qua-mang-cau-ba-den-tayna.jpg"
                  alt="Hộp quà 3 trái VIP Mãng Cầu Bà Đen TAYNA trang trọng dâng lễ Chùa Bà"
                  loading="lazy"
                  style={{ maxHeight: "520px", objectFit: "cover", width: "100%", borderRadius: "16px" }}
                />
                <figcaption>
                  Hộp quà 3 Trái VIP Mãng Cầu Bà Đen TAYNA – thiết kế quai xách chỉn chu, trái tuyển chọn chuẩn dâng cúng Chùa Bà.
                </figcaption>
              </figure>

              {/* TAYNA CALLOUT BOX */}
              <div className="article-callout-box">
                <div className="callout-badge">🌿 LỄ VẬT DÂNG BÀ &amp; ĐẶC SẢN LÀM QUÀ</div>
                <h3>Đặt Hộp Quà 3 Trái VIP TAYNA Dâng Cúng Núi Bà Đen</h3>
                <p>
                  Để chuyến hành hương thêm trang nghiêm và trọn vẹn, quý khách có thể chuẩn bị sẵn <strong>Hộp Quà 3 Trái Mãng Cầu Bà Đen VIP</strong> của nhà vườn TAYNA:
                </p>
                <ul>
                  <li><strong>Trái tuyển chọn loại 1:</strong> Mắt nở to căng phẳng, trái cứng phom đẹp thuận tiện di chuyển cáp treo và dâng lễ.</li>
                  <li><strong>Hộp giấy quai xách cao cấp:</strong> Mặt kính mica trang nhã, thể hiện lòng thành kính nơi cửa Phật.</li>
                  <li><strong>Giao tận nơi hoặc nhận tại chân núi:</strong> Có dịch vụ gửi hỏa tốc về TP.HCM và các tỉnh sau chuyến du lịch.</li>
                </ul>
                <div className="callout-actions">
                  <Link href="/san-pham/hop-mang-cau-ba-den-3-trai-vip" className="callout-btn primary">
                    Xem Hộp 3 Trái VIP Dâng Lễ ➔
                  </Link>
                  <a href="tel:0907215521" className="callout-btn secondary">
                    Hotline / Zalo: 0907 215 521
                  </a>
                </div>
              </div>

              <p>
                Một chuyến hành hương sẽ trở nên trọn vẹn hơn khi bạn thấu hiểu ý nghĩa của từng chặng đường tâm linh. Hy vọng cẩm nang kinh nghiệm hành hương Núi Bà Đen trên đây sẽ giúp bạn và gia đình có một chuyến đi an lạc, thanh tịnh và gặt hái nhiều phúc lành!
              </p>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="article-container" id="faq">
            <section className="article-faq-section" aria-label="Câu hỏi thường gặp khi hành hương Núi Bà Đen">
              <div className="faq-header">
                <span className="faq-kicker">Giải đáp cẩm nang</span>
                <h2 className="faq-title">
                  Câu hỏi thường gặp khi hành hương Núi Bà Đen
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
            <div className="related-section-header">
              <span className="related-section-kicker">Góc đọc thêm</span>
              <h2 className="related-section-title">Cẩm nang Du lịch Tây Ninh liên quan</h2>
            </div>

            <div className="related-articles-grid">
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

              <Link
                href="/cac-dip-le-lon-cung-trong-nam-y-nghia-mang-cau-ba-den/"
                className="related-article-card"
              >
                <div className="related-card-thumb">
                  <img
                    src="/cung-le-trai-cay-mang-cau-ba-den.jpg"
                    alt="Các dịp lễ lớn cúng trong năm của người Việt"
                    loading="lazy"
                  />
                  <span className="related-thumb-tag">Văn hóa cúng lễ</span>
                </div>
                <div className="related-card-body">
                  <div className="related-card-meta">
                    <span>7 phút đọc</span>
                    <span>•</span>
                    <time>Tháng 8/2026</time>
                  </div>
                  <h3 className="related-card-title">
                    Các dịp lễ lớn cúng trong năm của người Việt và ý nghĩa của mãng cầu Bà Đen
                  </h3>
                  <p className="related-card-desc">
                    Tìm hiểu các dịp lễ cúng lớn từ Tết Nguyên Đán, Rằm tháng Giêng, Vu Lan đến ý nghĩa dâng cúng mãng cầu Bà Đen.
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
