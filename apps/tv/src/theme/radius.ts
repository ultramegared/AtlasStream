/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: radius.ts
 * Module: Theme
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the border radius scale for the AtlasStream TV
 * application. Used across buttons, cards, dialogs,
 * inputs and other UI components.
 * ----------------------------------------------------------------
 */

export const Radius = {
  none: 0,

  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  pill: 9999,

  button: 8,
  card: 12,
  dialog: 16,
  input: 8
} as const;

export default Radius;