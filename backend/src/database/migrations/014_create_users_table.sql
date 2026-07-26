/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 014_create_users_table.sql
 * Description: Creates the users table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: users
-- Description:
-- Stores user accounts and authentication data.
-- ============================================================

CREATE TABLE IF NOT EXISTS users (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    email VARCHAR(255) NOT NULL,

    password_hash TEXT NOT NULL,

    email_verified BOOLEAN NOT NULL DEFAULT FALSE,

    verification_token TEXT,

    reset_password_token TEXT,

    reset_password_expires_at TIMESTAMPTZ,

    last_login_at TIMESTAMPTZ,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_users_email
        UNIQUE (email)

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_users_email
ON users(email);

CREATE INDEX IF NOT EXISTS idx_users_active
ON users(is_active);

CREATE INDEX IF NOT EXISTS idx_users_last_login
ON users(last_login_at);

COMMIT;