/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : AuthResponse.ts
 * Path        : backend/src/models/AuthResponse.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication response models returned by
 *               the Auth module.
 * ------------------------------------------------------------
 */

import type { AuthUser } from "./Auth";
import type { TokenPair } from "./Token";
import type { ActiveSession } from "./Session";

/**
 * Authentication response.
 */
export interface AuthResponse {
  user: AuthUser;
  tokens: TokenPair;
  session: ActiveSession;
}

/**
 * Login response.
 */
export interface LoginResponse extends AuthResponse {}

/**
 * Register response.
 */
export interface RegisterResponse extends AuthResponse {}

/**
 * Refresh token response.
 */
export interface RefreshTokenResponse {
  tokens: TokenPair;
}

/**
 * Logout response.
 */
export interface LogoutResponse {
  success: boolean;
  message: string;
}

/**
 * Email verification response.
 */
export interface VerifyEmailResponse {
  success: boolean;
  message: string;
}

/**
 * Password reset response.
 */
export interface PasswordResetResponse {
  success: boolean;
  message: string;
}