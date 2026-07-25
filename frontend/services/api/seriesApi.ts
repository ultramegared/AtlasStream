// frontend/services/api/seriesApi.ts
// AtlasStream
// Designed & Developed by ultramegared

import { apiFetch } from "./api";

/**
 * Obtiene todas las series.
 */
export async function getSeries() {
  return apiFetch("/series");
}

/**
 * Obtiene una serie por su ID.
 */
export async function getSeriesById(id: string) {
  return apiFetch(`/series/${id}`);
}