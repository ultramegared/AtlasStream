/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Servicio para la gestión de películas.
 * ----------------------------------------------------------------
 */

import pool from "../config/database";
import { Movie } from "../models/movie.model";

/**
 * Obtiene todas las películas disponibles.
 */
export async function getAllMovies(): Promise<Movie[]> {
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

/**
 * Obtiene una película por su ID.
 */
export async function getMovieById(id: string): Promise<Movie> {
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

/**
 * Crea una nueva película.
 */
export async function createMovie(movie: Movie): Promise<Movie> {
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
      movie.year,
      movie.duration,
      movie.poster,
      movie.backdrop,
      movie.trailer,
    ]
  );

  return result.rows[0];
}

/**
 * Actualiza una película existente.
 */
export async function updateMovie(
  id: string,
  movie: Partial<Movie>
): Promise<Movie> {
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
      movie.year ?? null,
      movie.duration ?? null,
      movie.poster ?? null,
      movie.backdrop ?? null,
      movie.trailer ?? null,
    ]
  );

  if (result.rows.length === 0) {
    throw new Error("Película no encontrada.");
  }

  return result.rows[0];
}

/**
 * Elimina una película (eliminación lógica).
 */
export async function deleteMovie(id: string): Promise<boolean> {
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