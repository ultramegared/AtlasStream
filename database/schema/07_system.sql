-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 07_system.sql
-- Module: Database Schema
-- Language: PostgreSQL
-- Description:
-- System Configuration, Security and Administration Schema
-- ============================================================

BEGIN;

-- ============================================================
-- System Settings
-- ============================================================

CREATE TABLE system_setting (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    setting_key VARCHAR(150) NOT NULL,
    setting_value JSONB NOT NULL,

    description TEXT,

    is_public BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_system_setting_key
        UNIQUE(setting_key)
);

-- ============================================================
-- Feature Flags
-- ============================================================

CREATE TABLE feature_flag (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(150) NOT NULL,

    description TEXT,

    enabled BOOLEAN NOT NULL DEFAULT FALSE,

    rollout_percentage SMALLINT NOT NULL DEFAULT 100,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_feature_flag_name
        UNIQUE(name),

    CONSTRAINT chk_rollout_percentage
        CHECK (
            rollout_percentage BETWEEN 0 AND 100
        )
);

-- ============================================================
-- User Feature Flags
-- ============================================================

CREATE TABLE user_feature_flag (
    user_id UUID NOT NULL,

    feature_flag_id UUID NOT NULL,

    enabled BOOLEAN NOT NULL DEFAULT TRUE,

    assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    PRIMARY KEY(user_id, feature_flag_id),

    CONSTRAINT fk_user_feature_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_user_feature_flag
        FOREIGN KEY(feature_flag_id)
        REFERENCES feature_flag(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Application Versions
-- ============================================================

CREATE TABLE application_version (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    platform VARCHAR(30) NOT NULL,

    version VARCHAR(30) NOT NULL,

    minimum_supported BOOLEAN NOT NULL DEFAULT FALSE,

    mandatory_update BOOLEAN NOT NULL DEFAULT FALSE,

    release_notes TEXT,

    released_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_platform_version
        UNIQUE(platform, version)
);

-- ============================================================
-- Maintenance Windows
-- ============================================================

CREATE TABLE maintenance_window (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(255) NOT NULL,

    description TEXT,

    starts_at TIMESTAMPTZ NOT NULL,

    ends_at TIMESTAMPTZ NOT NULL,

    enabled BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_maintenance_dates
        CHECK (ends_at > starts_at)
);

-- ============================================================
-- Blocked IPs
-- ============================================================

CREATE TABLE blocked_ip (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    ip_address INET NOT NULL,

    reason TEXT,

    blocked_until TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_blocked_ip
        UNIQUE(ip_address)
);

-- ============================================================
-- API Keys
-- ============================================================

CREATE TABLE api_key (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(150) NOT NULL,

    api_key TEXT NOT NULL,

    secret_hash TEXT NOT NULL,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    expires_at TIMESTAMPTZ,

    last_used_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_api_key
        UNIQUE(api_key)
);

-- ============================================================
-- Background Jobs
-- ============================================================

CREATE TABLE background_job (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    job_name VARCHAR(150) NOT NULL,

    payload JSONB,

    status VARCHAR(30) NOT NULL DEFAULT 'pending',

    attempts INTEGER NOT NULL DEFAULT 0,

    max_attempts INTEGER NOT NULL DEFAULT 5,

    scheduled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    started_at TIMESTAMPTZ,

    finished_at TIMESTAMPTZ,

    error_message TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_job_status
        CHECK (
            status IN (
                'pending',
                'running',
                'completed',
                'failed',
                'cancelled'
            )
        )
);

-- ============================================================
-- System Logs
-- ============================================================

CREATE TABLE system_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    level VARCHAR(20) NOT NULL,

    service VARCHAR(100) NOT NULL,

    message TEXT NOT NULL,

    metadata JSONB,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_log_level
        CHECK (
            level IN (
                'debug',
                'info',
                'warning',
                'error',
                'critical'
            )
        )
);

COMMIT;