-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 05_notifications.sql
-- Module: Database Schema
-- Language: PostgreSQL
-- Description:
-- Notifications, Messages and User Preferences Schema
-- ============================================================

BEGIN;

-- ============================================================
-- Notification Types
-- ============================================================

CREATE TABLE notification_type (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code VARCHAR(100) NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_notification_type_code UNIQUE(code)
);

-- ============================================================
-- Notification Templates
-- ============================================================

CREATE TABLE notification_template (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    notification_type_id UUID NOT NULL,

    language_id UUID,

    title VARCHAR(255) NOT NULL,

    subject VARCHAR(255),

    body TEXT NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_notification_template_type
        FOREIGN KEY(notification_type_id)
        REFERENCES notification_type(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_notification_template_language
        FOREIGN KEY(language_id)
        REFERENCES language(id)
);

-- ============================================================
-- User Notification Preferences
-- ============================================================

CREATE TABLE notification_preference (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    email_enabled BOOLEAN NOT NULL DEFAULT TRUE,

    push_enabled BOOLEAN NOT NULL DEFAULT TRUE,

    sms_enabled BOOLEAN NOT NULL DEFAULT FALSE,

    marketing_enabled BOOLEAN NOT NULL DEFAULT FALSE,

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_notification_preference_user
        UNIQUE(user_id),

    CONSTRAINT fk_notification_preference_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Notifications
-- ============================================================

CREATE TABLE notification (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    notification_type_id UUID NOT NULL,

    title VARCHAR(255) NOT NULL,

    message TEXT NOT NULL,

    data JSONB,

    priority VARCHAR(20) NOT NULL DEFAULT 'normal',

    status VARCHAR(20) NOT NULL DEFAULT 'pending',

    read_at TIMESTAMPTZ,

    sent_at TIMESTAMPTZ,

    expires_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_notification_priority
        CHECK (
            priority IN (
                'low',
                'normal',
                'high',
                'critical'
            )
        ),

    CONSTRAINT chk_notification_status
        CHECK (
            status IN (
                'pending',
                'sent',
                'read',
                'failed'
            )
        ),

    CONSTRAINT fk_notification_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_notification_type
        FOREIGN KEY(notification_type_id)
        REFERENCES notification_type(id)
);

-- ============================================================
-- Push Devices
-- ============================================================

CREATE TABLE push_device (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    provider VARCHAR(50) NOT NULL,

    device_token TEXT NOT NULL,

    platform VARCHAR(30) NOT NULL,

    device_name VARCHAR(150),

    app_version VARCHAR(30),

    last_seen_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_push_device_token UNIQUE(device_token),

    CONSTRAINT fk_push_device_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Email Queue
-- ============================================================

CREATE TABLE email_queue (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID,

    recipient_email CITEXT NOT NULL,

    subject VARCHAR(255) NOT NULL,

    body TEXT NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'pending',

    attempts INTEGER NOT NULL DEFAULT 0,

    last_attempt_at TIMESTAMPTZ,

    sent_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_email_status
        CHECK (
            status IN (
                'pending',
                'processing',
                'sent',
                'failed'
            )
        ),

    CONSTRAINT fk_email_queue_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE SET NULL
);

-- ============================================================
-- Notification Logs
-- ============================================================

CREATE TABLE notification_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    notification_id UUID NOT NULL,

    provider VARCHAR(100),

    provider_message_id TEXT,

    status VARCHAR(30),

    response JSONB,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_notification_log_notification
        FOREIGN KEY(notification_id)
        REFERENCES notification(id)
        ON DELETE CASCADE
);

COMMIT;