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
 * Provides movie-related services for communicating with the
 * AtlasStream backend API.
 * ----------------------------------------------------------------
 */

import { apiFetch } from "./apiFetch.service";

/**
 * Retrieves all movies.
 *
 * @returns Movie collection.
 */
export async function getMovies<T>(): Promise<T[]> {
  return apiFetch<T[]>("/movies");
}

/**
 * Retrieves a movie by its identifier.
 *
 * @param id Movie identifier.
 * @returns Movie details.
 */
export async function getMovieById<T>(id: string): Promise<T> {
  return apiFetch<T>(`/movies/${id}`);
}