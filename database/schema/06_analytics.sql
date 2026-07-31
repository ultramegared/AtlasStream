-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 06_analytics.sql
-- Module: Database Schema
-- Language: PostgreSQL
-- Description:
-- Analytics, Statistics and Audit Schema
-- ============================================================

BEGIN;

-- ============================================================
-- User Events
-- ============================================================

CREATE TABLE analytics_event (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID,

    profile_id UUID,

    event_name VARCHAR(100) NOT NULL,

    event_category VARCHAR(100),

    event_action VARCHAR(100),

    event_label VARCHAR(255),

    event_value NUMERIC(18,2),

    metadata JSONB,

    ip_address INET,

    user_agent TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_analytics_user
        FOREIGN KEY (user_id)
        REFERENCES app_user(id)
        ON DELETE SET NULL,

    CONSTRAINT fk_analytics_profile
        FOREIGN KEY (profile_id)
        REFERENCES profile(id)
        ON DELETE SET NULL
);

-- ============================================================
-- Daily Content Statistics
-- ============================================================

CREATE TABLE content_daily_stat (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    content_id UUID NOT NULL,

    stat_date DATE NOT NULL,

    views BIGINT NOT NULL DEFAULT 0,

    unique_viewers BIGINT NOT NULL DEFAULT 0,

    completed_views BIGINT NOT NULL DEFAULT 0,

    total_watch_seconds BIGINT NOT NULL DEFAULT 0,

    average_watch_seconds BIGINT NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_content_daily
        UNIQUE(content_id, stat_date),

    CONSTRAINT fk_daily_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE
);

-- ============================================================
-- User Daily Statistics
-- ============================================================

CREATE TABLE user_daily_stat (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    stat_date DATE NOT NULL,

    watched_seconds BIGINT NOT NULL DEFAULT 0,

    watched_titles INTEGER NOT NULL DEFAULT 0,

    sessions INTEGER NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_user_daily
        UNIQUE(user_id, stat_date),

    CONSTRAINT fk_user_daily
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Search Analytics
-- ============================================================

CREATE TABLE search_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID,

    query TEXT NOT NULL,

    results INTEGER NOT NULL DEFAULT 0,

    execution_ms INTEGER,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_search_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE SET NULL
);

-- ============================================================
-- API Request Logs
-- ============================================================

CREATE TABLE api_request_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    request_id UUID NOT NULL DEFAULT gen_random_uuid(),

    user_id UUID,

    method VARCHAR(10) NOT NULL,

    endpoint TEXT NOT NULL,

    status_code INTEGER NOT NULL,

    duration_ms INTEGER NOT NULL,

    ip_address INET,

    user_agent TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_api_log_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE SET NULL
);

-- ============================================================
-- Audit Logs
-- ============================================================

CREATE TABLE audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID,

    entity_name VARCHAR(100) NOT NULL,

    entity_id UUID,

    action VARCHAR(50) NOT NULL,

    old_data JSONB,

    new_data JSONB,

    ip_address INET,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_audit_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE SET NULL
);

-- ============================================================
-- Device Analytics
-- ============================================================

CREATE TABLE device_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID,

    profile_id UUID,

    device_type VARCHAR(50),

    operating_system VARCHAR(100),

    browser VARCHAR(100),

    application_version VARCHAR(50),

    country VARCHAR(100),

    city VARCHAR(100),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_device_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE SET NULL,

    CONSTRAINT fk_device_profile
        FOREIGN KEY(profile_id)
        REFERENCES profile(id)
        ON DELETE SET NULL
);

-- ============================================================
-- Revenue Analytics
-- ============================================================

CREATE TABLE revenue_daily_stat (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    stat_date DATE NOT NULL,

    total_subscriptions INTEGER NOT NULL DEFAULT 0,

    new_subscriptions INTEGER NOT NULL DEFAULT 0,

    cancelled_subscriptions INTEGER NOT NULL DEFAULT 0,

    gross_revenue NUMERIC(14,2) NOT NULL DEFAULT 0,

    refunds NUMERIC(14,2) NOT NULL DEFAULT 0,

    net_revenue NUMERIC(14,2) NOT NULL DEFAULT 0,

    currency CHAR(3) NOT NULL DEFAULT 'USD',

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_revenue_daily
        UNIQUE(stat_date)
);

COMMIT;