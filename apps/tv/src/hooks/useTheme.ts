/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: useTheme.ts
 * Module: Hooks
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Hook that provides centralized access to the AtlasStream
 * design system tokens.
 * ----------------------------------------------------------------
 */

import { useMemo } from 'react';

import {
  Colors,
  Dimensions,
  Radius,
  Shadows,
  Spacing,
  Typography,
} from '../theme';

export interface Theme {
  colors: typeof Colors;
  typography: typeof Typography;
  spacing: typeof Spacing;
  radius: typeof Radius;
  dimensions: typeof Dimensions;
  shadows: typeof Shadows;
}

export const useTheme = (): Theme => {
  return useMemo(
    () => ({
      colors: Colors,
      typography: Typography,
      spacing: Spacing,
      radius: Radius,
      dimensions: Dimensions,
      shadows: Shadows,
    }),
    [],
  );
};

export default useTheme;