"use client";

import { useState } from "react";

const products = [
  { no: "01", title: "Mãng cầu tươi", tag: "Theo mùa vụ", image: "/thuc-te-mang-cau-tuoi.jpg", copy: "Trái tươi được phân loại theo độ chín, kích cỡ và nhu cầu vận chuyển." },
  { no: "02", title: "Phân loại & đóng gói", tag: "Sẵn sàng giao nhận", image: "/thuc-te-phan-loai.jpg", copy: "Từng trái được kiểm tra, bọc bảo vệ và sắp xếp phù hợp với hành trình giao nhận." },
  { no: "03", title: "Đơn hàng hợp tác", tag: "Theo nhu cầu đối tác", image: "/thuc-te-dong-goi-nhieu-thung.jpg", copy: "Quy cách đóng gói linh hoạt cho phân phối, quà tặng, sự kiện và du lịch." },
];

const gallery = [
  { src: "/thuc-te-vuon-mang-cau.jpg", alt: "Vườn mãng cầu Bà Đen thực tế tại Tây Ninh", caption: "Vườn mãng cầu trong nắng chiều", shape: "gallery-wide" },
  { src: "/thuc-te-thu-hoach.jpg", alt: "Thu hoạch mãng cầu trực tiếp tại vườn", caption: "Thu hoạch trực tiếp tại vườn", shape: "gallery-tall" },
  { src: "/thuc-te-phan-loai.jpg", alt: "Mãng cầu được tập kết và phân loại sau thu hoạch", caption: "Phân loại sau thu hoạch", shape: "gallery-half" },
  { src: "/thuc-te-mang-cau-tuoi.jpg", alt: "Mãng cầu tươi được bọc lưới bảo vệ", caption: "Bảo vệ từng trái trước khi giao", shape: "gallery-half" },
  { src: "/thuc-te-dong-goi.jpg", alt: "Mãng cầu được đóng gói trong thùng", caption: "Đóng gói theo đơn hàng", shape: "gallery-half" },
  { src: "/thuc-te-dong-goi-nhieu-thung.jpg", alt: "Nhiều thùng mãng cầu đã đóng gói sẵn sàng giao", caption: "Sẵn sàng cho chuyến giao", shape: "gallery-half" },
];

const paths = ["Phân phối & bán lẻ", "Quà tặng doanh nghiệp", "Chế biến & phát triển sản phẩm", "Trải nghiệm nông nghiệp"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mãng Cầu Bà Đen - Trang chủ">
          <span className="brand-mark">MC</span><span>Mãng Cầu<br />Bà Đen</span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#cau-chuyen">Câu chuyện</a><a href="#san-pham">Sản phẩm</a><a href="#hinh-anh">Hình ảnh</a><a href="#hop-tac">Hợp tác</a>
        </nav>
        <a className="header-cta" href="tel:0907215521">Gọi 0907 215 521 <span>↗</span></a>
        <button className="menu-button" type="button" aria-label="Mở menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "≡"}</button>
        {menuOpen && <div className="mobile-nav"><a href="#cau-chuyen" onClick={() => setMenuOpen(false)}>Câu chuyện</a><a href="#san-pham" onClick={() => setMenuOpen(false)}>Sản phẩm</a><a href="#hinh-anh" onClick={() => setMenuOpen(false)}>Hình ảnh thực tế</a><a href="#hop-tac" onClick={() => setMenuOpen(false)}>Hợp tác</a><a href="#lien-he" onClick={() => setMenuOpen(false)}>Liên hệ</a></div>}
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Mãng cầu tươi trong vườn tại Tây Ninh" /><div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Nông sản quê mình • Tây Ninh</p>
          <h1><span>Trái ngọt</span><em>từ vườn nhà.</em></h1>
          <p className="hero-copy">Mãng cầu Bà Đen được vun trồng bằng kinh nghiệm nhà nông, đón nắng gió Tây Ninh và mang theo vị ngọt mộc mạc của quê nhà.</p>
          <div className="hero-actions"><a className="primary-button" href="#san-pham">Khám phá sản phẩm <span>→</span></a><a className="text-link" href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">Nhắn Zalo hợp tác</a></div>
        </div>
        <div className="hero-note"><span className="note-number">☘</span><p><strong>Tươi theo mùa</strong><br />Gắn với vùng trồng, tôn trọng tự nhiên và công sức nhà vườn.</p></div>
      </section>

      <section className="intro section-pad" id="cau-chuyen">
        <div><p className="section-kicker">Chuyện của vườn nhà</p><h2>Lớn lên<br />từ <em>đất lành.</em></h2></div>
        <div className="intro-copy"><p>Khí hậu nắng ấm, đất đai đặc trưng cùng kinh nghiệm canh tác qua nhiều thế hệ đã làm nên hương vị mãng cầu Bà Đen: thơm, ngọt thanh và dẻo dai.</p><p>Chúng tôi kết nối câu chuyện vùng trồng với những cơ hội mới — từ kênh bán lẻ, quà tặng đến sản phẩm chế biến và trải nghiệm nông nghiệp.</p><a className="arrow-link" href="#hop-tac">Cùng viết tiếp câu chuyện <span>→</span></a></div>
        <div className="intro-image"><img src="/thuc-te-vuon-mang-cau.jpg" alt="Vườn mãng cầu thực tế tại Tây Ninh" /><span>Hình ảnh thực tế • Tây Ninh</span></div>
      </section>

      <section className="values">
        <div className="value-lead"><p className="section-kicker">Giữ trọn chất quê</p><h2>Thuần mùa.<br />Sạch lành.<br /><em>Tử tế.</em></h2></div>
        <div className="value-list">
          <article><span>☘</span><div><h3>Thuận theo mùa vụ</h3><p>Tôn trọng nhịp sinh trưởng tự nhiên, độ chín và hương vị riêng của từng mùa trái.</p></div></article>
          <article><span>♡</span><div><h3>Chăm từ vườn</h3><p>Gìn giữ kinh nghiệm nhà nông, chăm chút từ lúc nuôi trái đến khi phân loại.</p></div></article>
          <article><span>⌘</span><div><h3>Gửi đi tử tế</h3><p>Trao đổi rõ độ chín, quy cách, bao bì và lịch giao để trái đến tay khách trọn vị.</p></div></article>
        </div>
      </section>

      <section className="products section-pad" id="san-pham">
        <div className="section-head"><div><p className="section-kicker">Từ khu vườn xanh</p><h2>Gói ghém<br /><em>vị quê.</em></h2></div><p>Từ trái tươi theo mùa đến những món quà mộc mạc mang bản sắc vùng đất.</p></div>
        <div className="product-grid">{products.map((product) => <article className="product-card" key={product.no}><div className="product-image"><img src={product.image} alt={product.title} /><span>{product.no}</span></div><p className="product-tag">{product.tag}</p><h3>{product.title}</h3><p>{product.copy}</p><a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer" aria-label={`Trao đổi về ${product.title} qua Zalo`}>Trao đổi qua Zalo <span>↗</span></a></article>)}</div>
      </section>

      <section className="real-gallery section-pad" id="hinh-anh">
        <div className="gallery-heading"><div><p className="section-kicker">Hình ảnh thực tế</p><h2>Một ngày<br /><em>tại vườn.</em></h2></div><p>Từ lúc trái còn trên cành, qua bàn tay thu hoạch, phân loại đến từng thùng hàng được gói ghém cẩn thận.</p></div>
        <div className="gallery-grid">{gallery.map((item) => <figure className={item.shape} key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption>{item.caption}</figcaption></figure>)}</div>
      </section>

      <section className="cooperation" id="hop-tac">
        <div className="coop-image" role="img" aria-label="Vườn mãng cầu xanh tươi" />
        <div className="coop-content"><p className="section-kicker light">Mở lối hợp tác</p><h2>Cùng đưa vị ngọt<br /><em>đi xa hơn.</em></h2><p>Chúng tôi mong muốn lắng nghe bài toán thật của từng đối tác, sau đó cùng xây dựng phương án phù hợp.</p><div className="path-list">{paths.map((path, i) => <a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer" key={path}><span>0{i + 1}</span>{path}<b>→</b></a>)}</div></div>
      </section>

      <section className="process section-pad">
        <p className="section-kicker">Từ nhu cầu đến hợp tác</p><div className="section-head"><h2>Một quy trình<br /><em>rõ ràng.</em></h2><p>Bắt đầu từ trao đổi thẳng thắn, kiểm chứng thực tế và thống nhất từng bước triển khai.</p></div>
        <div className="steps"><article><span>01</span><h3>Tiếp nhận</h3><p>Nhu cầu, sản lượng và kênh phân phối.</p></article><article><span>02</span><h3>Đề xuất</h3><p>Phương án sản phẩm, quy cách và tiến độ.</p></article><article><span>03</span><h3>Khảo sát</h3><p>Mẫu thực tế, vùng trồng và khả năng đáp ứng.</p></article><article><span>04</span><h3>Triển khai</h3><p>Thống nhất lịch, giao nhận và đầu mối phụ trách.</p></article></div>
      </section>

      <section className="contact" id="lien-he">
        <div className="contact-title"><p className="section-kicker light">Kết nối từ hôm nay</p><h2>Bạn muốn<br /><em>cùng đi xa?</em></h2><p>Gọi trực tiếp hoặc nhắn tin qua kênh thuận tiện nhất. Chúng tôi sẵn sàng trao đổi về phân phối, quà tặng và hợp tác sản phẩm.</p></div>
        <div className="contact-channels">
          <a className="contact-main" href="tel:0907215521"><span className="channel-label">Hotline</span><strong>0907 215 521</strong><b>Gọi ngay ↗</b></a>
          <a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer"><span className="channel-icon">Z</span><div><small>Nhắn tin</small><strong>Zalo 0907 215 521</strong></div><b>↗</b></a>
          <a href="https://www.facebook.com/nabaden.vn/" target="_blank" rel="noreferrer"><span className="channel-icon">f</span><div><small>Theo dõi</small><strong>Facebook Mãng Cầu Bà Đen</strong></div><b>↗</b></a>
          <a href="https://www.tiktok.com/@mangcaubaden" target="_blank" rel="noreferrer"><span className="channel-icon">♪</span><div><small>Xem tại vườn</small><strong>TikTok @mangcaubaden</strong></div><b>↗</b></a>
        </div>
      </section>

      <nav className="app-nav" aria-label="Điều hướng ứng dụng"><a href="#top"><span>⌂</span>Trang chủ</a><a href="#san-pham"><span>☘</span>Sản phẩm</a><a href="#hop-tac"><span>♡</span>Hợp tác</a><a href="#lien-he"><span>☎</span>Liên hệ</a></nav>
      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">MC</span><span>Mãng Cầu<br />Bà Đen</span></a><p>Đặc sản từ vùng trồng Tây Ninh.<br /><a href="tel:0907215521">Hotline/Zalo: 0907 215 521</a></p><div><a href="https://www.facebook.com/nabaden.vn/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.tiktok.com/@mangcaubaden" target="_blank" rel="noreferrer">TikTok</a><a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">Zalo</a></div><small>© 2026 Mãng Cầu Bà Đen</small></footer>
    </main>
  );
}
