/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: loading.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders a reusable loading indicator component.
 * ----------------------------------------------------------------
 */

/**
 * Creates a loading component.
 *
 * @param message Loading message.
 * @returns HTML string.
 */
export default function Loading(
  message: string = "Cargando..."
): string {
  return `
    <div class="loading">
      <p>${message}</p>
    </div>
  `;
}