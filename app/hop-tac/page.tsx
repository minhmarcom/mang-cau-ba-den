import type { Metadata } from "next";
import Link from "next/link";
import PartnerForm from "../components/PartnerForm";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import ProcessAccordion from "../components/ProcessAccordion";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

export const metadata: Metadata = {
  title: "Tuyển Nhà Phân Phối & Cộng Tác Viên (CTV) Mãng Cầu Bà Đen | NABADEN",
  description: "Chương trình tuyển Nhà phân phối và Cộng tác viên bán Mãng Cầu Bà Đen Tây Ninh NABADEN. Hợp tác linh hoạt, không áp lực ôm hàng, NABADEN hỗ trợ các khâu hái trái, đóng thùng, ship hàng, thu COD và đối soát chiết khấu.",
  keywords: [
    "tuyển cộng tác viên mãng cầu bà đen", "tuyển ctv bán hoa quả", "tuyển đại lý mãng cầu tây ninh",
    "sỉ mãng cầu bà đen", "nhà phân phối mãng cầu tây ninh", "kinh doanh trái cây",
    "cộng tác viên bán trái cây online", "chiết khấu ctv mãng cầu"
  ],
  alternates: { canonical: "/hop-tac" },
  openGraph: {
    title: "Tuyển Nhà Phân Phối & CTV Mãng Cầu Bà Đen Tây Ninh | NABADEN",
    description: "NABADEN hỗ trợ các khâu từ cắt trái tại vườn, đóng thùng xốp, chuyển hàng và thu COD. Đối tác & CTV tập trung giới thiệu và nhận chiết khấu.",
    url: "https://mangcaubaden.vn/hop-tac",
    images: [{ url: "https://mangcaubaden.vn/og.png", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://mangcaubaden.vn/" },
    { "@type": "ListItem", position: 2, name: "Tuyển Đối Tác & CTV", item: "https://mangcaubaden.vn/hop-tac" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Làm Cộng tác viên (CTV) Mãng Cầu Bà Đen NABADEN có cần ôm hàng trước không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cộng tác viên không bắt buộc phải ôm hàng. Bạn có thể giới thiệu sản phẩm khi có khách đặt. NABADEN sẽ hỗ trợ khâu thu hoạch, đóng thùng xốp, giao hàng và thu hộ COD, sau đó đối soát chiết khấu theo định kỳ."
      }
    },
    {
      "@type": "Question",
      name: "Khi đơn hàng phát sinh vấn đề dập hỏng do vận chuyển thì xử lý thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khi nhận hàng, khách hàng hoặc đối tác vui lòng quay video/chụp ảnh tình trạng thực tế của thùng hàng. NABADEN sẽ cùng bạn kiểm tra, đối chiếu và trao đổi phương án hỗ trợ, xử lý linh hoạt cho từng trường hợp cụ thể."
      }
    },
    {
      "@type": "Question",
      name: "Chính sách dành cho Nhà Phân Phối / Đại Lý Sỉ như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà Phân Phối được áp dụng mức giá sỉ tại vườn theo khung sản lượng, ưu tiên nguồn hàng ổn định, hỗ trợ tài liệu hình ảnh thực tế tại vườn và các giấy tờ kiểm định chất lượng."
      }
    },
    {
      "@type": "Question",
      name: "Chiết khấu của CTV được tính và đối soát ra sao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chiết khấu được tính dựa trên số lượng thùng/hộp hoàn thành giao thành công. Các bên sẽ tiến hành đối soát định kỳ theo tuần hoặc theo tháng kèm bảng kê chi tiết."
      }
    }
  ]
};

export default function PartnerRecruitmentPage() {
  return (
    <>
      <ScrollToTopOnMount />
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
        <Link className="brand" href="/" aria-label="Mãng Cầu Bà Đen - Trang chủ">
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

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <Link href="/">Trang chủ</Link>
          <Link href="/san-pham">Sản phẩm</Link>
          <a href="#quyen-loi">Chính sách</a>
          <a href="#quy-trinh">Quy trình</a>
          <a href="#faq">Hỏi đáp</a>
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="#form-dang-ky">
            Đăng Ký Đối Tác
          </a>
        </div>
      </header>

      <main className="partner-page-wrapper">
        {/* HERO SECTION */}
        <section className="partner-hero-section">
          <div className="partner-hero-container">
            <div className="partner-hero-badge">
              <span className="badge-sparkle">⭐</span>
              <span>CHƯƠNG TRÌNH HỢP TÁC KINH DOANH NABADEN</span>
            </div>

            <h1 className="partner-hero-title">
              Hợp Tác Phân Phối <span className="nobr">Mãng Cầu Bà Đen</span> <span className="nobr">Tây Ninh</span>
              <span className="hero-highlight-phrase">
                NABADEN Hỗ Trợ Đóng Gói, Vận Chuyển &amp; Đối Soát Chiết Khấu
              </span>
            </h1>

            <p className="partner-hero-lead">
              Kinh doanh nông sản đặc sản Tây Ninh theo mô hình linh hoạt. Bạn tập trung tìm kiếm khách hàng và lên đơn, các khâu <em>thu hoạch tại vườn, đóng thùng xốp, điều phối giao hàng và thu hộ COD</em> được NABADEN hỗ trợ phối hợp vận hành.
            </p>

            <div className="partner-hero-pills">
              <div className="hero-pill-item">
                <span className="pill-check">✓</span>
                <span>Chủ Động Vốn &amp; Nguồn Hàng</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-check">✓</span>
                <span>Hái Tươi &amp; Đóng Thùng Chuẩn</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-check">✓</span>
                <span>Hỗ Trợ Xử Lý Linh Hoạt</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-check">✓</span>
                <span>Chiết Khấu Rõ Ràng Minh Bạch</span>
              </div>
            </div>

            <div className="partner-hero-cta-group">
              <a href="#form-dang-ky" className="btn-hero-partner primary">
                <span>Đăng Ký Nhận Thông Tin Hợp Tác</span>
                <span className="btn-arrow">↓</span>
              </a>
              <a
                href="https://zalo.me/0907215521"
                target="_blank"
                rel="noreferrer"
                className="btn-hero-partner secondary"
              >
                <span>Nhắn Zalo Trao Đổi (0907 215 521)</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: 2 MODELS (CTV VS NPP) */}
        <section className="partner-models-section" id="quyen-loi">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-sub-kicker">HÌNH THỨC HỢP TÁC</span>
              <h2 className="section-heading-bold">Lựa Chọn Mô Hình Phù Hợp Với Bạn</h2>
              <p className="section-desc-lead">
                Dù bạn là cá nhân muốn bắt đầu thử sức kinh doanh online hay đơn vị có sẵn cửa hàng phân phối, NABADEN đều có chính sách hỗ trợ phù hợp.
              </p>
            </div>

            <div className="partner-cards-grid">
              {/* CARD 1: CTV */}
              <div className="partner-tier-card ctv">
                <div className="tier-badge ctv">MÔ HÌNH CTV</div>
                <div className="tier-header">
                  <div className="tier-icon">🌱</div>
                  <h3 className="tier-title">Cộng Tác Viên (CTV)</h3>
                  <div className="tier-price-tag">Hình thức: <strong>Bán hàng theo đơn</strong></div>
                  <p className="tier-desc">Phù hợp cho cá nhân, nhân viên văn phòng, người bán hàng online muốn kinh doanh thêm đặc sản theo nhu cầu thực tế.</p>
                </div>

                <div className="tier-benefit-list">
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Không bắt buộc ôm hàng:</strong> Có đơn đến đâu lên đơn đến đó, chủ động quản lý thời gian.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Hỗ trợ đóng gói &amp; giao hàng:</strong> NABADEN phụ trách hái trái tại vườn, bọc xốp, đóng thùng và chuyển cho đơn vị vận chuyển.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Chiết khấu theo từng đơn hàng:</strong> Hưởng mức chiết khấu theo quy cách thùng 5kg, 15kg hoặc hộp quà 3 trái VIP.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Phối hợp hỗ trợ sau bán hàng:</strong> Tiếp nhận phản hồi từ khách hàng và cùng trao đổi phương án xử lý phù hợp cho từng đơn.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Tài liệu hình ảnh tham khảo:</strong> Cung cấp hình ảnh vườn, video đóng hàng thực tế để thuận tiện giới thiệu đến khách.</div>
                  </div>
                </div>

                <a href="#form-dang-ky" className="btn-tier-action ctv">
                  Đăng Ký Cộng Tác Viên →
                </a>
              </div>

              {/* CARD 2: NPP */}
              <div className="partner-tier-card npp featured">
                <div className="tier-badge npp">ĐỐI TÁC PHÂN PHỐI</div>
                <div className="tier-header">
                  <div className="tier-icon">👑</div>
                  <h3 className="tier-title">Nhà Phân Phối / Đại Lý Sỉ</h3>
                  <div className="tier-price-tag">Hình thức: <strong>Đơn hàng số lượng lớn</strong></div>
                  <p className="tier-desc">Dành cho các cửa hàng trái cây, siêu thị mini, vựa sỉ nông sản hoặc đại lý phân phối tại các tỉnh thành.</p>
                </div>

                <div className="tier-benefit-list">
                  <div className="benefit-item">
                    <span className="b-icon">★</span>
                    <div><strong>Bảng giá sỉ theo sản lượng:</strong> Áp dụng mức giá sỉ tại vườn cạnh tranh, tối ưu chi phí theo từng bậc số lượng.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">★</span>
                    <div><strong>Chính sách ưu tiên theo khu vực:</strong> Ưu tiên nguồn hàng và điều phối thuận lợi cho đối tác có sản lượng ổn định.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">★</span>
                    <div><strong>Hồ sơ nguồn gốc xuất xứ:</strong> Cung cấp thông tin chứng nhận VietGAP, OCOP Tây Ninh và tem truy xuất nguồn gốc.</div>
                  </div>
                </div>

                <a href="#form-dang-ky" className="btn-tier-action npp">
                  Đăng Ký Nhà Phân Phối →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: 6-STEP PROCESS FULFILLMENT */}
        <section className="partner-process-section" id="quy-trinh">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-sub-kicker">QUY TRÌNH PHỐI HỢP</span>
              <h2 className="section-heading-bold">Các Bước Vận Hành Cùng NABADEN</h2>
              <p className="section-desc-lead">
                Nhấn vào từng bước bên dưới để xem chi tiết quy trình phối hợp vận hành đơn hàng.
              </p>
            </div>

            <ProcessAccordion />
          </div>
        </section>

        {/* SECTION: QUALITY STANDARDS */}
        <section className="partner-commitments-section">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-sub-kicker">TIÊU CHUẨN NÔNG SẢN</span>
              <h2 className="section-heading-bold">3 Điểm Tựa Chất Lượng Của NABADEN</h2>
            </div>

            <div className="commitments-grid">
              <div className="commit-card">
                <div className="commit-icon-circle">🌱</div>
                <h4>Vùng Trồng Núi Bà Đen Tây Ninh</h4>
                <p>Nguồn gốc rõ ràng tại vùng chuyên canh mãng cầu truyền thống, đảm bảo hương vị ngọt thanh và độ dai dẻo đặc trưng của mãng cầu ta Tây Ninh.</p>
              </div>

              <div className="commit-card">
                <div className="commit-icon-circle">🤝</div>
                <h4>Đồng Hành &amp; Hỗ Trợ Linh Hoạt</h4>
                <p>Luôn lắng nghe phản hồi của đối tác và khách hàng, phối hợp trao đổi giải pháp phù hợp khi có phát sinh sự cố về vận chuyển hay chất lượng trái.</p>
              </div>

              <div className="commit-card">
                <div className="commit-icon-circle">🏅</div>
                <h4>Tiêu Chuẩn VietGAP &amp; OCOP</h4>
                <p>Canh tác theo hướng an toàn sinh học, quy trình bao trái bảo vệ trên cành, minh bạch thông tin nguồn gốc xuất xứ.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: REGISTRATION FORM */}
        <section className="partner-registration-section">
          <div className="section-container form-anchor-container">
            <PartnerForm />
          </div>
        </section>

        {/* SECTION: FAQ */}
        <section className="partner-faq-section" id="faq">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-sub-kicker">GIẢI ĐÁP THẮC MẮC</span>
              <h2 className="section-heading-bold">Câu Hỏi Thường Gặp Của Đối Tác &amp; CTV</h2>
              <p className="section-desc-lead">
                Nhấn vào từng câu hỏi bên dưới để xem câu trả lời chi tiết.
              </p>
            </div>

            <FaqAccordion />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
