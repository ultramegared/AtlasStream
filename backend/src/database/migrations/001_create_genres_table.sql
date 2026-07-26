/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 001_create_genres_table.sql
 * Description: Creates the genres table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: genres
-- Description:
-- Stores the master catalog of genres used by movies and series.
-- ============================================================

CREATE TABLE IF NOT EXISTS genres (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL,

    slug VARCHAR(100) NOT NULL,

    description TEXT,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_genres_name UNIQUE (name),

    CONSTRAINT uq_genres_slug UNIQUE (slug)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_genres_name
ON genres(name);

CREATE INDEX IF NOT EXISTS idx_genres_slug
ON genres(slug);

CREATE INDEX IF NOT EXISTS idx_genres_active
ON genres(is_active);

COMMIT;