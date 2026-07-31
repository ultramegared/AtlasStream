/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : LoginAudit.ts
 * Path        : backend/src/models/LoginAudit.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Domain models and contracts for authentication
 *               audit events and login history.
 * ------------------------------------------------------------
 */

/**
 * Authentication event type.
 */
export enum AuthenticationEventType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REFRESH_TOKEN = "REFRESH_TOKEN",
  PASSWORD_RESET = "PASSWORD_RESET",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
  FAILED_LOGIN = "FAILED_LOGIN",
}

/**
 * Authentication event status.
 */
export enum AuthenticationEventStatus {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

/**
 * Login audit record.
 */
export interface LoginAudit {
  id: string;
  userId: string;
  event: AuthenticationEventType;
  status: AuthenticationEventStatus;
  ipAddress: string;
  userAgent: string;
  deviceName: string | null;
  platform: string | null;
  reason: string | null;
  createdAt: Date;
}

/**
 * Login audit creation payload.
 */
export interface CreateLoginAuditRequest {
  userId: string;
  event: AuthenticationEventType;
  status: AuthenticationEventStatus;
  ipAddress: string;
  userAgent: string;
  deviceName?: string | null;
  platform?: string | null;
  reason?: string | null;
}

/**
 * Login audit filter.
 */
export interface LoginAuditFilter {
  userId?: string;
  event?: AuthenticationEventType;
  status?: AuthenticationEventStatus;
  from?: Date;
  to?: Date;
}