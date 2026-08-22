import Link from "next/link";

interface FooterProps {
  backLink?: {
    href: string;
    label: string;
  };
}

export default function Footer({ backLink }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* OPTIONAL BACK NAVIGATION BAR */}
        {backLink && (
          <div className="footer-back-wrap">
            <Link href={backLink.href} className="footer-back-pill">
              <span>{backLink.label}</span>
            </Link>
          </div>
        )}

        {/* MAIN 3-COLUMN FOOTER CONTENT */}
        <div className="footer-main-grid">
          {/* BRAND COLUMN */}
          <div className="footer-col footer-col-brand">
            <Link className="brand footer-brand" href="/" aria-label="Mãng Cầu Bà Đen - Trang chủ">
              <img
                src="/logo.png"
                alt="Mãng Cầu Bà Đen"
                className="brand-logo-img"
                width="42"
                height="42"
              />
              <span className="brand-divider" aria-hidden="true" style={{ color: "rgba(255,255,255,0.25)" }}>|</span>
              <span className="footer-brand-title">
                Mãng Cầu<br />Bà Đen
              </span>
            </Link>
            <p className="footer-brand-desc">
              Đặc sản Mãng Cầu Núi Bà Đen Tây Ninh tuyển chọn loại 1 từ nhà vườn. Trái già chuẩn lứa, dẻo dai ngọt thơm tự nhiên.
            </p>
          </div>

          {/* CONTACT & HOTLINE COLUMN */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Liên hệ đặt hàng</h4>
            <div className="footer-contact-item">
              <span className="contact-label">Hotline / Zalo:</span>
              <a href="tel:0907215521" className="footer-hotline-link">
                <span>0907 215 521</span>
              </a>
            </div>
            <p className="footer-address">
              <a
                href="https://share.google/mKCDKiRjRo25L0TDN"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-address-link"
                title="Xem chỉ đường đến Vườn Mãng Cầu Bà Đen trên Google Maps"
                style={{ color: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", transition: "color 0.2s" }}
              >
                <span>Vùng trồng Thạnh Tân, Chân Núi Bà Đen, TP. Tây Ninh — Google Maps</span>
              </a>
            </p>
          </div>

          {/* SOCIAL MEDIA CHANNELS WITH SLEEK BUTTONS */}
          <div className="footer-col footer-col-social">
            <h4 className="footer-heading">Kênh mạng xã hội</h4>
            <div className="footer-social-buttons">
              <a
                href="https://www.facebook.com/mangcaubaden.vn/"
                target="_blank"
                rel="noreferrer"
                className="footer-btn-pill btn-facebook"
                aria-label="Facebook Fanpage Mãng Cầu Bà Đen"
              >
                <span>Facebook</span>
              </a>

              <a
                href="https://zalo.me/0907215521"
                target="_blank"
                rel="noreferrer"
                className="footer-btn-pill btn-zalo"
                aria-label="Nhắn tin Zalo 0907 215 521"
              >
                <span>Zalo Tư Vấn</span>
              </a>

              <a
                href="https://www.tiktok.com/@mangcaubaden"
                target="_blank"
                rel="noreferrer"
                className="footer-btn-pill btn-tiktok"
                aria-label="Kênh TikTok Mãng Cầu Bà Đen"
              >
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & SITEMAP BAR */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Mãng Cầu Bà Đen NABADEN — Giữ trọn vị quê nhà
          </p>
          <div className="footer-quick-links">
            <Link href="/san-pham">Sản phẩm</Link>
            <Link href="/tin-tuc">Tin tức &amp; Cẩm nang</Link>
            <Link href="/hop-tac" style={{ color: "#fcd34d", fontWeight: 700 }}>Hợp Tác Đối Tác &amp; CTV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
