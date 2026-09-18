import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { articles as initialStaticArticles } from "../app/data/articles";
import { hashPassword } from "../lib/auth";

export interface DbUser {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  avatarUrl?: string | null;
  role: "admin" | "editor" | "writer";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DbCategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  parentId?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface DbTag {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

export interface DbPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  featuredImage?: string | null;
  status: "draft" | "pending_review" | "published" | "scheduled";
  authorId?: string | null;
  categoryId?: string | null;
  tagIds: string[];
  publishedAt?: string | null;
  scheduledFor?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  focusKeyword?: string | null;
  canonicalUrl?: string | null;
  isIndexable: boolean;
  ogImage?: string | null;
  viewsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface DbMedia {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  width?: number | null;
  height?: number | null;
  altText?: string | null;
  caption?: string | null;
  uploadedBy?: string | null;
  createdAt: string;
}

export interface DbRevision {
  id: string;
  postId: string;
  title: string;
  content: string;
  excerpt?: string | null;
  editedBy?: string | null;
  createdAt: string;
}

export interface DbActivityLog {
  id: string;
  userId?: string | null;
  userName?: string | null;
  action: string;
  entityType?: string | null;
  entityId?: string | null;
  details?: string | null;
  ipAddress?: string | null;
  createdAt: string;
}

interface CmsDataStore {
  users: DbUser[];
  categories: DbCategory[];
  tags: DbTag[];
  posts: DbPost[];
  media: DbMedia[];
  revisions: DbRevision[];
  activityLogs: DbActivityLog[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const STORE_PATH = path.join(DATA_DIR, "cms-db.json");

function ensureStoreInitialized(): CmsDataStore {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (fs.existsSync(STORE_PATH)) {
    try {
      const content = fs.readFileSync(STORE_PATH, "utf-8");
      return JSON.parse(content) as CmsDataStore;
    } catch {
      // If corrupted, re-seed
    }
  }

  const now = new Date().toISOString();

  // 1. Initial Users
  const users: DbUser[] = [
    {
      id: crypto.randomUUID(),
      email: "admin@mangcaubaden.vn",
      passwordHash: hashPassword("AdminPassword2026!"),
      name: "Quản trị viên TAYNA",
      avatarUrl: "/logo.png",
      role: "admin",
      isActive: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      email: "editor@mangcaubaden.vn",
      passwordHash: hashPassword("EditorPassword2026!"),
      name: "Biên tập viên TAYNA",
      avatarUrl: "/logo.png",
      role: "editor",
      isActive: true,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      email: "writer@mangcaubaden.vn",
      passwordHash: hashPassword("WriterPassword2026!"),
      name: "Nhân viên Content",
      avatarUrl: "/logo.png",
      role: "writer",
      isActive: true,
      createdAt: now,
      updatedAt: now,
    },
  ];

  // 2. Initial Categories
  const categories: DbCategory[] = [
    {
      id: crypto.randomUUID(),
      name: "Cẩm nang du lịch",
      slug: "du-lich",
      description: "Cẩm nang hướng dẫn hành hương Núi Bà Đen và kinh nghiệm du lịch Tây Ninh",
      parentId: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      name: "Tin tức & Lễ hội",
      slug: "tin-tuc-le-hoi",
      description: "Sự kiện, hội chợ nông sản và lễ hội OCOP Tây Ninh",
      parentId: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      name: "Kiến thức nông sản",
      slug: "kien-thuc-nong-san",
      description: "Quy trình trồng trọt, nhận biết và tiêu chuẩn Mãng Cầu Bà Đen",
      parentId: null,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: crypto.randomUUID(),
      name: "Mẹo hay & Bảo quản",
      slug: "meo-hay-bao-quan",
      description: "Kinh nghiệm chọn trái chín, vận chuyển và bảo quản tại nhà",
      parentId: null,
      createdAt: now,
      updatedAt: now,
    },
  ];

  // 3. Initial Tags
  const tags: DbTag[] = [
    { id: crypto.randomUUID(), name: "Mãng Cầu Bà Đen", slug: "mang-cau-ba-den", createdAt: now },
    { id: crypto.randomUUID(), name: "Núi Bà Đen", slug: "nui-ba-den", createdAt: now },
    { id: crypto.randomUUID(), name: "Du lịch Tây Ninh", slug: "du-lich-tay-ninh", createdAt: now },
    { id: crypto.randomUUID(), name: "Cáp treo Sun World", slug: "cap-treo-sun-world", createdAt: now },
    { id: crypto.randomUUID(), name: "Đặc sản làm quà", slug: "dac-san-lam-qua", createdAt: now },
    { id: crypto.randomUUID(), name: "OCOP 2026", slug: "ocop-2026", createdAt: now },
  ];

  // 4. Initial Posts from articles.ts
  const posts: DbPost[] = initialStaticArticles.map((art, idx) => {
    const slug = art.slug.replace(/^\//, "");
    let catId = categories[2].id;
    if (slug.includes("du-lich") || slug.includes("hanh-huong") || slug.includes("xe-lan")) {
      catId = categories[0].id;
    } else if (slug.includes("le-hoi") || slug.includes("ocop")) {
      catId = categories[1].id;
    } else if (slug.includes("bao-quan") || slug.includes("chin")) {
      catId = categories[3].id;
    }

    return {
      id: crypto.randomUUID(),
      title: art.title,
      slug: slug,
      content: `<h2>Giới thiệu</h2><p>${art.description}</p><p>Nội dung chi tiết của bài viết được biên soạn đồng bộ từ hệ sinh thái nội dung TAYNA – Mãng Cầu Bà Đen Tây Ninh.</p>`,
      excerpt: art.description,
      featuredImage: art.image,
      status: "published",
      authorId: users[0].id,
      categoryId: catId,
      tagIds: [tags[0].id, tags[1].id],
      publishedAt: new Date(Date.now() - idx * 86400000).toISOString(),
      scheduledFor: null,
      seoTitle: `${art.title} | TAYNA`,
      seoDescription: art.description,
      focusKeyword: "mãng cầu Bà Đen",
      canonicalUrl: `https://mangcaubaden.vn/${slug}/`,
      isIndexable: true,
      ogImage: art.image,
      viewsCount: 150 + idx * 25,
      createdAt: now,
      updatedAt: now,
    };
  });

  // 5. Initial Media
  const media: DbMedia[] = [
    {
      id: crypto.randomUUID(),
      filename: "vuon-nui-ba-den.jpg",
      url: "/vuon-nui-ba-den.jpg",
      mimeType: "image/jpeg",
      size: 345000,
      width: 1200,
      height: 630,
      altText: "Toàn cảnh Núi Bà Đen Tây Ninh",
      caption: "Quần thể KDL Quốc gia Núi Bà Đen",
      uploadedBy: users[0].id,
      createdAt: now,
    },
    {
      id: crypto.randomUUID(),
      filename: "le-phat-ram-thang-gieng-nui-ba-den.jpg",
      url: "/le-phat-ram-thang-gieng-nui-ba-den.jpg",
      mimeType: "image/jpeg",
      size: 420000,
      width: 1200,
      height: 630,
      altText: "Lễ Phật Núi Bà Đen",
      caption: "Không gian chiêm bái tâm linh",
      uploadedBy: users[0].id,
      createdAt: now,
    },
    {
      id: crypto.randomUUID(),
      filename: "hop-qua-mang-cau-ba-den-tayna.jpg",
      url: "/hop-qua-mang-cau-ba-den-tayna.jpg",
      mimeType: "image/jpeg",
      size: 380000,
      width: 1200,
      height: 630,
      altText: "Hộp quà Mãng Cầu Bà Đen TAYNA 3 Trái VIP",
      caption: "Hộp quà dâng lễ và biếu tặng cao cấp",
      uploadedBy: users[0].id,
      createdAt: now,
    },
  ];

  const store: CmsDataStore = {
    users,
    categories,
    tags,
    posts,
    media,
    revisions: [],
    activityLogs: [
      {
        id: crypto.randomUUID(),
        userId: users[0].id,
        userName: users[0].name,
        action: "system.init",
        entityType: "system",
        entityId: "initial_setup",
        details: "Hệ thống CMS Admin khởi tạo thành công",
        ipAddress: "127.0.0.1",
        createdAt: now,
      },
    ],
  };

  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), "utf-8");
  return store;
}

function saveStore(store: CmsDataStore) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), "utf-8");
}

export const cmsDb = {
  // USER OPERATIONS
  async findUserByEmail(email: string): Promise<DbUser | null> {
    const store = ensureStoreInitialized();
    return store.users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
  },

  async findUserById(id: string): Promise<DbUser | null> {
    const store = ensureStoreInitialized();
    return store.users.find((u) => u.id === id) || null;
  },

  async listUsers(): Promise<DbUser[]> {
    const store = ensureStoreInitialized();
    return store.users.map(({ passwordHash, ...safeUser }) => safeUser as DbUser);
  },

  async createUser(data: Omit<DbUser, "id" | "createdAt" | "updatedAt">): Promise<DbUser> {
    const store = ensureStoreInitialized();
    const now = new Date().toISOString();
    const newUser: DbUser = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };
    store.users.push(newUser);
    saveStore(store);
    return newUser;
  },

  async updateUser(id: string, data: Partial<Omit<DbUser, "id" | "createdAt">>): Promise<DbUser | null> {
    const store = ensureStoreInitialized();
    const idx = store.users.findIndex((u) => u.id === id);
    if (idx === -1) return null;
    store.users[idx] = {
      ...store.users[idx],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    saveStore(store);
    return store.users[idx];
  },

  async deleteUser(id: string): Promise<boolean> {
    const store = ensureStoreInitialized();
    const initLen = store.users.length;
    store.users = store.users.filter((u) => u.id !== id);
    if (store.users.length !== initLen) {
      saveStore(store);
      return true;
    }
    return false;
  },

  // POST OPERATIONS
  async listPosts(filters?: {
    status?: string;
    categoryId?: string;
    authorId?: string;
    search?: string;
  }): Promise<DbPost[]> {
    const store = ensureStoreInitialized();
    let result = [...store.posts];

    if (filters?.status && filters.status !== "all") {
      result = result.filter((p) => p.status === filters.status);
    }
    if (filters?.categoryId) {
      result = result.filter((p) => p.categoryId === filters.categoryId);
    }
    if (filters?.authorId) {
      result = result.filter((p) => p.authorId === filters.authorId);
    }
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q));
    }

    return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async findPostById(id: string): Promise<DbPost | null> {
    const store = ensureStoreInitialized();
    return store.posts.find((p) => p.id === id) || null;
  },

  async findPostBySlug(slug: string): Promise<DbPost | null> {
    const store = ensureStoreInitialized();
    const cleanSlug = slug.replace(/^\//, "").replace(/\/$/, "");
    return store.posts.find((p) => p.slug === cleanSlug) || null;
  },

  async createPost(data: Omit<DbPost, "id" | "viewsCount" | "createdAt" | "updatedAt">): Promise<DbPost> {
    const store = ensureStoreInitialized();
    const now = new Date().toISOString();
    const newPost: DbPost = {
      ...data,
      id: crypto.randomUUID(),
      viewsCount: 0,
      createdAt: now,
      updatedAt: now,
    };
    store.posts.push(newPost);
    saveStore(store);
    return newPost;
  },

  async updatePost(
    id: string,
    data: Partial<Omit<DbPost, "id" | "createdAt">>,
    editedBy?: string
  ): Promise<DbPost | null> {
    const store = ensureStoreInitialized();
    const idx = store.posts.findIndex((p) => p.id === id);
    if (idx === -1) return null;

    const oldPost = store.posts[idx];

    // Save revision snapshot
    store.revisions.push({
      id: crypto.randomUUID(),
      postId: oldPost.id,
      title: oldPost.title,
      content: oldPost.content,
      excerpt: oldPost.excerpt,
      editedBy: editedBy || oldPost.authorId,
      createdAt: new Date().toISOString(),
    });

    store.posts[idx] = {
      ...oldPost,
      ...data,
      updatedAt: new Date().toISOString(),
    };
    saveStore(store);
    return store.posts[idx];
  },

  async deletePost(id: string): Promise<boolean> {
    const store = ensureStoreInitialized();
    const initLen = store.posts.length;
    store.posts = store.posts.filter((p) => p.id !== id);
    store.revisions = store.revisions.filter((r) => r.postId !== id);
    if (store.posts.length !== initLen) {
      saveStore(store);
      return true;
    }
    return false;
  },

  async duplicatePost(id: string, newAuthorId?: string): Promise<DbPost | null> {
    const store = ensureStoreInitialized();
    const post = store.posts.find((p) => p.id === id);
    if (!post) return null;

    const now = new Date().toISOString();
    const copySlug = `${post.slug}-copy-${Date.now().toString().slice(-4)}`;
    const copyPost: DbPost = {
      ...post,
      id: crypto.randomUUID(),
      title: `${post.title} (Bản sao)`,
      slug: copySlug,
      status: "draft",
      authorId: newAuthorId || post.authorId,
      publishedAt: null,
      viewsCount: 0,
      createdAt: now,
      updatedAt: now,
    };
    store.posts.push(copyPost);
    saveStore(store);
    return copyPost;
  },

  // CATEGORY OPERATIONS
  async listCategories(): Promise<DbCategory[]> {
    const store = ensureStoreInitialized();
    return store.categories;
  },

  async createCategory(data: Omit<DbCategory, "id" | "createdAt" | "updatedAt">): Promise<DbCategory> {
    const store = ensureStoreInitialized();
    const now = new Date().toISOString();
    const newCat: DbCategory = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };
    store.categories.push(newCat);
    saveStore(store);
    return newCat;
  },

  async updateCategory(id: string, data: Partial<Omit<DbCategory, "id" | "createdAt">>): Promise<DbCategory | null> {
    const store = ensureStoreInitialized();
    const idx = store.categories.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    store.categories[idx] = {
      ...store.categories[idx],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    saveStore(store);
    return store.categories[idx];
  },

  async deleteCategory(id: string): Promise<boolean> {
    const store = ensureStoreInitialized();
    store.categories = store.categories.filter((c) => c.id !== id);
    saveStore(store);
    return true;
  },

  // TAG OPERATIONS
  async listTags(): Promise<DbTag[]> {
    const store = ensureStoreInitialized();
    return store.tags;
  },

  async createTag(name: string, slug: string): Promise<DbTag> {
    const store = ensureStoreInitialized();
    const existing = store.tags.find((t) => t.slug === slug);
    if (existing) return existing;

    const newTag: DbTag = {
      id: crypto.randomUUID(),
      name,
      slug,
      createdAt: new Date().toISOString(),
    };
    store.tags.push(newTag);
    saveStore(store);
    return newTag;
  },

  async deleteTag(id: string): Promise<boolean> {
    const store = ensureStoreInitialized();
    store.tags = store.tags.filter((t) => t.id !== id);
    saveStore(store);
    return true;
  },

  // MEDIA OPERATIONS
  async listMedia(): Promise<DbMedia[]> {
    const store = ensureStoreInitialized();
    return store.media.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async createMedia(data: Omit<DbMedia, "id" | "createdAt">): Promise<DbMedia> {
    const store = ensureStoreInitialized();
    const newMedia: DbMedia = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    store.media.unshift(newMedia);
    saveStore(store);
    return newMedia;
  },

  async updateMedia(id: string, data: Partial<Pick<DbMedia, "altText" | "caption">>): Promise<DbMedia | null> {
    const store = ensureStoreInitialized();
    const idx = store.media.findIndex((m) => m.id === id);
    if (idx === -1) return null;
    store.media[idx] = { ...store.media[idx], ...data };
    saveStore(store);
    return store.media[idx];
  },

  async deleteMedia(id: string): Promise<boolean> {
    const store = ensureStoreInitialized();
    store.media = store.media.filter((m) => m.id !== id);
    saveStore(store);
    return true;
  },

  // REVISION OPERATIONS
  async listRevisions(postId: string): Promise<DbRevision[]> {
    const store = ensureStoreInitialized();
    return store.revisions
      .filter((r) => r.postId === postId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async restoreRevision(revisionId: string, editedBy?: string): Promise<DbPost | null> {
    const store = ensureStoreInitialized();
    const rev = store.revisions.find((r) => r.id === revisionId);
    if (!rev) return null;

    return this.updatePost(rev.postId, {
      title: rev.title,
      content: rev.content,
      excerpt: rev.excerpt,
    }, editedBy);
  },

  // ACTIVITY LOGS
  async logActivity(data: Omit<DbActivityLog, "id" | "createdAt">): Promise<void> {
    const store = ensureStoreInitialized();
    store.activityLogs.unshift({
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
    // Keep max 200 logs
    if (store.activityLogs.length > 200) {
      store.activityLogs = store.activityLogs.slice(0, 200);
    }
    saveStore(store);
  },

  async listActivities(limit = 20): Promise<DbActivityLog[]> {
    const store = ensureStoreInitialized();
    return store.activityLogs.slice(0, limit);
  },

  // DASHBOARD METRICS
  async getDashboardStats() {
    const store = ensureStoreInitialized();
    const totalPosts = store.posts.length;
    const published = store.posts.filter((p) => p.status === "published").length;
    const pendingReview = store.posts.filter((p) => p.status === "pending_review").length;
    const draft = store.posts.filter((p) => p.status === "draft").length;
    const scheduled = store.posts.filter((p) => p.status === "scheduled").length;
    const totalMedia = store.media.length;
    const recentPosts = store.posts
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 5);
    const recentActivities = store.activityLogs.slice(0, 6);

    return {
      totalPosts,
      published,
      pendingReview,
      draft,
      scheduled,
      totalMedia,
      recentPosts,
      recentActivities,
    };
  },
};
