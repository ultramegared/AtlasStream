/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: player.context.ts
 * Module: Context
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the player context used
 * throughout the AtlasStream application.
 * ----------------------------------------------------------------
 */

import type { Movie } from "../models/movie.model";
import type { Series } from "../models/series.model";

/**
 * Represents playable content.
 */
export type PlayerContent = Movie | Series;

/**
 * Represents the player state.
 */
export interface PlayerContext {
  /**
   * Currently selected content.
   */
  currentContent: PlayerContent | null;

  /**
   * Indicates whether playback
   * is currently active.
   */
  isPlaying: boolean;

  /**
   * Current volume level (0–100).
   */
  volume: number;
}

/**
 * Default player context.
 */
const playerContext: PlayerContext = {
  currentContent: null,
  isPlaying: false,
  volume: 100
};

export default playerContext;