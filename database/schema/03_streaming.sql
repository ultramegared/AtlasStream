-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 03_streaming.sql
-- Module: Database Schema
-- Language: PostgreSQL
-- Description:
-- Streaming, Playback and Media Schema
-- ============================================================

BEGIN;

-- ============================================================
-- Video Assets
-- ============================================================

CREATE TABLE video_asset (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    content_id UUID,
    episode_id UUID,

    title VARCHAR(255) NOT NULL,

    storage_provider VARCHAR(50) NOT NULL,
    storage_key TEXT NOT NULL,

    container VARCHAR(20) NOT NULL DEFAULT 'mp4',

    duration_seconds INTEGER NOT NULL,

    filesize BIGINT,

    checksum TEXT,

    status VARCHAR(30) NOT NULL DEFAULT 'processing',

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_video_owner
        CHECK (
            (content_id IS NOT NULL AND episode_id IS NULL)
            OR
            (content_id IS NULL AND episode_id IS NOT NULL)
        ),

    CONSTRAINT fk_video_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_video_episode
        FOREIGN KEY(episode_id)
        REFERENCES episode(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Video Qualities
-- ============================================================

CREATE TABLE video_quality (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    video_asset_id UUID NOT NULL,

    resolution VARCHAR(20) NOT NULL,

    bitrate INTEGER,

    codec VARCHAR(30),

    fps NUMERIC(5,2),

    audio_codec VARCHAR(30),

    storage_key TEXT NOT NULL,

    filesize BIGINT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_quality_asset
        FOREIGN KEY(video_asset_id)
        REFERENCES video_asset(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Subtitle Tracks
-- ============================================================

CREATE TABLE subtitle_track (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    video_asset_id UUID NOT NULL,

    language_id UUID NOT NULL,

    label VARCHAR(100),

    format VARCHAR(20),

    storage_key TEXT NOT NULL,

    is_default BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_subtitle_asset
        FOREIGN KEY(video_asset_id)
        REFERENCES video_asset(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_subtitle_language
        FOREIGN KEY(language_id)
        REFERENCES language(id)
);

-- ============================================================
-- Audio Tracks
-- ============================================================

CREATE TABLE audio_track (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    video_asset_id UUID NOT NULL,

    language_id UUID NOT NULL,

    codec VARCHAR(30),

    channels VARCHAR(20),

    bitrate INTEGER,

    storage_key TEXT NOT NULL,

    is_default BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_audio_asset
        FOREIGN KEY(video_asset_id)
        REFERENCES video_asset(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_audio_language
        FOREIGN KEY(language_id)
        REFERENCES language(id)
);

-- ============================================================
-- Playback History
-- ============================================================

CREATE TABLE playback_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    content_id UUID,
    episode_id UUID,

    video_asset_id UUID NOT NULL,

    position_seconds INTEGER NOT NULL DEFAULT 0,

    watched_seconds INTEGER NOT NULL DEFAULT 0,

    completed BOOLEAN NOT NULL DEFAULT FALSE,

    last_played_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_playback_target
        CHECK (
            (content_id IS NOT NULL AND episode_id IS NULL)
            OR
            (content_id IS NULL AND episode_id IS NOT NULL)
        ),

    CONSTRAINT fk_playback_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_playback_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_playback_episode
        FOREIGN KEY(episode_id)
        REFERENCES episode(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_playback_asset
        FOREIGN KEY(video_asset_id)
        REFERENCES video_asset(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Watch List
-- ============================================================

CREATE TABLE watchlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    content_id UUID NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_watchlist
        UNIQUE(user_id, content_id),

    CONSTRAINT fk_watchlist_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_watchlist_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Favorites
-- ============================================================

CREATE TABLE favorite (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    content_id UUID NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_favorite
        UNIQUE(user_id, content_id),

    CONSTRAINT fk_favorite_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_favorite_content
        FOREIGN KEY(content_id)
        REFERENCES content(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Viewing Progress
-- ============================================================

CREATE TABLE viewing_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    video_asset_id UUID NOT NULL,

    progress_percent NUMERIC(5,2) NOT NULL DEFAULT 0,

    position_seconds INTEGER NOT NULL DEFAULT 0,

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_progress
        UNIQUE(user_id, video_asset_id),

    CONSTRAINT fk_progress_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_progress_asset
        FOREIGN KEY(video_asset_id)
        REFERENCES video_asset(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Streaming Sessions
-- ============================================================

CREATE TABLE streaming_session (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    video_asset_id UUID NOT NULL,

    session_token UUID NOT NULL DEFAULT gen_random_uuid(),

    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    ended_at TIMESTAMPTZ,

    device_name VARCHAR(150),

    device_type VARCHAR(50),

    ip_address INET,

    country VARCHAR(100),

    status VARCHAR(30) NOT NULL DEFAULT 'active',

    CONSTRAINT uq_stream_token
        UNIQUE(session_token),

    CONSTRAINT fk_stream_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_stream_asset
        FOREIGN KEY(video_asset_id)
        REFERENCES video_asset(id)
        ON DELETE CASCADE
);

COMMIT;