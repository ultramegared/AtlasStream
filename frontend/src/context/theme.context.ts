/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: theme.context.ts
 * Module: Context
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the theme context used
 * throughout the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Supported application themes.
 */
export type Theme = "light" | "dark";

/**
 * Represents the application theme state.
 */
export interface ThemeContext {
  /**
   * Current application theme.
   */
  theme: Theme;

  /**
   * Primary application color.
   */
  primaryColor: string;

  /**
   * Accent application color.
   */
  accentColor: string;
}

/**
 * Default theme context.
 */
const themeContext: ThemeContext = {
  theme: "dark",
  primaryColor: "#0E0E0E",
  accentColor: "#E50914"
};

export default themeContext;