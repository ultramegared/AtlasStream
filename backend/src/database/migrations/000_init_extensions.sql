/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 000_init_extensions.sql
 * Description: Initializes PostgreSQL extensions required by AtlasStream.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- PostgreSQL Extensions
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

COMMIT;