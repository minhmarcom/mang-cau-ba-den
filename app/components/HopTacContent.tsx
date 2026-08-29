"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PartnerForm, { SuccessDetails } from "./PartnerForm";
import Footer from "./Footer";
import FaqAccordion from "./FaqAccordion";
import ProcessAccordion from "./ProcessAccordion";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

export default function HopTacContent() {
  const [successData, setSuccessData] = useState<SuccessDetails | null>(null);

  const handleSuccess = (details: SuccessDetails) => {
    setSuccessData(details);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (successData) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <ScrollToTopOnMount />

      {/* HEADER */}
      <header className="site-header" role="banner">
        <Link className="brand" href="/">
          <img
            src="/logo.png"
            alt="Mãng Cầu Bà Đen Tây Ninh"
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
          <a href="#quyen-loi" onClick={(e) => scrollToSection(e, "quyen-loi")}>Chính sách</a>
          <a href="#quy-trinh" onClick={(e) => scrollToSection(e, "quy-trinh")}>Quy trình</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, "faq")}>Hỏi đáp</a>
        </nav>

        <div className="header-actions">
          {successData ? (
            <Link className="header-cta" href="/">
              <span>Về Trang Chủ</span>

            </Link>
          ) : (
            <a className="header-cta" href="#form-dang-ky" onClick={(e) => scrollToSection(e, "form-dang-ky")}>
              <span>Đăng Ký Đối Tác</span>

            </a>
          )}
        </div>
      </header>

      <main className="partner-page-wrapper">
        {successData ? (
          /* SUCCESS STANDALONE VIEW (Chỉ hiển thị đúng thông tin xác nhận) */
          <section className="partner-success-fullscreen-section">
            <div className="section-container">
              <div className="partner-form-card success-standalone-card">
                <div className="partner-success-state" role="region" aria-live="polite">

                  <h1 className="success-title">Đăng Ký Thành Công!</h1>
                  <p className="success-subtitle">
                    Cảm ơn <strong>{successData.fullName}</strong>! Thông tin đăng ký đã được hệ thống ghi nhận. Mãng Cầu Bà Đen sẽ chủ động liên hệ qua Zalo/SĐT trong ít phút.
                  </p>

                  <div className="success-details-box">
                    <div className="success-details-title"> THÔNG TIN XÁC NHẬN ĐĂNG KÝ</div>
                    <div className="success-details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Họ và tên:</span>
                        <span className="detail-value">{successData.fullName}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Số điện thoại (Zalo):</span>
                        <span className="detail-value">{successData.phone}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Tỉnh / Thành phố:</span>
                        <span className="detail-value">{successData.province}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Hình thức đăng ký:</span>
                        <span className="detail-value">{successData.partnerType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="success-action-btns">
                    <Link href="/" className="btn-home-partner">
                      <span>Quay Về Trang Chủ</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* REGULAR HOP-TAC PAGE CONTENT */
          <>
            <nav className="breadcrumb container" aria-label="Breadcrumb">
              <Link href="/">Trang chủ</Link>
              <span aria-hidden="true">/</span>
              <span>Hợp tác đối tác &amp; CTV</span>
            </nav>

            {/* HERO SECTION */}
            <section className="partner-hero-section">
              <div className="partner-hero-container">
                <div className="partner-hero-badge">
                  <span>CHƯƠNG TRÌNH HỢP TÁC KINH DOANH Mãng Cầu Bà Đen</span>
                </div>

                <h1 className="partner-hero-title">
                  Hợp Tác Phân Phối <span className="nobr">Mãng Cầu Bà Đen</span> <span className="nobr">Tây Ninh</span>
                  <span className="hero-highlight-phrase">
                    Mãng Cầu Bà Đen Hỗ Trợ Đóng Gói, Vận Chuyển &amp; Đối Soát Chiết Khấu
                  </span>
                </h1>

                <p className="partner-hero-lead">
                  Kinh doanh nông sản đặc sản Tây Ninh theo mô hình linh hoạt. Bạn tập trung tìm kiếm khách hàng và lên đơn, các khâu <em>thu hoạch tại vườn, đóng thùng xốp, điều phối giao hàng và thu hộ COD</em> được Mãng Cầu Bà Đen hỗ trợ phối hợp vận hành.
                </p>

                <div className="partner-hero-pills">
                  <div className="hero-pill-item">

                    <span>Chủ Động Vốn &amp; Nguồn Hàng</span>
                  </div>
                  <div className="hero-pill-item">

                    <span>Hái Tươi &amp; Đóng Thùng Chuẩn</span>
                  </div>
                  <div className="hero-pill-item">

                    <span>Hỗ Trợ Xử Lý Linh Hoạt</span>
                  </div>
                  <div className="hero-pill-item">

                    <span>Chiết Khấu Rõ Ràng Minh Bạch</span>
                  </div>
                </div>

                <div className="partner-hero-cta-group">
                  <a href="#form-dang-ky" className="btn-hero-partner primary">
                    <span>Đăng Ký Nhận Thông Tin Hợp Tác</span>

                  </a>
                  <a
                    href="https://zalo.me/0833184106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero-partner secondary"
                  >
                    <span>Nhắn Zalo Trao Đổi (0833 184 106)</span>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION: MODELS (CTV VS NPP) */}
            <section className="partner-tiers-section" id="quyen-loi">
              <div className="section-container">
                <div className="section-header-center">
                  <span className="section-sub-kicker">HÌNH THỨC HỢP TÁC</span>
                  <h2 className="section-heading-bold">Lựa Chọn Mô Hình Phù Hợp Với Năng Lực</h2>
                  <p className="section-desc-lead">
                    Mãng Cầu Bà Đen thiết kế 2 hình thức hợp tác chính nhằm tối ưu quyền lợi cho từng nhóm đối tác kinh doanh.
                  </p>
                </div>

                <div className="partner-tiers-grid">
                  {/* CARD 1: CTV */}
                  <div className="partner-tier-card ctv">
                    <div className="tier-badge ctv">CỘNG TÁC VIÊN</div>
                    <div className="tier-header">
                      <h3 className="tier-title">Cộng Tác Viên Bán Hàng</h3>
                      <div className="tier-price-tag">Hình thức: <strong>Lên đơn theo từng khách</strong></div>
                      <p className="tier-desc">Dành cho cá nhân, nhân viên văn phòng, nội trợ muốn tăng thu nhập mà không lo rủi ro vốn.</p>
                    </div>

                    <div className="tier-benefit-list">
                      <div className="benefit-item">

                        <div><strong>Không áp lực vốn:</strong> Bạn chỉ cần nhận đơn từ khách, Mãng Cầu Bà Đen hỗ trợ chuẩn bị hàng và vận chuyển.</div>
                      </div>
                      <div className="benefit-item">

                        <div><strong>Chiết khấu minh bạch:</strong> Hoa hồng được tính theo từng đơn thành công và đối soát định kỳ.</div>
                      </div>
                      <div className="benefit-item">

                        <div><strong>Hỗ trợ giao hàng COD:</strong> Hỗ trợ gửi hàng tận nơi cho người mua và thu hộ tiền.</div>
                      </div>
                      <div className="benefit-item">

                        <div><strong>Tài liệu hình ảnh tham khảo:</strong> Cung cấp hình ảnh vườn, video đóng hàng thực tế để thuận tiện giới thiệu đến khách.</div>
                      </div>
                    </div>

                    <a href="#form-dang-ky" className="btn-tier-action ctv">
                      Đăng Ký Cộng Tác Viên
                    </a>
                  </div>

                  {/* CARD 2: NPP */}
                  <div className="partner-tier-card npp featured">
                    <div className="tier-badge npp">ĐỐI TÁC PHÂN PHỐI</div>
                    <div className="tier-header">
                      <h3 className="tier-title">Nhà Phân Phối / Đại Lý Sỉ</h3>
                      <div className="tier-price-tag">Hình thức: <strong>Đơn hàng số lượng lớn</strong></div>
                      <p className="tier-desc">Dành cho các cửa hàng trái cây, siêu thị mini, vựa sỉ nông sản hoặc đại lý phân phối tại các tỉnh thành.</p>
                    </div>

                    <div className="tier-benefit-list">
                      <div className="benefit-item">

                        <div><strong>Bảng giá sỉ theo sản lượng:</strong> Áp dụng mức giá sỉ tại vườn cạnh tranh, tối ưu chi phí theo từng bậc số lượng.</div>
                      </div>
                      <div className="benefit-item">

                        <div><strong>Chính sách ưu tiên theo khu vực:</strong> Ưu tiên nguồn hàng và điều phối thuận lợi cho đối tác có sản lượng ổn định.</div>
                      </div>
                      <div className="benefit-item">

                        <div><strong>Hồ sơ nguồn gốc xuất xứ:</strong> Cung cấp thông tin chứng nhận VietGAP, OCOP Tây Ninh và tem truy xuất nguồn gốc.</div>
                      </div>
                    </div>

                    <a href="#form-dang-ky" className="btn-tier-action npp">
                      Đăng Ký Nhà Phân Phối
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
                  <h2 className="section-heading-bold">Các Bước Vận Hành Cùng Mãng Cầu Bà Đen</h2>
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
                  <h2 className="section-heading-bold">3 Điểm Tựa Chất Lượng Của Mãng Cầu Bà Đen</h2>
                </div>

                <div className="commitments-grid">
                  <div className="commit-card">
                    <h4>Vùng Trồng Núi Bà Đen Tây Ninh</h4>
                    <p>Nguồn gốc rõ ràng tại vùng chuyên canh mãng cầu truyền thống, đảm bảo hương vị ngọt thanh và độ dai dẻo đặc trưng của mãng cầu ta Tây Ninh.</p>
                  </div>

                  <div className="commit-card">
                    <h4>Đồng Hành &amp; Hỗ Trợ Linh Hoạt</h4>
                    <p>Luôn lắng nghe phản hồi của đối tác và khách hàng, phối hợp trao đổi giải pháp phù hợp khi có phát sinh sự cố về vận chuyển hay chất lượng trái.</p>
                  </div>

                  <div className="commit-card">
                    <h4>Tiêu Chuẩn VietGAP &amp; OCOP</h4>
                    <p>Canh tác theo hướng an toàn sinh học, quy trình bao trái bảo vệ trên cành, minh bạch thông tin nguồn gốc xuất xứ.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: REGISTRATION FORM */}
            <section className="partner-registration-section">
              <div className="section-container form-anchor-container">
                <PartnerForm onSuccess={handleSuccess} />
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
          </>
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
