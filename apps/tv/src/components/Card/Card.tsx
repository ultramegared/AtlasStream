/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Card.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Reusable Card component used as the foundation for content
 * presentation across the AtlasStream TV application.
 * ----------------------------------------------------------------
 */

import React from 'react';
import { Pressable } from 'react-native';

import { styles } from './Card.styles';

export interface CardProps
  extends React.ComponentProps<typeof Pressable> {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Pressable
      style={[styles.card, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default Card;