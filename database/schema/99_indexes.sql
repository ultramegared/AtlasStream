-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 99_indexes.sql
-- Module: Database Schema
-- Language: PostgreSQL
-- Description:
-- Performance Indexes
-- ============================================================

BEGIN;

-- ============================================================
-- AUTH
-- ============================================================

CREATE INDEX idx_user_email
ON app_user(email);

CREATE INDEX idx_user_username
ON app_user(username);

CREATE INDEX idx_user_active
ON app_user(is_active);

CREATE INDEX idx_user_deleted
ON app_user(deleted_at);

CREATE INDEX idx_session_user
ON user_session(user_id);

CREATE INDEX idx_session_expires
ON user_session(expires_at);

CREATE INDEX idx_password_reset_user
ON password_reset(user_id);

CREATE INDEX idx_password_reset_token
ON password_reset(token);

CREATE INDEX idx_email_verification_user
ON email_verification(user_id);

CREATE INDEX idx_email_verification_token
ON email_verification(token);

-- ============================================================
-- CATALOG
-- ============================================================

CREATE INDEX idx_content_title
ON content(title);

CREATE INDEX idx_content_slug
ON content(slug);

CREATE INDEX idx_content_type
ON content(content_type);

CREATE INDEX idx_content_release_year
ON content(release_year);

CREATE INDEX idx_content_language
ON content(language_id);

CREATE INDEX idx_content_country
ON content(country_id);

CREATE INDEX idx_content_rating
ON content(age_rating_id);

CREATE INDEX idx_content_studio
ON content(studio_id);

CREATE INDEX idx_content_published
ON content(is_published);

CREATE INDEX idx_content_deleted
ON content(deleted_at);

CREATE INDEX idx_season_content
ON season(content_id);

CREATE INDEX idx_episode_season
ON episode(season_id);

CREATE INDEX idx_person_country
ON person(country_id);

CREATE INDEX idx_studio_country
ON studio(country_id);

-- ============================================================
-- FULL TEXT SEARCH
-- ============================================================

CREATE INDEX idx_content_title_trgm
ON content
USING gin(title gin_trgm_ops);

CREATE INDEX idx_content_original_title_trgm
ON content
USING gin(original_title gin_trgm_ops);

CREATE INDEX idx_person_stage_name_trgm
ON person
USING gin(stage_name gin_trgm_ops);

-- ============================================================
-- STREAMING
-- ============================================================

CREATE INDEX idx_video_content
ON video_asset(content_id);

CREATE INDEX idx_video_episode
ON video_asset(episode_id);

CREATE INDEX idx_video_status
ON video_asset(status);

CREATE INDEX idx_quality_asset
ON video_quality(video_asset_id);

CREATE INDEX idx_audio_asset
ON audio_track(video_asset_id);

CREATE INDEX idx_subtitle_asset
ON subtitle_track(video_asset_id);

CREATE INDEX idx_history_user
ON playback_history(user_id);

CREATE INDEX idx_history_content
ON playback_history(content_id);

CREATE INDEX idx_history_episode
ON playback_history(episode_id);

CREATE INDEX idx_progress_user
ON viewing_progress(user_id);

CREATE INDEX idx_progress_asset
ON viewing_progress(video_asset_id);

CREATE INDEX idx_stream_user
ON streaming_session(user_id);

CREATE INDEX idx_stream_asset
ON streaming_session(video_asset_id);

CREATE INDEX idx_stream_status
ON streaming_session(status);

-- ============================================================
-- SUBSCRIPTIONS
-- ============================================================

CREATE INDEX idx_subscription_user
ON user_subscription(user_id);

CREATE INDEX idx_subscription_plan
ON user_subscription(plan_id);

CREATE INDEX idx_subscription_status
ON user_subscription(status);

CREATE INDEX idx_payment_subscription
ON payment(subscription_id);

CREATE INDEX idx_payment_status
ON payment(status);

CREATE INDEX idx_invoice_subscription
ON invoice(subscription_id);

CREATE INDEX idx_profile_user
ON profile(user_id);

CREATE INDEX idx_payment_method_user
ON payment_method(user_id);

-- ============================================================
-- NOTIFICATIONS
-- ============================================================

CREATE INDEX idx_notification_user
ON notification(user_id);

CREATE INDEX idx_notification_status
ON notification(status);

CREATE INDEX idx_notification_created
ON notification(created_at);

CREATE INDEX idx_notification_read
ON notification(read_at);

CREATE INDEX idx_push_device_user
ON push_device(user_id);

CREATE INDEX idx_email_queue_status
ON email_queue(status);

-- ============================================================
-- ANALYTICS
-- ============================================================

CREATE INDEX idx_event_user
ON analytics_event(user_id);

CREATE INDEX idx_event_profile
ON analytics_event(profile_id);

CREATE INDEX idx_event_name
ON analytics_event(event_name);

CREATE INDEX idx_event_created
ON analytics_event(created_at);

CREATE INDEX idx_daily_content
ON content_daily_stat(content_id);

CREATE INDEX idx_daily_user
ON user_daily_stat(user_id);

CREATE INDEX idx_search_query
ON search_analytics
USING gin(query gin_trgm_ops);

CREATE INDEX idx_api_request
ON api_request_log(request_id);

CREATE INDEX idx_api_user
ON api_request_log(user_id);

CREATE INDEX idx_audit_user
ON audit_log(user_id);

CREATE INDEX idx_device_user
ON device_analytics(user_id);

-- ============================================================
-- SYSTEM
-- ============================================================

CREATE INDEX idx_system_setting_key
ON system_setting(setting_key);

CREATE INDEX idx_feature_enabled
ON feature_flag(enabled);

CREATE INDEX idx_api_key_active
ON api_key(is_active);

CREATE INDEX idx_background_status
ON background_job(status);

CREATE INDEX idx_background_schedule
ON background_job(scheduled_at);

CREATE INDEX idx_system_log_level
ON system_log(level);

CREATE INDEX idx_system_log_service
ON system_log(service);

CREATE INDEX idx_system_log_created
ON system_log(created_at);

-- ============================================================
-- COMPOSITE INDEXES
-- ============================================================

CREATE INDEX idx_content_type_year
ON content(content_type, release_year);

CREATE INDEX idx_history_user_asset
ON playback_history(user_id, video_asset_id);

CREATE INDEX idx_progress_user_asset
ON viewing_progress(user_id, video_asset_id);

CREATE INDEX idx_subscription_user_status
ON user_subscription(user_id, status);

CREATE INDEX idx_notification_user_status
ON notification(user_id, status);

CREATE INDEX idx_event_user_created
ON analytics_event(user_id, created_at);

CREATE INDEX idx_stream_user_status
ON streaming_session(user_id, status);

COMMIT;