import type { ReactNode } from "react";

/**
 * Design-system boundary for the entire news section.
 * Every current and future article under /tin-tuc automatically inherits the
 * same editorial width, typography, media, FAQ, CTA and related-card rules.
 */
export default function NewsLayout({ children }: { children: ReactNode }) {
  return <div className="news-article-system">{children}</div>;
}
