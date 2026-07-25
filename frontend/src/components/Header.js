// frontend/src/components/Header.js

import { CONFIG } from "../constants/config";

export default function Header(title = CONFIG.APP_NAME) {
  return `
    <header class="header">

      <div class="header-top">

        <h1>${title}</h1>

        <select id="languageSelector">
          ${CONFIG.SUPPORTED_LANGUAGES.map(
            (language) => `
              <option
                value="${language.code}"
                ${
                  language.code === CONFIG.DEFAULT_LANGUAGE
                    ? "selected"
                    : ""
                }>
                🌐 ${language.name}
              </option>
            `
          ).join("")}
        </select>

      </div>

    </header>
  `;
}