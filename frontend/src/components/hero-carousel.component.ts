/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: hero-carousel.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the featured hero carousel displayed
 * on the Home page.
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
 * Renders the hero carousel.
 *
 * @param items Featured content.
 * @returns HTML string.
 */
export default function HeroCarousel(
  items: PlayerContent[]
): string {
  if (items.length === 0) {
    return `
      <section class="hero-carousel hero-carousel--empty">
        <p>No featured content available.</p>
      </section>
    `;
  }

  return `
    <section class="hero-carousel">

      <div class="hero-carousel__slides">

        ${items
          .map((item, index) => {
            const title = escapeHtml(item.title);
            const description = escapeHtml(item.description);

            return `
              <article
                class="hero-carousel__slide ${
                  index === 0 ? "active" : ""
                }"
                data-id="${item.id}"
              >

                <img
                  class="hero-carousel__backdrop"
                  src="${item.backdrop}"
                  alt="${title}"
                  loading="${
                    index === 0 ? "eager" : "lazy"
                  }"
                />

                <div class="hero-carousel__overlay">

                  <h2 class="hero-carousel__title">
                    ${title}
                  </h2>

                  <p class="hero-carousel__description">
                    ${description}
                  </p>

                  <div class="hero-carousel__meta">

                    <span>
                      ⭐ ${item.rating}
                    </span>

                    ${
                      "year" in item
                        ? `<span>${item.year}</span>`
                        : ""
                    }

                    ${
                      "seasons" in item
                        ? `<span>${item.seasons} Seasons</span>`
                        : ""
                    }

                  </div>

                  <button
                    class="hero-carousel__play-btn"
                    data-id="${item.id}"
                  >
                    ▶ Play
                  </button>

                </div>

              </article>
            `;
          })
          .join("")}

      </div>

      <div class="hero-carousel__indicators">

        ${items
          .map(
            (_, index) => `
            <button
              class="hero-carousel__indicator ${
                index === 0 ? "active" : ""
              }"
              data-slide="${index}"
            ></button>
          `
          )
          .join("")}

      </div>

    </section>
  `;
}