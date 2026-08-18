"use client";

import { useState, useEffect } from "react";

export default function MascotSpeaker() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const speechText =
    "Dạ xin chào! Em là Bé Mãng Cầu Bà Đen Tây Ninh chính gốc đây ạ. Anh chị cần hỏi mùa vụ hoặc đặt hàng giao hỏa tốc thì liên hệ Zalo cho em nhé!";

  const toggleSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Trình duyệt của bạn không hỗ trợ tính năng phát âm thanh Text-to-Speech.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.lang = "vi-VN";
      utterance.rate = 0.95;
      utterance.pitch = 1.1;

      // Try to select a natural Vietnamese voice
      const voices = window.speechSynthesis.getVoices();
      const viVoice = voices.find((v) => v.lang.includes("vi"));
      if (viVoice) {
        utterance.voice = viVoice;
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setHasInteracted(true);
    }
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

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
        maxWidth: "340px",
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

          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <button
              onClick={toggleSpeech}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: isPlaying ? "#dc2626" : "#166534",
                color: "#ffffff",
                border: "none",
                borderRadius: "99px",
                padding: "8px 14px",
                fontSize: "12.5px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(22, 101, 52, 0.25)",
                transition: "all 0.2s ease",
              }}
            >
              <span>{isPlaying ? "⏹ Dừng nói" : "🔊 Nghe Bé Mãng Cầu lồng tiếng"}</span>
            </button>

            <a
              href="https://zalo.me/0907215521"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                background: "#0284c7",
                color: "#ffffff",
                borderRadius: "99px",
                padding: "8px 12px",
                fontSize: "12.5px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <span>💬 Nhắn Zalo</span>
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
        onClick={() => {
          setIsBubbleOpen((prev) => !prev);
          if (!isPlaying && !hasInteracted) {
            toggleSpeech();
          }
        }}
      >
        <div
          style={{
            position: "relative",
            width: "84px",
            height: "84px",
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
            padding: "6px 12px",
            borderRadius: "99px",
            fontSize: "12px",
            fontWeight: 800,
            boxShadow: "0 4px 12px rgba(22, 101, 52, 0.2)",
          }}
        >
          {isPlaying ? "🔊 Đang phát..." : "💬 Trò chuyện"}
        </div>
      </div>
    </div>
  );
}
