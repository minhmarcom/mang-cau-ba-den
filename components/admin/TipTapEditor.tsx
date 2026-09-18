"use client";

import React, { useRef, useState, useEffect } from "react";

interface TipTapEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  onOpenMediaModal?: () => void;
}

export default function TipTapEditor({
  value,
  onChange,
  placeholder = "Bắt đầu viết nội dung bài viết...",
  onOpenMediaModal,
}: TipTapEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showTableModal, setShowTableModal] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [isHtmlMode, setIsHtmlMode] = useState(false);

  // Synchronize initial value into contentEditable
  useEffect(() => {
    if (editorRef.current && !isHtmlMode) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || "<p></p>";
      }
    }
  }, [value, isHtmlMode]);

  const handleInput = () => {
    if (editorRef.current) {
      let html = editorRef.current.innerHTML;
      // Strip any H1 tags automatically to enforce rule
      html = html.replace(/<h1(\b[^>]*)>/gi, "<h2$1>").replace(/<\/h1>/gi, "</h2>");
      onChange(html);
    }
  };

  const exec = (command: string, arg?: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand(command, false, arg);
      handleInput();
    }
  };

  const handleHeading = (level: number) => {
    if (level === 1) {
      alert("Quy tắc SEO: Thân bài viết chỉ sử dụng từ H2 đến H6. Tiêu đề chính của bài đã là thẻ H1.");
      return;
    }
    exec("formatBlock", `<h${level}>`);
  };

  const handleInsertLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (linkUrl) {
      exec("createLink", linkUrl);
      setLinkUrl("");
      setShowLinkModal(false);
    }
  };

  const handleInsertVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) return;

    let embedUrl = videoUrl;
    // Format youtube links
    const ytMatch = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
    }

    const videoHtml = `
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:20px 0;border-radius:12px;">
        <iframe src="${embedUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe>
      </div>
      <p></p>
    `;
    exec("insertHTML", videoHtml);
    setVideoUrl("");
    setShowVideoModal(false);
  };

  const handleInsertTable = (e: React.FormEvent) => {
    e.preventDefault();
    let html = `<table style="width:100%;border-collapse:collapse;margin:20px 0;"><thead><tr>`;
    for (let c = 0; c < tableCols; c++) {
      html += `<th style="border:1px solid #ddd;padding:10px 12px;background:#f8f9fa;text-align:left;">Tiêu đề ${c + 1}</th>`;
    }
    html += `</tr></thead><tbody>`;
    for (let r = 0; r < tableRows - 1; r++) {
      html += `<tr>`;
      for (let c = 0; c < tableCols; c++) {
        html += `<td style="border:1px solid #ddd;padding:10px 12px;">Dữ liệu</td>`;
      }
      html += `</tr>`;
    }
    html += `</tbody></table><p></p>`;

    exec("insertHTML", html);
    setShowTableModal(false);
  };

  return (
    <div className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-sm focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 transition-all">
      {/* TOOLBAR */}
      <div className="bg-slate-50 border-b border-slate-200 p-2 flex flex-wrap gap-1 items-center sticky top-0 z-20">
        {/* Undo / Redo */}
        <button
          type="button"
          onClick={() => exec("undo")}
          title="Hoàn tác (Undo)"
          className="p-1.5 rounded hover:bg-slate-200 text-slate-700 font-semibold"
        >
          ↶
        </button>
        <button
          type="button"
          onClick={() => exec("redo")}
          title="Làm lại (Redo)"
          className="p-1.5 rounded hover:bg-slate-200 text-slate-700 font-semibold"
        >
          ↷
        </button>

        <div className="h-5 w-[1px] bg-slate-300 mx-1" />

        {/* Headings H2-H6 */}
        <button
          type="button"
          onClick={() => handleHeading(2)}
          title="Tiêu đề H2 (Chính)"
          className="px-2.5 py-1 text-xs font-bold rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => handleHeading(3)}
          title="Tiêu đề H3 (Phụ)"
          className="px-2.5 py-1 text-xs font-bold rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => handleHeading(4)}
          title="Tiêu đề H4"
          className="px-2.5 py-1 text-xs font-bold rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
        >
          H4
        </button>
        <button
          type="button"
          onClick={() => exec("formatBlock", "<p>")}
          title="Đoạn văn thường (Paragraph)"
          className="px-2 py-1 text-xs rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
        >
          Đoạn văn
        </button>

        <div className="h-5 w-[1px] bg-slate-300 mx-1" />

        {/* Basic formatting */}
        <button
          type="button"
          onClick={() => exec("bold")}
          title="In đậm (Bold)"
          className="p-1.5 px-2 rounded hover:bg-slate-200 font-bold text-slate-800"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => exec("italic")}
          title="In nghiêng (Italic)"
          className="p-1.5 px-2 rounded hover:bg-slate-200 italic font-serif text-slate-800"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => exec("strikeThrough")}
          title="Gạch ngang (Strikethrough)"
          className="p-1.5 px-2 rounded hover:bg-slate-200 line-through text-slate-800"
        >
          S
        </button>

        <div className="h-5 w-[1px] bg-slate-300 mx-1" />

        {/* Lists */}
        <button
          type="button"
          onClick={() => exec("insertUnorderedList")}
          title="Danh sách chấm đầu dòng"
          className="p-1.5 rounded hover:bg-slate-200 text-slate-800"
        >
          • Danh sách
        </button>
        <button
          type="button"
          onClick={() => exec("insertOrderedList")}
          title="Danh sách số thứ tự"
          className="p-1.5 rounded hover:bg-slate-200 text-slate-800"
        >
          1. Danh sách số
        </button>

        {/* Blockquote */}
        <button
          type="button"
          onClick={() => exec("formatBlock", "<blockquote>")}
          title="Trích dẫn (Quote)"
          className="p-1.5 px-2 rounded hover:bg-slate-200 font-serif italic text-slate-800"
        >
          “ Trích dẫn
        </button>

        <div className="h-5 w-[1px] bg-slate-300 mx-1" />

        {/* Link */}
        <button
          type="button"
          onClick={() => setShowLinkModal(true)}
          title="Chèn liên kết (Link)"
          className="p-1.5 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1"
        >
          🔗 Link
        </button>

        {/* Image from Media Library */}
        <button
          type="button"
          onClick={onOpenMediaModal}
          title="Chèn ảnh từ Thư viện Media"
          className="p-1.5 px-2.5 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1 border border-emerald-200"
        >
          🖼 Chèn ảnh
        </button>

        {/* Video Embed */}
        <button
          type="button"
          onClick={() => setShowVideoModal(true)}
          title="Chèn video Youtube"
          className="p-1.5 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1"
        >
          ▶ Video
        </button>

        {/* Table */}
        <button
          type="button"
          onClick={() => setShowTableModal(true)}
          title="Chèn bảng dữ liệu"
          className="p-1.5 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1"
        >
          ▦ Bảng
        </button>

        {/* Horizontal divider */}
        <button
          type="button"
          onClick={() => exec("insertHorizontalRule")}
          title="Đường kẻ ngang (Divider)"
          className="p-1.5 px-2 rounded hover:bg-slate-200 text-slate-800 text-xs"
        >
          ― Kẻ ngang
        </button>

        {/* Toggle HTML view */}
        <button
          type="button"
          onClick={() => setIsHtmlMode(!isHtmlMode)}
          className={`ml-auto px-2.5 py-1 text-xs rounded font-medium ${
            isHtmlMode ? "bg-emerald-700 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          {isHtmlMode ? "👁 Xem trực quan" : "</> Mã HTML"}
        </button>
      </div>

      {/* MODAL CHÈN LINK */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-5 w-full max-w-md shadow-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3">Chèn liên kết URL</h3>
            <form onSubmit={handleInsertLink}>
              <input
                type="url"
                required
                placeholder="https://example.com/duong-dan"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm mb-4 focus:outline-none focus:border-emerald-600"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowLinkModal(false)}
                  className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
                >
                  Chèn liên kết
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CHÈN VIDEO */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-5 w-full max-w-md shadow-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3">Chèn video Youtube</h3>
            <form onSubmit={handleInsertVideo}>
              <input
                type="url"
                required
                placeholder="Dán link Youtube: https://www.youtube.com/watch?v=..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm mb-4 focus:outline-none focus:border-emerald-600"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowVideoModal(false)}
                  className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
                >
                  Chèn Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CHÈN BẢNG */}
      {showTableModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-5 w-full max-w-md shadow-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-3">Chèn bảng dữ liệu</h3>
            <form onSubmit={handleInsertTable}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Số dòng:</label>
                  <input
                    type="number"
                    min={2}
                    max={20}
                    value={tableRows}
                    onChange={(e) => setTableRows(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Số cột:</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={tableCols}
                    onChange={(e) => setTableCols(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowTableModal(false)}
                  className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
                >
                  Tạo bảng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDITOR WORKSPACE */}
      {isHtmlMode ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={20}
          className="w-full p-4 font-mono text-xs text-slate-800 bg-slate-900 text-emerald-400 focus:outline-none resize-y"
          placeholder="Mã HTML bài viết..."
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          className="p-6 min-h-[420px] focus:outline-none prose prose-slate max-w-none text-slate-800 leading-relaxed font-sans"
          style={{ minHeight: "450px" }}
          data-placeholder={placeholder}
        />
      )}
    </div>
  );
}
