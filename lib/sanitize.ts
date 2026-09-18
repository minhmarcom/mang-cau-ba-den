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

  // 1. Remove script and dangerous tags and their content
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
  clean = clean.replace(/<link\b[^>]*>/gi, "");
  clean = clean.replace(/<meta\b[^>]*>/gi, "");
  clean = clean.replace(/<base\b[^>]*>/gi, "");

  // 2. Remove all inline event handlers like onclick, onload, onerror
  clean = clean.replace(/\son[a-z]+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, "");

  // 3. Remove javascript: pseudo-protocol
  clean = clean.replace(/href\s*=\s*(?:'javascript:[^']*'|"javascript:[^"]*")/gi, 'href="#"');
  clean = clean.replace(/src\s*=\s*(?:'javascript:[^']*'|"javascript:[^"]*")/gi, 'src=""');

  // 4. Force no H1 tag in content body (convert <h1> to <h2> to maintain single H1 SEO rule)
  clean = clean.replace(/<h1(\b[^>]*)>/gi, "<h2$1>");
  clean = clean.replace(/<\/h1>/gi, "</h2>");

  return clean;
}
