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
 * Crea la tabla de géneros para películas y series.
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: genres
-- Description:
-- Catálogo maestro de géneros utilizados por AtlasStream.
-- ============================================================

CREATE TABLE genres (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL UNIQUE,

    slug VARCHAR(100) NOT NULL UNIQUE,

    description TEXT,

    icon VARCHAR(100),

    color VARCHAR(20),

    active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX idx_genres_slug
ON genres(slug);

CREATE INDEX idx_genres_active
ON genres(active);

COMMIT;