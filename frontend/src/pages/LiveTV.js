// frontend/src/pages/LiveTV.js

import Header from "../components/Header";
import Footer from "../components/Footer";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function LiveTV() {

  const language = getLanguage() || "es";
  const t = translations[language];

  const channels = [
    "Noticias 24",
    "ESPN",
    "Discovery",
    "National Geographic",
    "Cartoon Network",
    "Canal Premium",
  ];

  return `
    <main class="livetv-page">

      ${Header()}

      <section class="livetv-container">

        <h2 class="page-title">
          📺 ${t.liveTv}
        </h2>

        <div class="movie-grid">

          ${channels
            .map(
              (channel) => `
                <div class="movie-card">

                  <div class="movie-poster">
                    📡
                  </div>

                  <h3 class="movie-title">
                    ${channel}
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