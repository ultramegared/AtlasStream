/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: babel.config.js
 * Module: Build Configuration
 * Programming Language: JavaScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Babel configuration for the AtlasStream TV application.
 * Enables React Native transpilation and module path aliases.
 * ----------------------------------------------------------------
 */

module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',

        alias: {
          '@': './src',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme'
        }
      }
    ],

    'react-native-reanimated/plugin'
  ]
};