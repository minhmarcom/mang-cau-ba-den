import Link from "next/link";
import { articles } from "../data/articles";

export interface ArticleFaqItem {
  question: string;
  answer: string;
}

interface ArticleFaqProps {
  items: ArticleFaqItem[];
  heading?: string;
  kicker?: string;
}

/** Reusable, text-only FAQ for every new editorial article. */
export function ArticleFaq({
  items,
  heading = "Câu hỏi thường gặp",
  kicker = "Giải đáp từ nhà vườn",
}: ArticleFaqProps) {
  return (
    <section id="faq" className="article-faq-section article-standard-faq" aria-label={heading}>
      <header className="faq-header">
        <span className="faq-kicker">{kicker}</span>
        <h2 className="faq-title">{heading}</h2>
      </header>
      <div className="faq-list">
        {items.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{item.question}</span>
              <span className="faq-text-action" aria-hidden="true">Xem chi tiết</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

interface ArticleRelatedProps {
  currentSlug: string;
  heading?: string;
  limit?: number;
}

/** Shared related-article grid backed by the central article registry. */
export function ArticleRelated({
  currentSlug,
  heading = "Bài viết liên quan",
  limit = 3,
}: ArticleRelatedProps) {
  const related = articles
    .filter((article) => article.slug !== currentSlug && `/tin-tuc${article.slug}` !== currentSlug)
    .slice(0, limit);

  return (
    <section className="article-related-section article-standard-related" aria-label={heading}>
      <header className="related-section-header">
        <span className="related-section-kicker">Đọc thêm</span>
        <h2 className="related-section-title">{heading}</h2>
      </header>
      <div className="related-articles-grid">
        {related.map((article) => (
          <Link key={article.slug} href={`/tin-tuc${article.slug}`} className="related-article-card">
            <div className="related-card-thumb">
              <img src={article.image} alt={article.title} loading="lazy" />
              <span className="related-thumb-tag">{article.badge}</span>
            </div>
            <div className="related-card-body">
              <div className="related-card-meta">
                <span>{article.readTime}</span>
                <time>{article.date}</time>
              </div>
              <h3 className="related-card-title">{article.title}</h3>
              <p className="related-card-desc">{article.description}</p>
              <span className="related-card-link">Đọc bài viết</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
