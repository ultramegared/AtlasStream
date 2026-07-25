// frontend/services/api/moviesApi.ts
// AtlasStream
// Designed & Developed by ultramegared

import { apiFetch } from "./api";

/**
 * Obtiene todas las películas.
 */
export async function getMovies() {
  return apiFetch("/movies");
}

/**
 * Obtiene una película por su ID.
 */
export async function getMovieById(id: string) {
  return apiFetch(`/movies/${id}`);
}