import pool from "../config/database";
import { Movie } from "../models/Movie";

export async function getAllMovies() {
  const result = await pool.query(
    `
      SELECT
        id,
        title,
        description,
        release_date,
        duration,
        poster_url,
        banner_url,
        trailer_url,
        rating,
        views,
        created_at
      FROM movies
      WHERE deleted_at IS NULL
      ORDER BY created_at DESC
    `
  );

  return result.rows;
}

export async function getMovieById(id: string) {
  const result = await pool.query(
    `
      SELECT *
      FROM movies
      WHERE id = $1
        AND deleted_at IS NULL
      LIMIT 1
    `,
    [id]
  );

  if (result.rows.length === 0) {
    throw new Error("Película no encontrada.");
  }

  return result.rows[0];
}

export async function createMovie(movie: Movie) {
  const result = await pool.query(
    `
      INSERT INTO movies (
        title,
        description,
        release_date,
        duration,
        poster_url,
        banner_url,
        trailer_url
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `,
    [
      movie.title,
      movie.description,
      movie.releaseDate,
      movie.duration,
      movie.posterUrl,
      movie.bannerUrl,
      movie.trailerUrl,
    ]
  );

  return result.rows[0];
}

export async function updateMovie(
  id: string,
  movie: Partial<Movie>
) {
  const result = await pool.query(
    `
      UPDATE movies
      SET
        title = COALESCE($2, title),
        description = COALESCE($3, description),
        release_date = COALESCE($4, release_date),
        duration = COALESCE($5, duration),
        poster_url = COALESCE($6, poster_url),
        banner_url = COALESCE($7, banner_url),
        trailer_url = COALESCE($8, trailer_url),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
    `,
    [
      id,
      movie.title ?? null,
      movie.description ?? null,
      movie.releaseDate ?? null,
      movie.duration ?? null,
      movie.posterUrl ?? null,
      movie.bannerUrl ?? null,
      movie.trailerUrl ?? null,
    ]
  );

  if (result.rows.length === 0) {
    throw new Error("Película no encontrada.");
  }

  return result.rows[0];
}

export async function deleteMovie(id: string) {
  const result = await pool.query(
    `
      UPDATE movies
      SET
        deleted_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING id
    `,
    [id]
  );

  if (result.rows.length === 0) {
    throw new Error("Película no encontrada.");
  }

  return true;
}