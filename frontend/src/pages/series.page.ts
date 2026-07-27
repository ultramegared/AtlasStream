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

import Header from "../components/header.component";
import Footer from "../components/footer.component";
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
    getLanguage() ??
    CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  const series =
    await loadSeries();

  return `
    <main class="series-page">

      ${Header(t.series)}

      <section class="series-container">

        <header class="page-header">

          <h2 class="page-title">
            📺 ${t.series}
          </h2>

        </header>

        <div class="series-grid">

          ${
            series.length > 0
              ? series
                  .map((item) => SeriesCard(item))
                  .join("")
              : `
                <div class="empty-state">

                  <p>
                    ${
                      t.noSeries ??
                      t.noContent
                    }
                  </p>

                </div>
              `
          }

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}