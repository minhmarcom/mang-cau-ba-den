"use client";

import { useState } from "react";

interface StepItem {
  num: string;
  title: string;
  tag: string;
  tagType: "who" | "nabaden" | "shipping";
  desc: string;
}

const PROCESS_STEPS: StepItem[] = [
  {
    num: "01",
    title: "Tiếp Nhận & Lên Đơn",
    tag: "Đối tác / CTV",
    tagType: "who",
    desc: "Đối tác / CTV gửi thông tin người nhận, số lượng và thời gian mong muốn qua kênh liên lạc Zalo điều phối."
  },
  {
    num: "02",
    title: "Thu Hoạch Trái Theo Lứa",
    tag: "NABADEN thực hiện",
    tagType: "nabaden",
    desc: "Nhà vườn kiểm tra độ già phù hợp với khoảng cách vận chuyển của đơn hàng trước khi cắt trái."
  },
  {
    num: "03",
    title: "Phân Loại & Đóng Thùng Xốp",
    tag: "NABADEN thực hiện",
    tagType: "nabaden",
    desc: "Trái được bọc lưới xốp bảo vệ, xếp vào thùng carton có lỗ thoáng khí để hạn chế va đập trên đường đi."
  },
  {
    num: "04",
    title: "Giao Hàng Qua Đơn Vị Vận Chuyển",
    tag: "NABADEN thực hiện",
    tagType: "nabaden",
    desc: "Chuyển qua xe tuyến, dịch vụ hỏa tốc hoặc đường bay tùy theo khu vực và thỏa thuận của từng đơn."
  },
  {
    num: "05",
    title: "Giao Hàng & Thu Hộ (COD)",
    tag: "Vận chuyển & Thu COD",
    tagType: "shipping",
    desc: "Đơn vị vận chuyển giao hàng tận nơi, thu hộ tiền đơn hàng theo thông tin đã xác nhận."
  },
  {
    num: "06",
    title: "Đối Soát & Thanh Toán Chiết Khấu",
    tag: "NABADEN thực hiện",
    tagType: "nabaden",
    desc: "Tổng hợp danh sách các đơn đã giao thành công và tiến hành chuyển khoản chiết khấu theo kỳ đối soát."
  }
];

export default function ProcessAccordion() {
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <div className="process-accordion-wrapper">
      <div className="process-accordion-list">
        {PROCESS_STEPS.map((step) => {
          const isOpen = activeStep === step.num;
          return (
            <div
              key={step.num}
              className={`process-step-item ${isOpen ? "active" : ""}`}
              onClick={() => setActiveStep(isOpen ? "" : step.num)}
            >
              <div className="process-step-header">
                <div className="process-step-title-area">
                  <span className="process-step-num">{step.num}</span>
                  <span className="process-step-name">{step.title}</span>
                </div>
                <div className="process-step-meta">
                  <span className={`process-step-badge ${step.tagType}`}>
                    {step.tag}
                  </span>
                  <span className="process-step-action">
                    {isOpen ? "Thu gọn" : "Xem chi tiết"}
                  </span>
                </div>
              </div>

              {isOpen && (
                <div className="process-step-content">
                  <p>{step.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
