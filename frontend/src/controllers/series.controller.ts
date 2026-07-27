/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: series.controller.ts
 * Module: Controllers
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Handles series-related operations by coordinating
 * frontend services and preparing data for the UI.
 * ----------------------------------------------------------------
 */

import {
  getSeries,
  getSeriesById
} from "../services/series.service";

/**
 * Loads all available series.
 *
 * @returns List of series.
 */
export async function loadSeries<T = unknown>(): Promise<T[]> {
  try {
    const series = await getSeries<T[]>();

    return Array.isArray(series) ? series : [];
  } catch (error) {
    console.error("Error loading series:", error);

    return [];
  }
}

/**
 * Loads a series by its identifier.
 *
 * @param id Series identifier.
 * @returns Series data.
 */
export async function loadSeriesById<T = unknown>(
  id: string
): Promise<T> {
  try {
    return await getSeriesById<T>(id);
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unable to load series."
    );
  }
}