/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: auth.navigator.ts
 * Module: Navigation
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the authentication navigator
 * responsible for controlling the user
 * authentication flow.
 * ----------------------------------------------------------------
 */

/**
 * Represents the authentication navigator.
 */
export interface AuthNavigatorInfo {
  /**
   * Navigator name.
   */
  name: string;

  /**
   * Current implementation status.
   */
  status: "Pending" | "In Progress" | "Completed";

  /**
   * Navigator description.
   */
  description: string;
}

/**
 * Returns the authentication navigator
 * configuration.
 *
 * @returns The authentication navigator metadata.
 */
const authNavigator = (): AuthNavigatorInfo => ({
  name: "AuthNavigator",
  status: "Pending",
  description: "Authentication flow."
});

export default authNavigator;