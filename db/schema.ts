import {
  pgTable,
  uuid,
  varchar,
  text,
  boolean,
  integer,
  timestamp,
  primaryKey,
} from "drizzle-orm/pg-core";

/**
 * 1. Bảng users: Quản lý người dùng và phân quyền (Admin, Editor, Writer)
 */
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: varchar("name", { length: 120 }).notNull(),
  avatarUrl: text("avatar_url"),
  role: varchar("role", { length: 30 }).notNull().default("writer"), // 'admin' | 'editor' | 'writer'
  isActive: boolean("is_active").notNull().default(true),
  resetToken: text("reset_token"),
  resetTokenExpiry: timestamp("reset_token_expiry", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * 2. Bảng categories: Quản lý danh mục bài viết hỗ trợ phân cấp Cha - Con
 */
export const categories = pgTable("categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  slug: varchar("slug", { length: 150 }).notNull().unique(),
  description: text("description"),
  parentId: uuid("parent_id"), // Self-reference to categories.id
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * 3. Bảng tags: Quản lý thẻ bài viết
 */
export const tags = pgTable("tags", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * 4. Bảng posts: Quản lý bài viết, workflow, và SEO
 */
export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content").notNull().default(""), // HTML sanitized from TipTap
  excerpt: text("excerpt"),
  featuredImage: text("featured_image"),
  status: varchar("status", { length: 30 }).notNull().default("draft"), // 'draft' | 'pending_review' | 'published' | 'scheduled'
  authorId: uuid("author_id").references(() => users.id, { onDelete: "set null" }),
  categoryId: uuid("category_id").references(() => categories.id, { onDelete: "set null" }),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  scheduledFor: timestamp("scheduled_for", { withTimezone: true }),
  seoTitle: varchar("seo_title", { length: 255 }),
  seoDescription: text("seo_description"),
  focusKeyword: varchar("focus_keyword", { length: 150 }),
  canonicalUrl: text("canonical_url"),
  isIndexable: boolean("is_indexable").notNull().default(true),
  ogImage: text("og_image"),
  viewsCount: integer("views_count").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * 5. Bảng post_tags: Quan hệ nhiều - nhiều giữa posts và tags
 */
export const postTags = pgTable(
  "post_tags",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.postId, table.tagId] }),
  ]
);

/**
 * 6. Bảng media: Quản lý tệp đa phương tiện tải lên
 */
export const media = pgTable("media", {
  id: uuid("id").defaultRandom().primaryKey(),
  filename: varchar("filename", { length: 255 }).notNull(),
  url: text("url").notNull(),
  mimeType: varchar("mime_type", { length: 100 }).notNull(),
  size: integer("size").notNull(), // bytes
  width: integer("width"),
  height: integer("height"),
  altText: text("alt_text"),
  caption: text("caption"),
  uploadedBy: uuid("uploaded_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * 7. Bảng post_revisions: Lưu vết lịch sử chỉnh sửa bài viết để khôi phục
 */
export const postRevisions = pgTable("post_revisions", {
  id: uuid("id").defaultRandom().primaryKey(),
  postId: uuid("post_id")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  editedBy: uuid("edited_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

/**
 * 8. Bảng activity_logs: Lưu nhật ký hoạt động hệ thống
 */
export const activityLogs = pgTable("activity_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  action: varchar("action", { length: 100 }).notNull(), // 'post.create' | 'post.publish' | 'user.login' ...
  entityType: varchar("entity_type", { length: 50 }),
  entityId: varchar("entity_id", { length: 100 }),
  details: text("details"),
  ipAddress: varchar("ip_address", { length: 45 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
