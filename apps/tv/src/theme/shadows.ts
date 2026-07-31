/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: shadows.ts
 * Module: Theme
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines reusable shadow and elevation tokens for the
 * AtlasStream TV application. These values provide
 * consistent depth across Android TV and tvOS.
 * ----------------------------------------------------------------
 */

export const Shadows = {
  none: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },

  sm: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2
  },

  md: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4
  },

  lg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.24,
    shadowRadius: 16,
    elevation: 8
  },

  xl: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 12
  }
} as const;

export default Shadows;