-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 010_system_settings.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default system configuration
-- ============================================================

BEGIN;

INSERT INTO system_setting (
    setting_key,
    setting_value,
    description,
    is_public
)
VALUES

(
    'application.name',
    '"AtlasStream"'::jsonb,
    'Application name',
    TRUE
),

(
    'application.version',
    '"1.0.0"'::jsonb,
    'Current application version',
    TRUE
),

(
    'application.environment',
    '"production"'::jsonb,
    'Running environment',
    FALSE
),

(
    'application.timezone',
    '"UTC"'::jsonb,
    'Default timezone',
    TRUE
),

(
    'application.locale',
    '"en"'::jsonb,
    'Default language',
    TRUE
),

(
    'application.currency',
    '"USD"'::jsonb,
    'Default currency',
    TRUE
),

(
    'application.support_email',
    '"support@atlasstream.com"'::jsonb,
    'Support email address',
    TRUE
),

(
    'application.website',
    '"https://atlasstream.com"'::jsonb,
    'Official website',
    TRUE
),

(
    'streaming.default_quality',
    '"1080p"'::jsonb,
    'Default playback quality',
    TRUE
),

(
    'streaming.max_quality',
    '"4K UHD"'::jsonb,
    'Maximum supported quality',
    TRUE
),

(
    'streaming.allow_multiple_streams',
    'true'::jsonb,
    'Allow simultaneous streams',
    FALSE
),

(
    'streaming.enable_adaptive_bitrate',
    'true'::jsonb,
    'Adaptive bitrate streaming',
    FALSE
),

(
    'security.password_min_length',
    '8'::jsonb,
    'Minimum password length',
    FALSE
),

(
    'security.require_email_verification',
    'true'::jsonb,
    'Require verified email',
    FALSE
),

(
    'security.enable_rate_limit',
    'true'::jsonb,
    'Enable API rate limiting',
    FALSE
),

(
    'security.jwt_expiration_minutes',
    '60'::jsonb,
    'JWT expiration time',
    FALSE
),

(
    'security.refresh_token_days',
    '30'::jsonb,
    'Refresh token lifetime',
    FALSE
),

(
    'catalog.default_language',
    '"en"'::jsonb,
    'Default catalog language',
    TRUE
),

(
    'catalog.allow_user_ratings',
    'true'::jsonb,
    'Allow content ratings',
    TRUE
),

(
    'catalog.allow_reviews',
    'false'::jsonb,
    'Allow written reviews',
    FALSE
),

(
    'notifications.email_enabled',
    'true'::jsonb,
    'Enable email notifications',
    FALSE
),

(
    'notifications.push_enabled',
    'true'::jsonb,
    'Enable push notifications',
    FALSE
),

(
    'analytics.enabled',
    'true'::jsonb,
    'Enable analytics',
    FALSE
),

(
    'analytics.retention_days',
    '365'::jsonb,
    'Analytics retention period',
    FALSE
),

(
    'maintenance.enabled',
    'false'::jsonb,
    'Maintenance mode',
    FALSE
),

(
    'maintenance.message',
    '"AtlasStream is temporarily unavailable due to scheduled maintenance."'::jsonb,
    'Maintenance message',
    TRUE
)

ON CONFLICT (setting_key)
DO NOTHING;

COMMIT;