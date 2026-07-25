// frontend/src/pages/NotFound.js

import Header from "../components/Header";
import Footer from "../components/Footer";

import { translations } from "../../constants/translations";
import { getLanguage } from "../utils/storage";

export default function NotFound() {
  const language = getLanguage() || "es";
  const t = translations[language];

  return `
    <main class="notfound-page">

      ${Header()}

      <section class="notfound-container">

        <div class="empty-state">

          <div class="empty-icon">
            🚫
          </div>

          <h1 class="error-code">
            404
          </h1>

          <h2 class="page-title">
            ${t.pageNotFound}
          </h2>

          <p class="page-description">
            ${t.pageNotFoundDescription}
          </p>

          <div class="notfound-actions">

            <button
              class="menu-btn"
              data-page="home"
            >
              🏠 ${t.backHome}
            </button>

          </div>

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}