// frontend/src/pages/Series.js

import Header from "../components/Header";
import Footer from "../components/Footer";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Series() {

  const language = getLanguage() || "es";
  const t = translations[language];

  const series = [
    "Stranger Things",
    "Breaking Bad",
    "The Last of Us",
    "Dark",
    "Peaky Blinders",
    "The Boys",
  ];

  return `
    <main class="series-page">

      ${Header()}

      <section class="series-container">

        <h2 class="page-title">
          📺 ${t.series}
        </h2>

        <div class="movie-grid">

          ${series
            .map(
              (serie) => `
                <div class="movie-card">

                  <div class="movie-poster">
                    📺
                  </div>

                  <h3 class="movie-title">
                    ${serie}
                  </h3>

                  <button
                    class="menu-btn"
                    data-page="player"
                  >
                    ▶ ${t.playNow}
                  </button>

                </div>
              `
            )
            .join("")}

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}