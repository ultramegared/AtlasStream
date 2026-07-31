/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : AuthProvider.ts
 * Path        : backend/src/models/AuthProvider.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication provider domain models and
 *               contracts used by the Auth module.
 * ------------------------------------------------------------
 */

/**
 * Supported authentication providers.
 */
export enum AuthProviderType {
  LOCAL = "LOCAL",
  GOOGLE = "GOOGLE",
  APPLE = "APPLE",
  MICROSOFT = "MICROSOFT",
  FACEBOOK = "FACEBOOK",
  GITHUB = "GITHUB",
}

/**
 * Authentication provider status.
 */
export enum AuthProviderStatus {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
}

/**
 * Authentication provider.
 */
export interface AuthProvider {
  id: string;
  userId: string;
  provider: AuthProviderType;
  providerUserId: string;
  email: string;
  linkedAt: Date;
  lastUsedAt: Date | null;
  status: AuthProviderStatus;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Provider link request.
 */
export interface LinkAuthProviderRequest {
  userId: string;
  provider: AuthProviderType;
  providerUserId: string;
  email: string;
}

/**
 * Provider unlink request.
 */
export interface UnlinkAuthProviderRequest {
  userId: string;
  provider: AuthProviderType;
}

/**
 * Provider authentication result.
 */
export interface AuthProviderResult {
  provider: AuthProviderType;
  authenticated: boolean;
  linked: boolean;
  userId: string | null;
}