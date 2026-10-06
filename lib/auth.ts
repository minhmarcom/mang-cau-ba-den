import crypto from "node:crypto";
import { cookies } from "next/headers";

export type UserRole = "admin" | "editor" | "writer";

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string | null;
}

const JWT_SECRET: string =
  process.env.CMS_JWT_SECRET ||
  (() => {
    if (process.env.NODE_ENV === "production") {
      console.warn("⚠️ [SECURITY WARNING] CMS_JWT_SECRET is missing! Using ephemeral secret to prevent token forgery.");
      return crypto.randomBytes(32).toString("hex");
    }
    return "tayna_cms_dev_secret_key_2026";
  })();
const COOKIE_NAME = "cms_session";

/**
 * Hash password securely using Node.js crypto scrypt
 */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

/**
 * Verify password against stored hash
 */
export function verifyPassword(password: string, storedHash: string): boolean {
  try {
    const [salt, key] = storedHash.split(":");
    if (!salt || !key) return false;
    const keyBuffer = Buffer.from(key, "hex");
    const derivedKey = crypto.scryptSync(password, salt, 64);
    if (keyBuffer.length !== derivedKey.length) return false;
    return crypto.timingSafeEqual(keyBuffer, derivedKey);
  } catch {
    return false;
  }
}

/**
 * Sign session payload into a tamper-proof token
 */
export function signSessionToken(user: SessionUser): string {
  const payload = {
    ...user,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(data)
    .digest("base64url");
  return `${data}.${signature}`;
}

/**
 * Verify and decode session token
 */
export function verifySessionToken(token: string): SessionUser | null {
  try {
    const [data, signature] = token.split(".");
    if (!data || !signature) return null;

    const expectedSig = crypto
      .createHmac("sha256", JWT_SECRET)
      .update(data)
      .digest("base64url");

    const sigBuf = Buffer.from(signature);
    const expBuf = Buffer.from(expectedSig);

    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
    if (Date.now() > payload.exp) {
      return null;
    }

    return {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      role: payload.role,
      avatarUrl: payload.avatarUrl,
    };
  } catch {
    return null;
  }
}

/**
 * Get current session user from request cookies
 */
export async function getCurrentUser(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(COOKIE_NAME);
    if (!sessionCookie?.value) return null;
    return verifySessionToken(sessionCookie.value);
  } catch {
    return null;
  }
}

/**
 * Check if user has required role
 */
export function hasPermission(userRole: UserRole, requiredRole: UserRole): boolean {
  if (userRole === "admin") return true;
  if (userRole === "editor") return requiredRole === "editor" || requiredRole === "writer";
  if (userRole === "writer") return requiredRole === "writer";
  return false;
}

/**
 * Guard utility for API routes and Server Actions
 */
export async function requireAuth(minimumRole?: UserRole): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("UNAUTHORIZED: Vui lòng đăng nhập để tiếp tục");
  }
  if (minimumRole && !hasPermission(user.role, minimumRole)) {
    throw new Error("FORBIDDEN: Bạn không có quyền thực hiện thao tác này");
  }
  return user;
}
