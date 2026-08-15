import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tìm Mua Mãng Cầu Bà Đen Chính Gốc Tây Ninh Ở Đâu? | Cẩm Nang Nhà Vườn",
  description:
    "Kinh nghiệm tìm mua mãng cầu Bà Đen Tây Ninh chính gốc từ nhà vườn: cách chọn trái già, nhận biết độ chín, quy cách đóng gói và cách phân biệt trái ngon chuẩn vị.",
  keywords: [
    "mua mãng cầu Bà Đen",
    "mua mãng cầu Bà Đen chính gốc",
    "mãng cầu Bà Đen Tây Ninh",
    "mãng cầu Tây Ninh",
    "cách chọn mãng cầu Bà Đen",
    "giá mãng cầu Bà Đen",
    "địa chỉ mua mãng cầu Tây Ninh",
    "vườn mãng cầu Tây Ninh",
    "đặc sản Tây Ninh làm quà",
  ],
  alternates: {
    canonical: "/tin-tuc/mua-mang-cau-ba-den-chinh-goc-tay-ninh/",
  },
  openGraph: {
    title: "Tìm Mua Mãng Cầu Bà Đen Chính Gốc Tây Ninh Ở Đâu? | Cẩm Nang Nhà Vườn",
    description:
      "Kinh nghiệm tìm mua mãng cầu Bà Đen Tây Ninh chính gốc từ nhà vườn: cách chọn trái già, nhận biết độ chín, quy cách đóng gói và địa chỉ mua uy tín.",
    url: "https://mangcaubaden.vn/tin-tuc/mua-mang-cau-ba-den-chinh-goc-tay-ninh/",
    siteName: "Mãng Cầu Bà Đen",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "/thuc-te-dong-goi-nhieu-thung.jpg",
        width: 1200,
        height: 630,
        alt: "Mua mãng cầu Bà Đen chính gốc Tây Ninh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tìm Mua Mãng Cầu Bà Đen Chính Gốc Tây Ninh Ở Đâu? | Cẩm Nang Nhà Vườn",
    description:
      "Kinh nghiệm chọn mua mãng cầu Bà Đen Tây Ninh ngon, chuẩn nguồn gốc từ nhà vườn.",
    images: ["/thuc-te-dong-goi-nhieu-thung.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Tìm mãng cầu Bà Đen chính gốc Tây Ninh ở đâu? Kinh nghiệm chọn mua chuẩn ngon",
  description:
    "Khi tìm mua mãng cầu Bà Đen chính gốc Tây Ninh, người mua nên kiểm tra nguồn gốc vùng trồng, độ già của trái, cách phân loại, đóng gói và thời điểm giao hàng phù hợp.",
  image: ["https://mangcaubaden.vn/thuc-te-dong-goi-nhieu-thung.jpg"],
  datePublished: "2026-07-04T08:00:00+07:00",
  dateModified: "2026-08-15T08:00:00+07:00",
  author: {
    "@type": "Organization",
    name: "Ban Biên Tập Mãng Cầu Bà Đen",
    url: "https://mangcaubaden.vn/",
  },
  publisher: {
    "@type": "Organization",
    name: "Mãng Cầu Bà Đen Tây Ninh",
    logo: {
      "@type": "ImageObject",
      url: "https://mangcaubaden.vn/app-icon-512.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mangcaubaden.vn/tin-tuc/mua-mang-cau-ba-den-chinh-goc-tay-ninh/",
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
      name: "Cẩm nang & Tin tức",
      item: "https://mangcaubaden.vn/#cam-nang",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mua mãng cầu Bà Đen chính gốc Tây Ninh",
      item: "https://mangcaubaden.vn/tin-tuc/mua-mang-cau-ba-den-chinh-goc-tay-ninh/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mua mãng cầu Bà Đen chính gốc ở đâu uy tín?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bạn nên chọn các nhà vườn có vùng trồng trực tiếp quanh khu vực Núi Bà Đen Tây Ninh, có hình ảnh thu hoạch thực tế tại vườn, tiêu chuẩn phân loại trái rõ ràng và hỗ trợ vận chuyển an toàn (Hotline/Zalo: 0907 215 521).",
      },
    },
    {
      "@type": "Question",
      name: "Nên chọn mãng cầu già hay chín khi mua mang đi xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nếu mang đi xa hoặc làm quà biếu, nên chọn trái già cứng tay, mắt na nở phẳng to, rãnh nở trắng ngà và bọc lưới xốp bảo vệ. Trái sẽ chín dẻo tự nhiên trong 1-2 ngày di chuyển.",
      },
    },
    {
      "@type": "Question",
      name: "Mãng cầu Bà Đen có gì khác so với mãng cầu trồng ở vùng khác?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mãng cầu Bà Đen được nuôi dưỡng bởi thổ nhưỡng đất phù sa cổ quanh chân núi Bà Đen và biên độ nhiệt ngày đêm cao, giúp cơm trắng mịn, dai dẻo, ít hạt và có vị ngọt thanh xen lẫn chút chua nhẹ rất thanh mát.",
      },
    },
    {
      "@type": "Question",
      name: "Mãng cầu còn xanh có nên để trong tủ lạnh không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyệt đối không để mãng cầu còn xanh hoặc cứng vào tủ lạnh vì nhiệt độ thấp sẽ làm trái bị sượng và ngưng chín. Chỉ nên cho vào ngăn mát sau khi trái đã chín mềm vừa ăn.",
      },
    },
  ],
};

export default function ArticlePage() {
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
        <Link className="brand" href="/" aria-label="Mãng Cầu Bà Đen - Trang chủ">
          <span className="brand-mark">MC</span>
          <span className="brand-text">
            Mãng Cầu<br />Bà Đen
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng">
          <Link href="/#cau-chuyen">Câu chuyện</Link>
          <Link href="/#san-pham">Sản phẩm</Link>
          <Link href="/#hinh-anh">Hình ảnh</Link>
          <Link href="/#hop-tac">Hợp tác</Link>
          <Link href="/#cam-nang">Cẩm nang</Link>
          <Link href="/#lien-he">Liên hệ</Link>
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
        </div>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="article-container">
        {/* BREADCRUMB */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#cam-nang">Cẩm nang</Link>
          <span aria-hidden="true">/</span>
          <span className="current">Mua mãng cầu chính gốc</span>
        </nav>

        {/* ARTICLE HEADER */}
        <header className="article-header">
          <div className="article-meta-badge">
            <span className="badge-kicker">Cẩm nang mùa vụ</span>
            <span className="badge-dot">•</span>
            <time dateTime="2026-07-04">Cập nhật tháng 8/2026</time>
            <span className="badge-dot">•</span>
            <span>5 phút đọc</span>
          </div>

          <h1 className="article-title">
            Tìm mãng cầu Bà Đen <em>chính gốc Tây Ninh</em> ở đâu? Kinh nghiệm chọn mua chuẩn ngon
          </h1>

          <p className="article-lead">
            Mãng cầu Bà Đen là đặc sản nức tiếng của Tây Ninh nhờ vị ngọt thanh, cơm trắng dẻo và hương thơm thanh khiết. Để tránh mua phải hàng trôi nổi kém chất lượng, hãy cùng tìm hiểu kinh nghiệm chọn mua mãng cầu chuẩn gốc từ chính các nhà vườn Tây Ninh.
          </p>

          <div className="author-row">
            <div className="author-avatar">MC</div>
            <div>
              <strong>Ban Biên Tập Mãng Cầu Bà Đen</strong>
              <span>Chuyên trang thông tin & kết nối nông sản Tây Ninh</span>
            </div>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <figure className="article-hero-media">
          <img
            src="/thuc-te-dong-goi-nhieu-thung.jpg"
            alt="Mãng cầu Bà Đen Tây Ninh chính gốc đóng thùng sẵn sàng vận chuyển"
          />
          <figcaption>
            Những thùng mãng cầu Bà Đen tuyển chọn kỹ lưỡng, bọc lưới xốp bảo vệ trước khi gửi tới khách hàng.
          </figcaption>
        </figure>

        {/* TABLE OF CONTENTS */}
        <div className="article-toc">
          <p className="toc-title">Mục lục nội dung bài viết</p>
          <ol>
            <li>
              <a href="#vi-sao-chon-chinh-goc">1. Vì sao nên chọn mãng cầu Bà Đen chính gốc Tây Ninh?</a>
            </li>
            <li>
              <a href="#tieu-chi-uy-tin">2. 4 Tiêu chí nhận diện địa chỉ mua mãng cầu uy tín</a>
            </li>
            <li>
              <a href="#kinh-nghiem-chon-trai">3. Nên chọn mua mãng cầu già cứng hay đã chín mềm?</a>
            </li>
            <li>
              <a href="#bang-gia-quy-cach">4. Phân loại & quy cách mãng cầu Bà Đen phổ biến</a>
            </li>
            <li>
              <a href="#dat-mua-chinh-goc">5. Đặt mua mãng cầu Bà Đen chính gốc trực tiếp từ vườn</a>
            </li>
            <li>
              <a href="#faq">6. Câu hỏi thường gặp khi mua mãng cầu Tây Ninh</a>
            </li>
          </ol>
        </div>

        {/* MAIN BODY */}
        <div className="article-body">
          <section id="vi-sao-chon-chinh-goc">
            <h2>1. Vì sao nên chọn mãng cầu Bà Đen chính gốc Tây Ninh?</h2>
            <p>
              Mãng cầu (hay còn gọi là quả na) được trồng ở nhiều địa phương trên cả nước, nhưng chỉ riêng vùng đất chân <strong>Núi Bà Đen (Tây Ninh)</strong> mới tạo nên được những trái mãng cầu mang hương vị trứ danh, được cấp chỉ dẫn địa lý và bảo hộ thương hiệu.
            </p>
            <p>
              Sự khác biệt vượt trội này đến từ:
            </p>
            <ul>
              <li>
                <strong>Thổ nhưỡng phù sa cổ đặc thù:</strong> Tầng đất xám tơi xốp, giàu vi lượng khoáng chất tự nhiên quanh chân núi lửa cổ Bà Đen có khả năng thoát nước lý tưởng, giúp rễ cây hô hấp tốt và tích tụ chất lượng thịt quả cao nhất.
              </li>
              <li>
                <strong>Khí hậu nắng ấm & biên độ nhiệt ngày đêm:</strong> Nền nhiệt Tây Ninh nhiều nắng giúp trái quang hợp mạnh mẽ, trong khi ban đêm mát mẻ giúp đường tự nhiên kết tinh đọng lại trong từng múi thịt.
              </li>
              <li>
                <strong>Hương vị đặc trưng không thể trộn lẫn:</strong> Thịt trái trắng ngà mịn màng, dẻo dai nhẹ, các múi dính chặt vào nhau, hạt nhỏ và ít xơ. Khi ăn cảm nhận rõ vị ngọt thanh đậm đà cùng hậu vị mát dịu, hoàn toàn không gắt cổ.
              </li>
            </ul>
          </section>

          <figure className="article-inline-image">
            <img
              src="/thuc-te-mang-cau-tuoi.jpg"
              alt="Trái mãng cầu tươi ngon vừa được hái tại vườn"
              loading="lazy"
            />
            <figcaption>
              Trái mãng cầu Bà Đen đạt độ già chuẩn có mắt nở to, rãnh mở rộng ngả màu trắng ngà.
            </figcaption>
          </figure>

          <section id="tieu-chi-uy-tin">
            <h2>2. 4 Tiêu chí nhận diện địa chỉ mua mãng cầu uy tín</h2>
            <p>
              Hiện nay trên thị trường có nhiều nơi gắn mác “mãng cầu Bà Đen” nhưng thực chất là hàng gom không rõ nguồn gốc, bị ép chín bằng hóa chất hoặc trái non bị sượng. Để mua đúng sản phẩm chất lượng, người tiêu dùng cần lưu ý 4 tiêu chí cốt lõi:
            </p>

            <div className="criteria-grid">
              <div className="criteria-card">
                <span className="criteria-num">01</span>
                <h3>Minh bạch nguồn gốc vùng trồng</h3>
                <p>
                  Đơn vị bán phải công khai rõ ràng khu vực vườn canh tác quanh chân Núi Bà Đen Tây Ninh kèm thông tin thu hoạch minh bạch.
                </p>
              </div>
              <div className="criteria-card">
                <span className="criteria-num">02</span>
                <h3>Hình ảnh & video thu hoạch thực tế</h3>
                <p>
                  Ưu tiên nhà vườn có hình ảnh thực tế từng mùa vụ, quy trình chăm sóc bao trái an toàn và khâu thu hoạch tươi trong ngày.
                </p>
              </div>
              <div className="criteria-card">
                <span className="criteria-num">03</span>
                <h3>Phân loại theo tiêu chuẩn rõ ràng</h3>
                <p>
                  Mãng cầu chuẩn phải được phân loại theo kích cỡ (Size 2-3 trái/kg, Size 3-4 trái/kg), độ già và mục đích (ăn gia đình hay hộp quà biếu).
                </p>
              </div>
              <div className="criteria-card">
                <span className="criteria-num">04</span>
                <h3>Quy cách đóng gói chống va đập</h3>
                <p>
                  Mãng cầu là loại trái mềm khi chín. Đơn vị uy tín luôn bọc lưới xốp chuyên dụng từng quả và đóng thùng carton dày dặn, có lỗ thoáng khí.
                </p>
              </div>
            </div>
          </section>

          <section id="kinh-nghiem-chon-trai">
            <h2>3. Nên chọn mua mãng cầu già cứng hay đã chín mềm?</h2>
            <p>
              Tùy thuộc vào thời điểm và nhu cầu sử dụng thực tế, bạn nên chọn độ chín của trái cho phù hợp:
            </p>

            <div className="compare-boxes">
              <div className="compare-box">
                <h3>Thưởng thức ngay trong ngày</h3>
                <p>
                  Chọn những trái vỏ đã chuyển màu xanh sáng hoặc ngả vàng chanh nhẹ, mắt na nở phẳng tối đa. Khi cầm cảm giác mềm tay vừa phải, có độ đàn hồi tự nhiên và tỏa mùi thơm ngọt ngào thoang thoảng.
                </p>
              </div>
              <div className="compare-box">
                <h3>Vận chuyển đi xa / Làm quà biếu</h3>
                <p>
                  Nên chọn <strong>trái già còn cứng tay</strong>. Trái đủ ngày tuổi trên cây khi hái xuống vẫn cứng chắc, giúp chịu được rung lắc khi di chuyển và sẽ tự chín dẻo tự nhiên sau 1 đến 2 ngày mà không bị dập nát.
                </p>
              </div>
            </div>

            <blockquote className="article-quote">
              <p>
                <strong>Lưu ý quan trọng từ nhà vườn:</strong> Tuyệt đối không cho mãng cầu còn xanh hoặc cứng vào ngăn mát tủ lạnh. Nhiệt độ thấp sẽ làm trái bị “chai/sượng” và ngưng quá trình chín tự nhiên. Hãy để trái ở nhiệt độ phòng thoáng mát đến khi vừa chín rồi mới cho vào tủ lạnh làm mát.
              </p>
            </blockquote>
          </section>

          <section id="bang-gia-quy-cach">
            <h2>4. Phân loại & quy cách mãng cầu Bà Đen phổ biến</h2>
            <p>
              Nhà vườn Tây Ninh thường phân chia mãng cầu theo các quy cách tiêu chuẩn sau để đáp ứng đa dạng nhu cầu của khách hàng:
            </p>

            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Phân loại</th>
                    <th>Trọng lượng / Trái</th>
                    <th>Đặc điểm nổi bật</th>
                    <th>Mục đích sử dụng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Hạng Đặc Biệt (VIP)</strong></td>
                    <td>450g – 650g/trái (2-3 trái/kg)</td>
                    <td>Trái tròn đều, mắt nở to phẳng, vỏ sáng đẹp hoàn hảo</td>
                    <td>Quà biếu tặng doanh nghiệp, đối tác, sự kiện lễ tết</td>
                  </tr>
                  <tr>
                    <td><strong>Hạng Tuyển Chọn (Loại 1)</strong></td>
                    <td>300g – 400g/trái (3-4 trái/kg)</td>
                    <td>Trái đều đặn, thịt dày, ngọt đậm đà, bao trái an toàn</td>
                    <td>Thưởng thức gia đình, làm quà biếu người thân</td>
                  </tr>
                  <tr>
                    <td><strong>Hạng Tiêu Chuẩn (Loại 2)</strong></td>
                    <td>220g – 280g/trái (4-5 trái/kg)</td>
                    <td>Chất lượng thịt ngon ngọt, kích thước vừa phải</td>
                    <td>Ăn tươi hàng ngày, chế biến món sinh tố, trà trái cây</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="dat-mua-chinh-goc">
            <h2>5. Đặt mua mãng cầu Bà Đen chính gốc trực tiếp từ vườn</h2>
            <p>
              Các nhà vườn tại vùng chân Núi Bà Đen Tây Ninh luôn tiên phong gìn giữ giống cây truyền thống, áp dụng quy trình canh tác sạch và an toàn sinh học để mang đến những lứa trái tươi ngon nhất cho người tiêu dùng trên mọi miền đất nước.
            </p>

            <figure className="article-inline-image">
              <img
                src="/hop-qua-3-trai-vip.jpg"
                alt="Hộp quà mãng cầu Bà Đen 3 trái tuyển chọn thượng hạng"
                loading="lazy"
              />
              <figcaption>
                Mẫu hộp quà 3 trái VIP sang trọng, quai xách chắc chắn, tuyển chọn trái đều đẹp làm quà biếu tặng cao cấp.
              </figcaption>
            </figure>

            <div className="garden-features">
              <div className="feat-item">
                <span className="feat-icon">🌿</span>
                <div>
                  <strong>Thu hoạch tại vườn trong ngày:</strong> Đảm bảo độ tươi ngon nhất khi đến tay khách hàng.
                </div>
              </div>
              <div className="feat-item">
                <span className="feat-icon">🛡️</span>
                <div>
                  <strong>Quy trình bao trái an toàn:</strong> 100% trái được bọc bảo vệ trên cành, hạn chế tối đa sâu bệnh tự nhiên.
                </div>
              </div>
              <div className="feat-item">
                <span className="feat-icon">📦</span>
                <div>
                  <strong>Đóng gói hộp quà trang nhã:</strong> Phục vụ nhu cầu quà tặng gia đình, doanh nghiệp, hội nghị và khách du lịch.
                </div>
              </div>
              <div className="feat-item">
                <span className="feat-icon">🚚</span>
                <div>
                  <strong>Giao hàng toàn quốc:</strong> Kết nối vận chuyển nhanh chóng đến TP.HCM, Hà Nội và các tỉnh thành.
                </div>
              </div>
            </div>

            {/* CALLOUT BOX */}
            <div className="article-cta-box">
              <h3>Bạn muốn thưởng thức mãng cầu Bà Đen tươi ngon hôm nay?</h3>
              <p>
                Liên hệ trực tiếp với chúng tôi để kiểm tra lứa trái đang thu hoạch, nhận báo giá theo thời điểm và tư vấn quy cách giao nhận phù hợp nhất.
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
            <h2>6. Câu hỏi thường gặp khi mua mãng cầu Tây Ninh</h2>
            <div className="faq-list">
              <details open>
                <summary>
                  <span>01</span>
                  Mua mãng cầu Bà Đen chính gốc ở đâu uy tín?
                  <b aria-hidden="true">＋</b>
                </summary>
                <p>
                  Bạn nên chọn các nhà vườn có vùng trồng trực tiếp quanh khu vực Núi Bà Đen Tây Ninh, có hình ảnh thu hoạch thực tế tại vườn, tiêu chuẩn phân loại trái rõ ràng và hỗ trợ vận chuyển an toàn (Hotline/Zalo: 0907 215 521).
                </p>
              </details>

              <details>
                <summary>
                  <span>02</span>
                  Nên chọn mãng cầu già hay chín khi mua mang đi xa?
                  <b aria-hidden="true">＋</b>
                </summary>
                <p>
                  Nếu mang đi xa hoặc làm quà biếu, nên chọn trái già cứng tay, mắt na nở phẳng to, rãnh nở trắng ngà và bọc lưới xốp bảo vệ. Trái sẽ chín dẻo tự nhiên trong 1-2 ngày di chuyển.
                </p>
              </details>

              <details>
                <summary>
                  <span>03</span>
                  Mãng cầu Bà Đen có gì khác so với mãng cầu thường?
                  <b aria-hidden="true">＋</b>
                </summary>
                <p>
                  Mãng cầu Bà Đen được nuôi dưỡng bởi thổ nhưỡng đất phù sa cổ quanh chân núi Bà Đen và biên độ nhiệt ngày đêm cao, giúp cơm trắng mịn, dai dẻo, ít hạt và có vị ngọt thanh xen lẫn chút chua nhẹ rất thanh mát.
                </p>
              </details>

              <details>
                <summary>
                  <span>04</span>
                  Mãng cầu còn xanh có nên để trong tủ lạnh không?
                  <b aria-hidden="true">＋</b>
                </summary>
                <p>
                  Tuyệt đối không để mãng cầu còn xanh hoặc cứng vào tủ lạnh vì nhiệt độ thấp sẽ làm trái bị sượng và ngưng chín. Chỉ nên cho vào ngăn mát sau khi trái đã chín mềm vừa ăn.
                </p>
              </details>
            </div>
          </section>
        </div>

        {/* AUTHOR BIO & SHARE */}
        <footer className="article-footer">
          <div className="article-author-bio">
            <div className="bio-mark">MC</div>
            <div>
              <h4>Mãng Cầu Bà Đen Tây Ninh Chính Gốc</h4>
              <p>
                Chúng tôi kết nối câu chuyện nông sản sạch từ vùng trồng chân Núi Bà Đen đến tận tay người tiêu dùng và đối tác phân phối trên toàn quốc.
              </p>
            </div>
          </div>

          <div className="article-navigation-back">
            <Link href="/" className="back-home-link">
              <span>← Quay về Trang chủ Mãng Cầu Bà Đen</span>
            </Link>
          </div>
        </footer>
      </article>

      {/* FOOTER */}
      <footer>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">MC</span>
          <span>
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
