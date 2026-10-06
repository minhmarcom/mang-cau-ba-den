/**
 * Bộ khử mã độc HTML (HTML Sanitizer) chuẩn cho CMS
 * Lọc bỏ các thẻ nguy hiểm như <script>, <style>, on* attributes
 * Cho phép các thẻ an toàn phục vụ soạn thảo rich text: h2-h6, p, a, img, table, iframe video embed, blockquote, v.v.
 */

const ALLOWED_TAGS = new Set([
  "h2", "h3", "h4", "h5", "h6",
  "p", "span", "strong", "b", "em", "i", "u", "s", "strike", "code", "pre",
  "blockquote", "hr", "br",
  "ul", "ol", "li",
  "a",
  "img", "figure", "figcaption",
  "table", "thead", "tbody", "tr", "th", "td",
  "iframe", "div"
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(["href", "title", "target", "rel", "class"]),
  img: new Set(["src", "alt", "title", "width", "height", "class", "loading", "style"]),
  iframe: new Set(["src", "width", "height", "frameborder", "allow", "allowfullscreen", "class", "title"]),
  th: new Set(["colspan", "rowspan", "style", "class", "align"]),
  td: new Set(["colspan", "rowspan", "style", "class", "align"]),
  table: new Set(["class", "style", "border"]),
  div: new Set(["class", "style"]),
  p: new Set(["class", "style"]),
  span: new Set(["class", "style"]),
};

export function sanitizeHtml(html: string): string {
  if (!html) return "";

  // 1. Remove dangerous active tags and their content
  const DANGEROUS_TAGS = [
    "script", "style", "link", "meta", "base",
    "svg", "object", "embed", "applet", "form",
    "input", "button", "textarea", "select", "math"
  ];

  let clean = html;
  for (const tag of DANGEROUS_TAGS) {
    const regex = new RegExp(`<${tag}\\b[^<]*(?:(?!<\\/${tag}>)<[^<]*)*<\\/${tag}>`, "gi");
    clean = clean.replace(regex, "");
    clean = clean.replace(new RegExp(`<${tag}\\b[^>]*\\/?>`, "gi"), "");
  }

  // 2. Remove all inline event handlers (onload, onerror, onclick, etc.) with any delimiter/whitespace
  clean = clean.replace(/[\s/]+on[a-zA-Z0-9_-]+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, "");

  // 3. Block dangerous URL schemes (javascript:, vbscript:, data:) in href and src
  clean = clean.replace(
    /(href|src)\s*=\s*['"]?\s*(?:javascript|vbscript|data(?!\s*:\s*image)):[^'">\s]*/gi,
    '$1="#"'
  );

  // 4. Force no H1 tag in content body (convert <h1> to <h2> to maintain single H1 SEO rule)
  clean = clean.replace(/<h1(\b[^>]*)>/gi, "<h2$1>");
  clean = clean.replace(/<\/h1>/gi, "</h2>");

  return clean;
}
