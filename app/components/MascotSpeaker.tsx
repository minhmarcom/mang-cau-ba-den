"use client";

import { useState } from "react";

export default function MascotSpeaker() {
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);

  const speechText =
    "Dạ xin chào! Em là Bé Mãng Cầu Bà Đen Tây Ninh chính gốc đây ạ. Anh chị cần hỏi mùa vụ hoặc đặt hàng giao hỏa tốc thì liên hệ Zalo cho em nhé!";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        maxWidth: "320px",
      }}
    >
      {/* SPEECH BUBBLE */}
      {isBubbleOpen && (
        <div
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
            border: "2px solid #166534",
            borderRadius: "20px 20px 20px 4px",
            padding: "14px 16px",
            boxShadow: "0 12px 32px rgba(22, 101, 52, 0.18)",
            position: "relative",
          }}
        >
          <button
            onClick={() => setIsBubbleOpen(false)}
            style={{
              position: "absolute",
              top: "6px",
              right: "10px",
              background: "none",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
              color: "#64748b",
            }}
            title="Đóng lời thoại"
          >
            ✕
          </button>

          <div
            style={{
              fontSize: "11px",
              fontWeight: 800,
              color: "#166534",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>💬 BÉ MÃNG CẦU BÀ ĐEN CHÀO BẠN</span>
          </div>

          <p
            style={{
              fontSize: "13.5px",
              color: "#1e293b",
              lineHeight: 1.5,
              margin: "0 0 10px 0",
              fontWeight: 600,
            }}
          >
            {speechText}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#166534",
                color: "#ffffff",
                borderRadius: "99px",
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(22, 101, 52, 0.25)",
              }}
            >
              <span>💬 Nhắn Zalo Tư Vấn Ngay ➔</span>
            </a>
          </div>
        </div>
      )}

      {/* MASCOT AVATAR BUTTON */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={() => setIsBubbleOpen((prev) => !prev)}
      >
        <div
          style={{
            position: "relative",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "3px solid #166534",
            background: "#ffffff",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(22, 101, 52, 0.25)",
          }}
        >
          <img
            src="/mascot-speaking.jpg"
            alt="Mascot Bé Mãng Cầu Bà Đen Tây Ninh"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        </div>

        <div
          style={{
            background: "#166534",
            color: "#ffffff",
            padding: "6px 14px",
            borderRadius: "99px",
            fontSize: "12px",
            fontWeight: 800,
            boxShadow: "0 4px 12px rgba(22, 101, 52, 0.2)",
          }}
        >
          💬 Trò chuyện
        </div>
      </div>
    </div>
  );
}
