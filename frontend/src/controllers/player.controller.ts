/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: player.controller.ts
 * Module: Controllers
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Handles player-related operations between
 * the UI and the player service.
 * ----------------------------------------------------------------
 */

import type { Movie } from "../models/movie.model";

import {
  getPlayerContent
} from "../services/player.service";

/**
 * Loads a movie for playback.
 *
 * @param id Movie identifier.
 * @returns Movie data or null if not found.
 */
export async function loadPlayerContent(
  id: string
): Promise<Movie | null> {
  try {
    return await getPlayerContent(id);
  } catch (error) {
    console.error(
      "[PlayerController]",
      error
    );

    return null;
  }
}