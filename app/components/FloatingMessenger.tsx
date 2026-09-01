"use client";

import React from "react";

export default function FloatingMessenger() {
  return (
    <a
      href="https://m.me/mangcaubaden.vn"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat Messenger đặt mua Mãng Cầu Bà Đen"
      className="floating-messenger-btn"
    >
      <div className="messenger-pulse" />
      <div className="messenger-icon-wrapper">
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="messenger-svg"
        >
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.513 3.734 7.231V22l3.37-1.851c.907.25 1.874.387 2.896.387 5.523 0 10-4.145 10-9.278C22 6.145 17.523 2 12 2zm1.002 12.443l-2.548-2.718-4.97 2.718 5.467-5.807 2.608 2.718 4.91-2.718-5.467 5.807z" />
        </svg>
      </div>
      <span className="messenger-tooltip">Chat Messenger</span>
    </a>
  );
}
