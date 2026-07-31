/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Card.styles.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Base styles for the reusable Card component.
 * Provides the default appearance for interactive content
 * cards across the AtlasStream TV application.
 * ----------------------------------------------------------------
 */

import { StyleSheet } from 'react-native';

import {
  Colors,
  Dimensions,
  Radius,
  Shadows,
} from '../../theme';

export const styles = StyleSheet.create({
  card: {
    width: Dimensions.card.width,
    height: Dimensions.card.height,

    backgroundColor: Colors.background.secondary,

    borderRadius: Radius.card,

    overflow: 'hidden',

    ...Shadows.md,
  },
});

export default styles;