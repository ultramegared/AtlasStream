// frontend/src/pages/Series.js
// AtlasStream
// Designed & Developed by ultramegared

import Header from "../components/Header";
import Footer from "../components/Footer";
import SeriesCard from "../components/SeriesCard";

import { loadSeries } from "../controllers/seriesController";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default async function Series() {

  const language = getLanguage() || "es";
  const t = translations[language];

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
                  <p>${t.noSeries || "No series available."}</p>
                </div>
              `
          }

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}