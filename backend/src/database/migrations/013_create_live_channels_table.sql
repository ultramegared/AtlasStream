/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 013_create_live_channels_table.sql
 * Description: Creates the live channels table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: live_channels
-- Description:
-- Stores all live TV channels available in AtlasStream.
-- ============================================================

CREATE TABLE IF NOT EXISTS live_channels (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(150) NOT NULL,

    slug VARCHAR(150) NOT NULL,

    description TEXT,

    logo_url TEXT,

    banner_url TEXT,

    stream_url TEXT NOT NULL,

    category VARCHAR(100),

    country VARCHAR(100),

    language VARCHAR(100),

    drm_enabled BOOLEAN NOT NULL DEFAULT FALSE,

    is_premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    viewers BIGINT NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_live_channels_slug
        UNIQUE (slug)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_live_channels_name
ON live_channels(name);

CREATE INDEX IF NOT EXISTS idx_live_channels_slug
ON live_channels(slug);

CREATE INDEX IF NOT EXISTS idx_live_channels_category
ON live_channels(category);

CREATE INDEX IF NOT EXISTS idx_live_channels_country
ON live_channels(country);

CREATE INDEX IF NOT EXISTS idx_live_channels_active
ON live_channels(is_active);

CREATE INDEX IF NOT EXISTS idx_live_channels_premium
ON live_channels(is_premium);

COMMIT;