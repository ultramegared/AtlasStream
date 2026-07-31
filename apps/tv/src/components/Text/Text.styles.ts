/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Text.styles.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Base styles for the reusable Text component.
 * Defines the default typography used across the
 * AtlasStream TV application.
 * ----------------------------------------------------------------
 */

import { StyleSheet } from 'react-native';

import { Colors, Typography } from '../../theme';

export const styles = StyleSheet.create({
  text: {
    color: Colors.text.primary,
    fontFamily: Typography.fontFamily.regular,
    fontWeight: Typography.fontWeight.regular,
    fontSize: Typography.fontSize.md,
    lineHeight: Typography.lineHeight.md,
    letterSpacing: Typography.letterSpacing.normal,
  },
});

export default styles;