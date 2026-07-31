/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Poster.styles.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Base styles for the Poster component.
 * Defines the layout for the image and metadata displayed
 * in streaming content posters.
 * ----------------------------------------------------------------
 */

import { StyleSheet } from 'react-native';

import {
  Colors,
  Dimensions,
  Radius,
  Spacing,
} from '../../theme';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.poster.height,
    backgroundColor: Colors.background.tertiary,
  },

  content: {
    padding: Spacing.md,
    gap: Spacing.xs,
    backgroundColor: Colors.background.secondary,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: Spacing.md,
    backgroundColor: Colors.overlay.dark,
    borderBottomLeftRadius: Radius.card,
    borderBottomRightRadius: Radius.card,
  },
});

export default styles;