"use client";

import { useEffect, useState } from "react";

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

const faqs = [
  { question: "Mãng cầu Bà Đen là gì và được trồng ở đâu?", answer: "Mãng cầu Bà Đen là cách gọi quen thuộc của mãng cầu ta, hay quả na, được canh tác tại vùng Tây Ninh, đặc biệt quanh khu vực núi Bà Đen. Điều kiện nắng ấm và kinh nghiệm nhà vườn góp phần tạo nên hương vị đặc trưng của trái." },
  { question: "Mãng cầu Bà Đen có gì đặc biệt?", answer: "Trái thường được yêu thích nhờ mùi thơm rõ, vị ngọt thanh và phần thịt mềm dẻo khi chín đúng độ. Chất lượng thực tế còn phụ thuộc giống, vườn trồng, thời điểm thu hoạch và cách bảo quản." },
  { question: "Mùa mãng cầu Tây Ninh vào thời gian nào?", answer: "Mãng cầu có mùa vụ và sản lượng thay đổi theo thời tiết, lịch xử lý ra hoa của từng vườn. Để biết lứa trái đang có, độ chín và ngày giao phù hợp, khách hàng nên liên hệ trực tiếp trước khi đặt." },
  { question: "Cách chọn mãng cầu Bà Đen ngon và nhận biết trái chín?", answer: "Nên chọn trái có mắt nở tương đối đều, vỏ chuyển xanh nhạt, cầm chắc nhưng không quá cứng. Trái bắt đầu chín thường tỏa mùi thơm nhẹ và mềm dần; tránh bóp mạnh làm dập thịt." },
  { question: "Mãng cầu bao lâu thì chín và bảo quản thế nào?", answer: "Thời gian chín phụ thuộc độ già khi hái và nhiệt độ môi trường. Nên để trái ở nơi khô thoáng, kiểm tra mỗi ngày; khi vừa chín có thể cho vào ngăn mát và dùng sớm để giữ hương vị." },
  { question: "Mãng cầu có để tủ lạnh được không?", answer: "Có, nhưng nên làm lạnh sau khi trái đã chín vừa. Trái còn xanh để trong tủ lạnh có thể chín chậm hoặc không đều. Nên bọc nhẹ, tránh đè lên nhau và sử dụng sớm." },
  { question: "Mua mãng cầu Bà Đen ở đâu và có giao tận nơi không?", answer: "Khách hàng có thể gọi hoặc nhắn Zalo 0907 215 521 để hỏi lứa trái, quy cách, giá theo thời điểm và khu vực giao. Đơn lẻ, đơn quà tặng và nhu cầu mua sỉ sẽ được trao đổi riêng." },
  { question: "Có mãng cầu VietGAP, OCOP hoặc hồ sơ nguồn gốc không?", answer: "Tiêu chuẩn và hồ sơ đi kèm cần được xác nhận theo từng vườn, từng lô hàng và thời điểm cung ứng. Đối tác nên yêu cầu thông tin truy xuất, chứng nhận còn hiệu lực và mẫu thực tế trước khi thống nhất đơn hàng." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mãng Cầu Bà Đen",
  url: "https://mang-cau-ba-den-tay-ninh.nhatminhmarcom.chatgpt.site/",
  logo: "https://mang-cau-ba-den-tay-ninh.nhatminhmarcom.chatgpt.site/app-icon-512.png",
  description: "Kết nối mãng cầu Bà Đen từ vùng trồng Tây Ninh đến khách hàng và đối tác phân phối.",
  contactPoint: { "@type": "ContactPoint", telephone: "+84907215521", contactType: "sales", areaServed: "VN", availableLanguage: "Vietnamese" },
  sameAs: ["https://www.facebook.com/nabaden.vn/", "https://www.tiktok.com/@mangcaubaden"],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sectionIds = ["top", "san-pham", "hop-tac", "lien-he"];
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.42;
      let current = "top";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
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

      <section className="seo-guide section-pad" id="cam-nang">
        <div className="seo-guide-heading"><div><p className="section-kicker">Cẩm nang từ vườn</p><h2>Hiểu trái ngon.<br /><em>Chọn đúng mùa.</em></h2></div><p>Những câu hỏi thường gặp khi tìm hiểu, chọn mua và bảo quản mãng cầu Bà Đen Tây Ninh.</p></div>
        <div className="faq-list">{faqs.map((item, index) => <details key={item.question} open={index === 0}><summary><span>0{index + 1}</span>{item.question}<b aria-hidden="true">＋</b></summary><p>{item.answer}</p></details>)}</div>
        <div className="seo-intent"><h3>Tìm mãng cầu Bà Đen chính gốc?</h3><p>Liên hệ để hỏi mùa vụ, giá mãng cầu Tây Ninh theo thời điểm, quy cách hộp quà, đơn giao tận nơi hoặc nhu cầu sỉ và đại lý.</p><a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">Hỏi lứa trái hôm nay <span>→</span></a></div>
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

      <nav className="app-nav" aria-label="Điều hướng ứng dụng">
        <a href="#top" className={activeSection === "top" ? "is-active" : ""} aria-current={activeSection === "top" ? "page" : undefined}><span className="nav-icon nav-icon-home" aria-hidden="true" />Trang chủ</a>
        <a href="#san-pham" className={activeSection === "san-pham" ? "is-active" : ""} aria-current={activeSection === "san-pham" ? "page" : undefined}><span className="nav-icon nav-icon-fruit" aria-hidden="true" />Sản phẩm</a>
        <a href="#hop-tac" className={activeSection === "hop-tac" ? "is-active" : ""} aria-current={activeSection === "hop-tac" ? "page" : undefined}><span className="nav-icon nav-icon-partner" aria-hidden="true" />Hợp tác</a>
        <a href="#lien-he" className={activeSection === "lien-he" ? "is-active" : ""} aria-current={activeSection === "lien-he" ? "page" : undefined}><span className="nav-icon nav-icon-phone" aria-hidden="true" />Liên hệ</a>
      </nav>
      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">MC</span><span>Mãng Cầu<br />Bà Đen</span></a><p>Đặc sản từ vùng trồng Tây Ninh.<br /><a href="tel:0907215521">Hotline/Zalo: 0907 215 521</a></p><div><a href="https://www.facebook.com/nabaden.vn/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.tiktok.com/@mangcaubaden" target="_blank" rel="noreferrer">TikTok</a><a href="https://zalo.me/0907215521" target="_blank" rel="noreferrer">Zalo</a></div><small>© 2026 Mãng Cầu Bà Đen</small></footer>
    </main>
  );
}
