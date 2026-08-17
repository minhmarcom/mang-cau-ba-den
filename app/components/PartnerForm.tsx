"use client";

import React, { useState } from "react";

interface PartnerFormProps {
  defaultType?: "ctv" | "npp";
}

export default function PartnerForm({ defaultType = "ctv" }: PartnerFormProps) {
  const [partnerType, setPartnerType] = useState<string>(
    defaultType === "npp" ? "Nhà Phân Phối / Đại Lý Sỉ" : "Cộng Tác Viên (CTV)"
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [address, setAddress] = useState("");
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
    if (!phone.trim() || phone.trim().length < 9) {
      setErrorMessage("Vui lòng nhập số điện thoại (có Zalo) hợp lệ.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/partner-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          partnerType,
          fullName: fullName.trim(),
          phone: phone.trim(),
          province: province.trim(),
          address: address.trim(),
          salesChannel,
          notes: notes.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
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
        <div className="partner-success-state">
          <div className="success-icon-badge">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#2d6a3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="success-title">Đăng Ký Thành Công!</h3>
          <p className="success-subtitle">
            Cảm ơn <strong>{fullName}</strong> đã lựa chọn đồng hành cùng <strong>Mãng Cầu Bà Đen NABADEN</strong> với vai trò <strong>{partnerType}</strong>.
          </p>
          <div className="success-details-box">
            <p>📋 <strong>Thông tin ghi nhận:</strong> {phone} {province ? `• ${province}` : ""}</p>
            <p>⚡ Thông tin của bạn đã được đồng bộ vào hệ thống quản lý. Chuyên viên phụ trách đối tác sẽ liên hệ qua Zalo trong ít phút để gửi bảng giá & tài liệu bán hàng.</p>
          </div>
          <div className="success-action-btns">
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-partner"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.22-1.31C8.63 21.43 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
              </svg>
              <span>Nhắn Zalo Nhận Bảng Giá Ngay</span>
            </a>
            <button
              type="button"
              className="btn-secondary-partner"
              onClick={() => {
                setIsSuccess(false);
                setFullName("");
                setPhone("");
                setAddress("");
                setNotes("");
              }}
            >
              Gửi Đăng Ký Khác
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="partner-form">
          <div className="form-header-area">
            <span className="form-tag">ĐĂNG KÝ HỢP TÁC</span>
            <h3 className="form-main-title">Điền Thông Tin Trở Thành Đối Tác</h3>
            <p className="form-main-desc">
              Tham gia mạng lưới phân phối đặc sản Tây Ninh chính gốc cùng NABADEN.
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
                  <div className="role-desc">Bán hàng theo đơn, NABADEN hỗ trợ đóng gói, ship hàng và đối soát chiết khấu.</div>
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
            <span className="callout-icon">{isNPP ? "👑" : "🌱"}</span>
            <div className="callout-text">
              {isNPP ? (
                <span><strong>Chính sách Nhà Phân Phối:</strong> Áp dụng khung giá sỉ theo sản lượng tại vườn Núi Bà Đen, hỗ trợ nguồn hàng theo mùa vụ, cung cấp thông tin xuất xứ và chứng nhận VietGAP/OCOP.</span>
              ) : (
                <span><strong>Chính sách Cộng Tác Viên:</strong> Không bắt buộc ôm hàng. NABADEN hỗ trợ các khâu hái trái tại vườn, bọc xốp, đóng thùng, gửi hàng và thu hộ COD, đối soát chiết khấu định kỳ cùng bạn.</span>
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
              <input
                id="partner-province"
                type="text"
                className="form-input"
                placeholder="Ví dụ: TP. Hồ Chí Minh, Hà Nội, Tây Ninh..."
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
              />
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
            <label htmlFor="partner-address" className="form-label">
              Địa chỉ chi tiết (nhận hàng mẫu / hợp đồng nếu có)
            </label>
            <input
              id="partner-address"
              type="text"
              className="form-input"
              placeholder="Số nhà, tên đường, phường/xã, quận/huyện..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
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
              ⚠️ {errorMessage}
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
              <span>Gửi Đăng Ký Trở Thành {isNPP ? "Nhà Phân Phối" : "Cộng Tác Viên"} →</span>
            )}
          </button>

          <p className="form-security-note">
            🔒 Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng để liên hệ gửi bảng giá đối tác từ NABADEN.
          </p>
        </form>
      )}
    </div>
  );
}
