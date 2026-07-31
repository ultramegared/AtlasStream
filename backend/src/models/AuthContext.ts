/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : AuthContext.ts
 * Path        : backend/src/models/AuthContext.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication context models shared across
 *               the Auth module after user authentication.
 * ------------------------------------------------------------
 */

import type { AuthPermission, AuthRole } from "./Permission";
import type { SessionStatus } from "./Session";
import type { UserStatus } from "./Auth";

/**
 * Authenticated user context.
 */
export interface AuthContext {
  userId: string;
  username: string;
  email: string;
  sessionId: string;
  status: UserStatus;
  sessionStatus: SessionStatus;
  roles: AuthRole[];
  permissions: AuthPermission[];
  issuedAt: number;
  expiresAt: number;
}

/**
 * Request metadata.
 */
export interface RequestContext {
  ipAddress: string;
  userAgent: string;
  requestId: string;
}

/**
 * Authenticated request context.
 */
export interface AuthenticatedRequestContext {
  auth: AuthContext;
  request: RequestContext;
}