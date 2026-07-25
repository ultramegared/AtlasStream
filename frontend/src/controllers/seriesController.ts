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
    const series = await getSeries();

    return Array.isArray(series) ? series : [];
  } catch (error: any) {
    console.error("Error loading series:", error);

    return [];
  }
}

/**
 * Obtiene una serie por su ID.
 */
export async function loadSeriesById(id: string) {
  try {
    return await getSeriesById(id);
  } catch (error: any) {
    console.error("Error loading series:", error);

    throw new Error(
      error.message || "Unable to load series."
    );
  }
}