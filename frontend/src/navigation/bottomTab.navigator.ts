/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: bottomTab.navigator.ts
 * Module: Navigation
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the bottom tab navigator
 * responsible for managing the primary
 * navigation tabs of the application.
 * ----------------------------------------------------------------
 */

/**
 * Represents the bottom tab navigator.
 */
export interface BottomTabNavigatorInfo {
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
 * Returns the bottom tab navigator
 * configuration.
 *
 * @returns The bottom tab navigator metadata.
 */
const bottomTabNavigator = (): BottomTabNavigatorInfo => ({
  name: "BottomTabNavigator",
  status: "Pending",
  description: "Bottom navigation."
});

export default bottomTabNavigator;