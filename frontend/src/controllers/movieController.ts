// frontend/src/controllers/movieController.ts
// AtlasStream
// Designed & Developed by ultramegared

import {
  getMovies,
  getMovieById,
} from "../../services/api/movieApi";

/**
 * Obtiene todas las películas.
 */
export async function loadMovies() {
  try {
    return await getMovies();
  } catch (error: any) {
    throw new Error(
      error.message || "Unable to load movies."
    );
  }
}

/**
 * Obtiene una película por su ID.
 */
export async function loadMovieById(id: string) {
  try {
    return await getMovieById(id);
  } catch (error: any) {
    throw new Error(
      error.message || "Unable to load movie."
    );
  }
}