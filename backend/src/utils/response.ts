/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Utilidades para respuestas estándar de la API.
 * ----------------------------------------------------------------
 */

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
}

export function success<T>(data: T): ApiSuccessResponse<T> {
  return {
    success: true,
    data,
  };
}

export function error(message: string): ApiErrorResponse {
  return {
    success: false,
    message,
  };
}