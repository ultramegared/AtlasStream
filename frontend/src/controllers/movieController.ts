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
    const movies = await getMovies();

    return Array.isArray(movies) ? movies : [];
  } catch (error: any) {
    console.error("Error loading movies:", error);

    return [];
  }
}

/**
 * Obtiene una película por su ID.
 */
export async function loadMovieById(id: string) {
  try {
    return await getMovieById(id);
  } catch (error: any) {
    console.error("Error loading movie:", error);

    throw new Error(
      error.message || "Unable to load movie."
    );
  }
}