/**
 * ----------------------------------------------------------------
 * AtlasStream Backend Database
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Database: PostgreSQL
 * Migration: 019_create_subscriptions_table.sql
 * Description: Creates the subscriptions table.
 * ----------------------------------------------------------------
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 */

BEGIN;

-- ============================================================
-- TABLE: subscriptions
-- Description:
-- Stores subscription information for user accounts.
-- ============================================================

CREATE TABLE IF NOT EXISTS subscriptions (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    plan_name VARCHAR(100) NOT NULL,

    status VARCHAR(30) NOT NULL,

    start_date TIMESTAMPTZ NOT NULL,

    end_date TIMESTAMPTZ,

    auto_renew BOOLEAN NOT NULL DEFAULT TRUE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_subscriptions_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT chk_subscription_status
        CHECK (
            status IN (
                'active',
                'trial',
                'expired',
                'cancelled',
                'paused'
            )
        )

);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_subscriptions_user
ON subscriptions(user_id);

CREATE INDEX IF NOT EXISTS idx_subscriptions_status
ON subscriptions(status);

CREATE INDEX IF NOT EXISTS idx_subscriptions_active
ON subscriptions(is_active);

COMMIT;