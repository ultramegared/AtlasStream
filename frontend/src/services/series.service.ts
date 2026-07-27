/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: series.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides series-related services for retrieving television
 * series data from the AtlasStream backend API.
 * ----------------------------------------------------------------
 */

import { apiFetch } from "./apiFetch.service";

/**
 * Retrieves all available series.
 *
 * @returns List of series.
 */
export async function getSeries<T = unknown>(): Promise<T> {
  return apiFetch<T>("/series");
}

/**
 * Retrieves a series by its unique identifier.
 *
 * @param id Series identifier.
 * @returns Series details.
 */
export async function getSeriesById<T = unknown>(
  id: string
): Promise<T> {
  return apiFetch<T>(`/series/${id}`);
}