/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: movie.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides movie-related services for retrieving movie data
 * from the AtlasStream backend API.
 * ----------------------------------------------------------------
 */

import { apiFetch } from "./apiFetch.service";

/**
 * Retrieves all available movies.
 *
 * @returns List of movies.
 */
export async function getMovies<T = unknown>(): Promise<T> {
  return apiFetch<T>("/movies");
}

/**
 * Retrieves a movie by its unique identifier.
 *
 * @param id Movie identifier.
 * @returns Movie details.
 */
export async function getMovieById<T = unknown>(
  id: string
): Promise<T> {
  return apiFetch<T>(`/movies/${id}`);
}