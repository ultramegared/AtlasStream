/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: app.navigator.ts
 * Module: Navigation
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the main application navigator
 * responsible for controlling the overall
 * navigation flow.
 * ----------------------------------------------------------------
 */

/**
 * Represents the application navigator.
 */
export interface AppNavigatorInfo {
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
 * Returns the main application navigator
 * configuration.
 *
 * @returns The application navigator metadata.
 */
const appNavigator = (): AppNavigatorInfo => ({
  name: "AppNavigator",
  status: "Pending",
  description: "Main navigation controller."
});

export default appNavigator;