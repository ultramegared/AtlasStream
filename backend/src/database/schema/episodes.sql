CREATE TABLE episodes (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    season_id UUID NOT NULL,

    episode_number INTEGER NOT NULL
        CHECK (episode_number > 0),

    title VARCHAR(255) NOT NULL,

    description TEXT,

    duration_minutes INTEGER NOT NULL
        CHECK (duration_minutes > 0),

    thumbnail_url TEXT,

    video_url TEXT NOT NULL,

    release_date DATE,

    is_premium BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_episodes_season
        FOREIGN KEY (season_id)
        REFERENCES seasons(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_episode_number
        UNIQUE (season_id, episode_number)

);

CREATE INDEX idx_episodes_season
ON episodes(season_id);

CREATE INDEX idx_episodes_number
ON episodes(episode_number);

CREATE INDEX idx_episodes_release_date
ON episodes(release_date);

CREATE INDEX idx_episodes_premium
ON episodes(is_premium);

CREATE INDEX idx_episodes_active
ON episodes(is_active);