// frontend/src/controllers/seriesController.ts
// AtlasStream
// Designed & Developed by ultramegared

import {
  getSeries,
  getSeriesById,
} from "../../services/api/seriesApi";

/**
 * Obtiene todas las series.
 */
export async function loadSeries() {
  try {
    return await getSeries();
  } catch (error: any) {
    throw new Error(
      error.message || "Unable to load series."
    );
  }
}

/**
 * Obtiene una serie por su ID.
 */
export async function loadSeriesById(id: string) {
  try {
    return await getSeriesById(id);
  } catch (error: any) {
    throw new Error(
      error.message || "Unable to load series."
    );
  }
}