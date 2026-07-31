/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: dimensions.ts
 * Module: Theme
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the standard UI dimensions for the AtlasStream TV
 * application, including layouts, posters, cards, buttons
 * and navigation elements.
 * ----------------------------------------------------------------
 */

export const Dimensions = {
  header: {
    height: 80
  },

  sidebar: {
    width: 280,
    collapsedWidth: 96
  },

  button: {
    height: 56,
    minWidth: 180
  },

  card: {
    width: 280,
    height: 160
  },

  poster: {
    width: 220,
    height: 330
  },

  thumbnail: {
    width: 320,
    height: 180
  },

  hero: {
    height: 720
  },

  avatar: {
    sm: 40,
    md: 56,
    lg: 72,
    xl: 96
  },

  icon: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48
  },

  focusRing: {
    width: 4
  }
} as const;

export default Dimensions;