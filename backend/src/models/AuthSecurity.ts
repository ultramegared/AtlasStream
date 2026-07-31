/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : AuthSecurity.ts
 * Path        : backend/src/models/AuthSecurity.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication security domain models and
 *               contracts used by the Auth module.
 * ------------------------------------------------------------
 */

/**
 * Security status.
 */
export enum SecurityStatus {
  SECURE = "SECURE",
  LOCKED = "LOCKED",
  SUSPICIOUS = "SUSPICIOUS",
}

/**
 * Account lock reason.
 */
export enum LockReason {
  FAILED_LOGIN_ATTEMPTS = "FAILED_LOGIN_ATTEMPTS",
  SUSPICIOUS_ACTIVITY = "SUSPICIOUS_ACTIVITY",
  ADMINISTRATIVE_ACTION = "ADMINISTRATIVE_ACTION",
}

/**
 * Authentication security state.
 */
export interface AuthSecurity {
  userId: string;
  status: SecurityStatus;
  failedLoginAttempts: number;
  lastFailedLoginAt: Date | null;
  lockedUntil: Date | null;
  lockReason: LockReason | null;
  passwordChangedAt: Date | null;
  lastSuccessfulLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Failed authentication attempt.
 */
export interface FailedLoginAttempt {
  userId: string;
  ipAddress: string;
  userAgent: string;
  occurredAt: Date;
}

/**
 * Account lock request.
 */
export interface LockAccountRequest {
  userId: string;
  reason: LockReason;
  lockedUntil: Date;
}

/**
 * Account unlock request.
 */
export interface UnlockAccountRequest {
  userId: string;
}

/**
 * Security policy.
 */
export interface SecurityPolicy {
  maxFailedAttempts: number;
  lockoutDurationMinutes: number;
  passwordExpirationDays: number;
}