-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- Database: PostgreSQL
-- File: 00_extensions.sql
-- Module: Database Schema
-- Description:
-- Enables PostgreSQL extensions required by AtlasStream.
-- ============================================================

BEGIN;

-- ============================================================
-- UUID generation
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- Case-insensitive text
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "citext";

-- ============================================================
-- Trigram search
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ============================================================
-- B-Tree + GIN combinations
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "btree_gin";

-- ============================================================
-- B-Tree + GiST combinations
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "btree_gist";

COMMIT;