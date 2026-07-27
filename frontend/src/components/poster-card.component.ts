/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: poster-card.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders a reusable poster card for movies and
 * TV series throughout the application.
 * ----------------------------------------------------------------
 */

import type { PlayerContent } from "../types/player.types";

/**
 * Escapes HTML special characters.
 *
 * @param value Text to escape.
 * @returns Safe HTML string.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Renders a poster card.
 *
 * @param content Movie or series.
 * @returns HTML string.
 */
export default function PosterCard(
  content: PlayerContent
): string {
  const title = escapeHtml(content.title);

  const poster =
    content.poster && content.poster.trim().length > 0
      ? content.poster
      : "/assets/images/poster-placeholder.webp";

  return `
    <article
      class="poster-card"
      data-id="${content.id}"
      data-type="${content.type}"
      role="button"
      tabindex="0"
      aria-label="${title}"
    >
      <div class="poster-card__image">

        <img
          src="${poster}"
          alt="${title}"
          loading="lazy"
        />

      </div>

      <div class="poster-card__content">

        <h3 class="poster-card__title">
          ${title}
        </h3>

      </div>

    </article>
  `;
}