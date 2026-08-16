"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.location.replace("https://mangcaubaden.vn/");
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "75vh",
        backgroundColor: "#fbfcf8",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: "#1c3d28",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "17px", fontWeight: "600", marginBottom: "16px" }}>
        Đang tự động chuyển hướng về trang chủ Mãng Cầu Bà Đen...
      </p>
      <a
        href="https://mangcaubaden.vn/"
        style={{
          display: "inline-block",
          padding: "12px 26px",
          backgroundColor: "#2d5a3c",
          color: "#ffffff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "15px",
          boxShadow: "0 4px 14px rgba(45, 90, 60, 0.2)",
        }}
      >
        Quay về Trang chủ ngay →
      </a>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("https://mangcaubaden.vn/");`,
        }}
      />
    </div>
  );
}
