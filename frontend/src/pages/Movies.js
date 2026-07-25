// frontend/src/pages/Movies.js

import Header from "../components/Header";
import Footer from "../components/Footer";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Movies() {

  const language = getLanguage() || "es";
  const t = translations[language];

  const movies = [
    "Avatar",
    "John Wick",
    "Avengers",
    "Batman",
    "Spider-Man",
    "The Matrix",
  ];

  return `
    <main class="movies-page">

      ${Header()}

      <section class="movies-container">

        <h2 class="page-title">
          🎬 ${t.movies}
        </h2>

        <div class="movie-grid">

          ${movies
            .map(
              (movie) => `
                <div class="movie-card">

                  <div class="movie-poster">
                    🎬
                  </div>

                  <h3 class="movie-title">
                    ${movie}
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