/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Button.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Advanced reusable button component built on top of Pressable.
 * Supports variants, sizes and disabled state while remaining
 * extensible for TV focus and loading states.
 * ----------------------------------------------------------------
 */

import React from 'react';
import { Pressable } from 'react-native';

import { Text } from '../Text';
import { styles } from './Button.styles';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost';

export type ButtonSize =
  | 'sm'
  | 'md'
  | 'lg';

export interface ButtonProps
  extends React.ComponentProps<typeof Pressable> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  disabled = false,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={[
        styles.button,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      <Text
        variant="body"
        weight="semiBold"
        style={styles.text}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;