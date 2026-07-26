/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 015_create_profiles_table.sql
 * Description: Creates the profiles table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: profiles
-- Description:
-- Stores user profiles associated with an account.
-- ============================================================

CREATE TABLE IF NOT EXISTS profiles (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    name VARCHAR(100) NOT NULL,

    avatar_url TEXT,

    language_code VARCHAR(10) DEFAULT 'en',

    is_kids BOOLEAN NOT NULL DEFAULT FALSE,

    pin_hash TEXT,

    is_owner BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_profiles_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_profiles_user
ON profiles(user_id);

CREATE INDEX IF NOT EXISTS idx_profiles_name
ON profiles(name);

CREATE INDEX IF NOT EXISTS idx_profiles_kids
ON profiles(is_kids);

CREATE INDEX IF NOT EXISTS idx_profiles_owner
ON profiles(is_owner);

CREATE INDEX IF NOT EXISTS idx_profiles_active
ON profiles(is_active);

COMMIT;