/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: header.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the application header including the
 * title and language selector.
 * ----------------------------------------------------------------
 */

import { CONFIG } from "../constants/config.constants";
import { getLanguage } from "../utils/storage.utils";

/**
 * Creates the application header.
 *
 * @param title Header title.
 * @returns HTML string.
 */
export default function Header(
  title: string = CONFIG.APP_NAME
): string {
  const currentLanguage =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  return `
    <header class="header">

      <div class="header-top">

        <h1 class="app-title">
          ${title}
        </h1>

        <div class="header-actions">

          <select
            id="languageSelector"
            class="language-selector"
            aria-label="Language Selector"
          >

            ${CONFIG.SUPPORTED_LANGUAGES.map(
              (language) => `
                <option
                  value="${language.code}"
                  ${
                    language.code === currentLanguage
                      ? "selected"
                      : ""
                  }>
                  🌐 ${language.name}
                </option>
              `
            ).join("")}

          </select>

        </div>

      </div>

    </header>
  `;
}