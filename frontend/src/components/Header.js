// frontend/src/components/Header.js

import { CONFIG } from "../constants/config";
import { getLanguage } from "../utils/storage";

export default function Header(title = CONFIG.APP_NAME) {

  const currentLanguage =
    getLanguage() || CONFIG.DEFAULT_LANGUAGE;

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