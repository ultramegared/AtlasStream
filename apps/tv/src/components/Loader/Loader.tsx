/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Loader.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Reusable loading indicator component for AtlasStream.
 * Wraps React Native ActivityIndicator providing a
 * consistent API across the application.
 * ----------------------------------------------------------------
 */

import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  View,
} from 'react-native';

import { Colors } from '../../theme';
import { styles } from './Loader.styles';

export interface LoaderProps extends ActivityIndicatorProps {
  centered?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
  centered = false,
  color = Colors.primary,
  size = 'large',
  style,
  ...props
}) => {
  const indicator = (
    <ActivityIndicator
      color={color}
      size={size}
      style={style}
      {...props}
    />
  );

  if (!centered) {
    return indicator;
  }

  return <View style={styles.container}>{indicator}</View>;
};

export default Loader;