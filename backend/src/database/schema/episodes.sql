CREATE TABLE episodes (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    season_id UUID NOT NULL REFERENCES seasons(id) ON DELETE CASCADE,

    episode_number INTEGER NOT NULL,

    title VARCHAR(255) NOT NULL,

    description TEXT,

    thumbnail_url TEXT,

    video_url TEXT NOT NULL,

    trailer_url TEXT,

    duration INTEGER NOT NULL,

    release_date DATE,

    is_premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    total_views BIGINT NOT NULL DEFAULT 0,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT unique_season_episode
        UNIQUE (season_id, episode_number)
);

CREATE INDEX idx_episodes_season
ON episodes(season_id);

CREATE INDEX idx_episodes_number
ON episodes(episode_number);

CREATE INDEX idx_episodes_active
ON episodes(is_active);

CREATE INDEX idx_episodes_premium
ON episodes(is_premium);