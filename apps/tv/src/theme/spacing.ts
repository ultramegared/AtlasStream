/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: spacing.ts
 * Module: Theme
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the spacing scale used throughout the AtlasStream TV
 * application for margins, paddings and layout consistency.
 * ----------------------------------------------------------------
 */

export const Spacing = {
  none: 0,

  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,

  screenHorizontal: 48,
  screenVertical: 32,

  cardPadding: 20,
  sectionSpacing: 40,
  itemSpacing: 16
} as const;

export default Spacing;