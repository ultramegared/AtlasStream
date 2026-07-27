/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: navigation.types.ts
 * Module: Types
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines navigation-related types used
 * throughout the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Represents the implementation status
 * of a navigator.
 */
export type NavigationStatus =
  | "Pending"
  | "In Progress"
  | "Completed";

/**
 * Defines the application's root stack
 * navigation parameters.
 */
export interface RootStackParamList {
  /**
   * Authentication screen.
   */
  Auth: undefined;

  /**
   * Home screen.
   */
  Home: undefined;

  /**
   * Movies screen.
   */
  Movies: undefined;

  /**
   * TV series screen.
   */
  Series: undefined;

  /**
   * Live TV screen.
   */
  LiveTV: undefined;

  /**
   * Search screen.
   */
  Search: undefined;

  /**
   * Video player screen.
   */
  Player: {
    /**
     * Content identifier.
     */
    id: string;
  };

  /**
   * User profile screen.
   */
  Profile: undefined;

  /**
   * Settings screen.
   */
  Settings: undefined;

  /**
   * Favorites screen.
   */
  Favorites: undefined;

  /**
   * Continue Watching screen.
   */
  ContinueWatching: undefined;

  /**
   * Downloads screen.
   */
  Downloads: undefined;

  /**
   * Subscription screen.
   */
  Subscriptions: undefined;
}