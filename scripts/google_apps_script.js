/**
 * GOOGLE APPS SCRIPT CHO MÃNG CẦU BÀ ĐEN
 * Tự động ghi nhận đơn từ website mangcaubaden.vn
 * ======================================================
 * HƯỚNG DẪN CẬP NHẬT TRANG TÍNH:
 * 1. Mở trang Google Sheets của bạn.
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xóa toàn bộ mã cũ, dán toàn bộ đoạn mã bên dưới vào.
 * 4. Bấm biểu tượng Lưu (Save) 💾.
 * 5. Bấm nút "Triển khai" (Deploy) -> "Quản lý bản triển khai" (Manage deployments).
 * 6. Chọn biểu tượng bút chì (Edit) -> Ở mục Phiên bản (Version) chọn "Phiên bản mới" (New version) -> Bấm "Triển khai" (Deploy).
 */

function setupSheetHeaders(sheet) {
  const headers = [
    "Thời Gian Đăng Ký",
    "Website Nguồn",
    "Loại Đối Tác",
    "Họ Và Tên",
    "Số Điện Thoại (Zalo)",
    "Tỉnh / Thành Phố",
    "Địa Chỉ Chi Tiết",
    "Kênh Bán / Kinh Nghiệm",
    "Ghi Chú / Nhu Cầu"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    
    // Định dạng dòng tiêu đề (Màu xanh thương hiệu Mãng Cầu Bà Đen)
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
    
    // Ghi nhận website nguồn: mangcaubaden.vn
    const website = data.website || "mangcaubaden.vn";
    
    // Đảm bảo số điện thoại luôn giữ số 0 ở đầu khi vào Google Sheet
    const phoneFormatted = data.phone ? `'${String(data.phone).replace(/^'/, "")}` : "";

    const row = [
      timeFormatted,
      website,
      data.partnerType || "Cộng Tác Viên (CTV)",
      data.fullName || "",
      phoneFormatted,
      data.province || "",
      data.address || "",
      data.salesChannel || "Bán online / Mạng xã hội",
      data.notes || ""
    ];

    sheet.appendRow(row);
    
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(lastRow, 1, 1, row.length);
    range.setVerticalAlignment("middle");
    range.setFontSize(10);
    
    // Định dạng màu cho cột Website Nguồn để dễ nhìn và phân biệt
    const webCell = sheet.getRange(lastRow, 2);
    if (website.includes("mangcaubaden")) {
      webCell.setBackground("#e0f2fe").setFontColor("#0369a1").setFontWeight("bold"); // Xanh dương cho mangcaubaden.vn
    } else {
      webCell.setBackground("#f0fdf4").setFontColor("#15803d").setFontWeight("bold"); // Xanh lá cây cho mangcaubaden.vn
    }

    // Định dạng màu cho cột Loại Đối Tác
    const typeCell = sheet.getRange(lastRow, 3);
    if ((data.partnerType || "").includes("Nhà Phân Phối") || (data.partnerType || "").includes("NPP")) {
      typeCell.setBackground("#fef3c7").setFontColor("#92400e").setFontWeight("bold");
    } else {
      typeCell.setBackground("#d1fae5").setFontColor("#065f46").setFontWeight("bold");
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Đăng ký thành công!", website: website, row: lastRow }))
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
    .createTextOutput(JSON.stringify({ status: "active", message: "Mãng Cầu Bà Đen Partner Webhook ready!" }))
    .setMimeType(ContentService.MimeType.JSON);
}
