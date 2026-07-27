/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: movie.controller.ts
 * Module: Controllers
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Handles movie-related operations by coordinating
 * frontend services and preparing data for the UI.
 * ----------------------------------------------------------------
 */

import {
  getMovies,
  getMovieById
} from "../services/movie.service";

/**
 * Loads all available movies.
 *
 * @returns List of movies.
 */
export async function loadMovies<T = unknown>(): Promise<T[]> {
  try {
    const movies = await getMovies<T[]>();

    return Array.isArray(movies) ? movies : [];
  } catch (error) {
    console.error("Error loading movies:", error);

    return [];
  }
}

/**
 * Loads a movie by its identifier.
 *
 * @param id Movie identifier.
 * @returns Movie data.
 */
export async function loadMovieById<T = unknown>(
  id: string
): Promise<T> {
  try {
    return await getMovieById<T>(id);
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unable to load movie."
    );
  }
}