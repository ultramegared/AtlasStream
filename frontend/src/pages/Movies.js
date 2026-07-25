// frontend/src/pages/Movies.js
// AtlasStream
// Designed & Developed by ultramegared

import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

import { loadMovies } from "../controllers/movieController";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default async function Movies() {

  const language = getLanguage() || "es";
  const t = translations[language];

  const movies = await loadMovies();

  return `
    <main class="movies-page">

      ${Header()}

      <section class="movies-container">

        <h2 class="page-title">
          🎬 ${t.movies}
        </h2>

        <div class="movie-grid">

          ${
            movies.length > 0
              ? movies.map(MovieCard).join("")
              : `
                <div class="empty-state">
                  <p>${t.noMovies || "No movies available."}</p>
                </div>
              `
          }

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}