/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: index.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English
 *   - Español
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Barrel file for player services.
 * Exposes the player service and related types through
 * a single entry point.
 * ----------------------------------------------------------------
 */

export { default as playerService } from './PlayerService';

export type {
  MediaSource,
  PlayerAdapter,
  PlayerState,
} from './PlayerService';