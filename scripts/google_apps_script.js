/**
 * GOOGLE APPS SCRIPT CHO MÃNG CẦU BÀ ĐEN NABADEN
 * ======================================================
 * HƯỚNG DẪN CÀI ĐẶT (CHỈ MẤT 1 PHÚT):
 * 1. Mở trang tính Google (Google Sheets) mới hoặc có sẵn.
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xóa hết mã cũ trong trình soạn thảo, dán toàn bộ đoạn mã bên dưới vào.
 * 4. Bấm nút "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment).
 * 5. Chọn loại: "Ứng dụng web" (Web app).
 *    - Mô tả: "Nabaden Partner Form Webhook"
 *    - Người có quyền truy cập (Who has access): Chọn "Bất kỳ ai" (Anyone).
 * 6. Bấm "Triển khai" (Deploy), cấp quyền và copy đường link "URL ứng dụng web".
 * 7. Dán URL vừa nhận được vào file `.env.local` với tên:
 *    GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/xxxx/exec
 */

function setupSheetHeaders(sheet) {
  const headers = [
    "Thời Gian Đăng Ký",
    "Loại Đối Tác",
    "Họ Và Tên",
    "Số Điện Thoại (Zalo)",
    "Tỉnh / Thành Phố",
    "Địa Chỉ Chi Tiết",
    "Kênh Bán / Kinh Nghiệm",
    "Ghi Chú / Nhu Cầu",
    "Trạng Thái",
    "Xem Đơn",
    "Hỗ Trợ Cắt Trái",
    "Đóng Thùng Xốp",
    "Ship / Vận Chuyển",
    "Gửi Đơn / Thu Tiền (COD)",
    "Lợi Nhuận / Hoa Hồng",
    "Ghi Chú Đối Soát"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    
    // Định dạng dòng tiêu đề
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#1b4d2b");
    headerRange.setFontColor("#ffffff");
    headerRange.setFontWeight("bold");
    headerRange.setFontSize(11);
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    headerRange.setWrap(true);
    sheet.setRowHeight(1, 40);
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("ĐĂNG KÝ ĐỐI TÁC");
    
    if (!sheet) {
      sheet = ss.insertSheet("ĐĂNG KÝ ĐỐI TÁC");
    }
    
    setupSheetHeaders(sheet);

    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const now = new Date();
    const timeFormatted = Utilities.formatDate(now, "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");

    const row = [
      timeFormatted,
      data.partnerType || "Cộng Tác Viên (CTV)",
      data.fullName || "",
      data.phone || "",
      data.province || "",
      data.address || "",
      data.salesChannel || "Bán online / Mạng xã hội",
      data.notes || "",
      "Mới đăng ký",       // Trạng thái ban đầu
      "Chưa xem",          // Xem đơn
      "Chờ lên đơn",       // Hỗ trợ cắt trái
      "Chưa đóng",         // Đóng thùng xốp
      "Chờ chuyển",        // Ship / Vận chuyển
      "Chờ thu hộ",        // Gửi đơn / Thu tiền COD
      "Chờ đối soát",      // Lợi nhuận / Hoa hồng
      ""                   // Ghi chú đối soát
    ];

    sheet.appendRow(row);
    
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(lastRow, 1, 1, row.length);
    range.setVerticalAlignment("middle");
    range.setFontSize(10);
    
    // Đổi màu nền nhẹ cho dòng mới theo loại đối tác
    if ((data.partnerType || "").includes("Nhà Phân Phối") || (data.partnerType || "").includes("NPP")) {
      sheet.getRange(lastRow, 2).setBackground("#fef3c7").setFontColor("#92400e").setFontWeight("bold");
    } else {
      sheet.getRange(lastRow, 2).setBackground("#d1fae5").setFontColor("#065f46").setFontWeight("bold");
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Đăng ký thành công!", row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", message: "Nabaden Partner Google Sheets Webhook is ready!" }))
    .setMimeType(ContentService.MimeType.JSON);
}
