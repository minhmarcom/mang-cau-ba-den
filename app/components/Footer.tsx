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
              <span className="back-arrow" aria-hidden="true">←</span>
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
              <a href="tel:0833184106" className="footer-hotline-link">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>0833 184 106</span>
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
                <span>📍 Vùng trồng Thạnh Tân, Chân Núi Bà Đen, TP. Tây Ninh</span>
                <span style={{ fontSize: "0.82em", opacity: 0.85 }} aria-hidden="true">↗ (Google Maps)</span>
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
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://zalo.me/0833184106"
                target="_blank"
                rel="noreferrer"
                className="footer-btn-pill btn-zalo"
                aria-label="Nhắn tin Zalo 0833 184 106"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Zalo Tư Vấn</span>
              </a>

              <a
                href="https://www.tiktok.com/@mangcaubaden"
                target="_blank"
                rel="noreferrer"
                className="footer-btn-pill btn-tiktok"
                aria-label="Kênh TikTok Mãng Cầu Bà Đen"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.75 1.48-.03 2.75-1.04 3.09-2.48.15-.65.17-1.33.17-2V.02h-.03z" />
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & SITEMAP BAR */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Mãng Cầu Bà Đen NABADEN • Giữ trọn vị quê nhà
          </p>
          <div className="footer-quick-links">
            <Link href="/san-pham">Sản phẩm</Link>
            <span className="dot-sep" aria-hidden="true">•</span>
            <Link href="/tin-tuc">Tin tức &amp; Cẩm nang</Link>
            <span className="dot-sep" aria-hidden="true">•</span>
            <Link href="/hop-tac" style={{ color: "#fcd34d", fontWeight: 700 }}>Hợp Tác Đối Tác &amp; CTV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
