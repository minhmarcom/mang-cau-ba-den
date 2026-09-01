import sharp from "sharp";
import fs from "fs";
import path from "path";

async function main() {
  const masterPath = "/Users/minhmarcom/.gemini/antigravity/brain/87a5bc99-3652-4a32-bc4a-3bd4d600ac00/.user_uploaded/media_1786928900506.jpg";
  
  console.log("1. Processing master logo image with transparency...");
  const { data, info } = await sharp(masterPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const out = Buffer.from(data);
  const visited = new Uint8Array(w * h);
  const queue = [];
  
  function isOuterWhite(idx) {
    const r = out[idx * 4];
    const g = out[idx * 4 + 1];
    const b = out[idx * 4 + 2];
    return r >= 238 && g >= 238 && b >= 238;
  }
  
  // BFS from edges
  for (let x = 0; x < w; x++) {
    const topIdx = x;
    const botIdx = (h - 1) * w + x;
    if (isOuterWhite(topIdx)) { visited[topIdx] = 1; queue.push(topIdx); }
    if (isOuterWhite(botIdx)) { visited[botIdx] = 1; queue.push(botIdx); }
  }
  for (let y = 0; y < h; y++) {
    const leftIdx = y * w;
    const rightIdx = y * w + (w - 1);
    if (!visited[leftIdx] && isOuterWhite(leftIdx)) { visited[leftIdx] = 1; queue.push(leftIdx); }
    if (!visited[rightIdx] && isOuterWhite(rightIdx)) { visited[rightIdx] = 1; queue.push(rightIdx); }
  }
  
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % w;
    const cy = Math.floor(curr / w);
    out[curr * 4 + 3] = 0; // Transparent
    
    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < w - 1 ? curr + 1 : -1,
      cy > 0 ? curr - w : -1,
      cy < h - 1 ? curr + w : -1
    ];
    
    for (const n of neighbors) {
      if (n !== -1 && !visited[n] && isOuterWhite(n)) {
        visited[n] = 1;
        queue.push(n);
      }
    }
  }
  
  // Feather edge pixels
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      if (!visited[idx]) {
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
              if (visited[ny * w + nx]) count++;
            }
          }
        }
        if (count > 0) {
          const r = out[idx * 4];
          const g = out[idx * 4 + 1];
          const b = out[idx * 4 + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          if (lum > 220) {
            const alpha = Math.max(0, Math.min(255, Math.round((255 - lum) / 35 * 255 * (1 - count / 16))));
            out[idx * 4 + 3] = alpha;
          }
        }
      }
    }
  }
  
  const transparentMasterBuffer = await sharp(out, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
  
  console.log("2. Saving public/logo.png...");
  await sharp(transparentMasterBuffer).png({ quality: 100, compressionLevel: 9 }).toFile("public/logo.png");
  
  console.log("3. Generating app icons and apple-touch-icon...");
  await sharp(transparentMasterBuffer).resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("public/app-icon-512.png");
  await sharp(transparentMasterBuffer).resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("public/app-icon-192.png");
  await sharp(transparentMasterBuffer).resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("public/apple-touch-icon.png");
  
  console.log("4. Generating favicons...");
  await sharp(transparentMasterBuffer).resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("public/favicon.png");
  await sharp(transparentMasterBuffer).resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("public/favicon-32x32.png");
  await sharp(transparentMasterBuffer).resize(16, 16, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("public/favicon-16x16.png");
  
  const b64 = transparentMasterBuffer.toString("base64");
  const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${b64}" width="512" height="512" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync("public/favicon.svg", svgContent);
  
  console.log("5. Generating favicon.ico (multi-size 16, 32, 48, 64)...");
  const sizes = [16, 32, 48, 64];
  const pngBuffers = [];
  for (const s of sizes) {
    const buf = await sharp(transparentMasterBuffer)
      .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size: s, buffer: buf });
  }
  
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let currentOffset = headerSize + dirEntrySize * numImages;
  
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);
  
  const dirEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 0);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buffer.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    dirEntries.push(entry);
    currentOffset += item.buffer.length;
  }
  
  const icoBuffer = Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
  fs.writeFileSync("public/favicon.ico", icoBuffer);
  
  console.log("6. Generating 1200x630 OpenGraph / SEO Image (public/og.png)...");
  const logoOgBuf = await sharp(transparentMasterBuffer).resize(510, 510, { fit: "contain" }).png().toBuffer();
  const logoOgB64 = logoOgBuf.toString("base64");
  
  const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f341b"/>
      <stop offset="45%" stop-color="#184a27"/>
      <stop offset="100%" stop-color="#0b2413"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fcd34d"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2d6a3f" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#1b4d2b" stop-opacity="0.95"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="35" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Atmospheric Glow Circles -->
  <circle cx="310" cy="315" r="320" fill="#2d6a3f" opacity="0.45" filter="url(#glow)"/>
  <circle cx="1100" cy="90" r="260" fill="#388e3c" opacity="0.2" filter="url(#glow)"/>
  <circle cx="980" cy="540" r="220" fill="#1b5e20" opacity="0.3" filter="url(#glow)"/>
  
  <!-- Inner Border Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="#52b788" stroke-width="1.5" stroke-opacity="0.3"/>
  <rect x="28" y="28" width="1144" height="574" rx="16" fill="none" stroke="#fcd34d" stroke-width="1" stroke-opacity="0.2"/>
  
  <!-- Left: Big Logo Badge -->
  <g filter="url(#shadow)" transform="translate(60, 60)">
    <image href="data:image/png;base64,${logoOgB64}" width="510" height="510"/>
  </g>
  
  <!-- Right: Info Panel -->
  <g transform="translate(590, 80)">
    <!-- Top Pill -->
    <rect x="0" y="0" width="310" height="38" rx="19" fill="#2d6a3f" stroke="#52b788" stroke-width="1.2" stroke-opacity="0.7"/>
    <circle cx="18" cy="19" r="6" fill="#fcd34d"/>
    <text x="34" y="24" fill="#fcd34d" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5">ĐẶC SẢN NÚI BÀ ĐEN TÂY NINH</text>
    
    <!-- Main Title -->
    <text x="0" y="96" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" letter-spacing="0.5">MÃNG CẦU BÀ ĐEN</text>
    
    <!-- Subtitle -->
    <text x="0" y="142" fill="url(#goldGrad)" font-family="system-ui, -apple-system, sans-serif" font-size="23" font-weight="700">SẠCH • TƯƠI • NGON TỪ VƯỜN NHÀ</text>
    
    <!-- Description -->
    <text x="0" y="188" fill="#d1fae5" font-family="system-ui, -apple-system, sans-serif" font-size="16.5" font-weight="400" opacity="0.92">Trái già tuyển chọn loại 1 • Dẻo dai ngọt thanh • Hái tươi tại vườn</text>
    
    <!-- 3 Badges -->
    <g transform="translate(0, 225)">
      <rect x="0" y="0" width="175" height="42" rx="10" fill="url(#badgeGrad)" stroke="#52b788" stroke-width="1" stroke-opacity="0.5"/>
      <text x="18" y="26" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14.5" font-weight="600"> Chuẩn VietGAP</text>
      
      <rect x="188" y="0" width="175" height="42" rx="10" fill="url(#badgeGrad)" stroke="#52b788" stroke-width="1" stroke-opacity="0.5"/>
      <text x="206" y="26" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14.5" font-weight="600"> OCOP Tây Ninh</text>
      
      <rect x="376" y="0" width="175" height="42" rx="10" fill="url(#badgeGrad)" stroke="#52b788" stroke-width="1" stroke-opacity="0.5"/>
      <text x="394" y="26" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14.5" font-weight="600"> Giao Trong Ngày</text>
    </g>
    
    <!-- Bottom Contact Box -->
    <g transform="translate(0, 312)">
      <rect x="0" y="0" width="550" height="66" rx="14" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-width="1" stroke-opacity="0.18"/>
      <text x="24" y="40" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700"> mangcaubaden.vn</text>
      <line x1="270" y1="16" x2="270" y2="50" stroke="#ffffff" stroke-width="1" stroke-opacity="0.25"/>
      <text x="294" y="40" fill="#fcd34d" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="800"> 0907 215 521</text>
    </g>
  </g>
</svg>`;

  await sharp(Buffer.from(ogSvg))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile("public/og.png");
    
  console.log("7. All assets generated successfully!");
}

main().catch(console.error);
