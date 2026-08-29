"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const VIETNAM_PROVINCES = [
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "TP. Hồ Chí Minh",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
];

const PROVINCES_POPULAR = [
  "TP. Hồ Chí Minh",
  "Hà Nội",
  "Tây Ninh",
  "Bình Dương",
  "Đồng Nai",
  "Bà Rịa - Vũng Tàu",
  "Đà Nẵng",
  "Cần Thơ",
  "Hải Phòng",
];

export interface SuccessDetails {
  fullName: string;
  phone: string;
  province: string;
  partnerType: string;
}

interface PartnerFormProps {
  defaultType?: "ctv" | "npp";
  onSuccess?: (data: SuccessDetails) => void;
}

export default function PartnerForm({ defaultType = "ctv", onSuccess }: PartnerFormProps) {
  const [partnerType, setPartnerType] = useState<string>(
    defaultType === "npp" ? "Nhà Phân Phối / Đại Lý Sỉ" : "Cộng Tác Viên (CTV)"
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [salesChannel, setSalesChannel] = useState("Bán online qua Facebook / Zalo / TikTok");
  const [notes, setNotes] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isNPP = partnerType.includes("Nhà Phân Phối") || partnerType.includes("NPP");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim()) {
      setErrorMessage("Vui lòng nhập họ và tên của bạn.");
      return;
    }

    // Strict Vietnam Phone Number Validation (10 digits starting with 03, 05, 07, 08, 09)
    const cleanPhone = phone.trim().replace(/[\s\-\.]/g, "").replace(/^\+84/, "0").replace(/^84/, "0");
    const vnPhoneRegex = /^0(3|5|7|8|9)[0-9]{8}$/;
    if (!vnPhoneRegex.test(cleanPhone)) {
      setErrorMessage("Số điện thoại Zalo không hợp lệ. Vui lòng nhập đúng 10 chữ số Việt Nam (ví dụ: 0907215521).");
      return;
    }

    if (!province) {
      setErrorMessage("Vui lòng chọn Tỉnh / Thành phố bạn đang sinh sống.");
      return;
    }

    setIsLoading(true);

    try {
      const currentHost = typeof window !== "undefined" ? window.location.hostname : "";
      const sourceWebsite = currentHost.includes("mangcaubaden")
        ? "mangcaubaden.vn"
        : currentHost || "mangcaubaden.vn";

      const res = await fetch("/api/partner-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceWebsite,
          partnerType,
          fullName: fullName.trim(),
          phone: cleanPhone,
          province: province.trim(),
          salesChannel,
          address: "",
          notes: notes.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        if (onSuccess) {
          onSuccess({
            fullName: fullName.trim(),
            phone: cleanPhone,
            province: province.trim(),
            partnerType,
          });
        }
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        setErrorMessage(data.message || "Có lỗi xảy ra khi gửi. Vui lòng liên hệ Hotline/Zalo 0907 215 521.");
      }
    } catch (err) {
      setErrorMessage("Không thể kết nối máy chủ. Vui lòng kiểm tra mạng hoặc liên hệ qua Zalo 0907 215 521.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="partner-form-card" id="form-dang-ky">
      {isSuccess ? (
        <div className="partner-success-state" role="region" aria-live="polite">
          <h3 className="success-title">Đăng Ký Thành Công!</h3>
          <p className="success-subtitle">
            Cảm ơn <strong>{fullName}</strong>! Thông tin đăng ký của bạn đã được hệ thống ghi nhận. Mãng Cầu Bà Đen sẽ chủ động liên hệ qua Zalo/SĐT trong ít phút.
          </p>

          <div className="success-details-box">
            <div className="success-details-title"> THÔNG TIN XÁC NHẬN ĐĂNG KÝ</div>
            <div className="success-details-grid">
              <div className="detail-item">
                <span className="detail-label">Họ và tên:</span>
                <span className="detail-value">{fullName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Số điện thoại (Zalo):</span>
                <span className="detail-value">{phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Tỉnh / Thành phố:</span>
                <span className="detail-value">{province}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Hình thức đăng ký:</span>
                <span className="detail-value">{partnerType}</span>
              </div>
            </div>
          </div>

          <div className="success-action-btns">
            <Link href="/" className="btn-home-partner">
              <span>Quay Về Trang Chủ</span>
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="partner-form">
          <div className="form-header-area">
            <span className="form-tag">ĐĂNG KÝ HỢP TÁC</span>
            <h3 className="form-main-title">Điền Thông Tin Trở Thành Đối Tác</h3>
            <p className="form-main-desc">
              Tham gia mạng lưới phân phối đặc sản Tây Ninh chính gốc cùng Mãng Cầu Bà Đen.
            </p>
          </div>

          {/* PARTNER TYPE SWITCHER */}
          <div className="form-group">
            <label className="form-label">
              Bạn muốn đăng ký trở thành: <span className="text-required">*</span>
            </label>
            <div className="role-switcher-grid">
              <button
                type="button"
                className={`role-option-card ${!isNPP ? "active" : ""}`}
                onClick={() => setPartnerType("Cộng Tác Viên (CTV)")}
              >
                <div className="role-radio-circle">
                  {!isNPP && <div className="role-radio-dot" />}
                </div>
                <div className="role-info">
                  <div className="role-title">Cộng Tác Viên (CTV)</div>
                  <div className="role-desc">Bán hàng theo đơn, Mãng Cầu Bà Đen hỗ trợ đóng gói, ship hàng và đối soát chiết khấu.</div>
                </div>
              </button>

              <button
                type="button"
                className={`role-option-card ${isNPP ? "active" : ""}`}
                onClick={() => setPartnerType("Nhà Phân Phối / Đại Lý Sỉ")}
              >
                <div className="role-radio-circle">
                  {isNPP && <div className="role-radio-dot" />}
                </div>
                <div className="role-info">
                  <div className="role-title">Nhà Phân Phối / Đại Lý Sỉ</div>
                  <div className="role-desc">Chính sách giá sỉ tại vườn theo sản lượng, hỗ trợ tài liệu và nguồn hàng.</div>
                </div>
              </button>
            </div>
          </div>

          {/* BENEFIT HIGHLIGHT CALLOUT */}
          <div className={`benefit-callout ${isNPP ? "npp" : "ctv"}`}>
            <div className="callout-text">
              {isNPP ? (
                <span><strong>Chính sách Nhà Phân Phối:</strong> Áp dụng khung giá sỉ theo sản lượng tại vườn Núi Bà Đen, hỗ trợ nguồn hàng theo mùa vụ, cung cấp thông tin xuất xứ và chứng nhận VietGAP/OCOP.</span>
              ) : (
                <span><strong>Chính sách Cộng Tác Viên:</strong> Không bắt buộc ôm hàng. Mãng Cầu Bà Đen hỗ trợ các khâu hái trái tại vườn, bọc xốp, đóng thùng, gửi hàng và thu hộ COD, đối soát chiết khấu định kỳ cùng bạn.</span>
              )}
            </div>
          </div>

          {/* INPUT FIELDS */}
          <div className="form-row-2">
            <div className="form-group">
              <label htmlFor="partner-fullname" className="form-label">
                Họ và tên của bạn <span className="text-required">*</span>
              </label>
              <input
                id="partner-fullname"
                type="text"
                className="form-input"
                placeholder="Ví dụ: Nguyễn Văn An"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="partner-phone" className="form-label">
                Số điện thoại (có Zalo) <span className="text-required">*</span>
              </label>
              <input
                id="partner-phone"
                type="tel"
                className="form-input"
                placeholder="Ví dụ: 0907 215 521"
                maxLength={12}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label htmlFor="partner-province" className="form-label">
                Tỉnh / Thành phố sinh sống <span className="text-required">*</span>
              </label>
              <select
                id="partner-province"
                className="form-select"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
              >
                <option value="">-- Chọn Tỉnh / Thành phố --</option>
                <optgroup label="Tỉnh / Thành phố trọng điểm">
                  {PROVINCES_POPULAR.map((p) => (
                    <option key={`pop-${p}`} value={p}>
                      {p}
                    </option>
                  ))}
                </optgroup>
                <optgroup label=" Danh sách 63 Tỉnh / Thành phố (A - Z)">
                  {VIETNAM_PROVINCES.map((p) => (
                    <option key={`all-${p}`} value={p}>
                      {p}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="partner-channel" className="form-label">
                Kênh bán hàng / Kinh nghiệm hiện tại
              </label>
              <select
                id="partner-channel"
                className="form-select"
                value={salesChannel}
                onChange={(e) => setSalesChannel(e.target.value)}
              >
                <option value="Bán online qua Facebook / Zalo / TikTok">Bán online qua Facebook / Zalo / TikTok</option>
                <option value="Cửa hàng trái cây / Thực phẩm sạch">Cửa hàng trái cây / Thực phẩm sạch</option>
                <option value="Vựa hoa quả / Đại lý sỉ nông sản">Vựa hoa quả / Đại lý sỉ nông sản</option>
                <option value="Kinh doanh gia đình / Bán cho người thân, cơ quan">Bán cho người thân, bạn bè, đồng nghiệp</option>
                <option value="Người mới bắt đầu chưa có kinh nghiệm">Người mới bắt đầu (cần hướng dẫn)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="partner-notes" className="form-label">
              Ghi chú / Nhu cầu số lượng dự kiến
            </label>
            <textarea
              id="partner-notes"
              className="form-textarea"
              rows={3}
              placeholder={isNPP ? "Ví dụ: Muốn nhập số lượng từ 50-100kg/lần giao về TP.HCM, cần tư vấn bảng giá sỉ và hợp đồng..." : "Ví dụ: Mình muốn bán thử 3-5 thùng cho bạn bè cơ quan trước, cần hỗ trợ hình ảnh và bài viết..."}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {errorMessage && (
            <div className="form-error-alert" role="alert">
               {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="btn-submit-partner"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="submit-loading-text">
                <span className="spinner" /> Đang gửi thông tin & đồng bộ...
              </span>
            ) : (
              <span>Gửi Đăng Ký Trở Thành {isNPP ? "Nhà Phân Phối" : "Cộng Tác Viên"} </span>
            )}
          </button>

          <p className="form-security-note">
             Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng để liên hệ gửi bảng giá đối tác từ Mãng Cầu Bà Đen.
          </p>
        </form>
      )}
    </div>
  );
}
