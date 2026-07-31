/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Screen.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Base screen component used across the AtlasStream TV
 * application. Provides a consistent layout with the
 * application's default background color.
 * ----------------------------------------------------------------
 */

import React from 'react';
import { View } from 'react-native';

import { styles } from './Screen.styles';

export interface ScreenProps extends React.ComponentProps<typeof View> {
  children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <View
      style={[styles.container, style]}
      {...props}
    >
      {children}
    </View>
  );
};

export default Screen;