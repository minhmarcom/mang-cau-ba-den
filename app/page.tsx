"use client";

import { FormEvent, useState } from "react";

const products = [
  { no: "01", title: "Mãng cầu tươi", tag: "Theo mùa vụ", image: "/hero-mang-cau.jpg", copy: "Trái tươi được phân loại theo độ chín, kích cỡ và nhu cầu vận chuyển." },
  { no: "02", title: "Sản phẩm chế biến", tag: "Gia tăng giá trị", image: "/mang-cau-tren-canh.jpg", copy: "Gợi ý các dòng sấy, thức uống và sản phẩm chế biến từ mãng cầu." },
  { no: "03", title: "Quà tặng bản địa", tag: "Thiết kế theo nhu cầu", image: "/vuon-mang-cau.jpg", copy: "Set quà mang tinh thần Tây Ninh cho doanh nghiệp, sự kiện và du lịch." },
];

const paths = ["Phân phối & bán lẻ", "Quà tặng doanh nghiệp", "Chế biến & phát triển sản phẩm", "Trải nghiệm nông nghiệp"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mãng Cầu Bà Đen - Trang chủ">
          <span className="brand-mark">MC</span><span>Mãng Cầu<br />Bà Đen</span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#cau-chuyen">Câu chuyện</a><a href="#san-pham">Sản phẩm</a><a href="#hop-tac">Hợp tác</a>
        </nav>
        <a className="header-cta" href="#lien-he">Kết nối ngay <span>↗</span></a>
        <button className="menu-button" type="button" aria-label="Mở menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "≡"}</button>
        {menuOpen && <div className="mobile-nav"><a href="#cau-chuyen" onClick={() => setMenuOpen(false)}>Câu chuyện</a><a href="#san-pham" onClick={() => setMenuOpen(false)}>Sản phẩm</a><a href="#hop-tac" onClick={() => setMenuOpen(false)}>Hợp tác</a><a href="#lien-he" onClick={() => setMenuOpen(false)}>Liên hệ</a></div>}
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Mãng cầu tươi trong vườn tại Tây Ninh" /><div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Nông sản quê mình • Tây Ninh</p>
          <h1>Trái ngọt<br /><em>từ vườn nhà.</em></h1>
          <p className="hero-copy">Mãng cầu Bà Đen được vun trồng bằng kinh nghiệm nhà nông, đón nắng gió Tây Ninh và mang theo vị ngọt mộc mạc của quê nhà.</p>
          <div className="hero-actions"><a className="primary-button" href="#san-pham">Khám phá sản phẩm <span>→</span></a><a className="text-link" href="#hop-tac">Trở thành đối tác</a></div>
        </div>
        <div className="hero-note"><span className="note-number">☘</span><p><strong>Tươi theo mùa</strong><br />Gắn với vùng trồng, tôn trọng tự nhiên và công sức nhà vườn.</p></div>
      </section>

      <section className="intro section-pad" id="cau-chuyen">
        <div><p className="section-kicker">Chuyện của vườn nhà</p><h2>Lớn lên<br />từ <em>đất lành.</em></h2></div>
        <div className="intro-copy"><p>Khí hậu nắng ấm, đất đai đặc trưng cùng kinh nghiệm canh tác qua nhiều thế hệ đã làm nên hương vị mãng cầu Bà Đen: thơm, ngọt thanh và dẻo dai.</p><p>Chúng tôi kết nối câu chuyện vùng trồng với những cơ hội mới — từ kênh bán lẻ, quà tặng đến sản phẩm chế biến và trải nghiệm nông nghiệp.</p><a className="arrow-link" href="#hop-tac">Cùng viết tiếp câu chuyện <span>→</span></a></div>
        <div className="intro-image"><img src="/vuon-mang-cau.jpg" alt="Nhà vườn thu hoạch mãng cầu tại Tây Ninh" /><span>Vùng trồng Tây Ninh</span></div>
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
        <div className="product-grid">{products.map((product) => <article className="product-card" key={product.no}><div className="product-image"><img src={product.image} alt={product.title} /><span>{product.no}</span></div><p className="product-tag">{product.tag}</p><h3>{product.title}</h3><p>{product.copy}</p><a href="#lien-he" aria-label={`Trao đổi về ${product.title}`}>Trao đổi nhu cầu <span>↗</span></a></article>)}</div>
      </section>

      <section className="cooperation" id="hop-tac">
        <div className="coop-image" role="img" aria-label="Vườn mãng cầu xanh tươi" />
        <div className="coop-content"><p className="section-kicker light">Mở lối hợp tác</p><h2>Cùng đưa vị ngọt<br /><em>đi xa hơn.</em></h2><p>Chúng tôi mong muốn lắng nghe bài toán thật của từng đối tác, sau đó cùng xây dựng phương án phù hợp.</p><div className="path-list">{paths.map((path, i) => <a href="#lien-he" key={path}><span>0{i + 1}</span>{path}<b>→</b></a>)}</div></div>
      </section>

      <section className="process section-pad">
        <p className="section-kicker">Từ nhu cầu đến hợp tác</p><div className="section-head"><h2>Một quy trình<br /><em>rõ ràng.</em></h2><p>Bắt đầu từ trao đổi thẳng thắn, kiểm chứng thực tế và thống nhất từng bước triển khai.</p></div>
        <div className="steps"><article><span>01</span><h3>Tiếp nhận</h3><p>Nhu cầu, sản lượng và kênh phân phối.</p></article><article><span>02</span><h3>Đề xuất</h3><p>Phương án sản phẩm, quy cách và tiến độ.</p></article><article><span>03</span><h3>Khảo sát</h3><p>Mẫu thực tế, vùng trồng và khả năng đáp ứng.</p></article><article><span>04</span><h3>Triển khai</h3><p>Thống nhất lịch, giao nhận và đầu mối phụ trách.</p></article></div>
      </section>

      <section className="contact" id="lien-he">
        <div className="contact-title"><p className="section-kicker light">Kết nối từ hôm nay</p><h2>Bạn muốn<br /><em>cùng đi xa?</em></h2><p>Chia sẻ nhu cầu của bạn. Thông tin liên hệ chính thức sẽ được bổ sung khi website đi vào vận hành.</p></div>
        <form className="contact-form" onSubmit={submitContact}><label>Họ và tên<input required name="name" placeholder="Nguyễn Văn A" /></label><label>Số điện thoại<input required name="phone" type="tel" placeholder="09xx xxx xxx" /></label><label className="full">Hướng hợp tác<select name="interest" defaultValue=""><option value="" disabled>Chọn nhu cầu của bạn</option>{paths.map(path => <option key={path}>{path}</option>)}</select></label><label className="full">Lời nhắn<textarea name="message" rows={3} placeholder="Quy mô, thời gian, thị trường bạn quan tâm..." /></label><button className="submit-button" type="submit">Tạo yêu cầu hợp tác <span>→</span></button>{sent && <p className="form-note" role="status">Yêu cầu mẫu đã được tạo. Hãy bổ sung email hoặc hotline tiếp nhận trước khi website chính thức hoạt động.</p>}</form>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">MC</span><span>Mãng Cầu<br />Bà Đen</span></a><p>Đặc sản từ vùng trồng Tây Ninh.<br />Kết nối hợp tác & phân phối.</p><div><a href="#cau-chuyen">Câu chuyện</a><a href="#san-pham">Sản phẩm</a><a href="#hop-tac">Hợp tác</a></div><small>© 2026 Mãng Cầu Bà Đen</small></footer>
    </main>
  );
}
