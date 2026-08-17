import type { Metadata } from "next";
import HopTacContent from "../components/HopTacContent";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HopTacContent />
    </>
  );
}
