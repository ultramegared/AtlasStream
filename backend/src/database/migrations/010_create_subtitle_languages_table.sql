/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 010_create_subtitle_languages_table.sql
 * Description: Creates the subtitle languages table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: subtitle_languages
-- Description:
-- Stores all supported subtitle languages.
-- ============================================================

CREATE TABLE IF NOT EXISTS subtitle_languages (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code VARCHAR(10) NOT NULL,

    name VARCHAR(100) NOT NULL,

    native_name VARCHAR(100),

    iso_639_1 CHAR(2),

    iso_639_2 CHAR(3),

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_subtitle_languages_code
        UNIQUE (code),

    CONSTRAINT uq_subtitle_languages_iso6391
        UNIQUE (iso_639_1),

    CONSTRAINT uq_subtitle_languages_iso6392
        UNIQUE (iso_639_2)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_subtitle_languages_name
ON subtitle_languages(name);

CREATE INDEX IF NOT EXISTS idx_subtitle_languages_code
ON subtitle_languages(code);

CREATE INDEX IF NOT EXISTS idx_subtitle_languages_active
ON subtitle_languages(is_active);

COMMIT;