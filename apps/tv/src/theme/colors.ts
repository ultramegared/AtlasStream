/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: colors.ts
 * Module: Theme
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Centralized color palette for the AtlasStream TV application.
 * Defines brand colors, backgrounds, text, borders, status colors
 * and focus states for TV navigation.
 * ----------------------------------------------------------------
 */

export const Colors = {
  brand: {
    primary: '#E50914',
    secondary: '#B20710',
    accent: '#1DB954'
  },

  background: {
    primary: '#0A0A0A',
    secondary: '#141414',
    tertiary: '#1F1F1F',
    elevated: '#252525'
  },

  text: {
    primary: '#FFFFFF',
    secondary: '#C7C7C7',
    tertiary: '#8E8E93',
    disabled: '#666666',
    inverse: '#000000'
  },

  border: {
    primary: '#2A2A2A',
    secondary: '#404040',
    focus: '#FFFFFF'
  },

  focus: {
    background: '#FFFFFF',
    text: '#000000',
    outline: '#FFFFFF'
  },

  status: {
    success: '#2ECC71',
    warning: '#F39C12',
    error: '#E74C3C',
    info: '#3498DB'
  },

  overlay: {
    light: 'rgba(255,255,255,0.08)',
    medium: 'rgba(0,0,0,0.40)',
    dark: 'rgba(0,0,0,0.75)'
  }
} as const;

export default Colors;