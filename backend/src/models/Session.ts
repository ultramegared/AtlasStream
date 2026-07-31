/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : Session.ts
 * Path        : backend/src/models/Session.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication session domain models and
 *               contracts used by the Auth module.
 * ------------------------------------------------------------
 */

/**
 * Session status.
 */
export enum SessionStatus {
  ACTIVE = "ACTIVE",
  REVOKED = "REVOKED",
  EXPIRED = "EXPIRED",
  LOGGED_OUT = "LOGGED_OUT",
}

/**
 * Client platform.
 */
export enum ClientPlatform {
  WEB = "WEB",
  MOBILE = "MOBILE",
  TV = "TV",
  DESKTOP = "DESKTOP",
  UNKNOWN = "UNKNOWN",
}

/**
 * Authentication session.
 */
export interface Session {
  id: string;
  userId: string;
  refreshTokenId: string;
  status: SessionStatus;
  platform: ClientPlatform;
  ipAddress: string;
  userAgent: string;
  deviceName: string | null;
  deviceId: string | null;
  lastActivityAt: Date;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Session creation payload.
 */
export interface CreateSessionRequest {
  userId: string;
  refreshTokenId: string;
  platform: ClientPlatform;
  ipAddress: string;
  userAgent: string;
  deviceName?: string | null;
  deviceId?: string | null;
  expiresAt: Date;
}

/**
 * Session update payload.
 */
export interface UpdateSessionRequest {
  lastActivityAt?: Date;
  status?: SessionStatus;
  refreshTokenId?: string;
  expiresAt?: Date;
}

/**
 * Active session information.
 */
export interface ActiveSession {
  sessionId: string;
  platform: ClientPlatform;
  ipAddress: string;
  deviceName: string | null;
  lastActivityAt: Date;
  createdAt: Date;
}

/**
 * Session revocation payload.
 */
export interface RevokeSessionRequest {
  sessionId: string;
  revokedAt: Date;
}