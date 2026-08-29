import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

const title = "Vì sao mãng cầu Bà Đen đôi khi có sâu? Hiểu đúng về đặc tính tự nhiên của trái mãng cầu";
const description = "Vì sao mãng cầu Bà Đen đôi khi có sâu dù bên ngoài trái vẫn đẹp? Tìm hiểu nguyên nhân, cách nhận biết, lựa chọn và bảo quản mãng cầu đúng cách.";
const canonical = "https://mangcaubaden.vn/vi-sao-mang-cau-ba-den-doi-khi-co-sau/";
const cover = "https://mangcaubaden.vn/vi-sao-mang-cau-ba-den-co-sau.jpg";

export const metadata: Metadata = {
  title: `${title} | Mãng Cầu Bà Đen`,
  description,
  keywords: [
    "mãng cầu Bà Đen",
    "mãng cầu Bà Đen có sâu",
    "mãng cầu có sâu",
    "sâu trong mãng cầu",
    "mãng cầu Tây Ninh",
    "cách chọn mãng cầu Bà Đen",
  ],
  alternates: { canonical: "/vi-sao-mang-cau-ba-den-doi-khi-co-sau/" },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Mãng Cầu Bà Đen",
    locale: "vi_VN",
    type: "article",
    images: [{ url: cover, width: 1600, height: 1200, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: [cover] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: title,
  description,
  image: [
    cover,
    "https://mangcaubaden.vn/mang-cau-tren-canh.jpg",
    "https://mangcaubaden.vn/vuon-mang-cau-tay-ninh-bao-trai.jpg",
    "https://mangcaubaden.vn/thuc-te-phan-loai.jpg",
  ],
  datePublished: "2026-08-25T10:00:00+07:00",
  dateModified: "2026-08-25T10:00:00+07:00",
  author: { "@type": "Organization", name: "Mãng Cầu Bà Đen NABADEN", url: "https://mangcaubaden.vn/" },
  publisher: {
    "@type": "Organization",
    name: "Mãng Cầu Bà Đen Tây Ninh",
    logo: { "@type": "ImageObject", url: "https://mangcaubaden.vn/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
};

const faqItems = [
  ["Mãng cầu Bà Đen có phải rất hay bị sâu không?", "Không nên kết luận như vậy. Khả năng bị côn trùng gây hại phụ thuộc vào nhiều yếu tố trong quá trình sinh trưởng và chăm sóc. Khâu tuyển lựa trước khi bán giúp loại bỏ nhiều trái có dấu hiệu bất thường."],
  ["Tại sao trái nhìn đẹp nhưng khi tách ra lại thấy sâu?", "Một số dấu hiệu có thể nằm ở khe giữa các mắt hoặc khó quan sát khi trái còn xanh, cứng. Khi trái chín mềm và được tách ra, phần bị ảnh hưởng bên trong mới dễ nhận thấy."],
  ["Mãng cầu có sâu có phải là mãng cầu sạch không?", "Không thể kết luận như vậy. Có sâu hay không có sâu không phải tiêu chí đủ để xác định sản phẩm sạch; cần xem xét nguồn gốc và quy trình canh tác cụ thể."],
  ["Làm sao hạn chế mua phải mãng cầu bị lỗi?", "Nên chọn nơi bán có nguồn gốc rõ ràng, khâu tuyển lựa, đóng gói phù hợp và chính sách hỗ trợ khi khách gặp trái lỗi."],
  ["Mãng cầu chín bị thâm bên trong có phải do sâu không?", "Không nhất thiết. Phần thịt thâm hoặc mềm bất thường còn có thể do va đập, vận chuyển, bảo quản hoặc trái đã chín quá mức."],
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://mangcaubaden.vn/" },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: "https://mangcaubaden.vn/tin-tuc/" },
    { "@type": "ListItem", position: 3, name: title, item: canonical },
  ],
};

function InlineFigure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="article-figure-inline">
      <img src={src} alt={alt} loading="lazy" style={{ maxHeight: "560px", objectFit: "cover", width: "100%", borderRadius: "16px" }} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function MangCauCoSauArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="site-header" role="banner">
        <Link className="brand" href="/" aria-label="Mãng Cầu Bà Đen - Trang chủ">
          <img src="/logo.png" alt="Mãng Cầu Bà Đen NABADEN" className="brand-logo-img" width="42" height="42" />
          <span className="brand-divider" aria-hidden="true">|</span>
          <span className="brand-text">Mãng Cầu<br />Bà Đen</span>
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <Link href="/">Trang chủ</Link><Link href="/san-pham">Sản phẩm</Link><Link href="/hop-tac">Hợp tác</Link><Link href="/tin-tuc" className="active">Tin tức</Link><Link href="/#lien-he">Liên hệ</Link>
        </nav>
        <div className="header-actions"><a className="header-cta" href="tel:0833184106"><span>0833 184 106</span><span className="cta-arrow">↗</span></a></div>
      </header>

      <div className="article-breadcrumb-bar">
        <div className="article-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Trang chủ</Link><span className="breadcrumb-sep">/</span><Link href="/tin-tuc">Cẩm nang &amp; Tin tức</Link><span className="breadcrumb-sep">/</span><span className="breadcrumb-current">Vì sao mãng cầu đôi khi có sâu?</span>
          </nav>
        </div>
      </div>

      <main className="article-main">
        <article className="article-layout">
          <header className="article-header">
            <div className="article-container">
              <div className="article-meta-top"><span className="article-kicker-badge">Kiến thức về trái • Tây Ninh</span><span className="article-read-time">⏱ 9 phút đọc</span><span className="article-pub-date">📅 Tháng 8/2026</span></div>
              <h1 className="article-title">Vì sao mãng cầu Bà Đen đôi khi có sâu? <em>Hiểu đúng về đặc tính tự nhiên của trái mãng cầu</em></h1>
              <p className="article-lead">Vì sao một trái mãng cầu nhìn bên ngoài khá đẹp nhưng khi chín và tách ra lại có thể xuất hiện phần bị sâu? Cùng tìm hiểu khách quan về cấu tạo trái, môi trường sinh trưởng, tuyển lựa và bảo quản.</p>
            </div>
          </header>

          <div className="article-hero-media">
            <div className="article-container">
              <figure className="article-figure-main">
                <img src="/vi-sao-mang-cau-ba-den-co-sau.jpg" alt={title} className="article-img" width="1600" height="1200" style={{ maxHeight: "620px", objectFit: "cover" }} />
                <figcaption className="article-figcaption">Một trái có thương hiệu và hình thức đẹp vẫn có thể gặp bất thường tự nhiên khó nhận biết hoàn toàn từ bên ngoài.</figcaption>
              </figure>
            </div>
          </div>

          <div className="article-body">
            <div className="article-container article-prose">
              <p>Khi nhắc đến <a href="https://nabaden.vn" target="_blank" rel="noreferrer"><strong>mãng cầu Bà Đen</strong></a>, nhiều người nhớ đến đặc sản Tây Ninh có thịt mềm, vị ngọt và hương thơm tự nhiên. Tuy nhiên, một vài trải nghiệm gặp trái có dấu hiệu sâu bên trong có thể khiến người mua e ngại.</p>
              <p>Không nên hiểu rằng cứ là mãng cầu Bà Đen thì sẽ có sâu, cũng không nên cho rằng một trái có sâu đồng nghĩa cả lô hàng kém chất lượng. Cần nhìn vấn đề qua cấu tạo trái, quá trình sinh trưởng, thu hoạch, tuyển lựa và bảo quản.</p>

              <div className="article-toc" id="toc"><p className="toc-title">Mục lục nội dung bài viết</p><ol>
                <li><a href="#cau-tao">1. Cấu tạo nhiều mắt và khe tự nhiên</a></li><li><a href="#moi-truong">2. Môi trường sinh trưởng ngoài vườn</a></li><li><a href="#ben-ngoai-dep">3. Vì sao bên ngoài đẹp nhưng bên trong có thể gặp sâu?</a></li><li><a href="#an-toan">4. Có sâu có đồng nghĩa không an toàn?</a></li><li><a href="#tam-ly">5. Vì sao trải nghiệm này thường được nhớ lâu?</a></li><li><a href="#tuyen-lua">6. Vai trò của khâu tuyển lựa</a></li><li><a href="#van-chuyen">7. Phân biệt sâu với tổn thương vận chuyển</a></li><li><a href="#kiem-tra">8. Cách kiểm tra trước khi ăn</a></li><li><a href="#bao-quan">9. Bảo quản để hạn chế hư hỏng</a></li><li><a href="#mua-hang">10. Đừng chỉ quan tâm giá/kg</a></li><li><a href="#trach-nhiem">11. Trách nhiệm của nơi bán</a></li><li><a href="#nabaden">12. Quan điểm của NABADEN</a></li><li><a href="#ket-luan">13. Hiểu đúng để có trải nghiệm tốt hơn</a></li>
              </ol></div>

              <h2 id="cau-tao">1. Cấu tạo của trái mãng cầu khác với nhiều loại trái cây</h2>
              <p>Vỏ mãng cầu không nhẵn như xoài, cam hay bưởi mà gồm nhiều mắt nổi cùng các rãnh, khe tự nhiên. Cấu trúc này tạo nên hình dáng đặc trưng nhưng cũng khiến việc quan sát toàn bộ tình trạng trái từ bên ngoài không phải lúc nào cũng đơn giản.</p>
              <InlineFigure src="/mang-cau-tren-canh.jpg" alt="Cận cảnh mắt và khe tự nhiên của mãng cầu trên cành" caption="Các mắt và khe tự nhiên là đặc điểm dễ nhận biết của trái mãng cầu." />
              <p>Trong thời gian trái phát triển, côn trùng có thể tiếp cận khu vực giữa các mắt hoặc vị trí vỏ bị tổn thương. Dấu hiệu rõ thường được loại khi tuyển trái, nhưng dấu hiệu ban đầu rất nhỏ có thể khó thấy lúc trái còn xanh và cứng.</p>

              <h2 id="moi-truong">2. Mãng cầu phát triển trong môi trường tự nhiên ngoài vườn</h2>
              <p>Từ khi ra hoa, đậu trái đến lúc đạt độ già thu hoạch, mãng cầu chịu tác động của thời tiết, nhiệt độ, độ ẩm, mưa, côn trùng, sâu bệnh và điều kiện chăm sóc. Hai trái trên cùng một cây vẫn có thể khác nhau về kích thước, hình dáng, thời điểm chín và tình trạng bên trong.</p>
              <InlineFigure src="/vuon-mang-cau-tay-ninh-bao-trai.jpg" alt="Vườn mãng cầu Tây Ninh áp dụng bao trái" caption="Bao trái là một trong những biện pháp giúp hạn chế tác động từ môi trường trong quá trình chăm sóc." />

              <h2 id="ben-ngoai-dep">3. Vì sao bên ngoài đẹp nhưng bên trong vẫn có thể gặp sâu?</h2>
              <p>Không phải mọi dấu hiệu đều thể hiện rõ trên bề mặt. Khi trái còn cứng, cấu trúc vẫn chắc. Sau khi trái chín, mắt nở và thịt mềm dần, những bất thường bên trong mới dễ nhận thấy. Tuyển lựa kỹ giúp giảm đáng kể trái lỗi nhưng cần phân biệt giữa “hạn chế tối đa” và “đảm bảo tuyệt đối”.</p>

              <h2 id="an-toan">4. Có sâu có đồng nghĩa mãng cầu không an toàn hoặc kém chất lượng?</h2>
              <p>Không nên dùng duy nhất dấu hiệu “có sâu” để kết luận chất lượng của cả vùng trồng, thương hiệu hoặc lô hàng. Một trái bị côn trùng gây hại là một trái không đạt chất lượng mong muốn và cần xử lý riêng.</p>
              <p>Cũng không nên suy luận rằng có sâu nghĩa là trái chắc chắn “sạch”. Đánh giá quy trình sản xuất cần dựa trên nguồn gốc, phương pháp canh tác, kiểm soát và tiêu chuẩn liên quan.</p>

              <h2 id="tam-ly">5. Vì sao chúng ta thường nhớ rất lâu một lần ăn trúng trái có sâu?</h2>
              <p>Những lần sử dụng bình thường thường không tạo ký ức đặc biệt, nhưng một lần bất ngờ gặp sâu có thể gây cảm giác khó chịu và được nhớ lâu. Cảm giác “rất hay gặp sâu” chưa chắc phản ánh tỷ lệ thực tế; cần nhìn vào tổng số trái đã dùng, số lần gặp lỗi và điều kiện bảo quản.</p>

              <h2 id="tuyen-lua">6. Tuyển lựa mãng cầu trước khi giao quan trọng như thế nào?</h2>
              <p>Khâu tuyển lựa không chỉ chọn trái to hoặc đẹp. Người tuyển cần quan sát tình trạng trái để loại quả bất thường, đồng thời phân loại theo kích thước, trọng lượng và mục đích sử dụng.</p>
              <InlineFigure src="/thuc-te-phan-loai.jpg" alt="Phân loại và tuyển lựa mãng cầu trước khi giao" caption="Tuyển lựa kỹ giúp hạn chế tối đa trái không đạt chất lượng đến tay khách hàng." />

              <h2 id="van-chuyen">7. Không chỉ sâu, quá trình vận chuyển cũng ảnh hưởng đến mãng cầu</h2>
              <p>Không phải mọi phần hư bên trong đều do sâu. Khi chín, thịt mãng cầu khá mềm. Nếu trái bị va đập hoặc chịu lực mạnh, khu vực tổn thương có thể mềm nhanh, thâm màu hoặc hư. Chỉ nhìn phần thịt sau khi chín đôi khi khó phân biệt tổn thương vận chuyển, chín quá hay côn trùng.</p>
              <InlineFigure src="/dong-thung-carton-mang-cau-xop.jpg" alt="Đóng thùng carton bọc xốp hạn chế va đập" caption="Bao bì và cách xếp trái rất quan trọng khi vận chuyển mãng cầu đi xa." />

              <h2 id="kiem-tra">8. Cách kiểm tra mãng cầu trước khi ăn</h2>
              <p>Khi nhận hàng, nên quan sát xem trái có bị dập mạnh, nứt bất thường, chảy nước, có mùi lạ hoặc vùng hư rõ ràng hay không. Nếu trái hư nhiều, có mùi bất thường hoặc không xác định được mức độ an toàn, lựa chọn thận trọng nhất là không sử dụng.</p>
              <p>Nếu vừa nhận hàng đã thấy bất thường, nên chụp hình hoặc quay video để phản hồi với nơi bán, giúp xác định tình trạng thực tế và có phương án hỗ trợ.</p>

              <h2 id="bao-quan">9. Cách bảo quản để hạn chế hư hỏng</h2>
              <p>Khi trái còn cứng, hãy để nơi khô ráo, thoáng mát, tránh nắng trực tiếp và kiểm tra mỗi ngày. Khi chín, nên sử dụng sớm; nếu chưa ăn ngay có thể bảo quản lạnh trong thời gian ngắn.</p>
              <InlineFigure src="/trai-mang-cau-chin-gia-tren-tay.jpg" alt="Kiểm tra độ chín của trái mãng cầu" caption="Theo dõi độ mềm và tình trạng từng trái mỗi ngày để sử dụng đúng thời điểm." />
              <p>Xem thêm <Link href="/mang-cau-bao-lau-thi-chin/">mãng cầu bao lâu thì chín</Link> và <Link href="/cach-bao-quan-mang-cau-ba-den/">cách bảo quản mãng cầu Bà Đen</Link>.</p>

              <h2 id="mua-hang">10. Khi mua mãng cầu, đừng chỉ quan tâm giá mỗi kilogram</h2>
              <p>Ngoài giá, người mua nên tìm hiểu kích thước trái, độ tuyển, mục đích sử dụng, quy cách đóng gói, thời điểm thu hoạch, nguồn gốc, cách vận chuyển và chính sách hỗ trợ khi có trái lỗi. Hai nơi có giá khác nhau chưa chắc đang bán sản phẩm cùng quy cách.</p>

              <h2 id="trach-nhiem">11. Một đơn vị bán hàng có trách nhiệm nên làm gì khi khách gặp trái lỗi?</h2>
              <p>Đơn vị nghiêm túc cần kiểm soát từ lựa chọn, đóng gói đến vận chuyển; đồng thời tiếp nhận phản ánh khi khách gặp trái sâu hoặc bất thường. Hình ảnh, video, thời điểm nhận hàng và cách bảo quản là dữ liệu giúp xác định nguyên nhân và hỗ trợ phù hợp.</p>

              <h2 id="nabaden">12. NABADEN nhìn nhận vấn đề trái mãng cầu có sâu như thế nào?</h2>
              <p>NABADEN tuyển lựa nhằm hạn chế tối đa trái không đạt chất lượng trước khi giao. Điều quan trọng là kiểm soát từng khâu: thu hoạch phù hợp, tuyển lựa, phân loại, đóng gói, vận chuyển và hướng dẫn bảo quản.</p>
              <div className="article-callout-box"><div className="callout-badge">Quan điểm NABADEN</div><h3>Nông sản có thể không hoàn hảo tuyệt đối</h3><p>Nhưng sự chỉn chu, minh bạch và trách nhiệm với khách hàng luôn cần được đặt lên hàng đầu.</p><div className="callout-actions"><Link href="/san-pham" className="callout-btn primary">Xem sản phẩm ➔</Link><a href="tel:0833184106" className="callout-btn secondary">Hotline: 0833 184 106</a></div></div>

              <h2 id="ket-luan">13. Hiểu đúng về mãng cầu Bà Đen để có trải nghiệm tốt hơn</h2>
              <p>Mãng cầu có cấu trúc nhiều mắt và khe, phát triển trong môi trường tự nhiên và tiếp tục chín sau thu hoạch. Dù được tuyển lựa cẩn thận, vẫn có thể có trường hợp bất thường khó phát hiện hoàn toàn khi trái còn nguyên.</p>
              <p>Không nên xem sâu là bằng chứng trái “sạch”, cũng không nên từ một trái có sâu mà kết luận toàn bộ mãng cầu Bà Đen có vấn đề. Hãy quan tâm nguồn gốc, chất lượng tuyển lựa, quy cách đóng gói, bảo quản và trách nhiệm của người bán.</p>
            </div>
          </div>

          <div className="article-container" id="faq"><section className="article-faq-section" aria-label="Câu hỏi thường gặp"><div className="faq-header"><span className="faq-kicker">Giải đáp thắc mắc</span><h2 className="faq-title">Câu hỏi thường gặp về mãng cầu Bà Đen có sâu</h2></div><div className="faq-accordion">
            {faqItems.map(([question, answer], index) => <details className="faq-item" key={question} open={index === 0}><summary className="faq-question"><span>{question}</span><b aria-hidden="true">＋</b></summary><p>{answer}</p></details>)}
          </div></section></div>

          <section className="article-related-section" aria-label="Bài viết liên quan"><div className="related-section-header"><span className="related-section-kicker">Góc đọc thêm</span><h2 className="related-section-title">Bài viết liên quan</h2></div><div className="related-articles-grid">
            <Link href="/mang-cau-bao-lau-thi-chin/" className="related-article-card"><div className="related-card-thumb"><img src="/mang-cau-ba-den-chin-vang-bo-xop.jpg" alt="Mãng cầu bao lâu thì chín?" loading="lazy" /><span className="related-thumb-tag">Nhận biết độ chín</span></div><div className="related-card-body"><h3 className="related-card-title">Mãng cầu bao lâu thì chín? Cách nhận biết mãng cầu chín ngon</h3><span className="related-card-link">Đọc bài viết <span>→</span></span></div></Link>
            <Link href="/cach-bao-quan-mang-cau-ba-den/" className="related-article-card"><div className="related-card-thumb"><img src="/dong-thung-carton-mang-cau-xop.jpg" alt="Cách bảo quản Mãng Cầu Bà Đen" loading="lazy" /><span className="related-thumb-tag">Bảo quản đúng cách</span></div><div className="related-card-body"><h3 className="related-card-title">Cách bảo quản Mãng Cầu Bà Đen đúng cách tại nhà</h3><span className="related-card-link">Đọc bài viết <span>→</span></span></div></Link>
          </div><div className="related-bottom-nav"><Link href="/tin-tuc" className="nav-pill-btn">← Xem tất cả tin tức</Link><Link href="/" className="nav-pill-btn secondary">← Về trang chủ</Link></div></section>
        </article>
      </main>

      <Footer backLink={{ href: "/tin-tuc", label: "Quay về Cẩm nang & Tin tức" }} />
    </>
  );
}
