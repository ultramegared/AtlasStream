// AtlasStream
// Designed & Developed by ultramegared

import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Movies() {
  const language = getLanguage() || "es";
  const t = translations[language];

  // Datos temporales.
  // Más adelante serán reemplazados por loadMovies().
  const movies = [
    {
      id: 1,
      title: "Avatar",
      poster: "",
      rating: 4.8,
      genre: "Acción",
      duration: "2h 42m",
      favorite: false,
    },
    {
      id: 2,
      title: "John Wick",
      poster: "",
      rating: 4.7,
      genre: "Acción",
      duration: "2h 49m",
      favorite: false,
    },
    {
      id: 3,
      title: "Avengers",
      poster: "",
      rating: 4.9,
      genre: "Superhéroes",
      duration: "3h 01m",
      favorite: true,
    },
    {
      id: 4,
      title: "Batman",
      poster: "",
      rating: 4.6,
      genre: "Acción",
      duration: "2h 56m",
      favorite: false,
    },
    {
      id: 5,
      title: "Spider-Man",
      poster: "",
      rating: 4.8,
      genre: "Aventura",
      duration: "2h 28m",
      favorite: false,
    },
    {
      id: 6,
      title: "The Matrix",
      poster: "",
      rating: 4.9,
      genre: "Ciencia ficción",
      duration: "2h 16m",
      favorite: true,
    },
  ];

  return `
    <main class="movies-page">

      ${Header()}

      <section class="movies-container">

        <h2 class="page-title">
          🎬 ${t.movies}
        </h2>

        <div class="movie-grid">

          ${movies.map(MovieCard).join("")}

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}