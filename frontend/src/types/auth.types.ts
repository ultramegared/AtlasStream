/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: auth.types.ts
 * Module: Types
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines authentication-related types
 * used throughout the AtlasStream
 * application.
 * ----------------------------------------------------------------
 */

/**
 * Represents a login request.
 */
export interface LoginRequest {
  /**
   * User email address.
   */
  email: string;

  /**
   * User password.
   */
  password: string;
}

/**
 * Represents a user registration request.
 */
export interface RegisterRequest {
  /**
   * Username.
   */
  username: string;

  /**
   * Email address.
   */
  email: string;

  /**
   * Account password.
   */
  password: string;

  /**
   * User first name.
   */
  firstName?: string;

  /**
   * User last name.
   */
  lastName?: string;
}

/**
 * Represents a JWT authentication token.
 */
export interface AuthToken {
  /**
   * Access token.
   */
  accessToken: string;

  /**
   * Optional refresh token.
   */
  refreshToken?: string;

  /**
   * Token expiration date.
   */
  expiresAt?: string;
}