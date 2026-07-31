/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Row.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Reusable horizontal layout component.
 * Provides a consistent API for arranging children in a row
 * with configurable alignment, justification and spacing.
 * ----------------------------------------------------------------
 */

import React from 'react';
import {
  FlexAlignType,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { styles } from './Row.styles';

export interface RowProps extends ViewProps {
  align?: FlexAlignType;
  justify?: ViewStyle['justifyContent'];
  gap?: number;
  children: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({
  align = 'center',
  justify = 'flex-start',
  gap = 0,
  style,
  children,
  ...props
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          alignItems: align,
          justifyContent: justify,
          gap,
        },
        style as StyleProp<ViewStyle>,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default Row;