import Link from "next/link";
import type { Article } from "../data/articles";

type MagazineArticleCardProps = {
  article: Article;
  featured?: boolean;
};

export default function MagazineArticleCard({
  article,
  featured = false,
}: MagazineArticleCardProps) {
  return (
    <article className={featured ? "magazine-card magazine-card-featured" : "magazine-card"}>
      <Link
        href={article.slug}
        className="magazine-card-media"
        aria-label={`Đọc bài: ${article.title}`}
      >
        <img src={article.image} alt={article.title} loading={featured ? "eager" : "lazy"} />
        <span className="magazine-card-badge">{article.badge}</span>
      </Link>

      <div className="magazine-card-content">
        <div className="magazine-card-meta">
          <span>{article.kicker}</span>
          <span aria-hidden="true">•</span>
          <time>{article.date}</time>
        </div>

        <h2 className="magazine-card-title">
          <Link href={article.slug}>{article.title}</Link>
        </h2>

        <p className="magazine-card-description">{article.description}</p>

        <div className="magazine-card-footer">
          <Link href={article.slug} className="magazine-card-link">
            Đọc bài viết <span aria-hidden="true">→</span>
          </Link>
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
