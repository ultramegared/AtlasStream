/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: player.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides player-related data for
 * the AtlasStream media player.
 * ----------------------------------------------------------------
 */

import type { Movie } from "../models/movie.model";

import { loadMovies } from "./movie.service";

/**
 * Retrieves player content by its identifier.
 *
 * Currently supports movies.
 * Future versions will also support
 * TV series episodes and live channels.
 *
 * @param id Content identifier.
 * @returns Movie or null if not found.
 */
export async function getPlayerContent(
  id: string
): Promise<Movie | null> {
  try {
    const movies = await loadMovies();

    const movie = movies.find(
      (movie) => movie.id === id
    );

    return movie ?? null;
  } catch (error) {
    console.error(
      "[PlayerService]",
      error
    );

    return null;
  }
}