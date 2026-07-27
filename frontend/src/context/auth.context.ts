/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: auth.context.ts
 * Module: Context
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the authentication context used
 * throughout the AtlasStream application.
 * ----------------------------------------------------------------
 */

import type { User } from "../models/user.model";

/**
 * Represents the authentication state.
 */
export interface AuthContext {
  /**
   * Indicates whether the user
   * is authenticated.
   */
  isAuthenticated: boolean;

  /**
   * Authenticated user.
   */
  user: User | null;

  /**
   * Authentication token.
   */
  token: string | null;
}

/**
 * Default authentication context.
 */
const authContext: AuthContext = {
  isAuthenticated: false,
  user: null,
  token: null
};

export default authContext;