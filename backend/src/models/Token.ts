/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : Token.ts
 * Path        : backend/src/models/Token.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication token domain models and contracts
 *               used by the Auth module.
 * ------------------------------------------------------------
 */

import type { JwtPayload } from "jsonwebtoken";

/**
 * Supported token types.
 */
export enum TokenType {
  ACCESS = "ACCESS",
  REFRESH = "REFRESH",
  PASSWORD_RESET = "PASSWORD_RESET",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

/**
 * Token status.
 */
export enum TokenStatus {
  ACTIVE = "ACTIVE",
  REVOKED = "REVOKED",
  EXPIRED = "EXPIRED",
}

/**
 * Base token model.
 */
export interface Token {
  id: string;
  userId: string;
  type: TokenType;
  token: string;
  status: TokenStatus;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Access token payload.
 */
export interface AccessTokenPayload extends JwtPayload {
  sub: string;
  email: string;
  username: string;
  type: TokenType.ACCESS;
}

/**
 * Refresh token payload.
 */
export interface RefreshTokenPayload extends JwtPayload {
  sub: string;
  sessionId: string;
  type: TokenType.REFRESH;
}

/**
 * Password reset token payload.
 */
export interface PasswordResetTokenPayload extends JwtPayload {
  sub: string;
  email: string;
  type: TokenType.PASSWORD_RESET;
}

/**
 * Email verification token payload.
 */
export interface EmailVerificationTokenPayload extends JwtPayload {
  sub: string;
  email: string;
  type: TokenType.EMAIL_VERIFICATION;
}

/**
 * Token pair returned after authentication.
 */
export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  tokenType: "Bearer";
  expiresIn: number;
}

/**
 * Persisted refresh token.
 */
export interface RefreshToken {
  id: string;
  userId: string;
  sessionId: string;
  token: string;
  expiresAt: Date;
  revokedAt: Date | null;
  createdAt: Date;
}

/**
 * Token validation result.
 */
export interface TokenValidationResult {
  valid: boolean;
  expired: boolean;
  revoked: boolean;
  payload?: JwtPayload;
}