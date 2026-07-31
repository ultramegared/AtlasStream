-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 009_feature_flags.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default feature flags
-- ============================================================

BEGIN;

INSERT INTO feature_flag (
    name,
    description,
    enabled,
    rollout_percentage
)
VALUES

(
    'ai_recommendations',
    'AI-powered personalized recommendations.',
    TRUE,
    100
),

(
    'offline_downloads',
    'Allow offline downloads.',
    TRUE,
    100
),

(
    'multiple_profiles',
    'Enable multiple user profiles.',
    TRUE,
    100
),

(
    'kids_profiles',
    'Enable child profiles.',
    TRUE,
    100
),

(
    'live_channels',
    'Enable live TV channels.',
    FALSE,
    0
),

(
    'sports_streaming',
    'Enable live sports streaming.',
    FALSE,
    0
),

(
    'dolby_atmos',
    'Enable Dolby Atmos playback.',
    TRUE,
    100
),

(
    'dolby_vision',
    'Enable Dolby Vision playback.',
    TRUE,
    100
),

(
    'hdr_streaming',
    'Enable HDR playback.',
    TRUE,
    100
),

(
    'uhd_streaming',
    'Enable Ultra HD playback.',
    TRUE,
    100
),

(
    'casting',
    'Enable Chromecast and AirPlay.',
    TRUE,
    100
),

(
    'continue_watching',
    'Enable continue watching row.',
    TRUE,
    100
),

(
    'watchlist',
    'Enable personal watchlist.',
    TRUE,
    100
),

(
    'favorites',
    'Enable favorites.',
    TRUE,
    100
),

(
    'notifications',
    'Enable push notifications.',
    TRUE,
    100
),

(
    'email_notifications',
    'Enable email notifications.',
    TRUE,
    100
),

(
    'multi_language_audio',
    'Enable multiple audio tracks.',
    TRUE,
    100
),

(
    'subtitles',
    'Enable subtitles.',
    TRUE,
    100
),

(
    'trailers',
    'Enable trailer playback.',
    TRUE,
    100
),

(
    'parental_control',
    'Enable parental controls.',
    TRUE,
    100
),

(
    'two_factor_auth',
    'Enable multi-factor authentication.',
    FALSE,
    0
),

(
    'social_login',
    'Enable Google, Apple and Facebook login.',
    FALSE,
    0
),

(
    'beta_features',
    'Enable beta functionality.',
    FALSE,
    5
),

(
    'maintenance_mode',
    'Put the platform into maintenance mode.',
    FALSE,
    0
),

(
    'developer_mode',
    'Enable developer-only features.',
    FALSE,
    0
)

ON CONFLICT (name)
DO NOTHING;

COMMIT;