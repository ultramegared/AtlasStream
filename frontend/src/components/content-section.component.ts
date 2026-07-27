/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: content-section.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders a reusable content section for
 * movies and TV series.
 * ----------------------------------------------------------------
 */

import PosterCard from "./poster-card.component";

import type { PlayerContent } from "../types/player.types";

/**
 * Component properties.
 */
export interface ContentSectionProps {
  /**
   * Section title.
   */
  title: string;

  /**
   * Content displayed in the section.
   */
  items: PlayerContent[];
}

/**
 * Renders a reusable content section.
 *
 * @param props Component properties.
 * @returns HTML string.
 */
export default function ContentSection(
  props: ContentSectionProps
): string {
  const { title, items } = props;

  return `
    <section class="content-section">

      <header class="content-section__header">

        <h2 class="content-section__title">
          ${title}
        </h2>

      </header>

      <div class="content-section__content">

        ${
          items.length > 0
            ? items
                .map((item) => PosterCard(item))
                .join("")
            : `
              <p class="content-section__empty">
                No content available.
              </p>
            `
        }

      </div>

    </section>
  `;
}