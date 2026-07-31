/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Image.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Reusable image component wrapping React Native Image.
 * Provides consistent defaults and future extensibility
 * for caching, placeholders and fallbacks.
 * ----------------------------------------------------------------
 */

import React from 'react';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageResizeMode,
} from 'react-native';

export interface ImageProps extends RNImageProps {
  resizeMode?: ImageResizeMode;
}

export const Image: React.FC<ImageProps> = ({
  resizeMode = 'cover',
  ...props
}) => {
  return (
    <RNImage
      resizeMode={resizeMode}
      {...props}
    />
  );
};

export default Image;