/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: series.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the series page displaying the
 * available TV series catalog.
 * ----------------------------------------------------------------
 */

import Footer from "../components/footer.component";
import Header from "../components/header.component";
import SeriesCard from "../components/seriesCard.component";

import { loadSeries } from "../controllers/series.controller";

import { CONFIG } from "../constants/config.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the series page.
 *
 * @returns HTML string.
 */
export default async function Series(): Promise<string> {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  const series = await loadSeries();

  return `
    <main class="series-page">

      ${Header()}

      <section class="series-container">

        <h2 class="page-title">
          📺 ${t.series}
        </h2>

        <div class="movie-grid">

          ${
            series.length > 0
              ? series.map(SeriesCard).join("")
              : `
                <div class="empty-state">
                  <p>${t.noSeries ?? "No series available."}</p>
                </div>
              `
          }

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}