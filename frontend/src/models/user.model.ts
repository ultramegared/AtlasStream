/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: user.model.ts
 * Module: Models
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the User model used throughout
 * the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Represents an application user.
 */
export interface User {
  /**
   * Unique user identifier.
   */
  id: string;

  /**
   * Username.
   */
  username: string;

  /**
   * User first name.
   */
  firstName: string;

  /**
   * User last name.
   */
  lastName: string;

  /**
   * Email address.
   */
  email: string;

  /**
   * User password.
   *
   * Note:
   * This field should only be used during
   * authentication requests and should never
   * be returned by the backend.
   */
  password?: string;

  /**
   * Profile image URL.
   */
  profileImage?: string | null;

  /**
   * User preferred language.
   */
  language?: "es" | "en";

  /**
   * Indicates whether the user has
   * a premium subscription.
   */
  premium?: boolean;

  /**
   * Indicates whether the account
   * is active.
   */
  active?: boolean;

  /**
   * Account creation date.
   */
  createdAt?: string;

  /**
   * Last update date.
   */
  updatedAt?: string;
}