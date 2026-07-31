/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : AuthRequest.ts
 * Path        : backend/src/models/AuthRequest.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication request models used by the
 *               Auth module.
 * ------------------------------------------------------------
 */

import type { ClientPlatform } from "./Session";

/**
 * Login request.
 */
export interface LoginRequest {
  email: string;
  password: string;
  platform: ClientPlatform;
  deviceId?: string | null;
  deviceName?: string | null;
}

/**
 * User registration request.
 */
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

/**
 * Refresh token request.
 */
export interface RefreshTokenRequest {
  refreshToken: string;
}

/**
 * Logout request.
 */
export interface LogoutRequest {
  refreshToken: string;
  allDevices?: boolean;
}

/**
 * Forgot password request.
 */
export interface ForgotPasswordRequest {
  email: string;
}

/**
 * Reset password request.
 */
export interface ResetPasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

/**
 * Verify email request.
 */
export interface VerifyEmailRequest {
  token: string;
}

/**
 * Change password request.
 */
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}