/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Text.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Advanced reusable Text component with support for typography
 * variants, colors, alignment and font weights.
 * ----------------------------------------------------------------
 */

import React from 'react';
import {
  StyleProp,
  Text as RNText,
  TextStyle,
} from 'react-native';

import { Colors, Typography } from '../../theme';
import { styles } from './Text.styles';

type TextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption';

type TextWeight =
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold';

type TextAlign =
  | 'auto'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

type TextColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'inverse';

export interface TextProps
  extends React.ComponentProps<typeof RNText> {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
}

const variantStyle = (
  variant: TextVariant,
): StyleProp<TextStyle> => {
  switch (variant) {
    case 'display':
      return {
        fontSize: Typography.fontSize.display,
        lineHeight: Typography.lineHeight.display,
      };

    case 'h1':
      return {
        fontSize: Typography.fontSize.xxl,
        lineHeight: Typography.lineHeight.xxl,
      };

    case 'h2':
      return {
        fontSize: Typography.fontSize.xl,
        lineHeight: Typography.lineHeight.xl,
      };

    case 'h3':
      return {
        fontSize: Typography.fontSize.lg,
        lineHeight: Typography.lineHeight.lg,
      };

    case 'title':
      return {
        fontSize: Typography.fontSize.xl,
      };

    case 'subtitle':
      return {
        fontSize: Typography.fontSize.lg,
      };

    case 'caption':
      return {
        fontSize: Typography.fontSize.sm,
        lineHeight: Typography.lineHeight.sm,
      };

    default:
      return {};
  }
};

const Text: React.FC<TextProps> = ({
  children,
  style,

  variant = 'body',
  weight = 'regular',
  color = 'primary',
  align = 'left',

  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,

        variantStyle(variant),

        {
          color: Colors.text[color],
          fontWeight: Typography.fontWeight[weight],
          fontFamily: Typography.fontFamily[weight],
          textAlign: align,
        },

        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;