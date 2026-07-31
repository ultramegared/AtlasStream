/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : Auth.ts
 * Path        : backend/src/models/Auth.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication domain models, DTOs and contracts
 *               used across the authentication module.
 * ------------------------------------------------------------
 */

import type { JwtPayload } from "jsonwebtoken";

/**
 * Supported authentication providers.
 */
export enum AuthProvider {
  LOCAL = "LOCAL",
  GOOGLE = "GOOGLE",
  APPLE = "APPLE",
}

/**
 * Supported token types.
 */
export enum TokenType {
  ACCESS = "ACCESS",
  REFRESH = "REFRESH",
}

/**
 * Account status.
 */
export enum UserStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  SUSPENDED = "SUSPENDED",
  BLOCKED = "BLOCKED",
}

/**
 * Login request payload.
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * User registration payload.
 */
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

/**
 * Authentication response.
 */
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: "Bearer";
  user: AuthUser;
}

/**
 * Minimal authenticated user payload.
 */
export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  avatarUrl: string | null;
  status: UserStatus;
  provider: AuthProvider;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User credentials stored in persistence.
 */
export interface UserCredentials {
  userId: string;
  passwordHash: string;
}

/**
 * Refresh token persistence model.
 */
export interface RefreshTokenModel {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  revokedAt: Date | null;
  createdAt: Date;
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
  type: TokenType.REFRESH;
}

/**
 * Authentication context injected after middleware validation.
 */
export interface AuthContext {
  userId: string;
  email: string;
  username: string;
  status: UserStatus;
}

/**
 * Login audit event.
 */
export interface LoginAudit {
  userId: string;
  ipAddress: string;
  userAgent: string;
  success: boolean;
  createdAt: Date;
}