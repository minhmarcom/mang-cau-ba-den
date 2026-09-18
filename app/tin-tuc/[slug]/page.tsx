import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cmsDb } from "@/db";
import { sanitizeHtml } from "@/lib/sanitize";
import Footer from "../../components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await cmsDb.findPostBySlug(slug);

  if (!post || post.status !== "published") {
    return {
      title: "Không tìm thấy bài viết | TAYNA",
      robots: { index: false, follow: false },
    };
  }

  const title = post.seoTitle || `${post.title} | TAYNA - Mãng Cầu Bà Đen`;
  const description = post.seoDescription || post.excerpt || "";
  const canonical = post.canonicalUrl || `https://mangcaubaden.vn/tin-tuc/${post.slug}/`;
  const ogImg = post.ogImage || post.featuredImage || "https://mangcaubaden.vn/og-image.jpg";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: post.isIndexable,
      follow: post.isIndexable,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "TAYNA – Mãng Cầu Bà Đen",
      locale: "vi_VN",
      type: "article",
      images: [
        {
          url: ogImg.startsWith("http") ? ogImg : `https://mangcaubaden.vn${ogImg}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImg.startsWith("http") ? ogImg : `https://mangcaubaden.vn${ogImg}`],
    },
  };
}

export default async function PublicPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await cmsDb.findPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  // Ensure not scheduled in the future
  if (post.publishedAt && new Date(post.publishedAt).getTime() > Date.now()) {
    notFound();
  }

  const cleanContent = sanitizeHtml(post.content);
  const categories = await cmsDb.listCategories();
  const cat = categories.find((c) => c.id === post.categoryId);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.featuredImage ? [`https://mangcaubaden.vn${post.featuredImage}`] : undefined,
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "TAYNA – Mãng Cầu Bà Đen",
      url: "https://mangcaubaden.vn",
    },
    publisher: {
      "@type": "Organization",
      name: "TAYNA – Mãng Cầu Bà Đen",
      logo: {
        "@type": "ImageObject",
        url: "https://mangcaubaden.vn/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mangcaubaden.vn/tin-tuc/${post.slug}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://mangcaubaden.vn/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cat ? cat.name : "Tin tức & Cẩm nang",
        item: "https://mangcaubaden.vn/tin-tuc/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://mangcaubaden.vn/tin-tuc/${post.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HEADER */}
      <header className="site-header" role="banner">
        <Link className="brand" href="/" aria-label="Mãng Cầu Bà Đen - Trang chủ">
          <img
            src="/logo.png"
            alt="TAYNA Mãng Cầu Bà Đen"
            className="brand-logo-img"
            width="42"
            height="42"
          />
          <span className="brand-divider" aria-hidden="true">
            |
          </span>
          <span className="brand-text">
            TAYNA - Mãng Cầu
            <br />
            Bà Đen
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <Link href="/">Trang chủ</Link>
          <Link href="/san-pham">Sản phẩm</Link>
          <Link href="/du-lich">Du lịch Tây Ninh</Link>
          <Link href="/tin-tuc" className="active" style={{ color: "#2d6a3f", fontWeight: 700 }}>
            Tin tức &amp; Cẩm nang
          </Link>
          <Link href="/hop-tac">Hợp tác</Link>
          <Link href="/#lien-he">Liên hệ</Link>
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="tel:0907215521">
            <span>0907 215 521</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>
      </header>

      <main className="news-article-system article-main">
        {/* BREADCRUMB */}
        <div className="article-breadcrumb-bar">
          <div className="article-container">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/">Trang chủ</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/tin-tuc">{cat ? cat.name : "Tin tức"}</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{post.title}</span>
            </nav>
          </div>
        </div>

        <article className="article-layout">
          {/* ARTICLE HEADER */}
          <header className="article-header">
            <div className="article-container">
              <div className="article-meta-top">
                <span className="article-kicker-badge">
                  {cat ? cat.name : "Tin tức & Cẩm nang"}
                </span>
                <span className="article-read-time">⏱ 6 phút đọc</span>
                <span className="article-pub-date">
                  📅 {new Date(post.publishedAt || post.createdAt).toLocaleDateString("vi-VN")}
                </span>
              </div>

              <h1 className="article-title">{post.title}</h1>

              {post.excerpt && (
                <p className="article-lead">{post.excerpt}</p>
              )}
            </div>
          </header>

          {/* MAIN HERO IMAGE */}
          {post.featuredImage && (
            <div className="article-hero-media">
              <div className="article-container">
                <figure className="article-figure-main">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="article-img"
                    width="1200"
                    height="630"
                    style={{ maxHeight: "580px", objectFit: "cover" }}
                  />
                </figure>
              </div>
            </div>
          )}

          {/* ARTICLE BODY CONTENT */}
          <div className="article-body">
            <div
              className="article-container article-prose"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            />
          </div>

          {/* TAYNA CALLOUT BOX */}
          <div className="article-container" style={{ margin: "40px auto" }}>
            <div className="article-callout-box">
              <div className="callout-badge">🌿 ĐẶC SẢN NÚI BÀ ĐEN LÀM QUÀ</div>
              <h3>Đặt Hộp Quà 3 Trái VIP TAYNA Dâng Cúng &amp; Biếu Tặng</h3>
              <p>
                Trái mãng cầu được chăm sóc tỉ mỉ dưới chân Núi Bà Đen, thu hoạch đúng lứa già đều, vỏ căng phẳng, thịt dai ngọt thanh tự nhiên.
              </p>
              <div className="callout-actions">
                <Link href="/san-pham/hop-mang-cau-ba-den-3-trai-vip" className="callout-btn primary">
                  Xem Hộp 3 Trái VIP ➔
                </Link>
                <a href="tel:0907215521" className="callout-btn secondary">
                  Hotline / Zalo: 0907 215 521
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* FOOTER */}
        <Footer
          backLink={{
            href: "/tin-tuc",
            label: "Quay về Tin tức & Cẩm nang",
          }}
        />
      </main>
    </>
  );
}
