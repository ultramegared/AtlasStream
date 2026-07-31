/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: metro.config.js
 * Module: Metro Configuration
 * Programming Language: JavaScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Metro bundler configuration for the AtlasStream TV application.
 * Configured for a Turborepo monorepo and prepared for shared
 * packages and React Native TV development.
 * ----------------------------------------------------------------
 */

const path = require('path');
const {
  getDefaultConfig,
  mergeConfig,
} = require('@react-native/metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const defaultConfig = getDefaultConfig(projectRoot);

const config = {
  projectRoot,

  watchFolders: [
    workspaceRoot,
  ],

  resolver: {
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
    ],

    disableHierarchicalLookup: true,

    unstable_enableSymlinks: true,

    resolverMainFields: [
      'react-native',
      'browser',
      'main',
    ],
  },
};

module.exports = mergeConfig(defaultConfig, config);