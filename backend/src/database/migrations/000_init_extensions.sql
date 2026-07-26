/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Schema Version: 1.0.0
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Migración inicial de la base de datos AtlasStream.
 * Contiene la estructura principal del sistema y servirá
 * como base para todas las futuras migraciones.
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- PostgreSQL Extensions
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- AtlasStream Initial Database Schema
-- Version: 1.0.0
-- ============================================================

-- ============================================================
-- TABLE: genres
-- Description:
-- Catálogo de géneros disponibles para películas y series.
-- ============================================================

CREATE TABLE genres (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- TABLE: movies
-- Description:
-- Almacena toda la información de las películas disponibles
-- dentro de AtlasStream.
-- ============================================================

CREATE TABLE movies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,

    description TEXT,

    poster_url TEXT NOT NULL,
    backdrop_url TEXT NOT NULL,

    trailer_url TEXT,
    video_url TEXT,

    release_year SMALLINT,

    duration SMALLINT,

    rating NUMERIC(2,1) DEFAULT 0.0,

    featured BOOLEAN DEFAULT FALSE,
    trending BOOLEAN DEFAULT FALSE,
    is_premium BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- INDEXES
-- Optimización para consultas frecuentes del Home.
-- ============================================================

CREATE INDEX idx_movies_slug
ON movies(slug);

CREATE INDEX idx_movies_featured
ON movies(featured);

CREATE INDEX idx_movies_trending
ON movies(trending);

CREATE INDEX idx_movies_active
ON movies(active);

CREATE INDEX idx_movies_release_year
ON movies(release_year);

COMMIT;