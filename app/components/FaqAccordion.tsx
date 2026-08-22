"use client";

import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "1. Người mới chưa có kinh nghiệm bán trái cây thì có tham gia được không?",
    answer: "Có. NABADEN hỗ trợ trọn gói từ tư liệu hình ảnh, video thực tế tại vườn đến bài viết mẫu và đặc tính trái, giúp bạn dễ dàng tư vấn khách hàng mà không cần kinh nghiệm trước."
  },
  {
    id: 2,
    question: "2. Làm sao để theo dõi tình trạng đơn hàng và chiết khấu?",
    answer: "Mỗi đơn hàng đều có mã vận đơn theo dõi trực tiếp. NABADEN tổng hợp bảng kê chi tiết các đơn thành công và tiến hành chuyển khoản chiết khấu định kỳ theo tuần hoặc theo tháng."
  },
  {
    id: 3,
    question: "3. Nhà Phân Phối / Đại Lý Sỉ cần điều kiện gì để làm việc trực tiếp?",
    answer: "Hai bên cùng trao đổi dự kiến sản lượng tiêu thụ, khu vực phân phối và tần suất nhập hàng để thống nhất khung giá sỉ tận vườn tốt nhất cùng lịch cắt trái ổn định."
  },
  {
    id: 4,
    question: "4. Khi phát sinh sự cố về chất lượng hoặc dập hỏng do vận chuyển thì sao?",
    answer: "Chỉ cần chụp ảnh hoặc quay video tình trạng thùng hàng khi nhận, NABADEN sẽ cùng bạn kiểm tra nguyên nhân và đưa ra phương án xử lý thỏa đáng (bồi thường, bù hàng hoặc khấu trừ đơn)."
  },
  {
    id: 5,
    question: "5. NABADEN hỗ trợ giao hàng đến những khu vực nào?",
    answer: "Hỗ trợ giao toàn quốc. Tuyến lân cận giao xe bus/xe mát nhận trong ngày; tuyến xa giao hỏa tốc đường bay đảm bảo trái đạt độ tươi dẻo ngon nhất khi tới tay người nhận."
  },
  {
    id: 6,
    question: "6. Sau khi gửi thông tin đăng ký thì quy trình tiếp theo là gì?",
    answer: "Đội ngũ phụ trách đối tác NABADEN sẽ chủ động kết nối qua số Zalo bạn đăng ký trong ít phút để gửi chính sách chi tiết và hướng dẫn các bước hợp tác."
  }
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(1); // Default item 1 open

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-accordion-container">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`faq-accordion-item ${isOpen ? "active" : ""}`}
          >
            <button
              type="button"
              className="faq-accordion-header"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <span className="faq-accordion-title">{item.question}</span>
              <span className="faq-accordion-action" aria-hidden="true">
                {isOpen ? "Thu gọn" : "Xem chi tiết"}
              </span>
            </button>
            {isOpen && (
              <div className="faq-accordion-body">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
