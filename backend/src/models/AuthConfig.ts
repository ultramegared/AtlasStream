/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : AuthConfig.ts
 * Path        : backend/src/models/AuthConfig.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication configuration domain models
 *               and contracts used by the Auth module.
 * ------------------------------------------------------------
 */

/**
 * Password policy.
 */
export interface PasswordPolicy {
  minLength: number;
  maxLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumber: boolean;
  requireSpecialCharacter: boolean;
  passwordHistory: number;
  expirationDays: number;
}

/**
 * Token policy.
 */
export interface TokenPolicy {
  accessTokenExpiration: number;
  refreshTokenExpiration: number;
  resetPasswordTokenExpiration: number;
  emailVerificationTokenExpiration: number;
}

/**
 * Session policy.
 */
export interface SessionPolicy {
  maxConcurrentSessions: number;
  maxDevices: number;
  idleTimeout: number;
  absoluteTimeout: number;
  allowMultipleDevices: boolean;
}

/**
 * Login security policy.
 */
export interface LoginSecurityPolicy {
  maxFailedAttempts: number;
  lockoutDuration: number;
  resetFailedAttemptsAfter: number;
  rememberDevice: boolean;
}

/**
 * Authentication configuration.
 */
export interface AuthConfig {
  password: PasswordPolicy;
  token: TokenPolicy;
  session: SessionPolicy;
  security: LoginSecurityPolicy;
}