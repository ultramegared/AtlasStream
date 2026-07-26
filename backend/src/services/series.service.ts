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
 * Servicio para la gestión de series.
 * ----------------------------------------------------------------
 */

import pool from "../config/database";
import { Series } from "../models/series.model";

/**
 * Obtiene todas las series activas.
 */
export async function getAllSeries(): Promise<Series[]> {
  const result = await pool.query(`
    SELECT
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    FROM series
    WHERE is_active = TRUE
    ORDER BY first_air_date DESC NULLS LAST, created_at DESC
  `);

  return result.rows;
}

/**
 * Obtiene una serie por su ID.
 */
export async function getSeriesById(id: string): Promise<Series> {
  const result = await pool.query(
    `
    SELECT
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    FROM series
    WHERE id = $1
      AND is_active = TRUE
    LIMIT 1
    `,
    [id]
  );

  if (result.rows.length === 0) {
    throw new Error("Serie no encontrada.");
  }

  return result.rows[0];
}

/**
 * Obtiene una serie por su slug.
 */
export async function getSeriesBySlug(slug: string): Promise<Series> {
  const result = await pool.query(
    `
    SELECT
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    FROM series
    WHERE slug = $1
      AND is_active = TRUE
    LIMIT 1
    `,
    [slug]
  );

  if (result.rows.length === 0) {
    throw new Error("Serie no encontrada.");
  }

  return result.rows[0];
}

/**
 * Obtiene las series destacadas.
 */
export async function getFeaturedSeries(): Promise<Series[]> {
  const result = await pool.query(`
    SELECT
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    FROM series
    WHERE featured = TRUE
      AND is_active = TRUE
    ORDER BY popularity DESC
    LIMIT 10
  `);

  return result.rows;
}

/**
 * Obtiene las series en tendencia.
 */
export async function getTrendingSeries(): Promise<Series[]> {
  const result = await pool.query(`
    SELECT
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    FROM series
    WHERE trending = TRUE
      AND is_active = TRUE
    ORDER BY popularity DESC
    LIMIT 10
  `);

  return result.rows;
}

/**
 * Obtiene las últimas series.
 */
export async function getLatestSeries(): Promise<Series[]> {
  const result = await pool.query(`
    SELECT
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    FROM series
    WHERE is_active = TRUE
    ORDER BY first_air_date DESC NULLS LAST
    LIMIT 20
  `);

  return result.rows;
}

/**
 * Obtiene las series recomendadas.
 */
export async function getRecommendedSeries(): Promise<Series[]> {
  const result = await pool.query(`
    SELECT
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    FROM series
    WHERE recommended = TRUE
      AND is_active = TRUE
    ORDER BY popularity DESC
    LIMIT 20
  `);

  return result.rows;
}

/**
 * Crea una nueva serie.
 */
export async function createSeries(series: Series): Promise<Series> {
  const result = await pool.query(
    `
    INSERT INTO series (
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active
    )
    VALUES (
      $1,$2,$3,$4,$5,$6,$7,$8,$9,
      $10,$11,$12,$13,$14,$15,$16,
      $17,$18,$19,$20,$21
    )
    RETURNING
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    `,
    [
      series.title,
      series.original_title ?? null,
      series.slug,
      series.overview,
      series.tagline ?? null,
      series.poster_url,
      series.backdrop_url,
      series.logo_url ?? null,
      series.trailer_url ?? null,
      series.first_air_date ?? null,
      series.last_air_date ?? null,
      series.imdb_rating ?? null,
      series.atlas_rating ?? 0,
      series.maturity_rating ?? null,
      series.popularity ?? 0,
      series.views ?? 0,
      series.featured ?? false,
      series.trending ?? false,
      series.recommended ?? false,
      series.premium ?? false,
      series.is_active ?? true,
    ]
  );

  return result.rows[0];
}

/**
 * Actualiza una serie existente.
 */
export async function updateSeries(
  id: string,
  series: Partial<Series>
): Promise<Series> {
  const result = await pool.query(
    `
    UPDATE series
    SET
      title = COALESCE($2, title),
      original_title = COALESCE($3, original_title),
      slug = COALESCE($4, slug),
      overview = COALESCE($5, overview),
      tagline = COALESCE($6, tagline),
      poster_url = COALESCE($7, poster_url),
      backdrop_url = COALESCE($8, backdrop_url),
      logo_url = COALESCE($9, logo_url),
      trailer_url = COALESCE($10, trailer_url),
      first_air_date = COALESCE($11, first_air_date),
      last_air_date = COALESCE($12, last_air_date),
      imdb_rating = COALESCE($13, imdb_rating),
      atlas_rating = COALESCE($14, atlas_rating),
      maturity_rating = COALESCE($15, maturity_rating),
      popularity = COALESCE($16, popularity),
      views = COALESCE($17, views),
      featured = COALESCE($18, featured),
      trending = COALESCE($19, trending),
      recommended = COALESCE($20, recommended),
      premium = COALESCE($21, premium),
      is_active = COALESCE($22, is_active),
      updated_at = NOW()
    WHERE id = $1
    RETURNING
      id,
      title,
      original_title,
      slug,
      overview,
      tagline,
      poster_url,
      backdrop_url,
      logo_url,
      trailer_url,
      first_air_date,
      last_air_date,
      imdb_rating,
      atlas_rating,
      maturity_rating,
      popularity,
      views,
      featured,
      trending,
      recommended,
      premium,
      is_active,
      created_at,
      updated_at
    `,
    [
      id,
      series.title ?? null,
      series.original_title ?? null,
      series.slug ?? null,
      series.overview ?? null,
      series.tagline ?? null,
      series.poster_url ?? null,
      series.backdrop_url ?? null,
      series.logo_url ?? null,
      series.trailer_url ?? null,
      series.first_air_date ?? null,
      series.last_air_date ?? null,
      series.imdb_rating ?? null,
      series.atlas_rating ?? null,
      series.maturity_rating ?? null,
      series.popularity ?? null,
      series.views ?? null,
      series.featured ?? null,
      series.trending ?? null,
      series.recommended ?? null,
      series.premium ?? null,
      series.is_active ?? null,
    ]
  );

  if (result.rows.length === 0) {
    throw new Error("Serie no encontrada.");
  }

  return result.rows[0];
}

/**
 * Desactiva una serie.
 */
export async function deleteSeries(id: string): Promise<boolean> {
  const result = await pool.query(
    `
    UPDATE series
    SET
      is_active = FALSE,
      updated_at = NOW()
    WHERE id = $1
    RETURNING id
    `,
    [id]
  );

  if (result.rows.length === 0) {
    throw new Error("Serie no encontrada.");
  }

  return true;
}