import type { Metadata } from "next";
import Link from "next/link";
import PartnerForm from "../components/PartnerForm";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tuyển Nhà Phân Phối & Cộng Tác Viên (CTV) Mãng Cầu Bà Đen — Vốn 0Đ, Chiết Khấu Cao",
  description: "Chương trình tuyển Đại lý, Nhà phân phối và Cộng tác viên bán Mãng Cầu Bà Đen Tây Ninh NABADEN. Vốn 0 đồng, không ôm hàng, Nabaden hỗ trợ trọn gói từ hái trái, đóng thùng, ship hàng, thu COD và chuyển hoa hồng minh bạch.",
  keywords: [
    "tuyển cộng tác viên mãng cầu bà đen", "tuyển ctv bán hoa quả", "tuyển đại lý mãng cầu tây ninh",
    "sỉ mãng cầu bà đen", "nhà phân phối mãng cầu tây ninh", "kinh doanh trái cây 0 vốn",
    "cộng tác viên bán trái cây online", "chiết khấu ctv mãng cầu"
  ],
  alternates: { canonical: "/tuyen-dai-ly-ctv" },
  openGraph: {
    title: "Tuyển Nhà Phân Phối & CTV Mãng Cầu Bà Đen Tây Ninh — Vốn 0Đ, Hoa Hồng Cao",
    description: "Nabaden lo trọn gói từ cắt trái tại vườn, đóng thùng xốp, ship hàng thu COD. Đối tác & CTV chỉ cần giới thiệu và nhận hoa hồng!",
    url: "https://mangcaubaden.vn/tuyen-dai-ly-ctv",
    images: [{ url: "https://mangcaubaden.vn/og.png", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://mangcaubaden.vn/" },
    { "@type": "ListItem", position: 2, name: "Tuyển Đối Tác & CTV", item: "https://mangcaubaden.vn/tuyen-dai-ly-ctv" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Làm Cộng tác viên (CTV) Mãng Cầu Bà Đen có cần vốn hay ôm hàng không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn KHÔNG cần vốn và KHÔNG cần ôm hàng. Bạn chỉ cần chia sẻ hình ảnh, giới thiệu đơn hàng. NABADEN sẽ trực tiếp cắt trái tươi tại vườn, đóng thùng xốp, giao tận tay khách hàng và thu tiền COD, sau đó chuyển khoản hoa hồng cho bạn."
      }
    },
    {
      "@type": "Question",
      name: "Chính sách bảo hành trái hỏng hoặc sượng khi giao cho khách của CTV như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NABADEN áp dụng chính sách 'Bảo hành vàng': Bao bù 1 đổi 1 hoặc hoàn tiền 100% nếu trái bị sượng, hư hỏng trong quá trình vận chuyển. Khách hàng của bạn hoàn toàn yên tâm và uy tín bán hàng của CTV luôn được đảm bảo cao nhất."
      }
    },
    {
      "@type": "Question",
      name: "Quyền lợi của Nhà Phân Phối / Đại Lý Sỉ khác gì so với Cộng Tác Viên?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà Phân Phối được hưởng mức giá sỉ gốc tại vườn rẻ nhất theo bậc sản lượng, được hỗ trợ bảo hộ độc quyền theo khu vực, cung cấp đầy đủ giấy chứng nhận VietGAP, chứng nhận OCOP, tem truy xuất nguồn gốc và hỗ trợ hình ảnh/biển bảng quảng cáo."
      }
    },
    {
      "@type": "Question",
      name: "Hoa hồng CTV được tính và thanh toán như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoa hồng được tính trực tiếp trên mỗi thùng/hộp bán thành công. Bạn có thể chọn nhận hoa hồng ngay sau khi đơn hoàn tất hoặc đối soát tổng kết chuyển khoản theo tuần/tháng kèm bảng sao kê chi tiết."
      }
    }
  ]
};

export default function PartnerRecruitmentPage() {
  return (
    <>
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
          <a href="#quyen-loi">Quyền lợi</a>
          <a href="#quy-trinh">Quy trình</a>
          <a href="#bang-tinh-loi-nhuan">Thu nhập</a>
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
              <span>CHƯƠNG TRÌNH HỢP TÁC KINH DOANH 2026</span>
            </div>

            <h1 className="partner-hero-title">
              Hợp Tác Phân Phối Mãng Cầu Bà Đen Tây Ninh
              <span className="hero-highlight-phrase">
                Nabaden Lo Trọn Gói A-Z — Bạn Nhận Hoa Hồng
              </span>
            </h1>

            <p className="partner-hero-lead">
              Kinh doanh nông sản đặc sản cao cấp với <strong>VỐN 0 ĐỒNG</strong>. Bạn chỉ cần giới thiệu và lên đơn, toàn bộ khâu <em>cắt trái tươi tại vườn, đóng thùng xốp, giao hàng toàn quốc và thu hộ COD</em> đã có NABADEN bao trọn gói!
            </p>

            <div className="partner-hero-pills">
              <div className="hero-pill-item">
                <span className="pill-check">✓</span>
                <span>0đ Vốn — Không Ôm Hàng</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-check">✓</span>
                <span>Hái Tươi & Ship Tận Tay</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-check">✓</span>
                <span>Bao Bù 1 Đổi 1 Uy Tín</span>
              </div>
              <div className="hero-pill-item">
                <span className="pill-check">✓</span>
                <span>Chiết Khấu & Hoa Hồng Cao</span>
              </div>
            </div>

            <div className="partner-hero-cta-group">
              <a href="#form-dang-ky" className="btn-hero-partner primary">
                <span>Đăng Ký Trở Thành Đối Tác Ngay</span>
                <span className="btn-arrow">↓</span>
              </a>
              <a
                href="https://zalo.me/0907215521"
                target="_blank"
                rel="noreferrer"
                className="btn-hero-partner secondary"
              >
                <span>Nhắn Zalo Tư Vấn Trực Tiếp (0907 215 521)</span>
              </a>
            </div>

            {/* MASCOT BADGE ROW */}
            <div className="partner-hero-mascot-box">
              <img
                src="/logo.png"
                alt="Biểu trưng Mãng Cầu Bà Đen Tây Ninh NABADEN"
                className="partner-mascot-img"
                width="140"
                height="140"
              />
              <div className="mascot-text-info">
                <div className="mascot-brand-name">MÃNG CẦU BÀ ĐEN NABADEN</div>
                <div className="mascot-brand-slogan">SẠCH • TƯƠI • NGON TỪ VƯỜN NHÀ NÚI BÀ ĐEN TÂY NINH</div>
                <div className="mascot-stats-grid">
                  <div className="m-stat"><strong>50+</strong> Đối tác phân phối</div>
                  <div className="m-stat"><strong>5.000+</strong> Khách hàng tin dùng</div>
                  <div className="m-stat"><strong>100%</strong> Trái già loại 1 tuyển chọn</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: 2 MODELS (CTV VS NPP) */}
        <section className="partner-models-section" id="quyen-loi">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-sub-kicker">LỰA CHỌN MÔ HÌNH PHÙ HỢP</span>
              <h2 className="section-heading-bold">Bạn Muốn Hợp Tác Dưới Hình Thức Nào?</h2>
              <p className="section-desc-lead">
                Dù bạn là cá nhân muốn kiếm thêm thu nhập tại nhà hay cửa hàng/doanh nghiệp muốn mở rộng nguồn hàng chất lượng, NABADEN đều có chính sách tối ưu.
              </p>
            </div>

            <div className="partner-cards-grid">
              {/* CARD 1: CTV */}
              <div className="partner-tier-card ctv">
                <div className="tier-badge ctv">MÔ HÌNH 0 VỐN</div>
                <div className="tier-header">
                  <div className="tier-icon">🌱</div>
                  <h3 className="tier-title">Cộng Tác Viên (CTV)</h3>
                  <div className="tier-price-tag">Vốn khởi đầu: <strong>0 ĐỒNG</strong></div>
                  <p className="tier-desc">Dành cho mẹ bỉm sữa, nhân viên văn phòng, sinh viên, người bán hàng online muốn có thêm nguồn thu nhập bền vững.</p>
                </div>

                <div className="tier-benefit-list">
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Không cần bỏ vốn & không ôm hàng:</strong> Không áp lực doanh số, có đơn đến đâu đặt đến đó.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Nabaden bao trọn gói A-Z:</strong> Tự cắt trái tại vườn, bọc xốp, đóng thùng, ship tận tay khách và thu tiền COD.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Hoa hồng chiết khấu hấp dẫn:</strong> Hưởng lợi nhuận trực tiếp trên từng thùng 5kg, 15kg hoặc hộp quà 3 trái VIP.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Bảo hành vàng 1 đổi 1:</strong> Trái sượng hay dập hỏng do vận chuyển đều được nhà vườn bù mới, giữ trọn uy tín của CTV.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">✓</span>
                    <div><strong>Cung cấp sẵn tư liệu bán hàng:</strong> Hình ảnh vườn, video thực tế, bài viết mẫu chỉ việc copy-paste để đăng bài.</div>
                  </div>
                </div>

                <a href="#form-dang-ky" className="btn-tier-action ctv">
                  Đăng Ký Làm Cộng Tác Viên →
                </a>
              </div>

              {/* CARD 2: NPP */}
              <div className="partner-tier-card npp featured">
                <div className="tier-badge npp">ĐỐI TÁC CHIẾN LƯỢC</div>
                <div className="tier-header">
                  <div className="tier-icon">👑</div>
                  <h3 className="tier-title">Nhà Phân Phối / Đại Lý Sỉ</h3>
                  <div className="tier-price-tag">Chiết khấu: <strong>GIÁ GỐC TẬN VƯỜN</strong></div>
                  <p className="tier-desc">Dành cho chuỗi cửa hàng trái cây sạch, siêu thị mini, vựa sỉ hoa quả, tiểu thương các chợ đầu mối hoặc doanh nghiệp phân phối.</p>
                </div>

                <div className="tier-benefit-list">
                  <div className="benefit-item">
                    <span className="b-icon">★</span>
                    <div><strong>Bảng giá sỉ gốc tận gốc nhà vườn:</strong> Mức giá cạnh tranh vượt trội, tối ưu biên lợi nhuận cao nhất.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">★</span>
                    <div><strong>Bảo hộ độc quyền khu vực:</strong> Ưu tiên thị trường độc quyền theo quận/huyện hoặc tỉnh thành cho đối tác cam kết sản lượng.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">★</span>
                    <div><strong>Nguồn cung dồi dào, ổn định quanh năm:</strong> Diện tích vùng trồng liên kết hàng chục hecta tại chân núi Bà Đen Tây Ninh.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">★</span>
                    <div><strong>Đầy đủ chứng nhận VietGAP & OCOP:</strong> Hỗ trợ hồ sơ pháp lý, tem nhãn truy xuất nguồn gốc rõ ràng, hóa đơn đầy đủ.</div>
                  </div>
                  <div className="benefit-item">
                    <span className="b-icon">★</span>
                    <div><strong>Hỗ trợ biển bảng & Marketing điểm bán:</strong> Cung cấp standee, banner, kệ trưng bày và giới thiệu khách lẻ khu vực về đại lý.</div>
                  </div>
                </div>

                <a href="#form-dang-ky" className="btn-tier-action npp">
                  Đăng Ký Làm Nhà Phân Phối →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: 6-STEP PROCESS FULFILLMENT */}
        <section className="partner-process-section" id="quy-trinh">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-sub-kicker">QUY TRÌNH VẬN HÀNH KHÉP KÍN</span>
              <h2 className="section-heading-bold">NABADEN Hỗ Trợ Bạn Như Thế Nào?</h2>
              <p className="section-desc-lead">
                Toàn bộ quy trình từ khâu thu hoạch đến tay người tiêu dùng đều được NABADEN chuẩn hóa chuyên nghiệp, giúp bạn kinh doanh nhẹ nhàng và hiệu quả.
              </p>
            </div>

            <div className="process-steps-grid">
              <div className="step-card">
                <div className="step-number-badge">01</div>
                <div className="step-icon">📱</div>
                <h4 className="step-title">Bạn Giới Thiệu & Lên Đơn</h4>
                <p className="step-desc">CTV/NPP gửi thông tin khách hàng, số lượng và địa chỉ nhận qua hệ thống hoặc nhóm Zalo hỗ trợ.</p>
                <div className="step-tag-who">Bạn thực hiện</div>
              </div>

              <div className="step-card highlight">
                <div className="step-number-badge">02</div>
                <div className="step-icon">✂️</div>
                <h4 className="step-title">Tuyển Chọn & Cắt Trái Tại Vườn</h4>
                <p className="step-desc">Nhà vườn trực tiếp chọn đúng lứa trái già, da bóng, nở gai căng tròn, cắt tươi trong ngày.</p>
                <div className="step-tag-nabaden">⚡ Nabaden bao trọn</div>
              </div>

              <div className="step-card highlight">
                <div className="step-number-badge">03</div>
                <div className="step-icon">📦</div>
                <h4 className="step-title">Bọc Lưới Xốp & Đóng Thùng</h4>
                <p className="step-desc">Từng quả mãng cầu được bọc lưới xốp chuyên dụng, xếp thùng carton dày dặn chống dập nát khi đi xa.</p>
                <div className="step-tag-nabaden">⚡ Nabaden bao trọn</div>
              </div>

              <div className="step-card highlight">
                <div className="step-number-badge">04</div>
                <div className="step-icon">🚚</div>
                <h4 className="step-title">Vận Chuyển Hỏa Tốc</h4>
                <p className="step-desc">Giao xe mát về TP.HCM trong 2-3 giờ, giao bay/xe lạnh đi Hà Nội và các tỉnh thành toàn quốc.</p>
                <div className="step-tag-nabaden">⚡ Nabaden bao trọn</div>
              </div>

              <div className="step-card highlight">
                <div className="step-number-badge">05</div>
                <div className="step-icon">💵</div>
                <h4 className="step-title">Giao Khách & Thu Tiền (COD)</h4>
                <p className="step-desc">Khách được kiểm tra hàng trước khi nhận, shipper thu hộ tiền tận nơi an toàn và tiện lợi.</p>
                <div className="step-tag-nabaden">⚡ Nabaden bao trọn</div>
              </div>

              <div className="step-card highlight">
                <div className="step-number-badge">06</div>
                <div className="step-icon">🎉</div>
                <h4 className="step-title">Đối Soát & Chi Trả Hoa Hồng</h4>
                <p className="step-desc">Hệ thống tổng kết doanh số tự động, chuyển khoản hoa hồng đều đặn kèm bảng kê chi tiết minh bạch.</p>
                <div className="step-tag-nabaden">⚡ Nabaden bao trọn</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: ESTIMATED EARNINGS TABLE */}
        <section className="partner-earnings-section" id="bang-tinh-loi-nhuan">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-sub-kicker">TIỀM NĂNG THU NHẬP</span>
              <h2 className="section-heading-bold">Bảng Tính Thu Nhập Thực Tế</h2>
              <p className="section-desc-lead">
                Mãng Cầu Bà Đen Tây Ninh là loại trái cây đặc sản có nhu cầu tiêu thụ cực lớn quanh năm (ăn gia đình, thắp hương ngày rằm, mùng 1, lễ Tết và làm quà biếu VIP).
              </p>
            </div>

            <div className="earnings-table-container">
              <div className="table-responsive">
                <table className="earnings-table">
                  <thead>
                    <tr>
                      <th>Cấp Độ Hoạt Động</th>
                      <th>Sản Lượng Bán / Tháng</th>
                      <th>Chiết Khấu Trung Bình</th>
                      <th>Thu Nhập Dự Kiến / Tháng</th>
                      <th>Hỗ Trợ Từ Nabaden</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>🌱 CTV Khởi Động</strong>
                        <div className="table-subtext">Bán cho bạn bè, người thân</div>
                      </td>
                      <td>10 – 20 thùng (5kg/thùng)</td>
                      <td>100.000đ – 150.000đ / thùng</td>
                      <td className="earning-val"><strong>2.000.000đ – 4.000.000đ</strong></td>
                      <td>Hỗ trợ bài mẫu, ship & thu COD</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>
                        <strong>🔥 CTV Bán Hàng Tích Cực</strong>
                        <div className="table-subtext">Đăng bài Facebook, Zalo, TikTok</div>
                      </td>
                      <td>30 – 60 thùng (hoặc hộp VIP)</td>
                      <td>120.000đ – 180.000đ / thùng</td>
                      <td className="earning-val"><strong>6.000.000đ – 15.000.000đ</strong></td>
                      <td>Cung cấp video vườn, thưởng doanh số</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>⭐ Đại Lý Cửa Hàng Trái Cây</strong>
                        <div className="table-subtext">Điểm bán offline / Tiệm thực phẩm</div>
                      </td>
                      <td>100 – 300 thùng</td>
                      <td>Mức giá sỉ đại lý chiết khấu cao</td>
                      <td className="earning-val"><strong>18.000.000đ – 45.000.000đ</strong></td>
                      <td>Chứng nhận VietGAP, OCOP, bảng biển</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>👑 Tổng Kho / Nhà Phân Phối</strong>
                        <div className="table-subtext">Phân phối sỉ toàn tỉnh / thành phố</div>
                      </td>
                      <td>500 – 1.000+ thùng</td>
                      <td>Giá sỉ gốc tận gốc nhà vườn</td>
                      <td className="earning-val"><strong>50.000.000đ – 120.000.000đ+</strong></td>
                      <td>Bảo hộ độc quyền, chiết khấu tối đa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: QUALITY COMMITMENTS */}
        <section className="partner-commitments-section">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-sub-kicker">UY TÍN HÀNG ĐẦU</span>
              <h2 className="section-heading-bold">3 Cam Kết Vàng Giúp Bạn Bán Hàng Tự Tin</h2>
            </div>

            <div className="commitments-grid">
              <div className="commit-card">
                <div className="commit-icon-circle">🛡️</div>
                <h4>100% Chính Gốc Núi Bà Đen</h4>
                <p>Trái mãng cầu dai Tây Ninh chính hiệu, thịt dày dẻo thơm, ngọt đậm đà, không pha tạp hay trà trộn hàng kém chất lượng.</p>
              </div>

              <div className="commit-card">
                <div className="commit-icon-circle">🔄</div>
                <h4>Bảo Hành 1 Đổi 1 Miễn Phí</h4>
                <p>Cam kết bao bù không mất phí nếu sản phẩm bị dập nát, hư hỏng trong quá trình vận chuyển hoặc bị sượng, đắng khi chín.</p>
              </div>

              <div className="commit-card">
                <div className="commit-icon-circle">🏅</div>
                <h4>Chuẩn VietGAP & OCOP Tây Ninh</h4>
                <p>Quy trình bao trái an toàn sinh học, không hóa chất bảo quản độc hại, tuyệt đối an toàn cho sức khỏe gia đình và trẻ nhỏ.</p>
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
              <h2 className="section-heading-bold">Câu Hỏi Thường Gặp Của Đối Tác & CTV</h2>
            </div>

            <div className="faq-accordion-grid">
              <div className="faq-item-card">
                <h3 className="faq-question">1. Tôi chưa từng bán trái cây bao giờ thì có làm CTV được không?</h3>
                <p className="faq-answer">
                  Hoàn toàn được! NABADEN có đội ngũ hỗ trợ hướng dẫn bạn từ A-Z, cung cấp sẵn hình ảnh vườn, video thực tế, bài viết mẫu và tư vấn cách tư vấn khách hàng chu đáo.
                </p>
              </div>

              <div className="faq-item-card">
                <h3 className="faq-question">2. Làm sao để tôi biết đơn hàng của mình đã được giao và nhận hoa hồng?</h3>
                <p className="faq-answer">
                  Khi bạn gửi đơn, đội ngũ điều phối sẽ cung cấp mã vận đơn để bạn theo dõi hành trình. Ngay khi khách nhận hàng và thanh toán COD thành công, hệ thống sẽ cập nhật trạng thái và thông báo đối soát hoa hồng cho bạn.
                </p>
              </div>

              <div className="faq-item-card">
                <h3 className="faq-question">3. Nhà Phân Phối cần điều kiện gì để được độc quyền khu vực?</h3>
                <p className="faq-answer">
                  Để đăng ký phân phối độc quyền tại khu vực quận/huyện hoặc tỉnh thành, NPP chỉ cần cam kết mức sản lượng tiêu thụ tối thiểu theo tháng. NABADEN sẽ ký hợp đồng phân phối chính thức và chuyển toàn bộ khách lẻ/đại lý cấp dưới tại khu vực đó về cho bạn.
                </p>
              </div>

              <div className="faq-item-card">
                <h3 className="faq-question">4. Khách hàng nhận được trái bị dập hoặc sượng thì xử lý thế nào?</h3>
                <p className="faq-answer">
                  Khách chỉ cần chụp ảnh hoặc quay video gửi lại. NABADEN sẽ ngay lập tức gửi bù thùng mới hoặc hoàn tiền tương ứng trong vòng 24h. Bạn không phải chịu bất kỳ tổn thất nào.
                </p>
              </div>

              <div className="faq-item-card">
                <h3 className="faq-question">5. NABADEN giao hàng đến những tỉnh thành nào?</h3>
                <p className="faq-answer">
                  NABADEN giao hàng trên toàn quốc! Tuyến TP.HCM giao hỏa tốc bằng xe buýt/xe mát chỉ 2-3 tiếng; Hà Nội và miền Bắc giao đường bay/xe lạnh 24-36 tiếng; các tỉnh miền Tây và Đông Nam Bộ giao trong ngày.
                </p>
              </div>

              <div className="faq-item-card">
                <h3 className="faq-question">6. Sau khi điền form đăng ký thì bao lâu tôi được kích hoạt tài khoản?</h3>
                <p className="faq-answer">
                  Chuyên viên hỗ trợ đối tác của NABADEN sẽ liên hệ trực tiếp qua số Zalo của bạn trong vòng 15 – 30 phút để gửi bảng giá chi tiết, tài liệu và thêm bạn vào nhóm Zalo Hợp Tác NABADEN.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
