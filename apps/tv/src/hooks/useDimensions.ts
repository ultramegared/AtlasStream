/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: useDimensions.ts
 * Module: Hooks
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Hook that exposes device dimensions and orientation.
 * Centralizes responsive information for TV layouts.
 * ----------------------------------------------------------------
 */

import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

export interface Dimensions {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  isPortrait: boolean;
  isLandscape: boolean;
  isHD: boolean;
  isFullHD: boolean;
  is4K: boolean;
}

export const useDimensions = (): Dimensions => {
  const { width, height, scale, fontScale } = useWindowDimensions();

  return useMemo(
    () => ({
      width,
      height,
      scale,
      fontScale,

      isPortrait: height > width,
      isLandscape: width >= height,

      isHD: width >= 1280,
      isFullHD: width >= 1920,
      is4K: width >= 3840,
    }),
    [width, height, scale, fontScale],
  );
};

export default useDimensions;