/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: player.types.ts
 * Module: Types
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines player-related types used
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
 * Represents the playback state.
 */
export interface PlayerState {
  /**
   * Currently selected content.
   */
  content: PlayerContent | null;

  /**
   * Current playback position in seconds.
   */
  currentTime: number;

  /**
   * Total content duration in seconds.
   */
  duration: number;

  /**
   * Indicates whether playback is active.
   */
  isPlaying: boolean;

  /**
   * Indicates whether the player is buffering.
   */
  isBuffering: boolean;

  /**
   * Indicates whether the player is loading content.
   */
  isLoading: boolean;

  /**
   * Current volume level (0-100).
   */
  volume: number;

  /**
   * Indicates whether the player is muted.
   */
  isMuted: boolean;

  /**
   * Indicates whether fullscreen mode is enabled.
   */
  isFullscreen: boolean;

  /**
   * Playback speed.
   */
  playbackRate: number;
}

/**
 * Represents subtitle information.
 */
export interface SubtitleTrack {
  /**
   * Subtitle identifier.
   */
  id: string;

  /**
   * Subtitle label.
   */
  label: string;

  /**
   * Language code.
   */
  language: string;

  /**
   * Subtitle source URL.
   */
  url: string;

  /**
   * Indicates whether this subtitle is the default.
   */
  isDefault?: boolean;
}

/**
 * Represents an audio track.
 */
export interface AudioTrack {
  /**
   * Audio track identifier.
   */
  id: string;

  /**
   * Audio track label.
   */
  label: string;

  /**
   * Language code.
   */
  language: string;

  /**
   * Indicates whether this audio track is the default.
   */
  isDefault?: boolean;
}

/**
 * Represents player quality options.
 */
export type VideoQuality =
  | "Auto"
  | "240p"
  | "360p"
  | "480p"
  | "720p"
  | "1080p"
  | "1440p"
  | "2160p";

/**
 * Represents the player configuration.
 */
export interface PlayerSettings {
  /**
   * Preferred playback quality.
   */
  quality: VideoQuality;

  /**
   * Preferred playback speed.
   */
  playbackRate: number;

  /**
   * Autoplay next content.
   */
  autoPlay: boolean;

  /**
   * Enable subtitles by default.
   */
  subtitlesEnabled: boolean;

  /**
   * Default subtitle language.
   */
  subtitleLanguage?: string;

  /**
   * Default audio language.
   */
  audioLanguage?: string;
}