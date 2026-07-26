/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 009_create_audio_languages_table.sql
 * Description: Creates the audio languages table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: audio_languages
-- Description:
-- Stores all supported audio languages.
-- ============================================================

CREATE TABLE IF NOT EXISTS audio_languages (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code VARCHAR(10) NOT NULL,

    name VARCHAR(100) NOT NULL,

    native_name VARCHAR(100),

    iso_639_1 CHAR(2),

    iso_639_2 CHAR(3),

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_audio_languages_code
        UNIQUE (code),

    CONSTRAINT uq_audio_languages_iso6391
        UNIQUE (iso_639_1),

    CONSTRAINT uq_audio_languages_iso6392
        UNIQUE (iso_639_2)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_audio_languages_name
ON audio_languages(name);

CREATE INDEX IF NOT EXISTS idx_audio_languages_code
ON audio_languages(code);

CREATE INDEX IF NOT EXISTS idx_audio_languages_active
ON audio_languages(is_active);

COMMIT;