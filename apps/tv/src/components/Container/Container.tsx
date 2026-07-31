/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Container.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Reusable container component that wraps the React Native View.
 * Provides a consistent base component for layouts across the
 * AtlasStream TV application.
 * ----------------------------------------------------------------
 */

import React from 'react';
import { View } from 'react-native';

import { styles } from './Container.styles';

export interface ContainerProps
  extends React.ComponentProps<typeof View> {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
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

export default Container;