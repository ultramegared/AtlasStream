/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: search.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the search page allowing users
 * to search movies, TV series and live TV.
 * ----------------------------------------------------------------
 */

import Header from "../components/header.component";
import Footer from "../components/footer.component";
import Input from "../components/input.component";

import { CONFIG } from "../constants/config.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the search page.
 *
 * @returns HTML string.
 */
export default function Search(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  return `
    <main class="search-page">

      ${Header()}

      <section class="search-container">

        <h2 class="page-title">
          🔍 ${t.search}
        </h2>

        <p class="page-description">
          ${t.searchDescription}
        </p>

        ${Input({
          id: "searchInput",
          type: "search",
          placeholder: t.searchPlaceholder
        })}

        <div
          id="searchResults"
          class="search-results"
        >

          <div class="empty-state">

            <div class="empty-icon">
              🔍
            </div>

            <h3>
              ${t.search}
            </h3>

            <p>
              ${t.searchDescription}
            </p>

          </div>

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}