/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Button.styles.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Base styles for the reusable Button component.
 * Defines the default appearance using the AtlasStream
 * design system.
 * ----------------------------------------------------------------
 */

import { StyleSheet } from 'react-native';

import {
  Colors,
  Dimensions,
  Radius,
  Spacing,
  Typography,
} from '../../theme';

export const styles = StyleSheet.create({
  button: {
    minWidth: Dimensions.button.minWidth,
    height: Dimensions.button.height,

    backgroundColor: Colors.brand.primary,

    borderRadius: Radius.button,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: Spacing.xl,
  },

  text: {
    color: Colors.text.primary,

    fontFamily: Typography.fontFamily.semiBold,
    fontWeight: Typography.fontWeight.semiBold,
    fontSize: Typography.fontSize.md,
    lineHeight: Typography.lineHeight.md,
    letterSpacing: Typography.letterSpacing.normal,
  },
});

export default styles;