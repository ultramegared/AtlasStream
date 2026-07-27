/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: routes.constants.ts
 * Module: Constants
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the application's route names used for navigation
 * throughout the AtlasStream frontend.
 * ----------------------------------------------------------------
 */

/**
 * Application routes.
 */
export const ROUTES = {
  /**
   * Authentication.
   */
  AUTH: "Auth",

  /**
   * Home page.
   */
  HOME: "Home",

  /**
   * Movies catalog.
   */
  MOVIES: "Movies",

  /**
   * TV series catalog.
   */
  SERIES: "Series",

  /**
   * Live TV.
   */
  LIVETV: "LiveTV",

  /**
   * Search page.
   */
  SEARCH: "Search",

  /**
   * Media player.
   */
  PLAYER: "Player",

  /**
   * User profile.
   */
  PROFILE: "Profile",

  /**
   * Application settings.
   */
  SETTINGS: "Settings",

  /**
   * Favorite content.
   */
  FAVORITES: "Favorites",

  /**
   * Continue watching.
   */
  CONTINUE_WATCHING: "ContinueWatching",

  /**
   * Downloads.
   */
  DOWNLOADS: "Downloads",

  /**
   * User library.
   */
  LIBRARY: "Library",

  /**
   * Subscription management.
   */
  SUBSCRIPTIONS: "Subscriptions",

  /**
   * Watch history.
   */
  HISTORY: "History",

  /**
   * Categories.
   */
  CATEGORIES: "Categories",

  /**
   * Notifications.
   */
  NOTIFICATIONS: "Notifications",

  /**
   * About page.
   */
  ABOUT: "About",

  /**
   * Help and support.
   */
  HELP: "Help",

  /**
   * Page not found.
   */
  NOT_FOUND: "NotFound",
} as const;

/**
 * Route names.
 */
export type RouteName =
  typeof ROUTES[keyof typeof ROUTES];