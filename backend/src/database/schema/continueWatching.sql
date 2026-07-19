CREATE TABLE continue_watching (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    content_type VARCHAR(20) NOT NULL,

    content_id UUID NOT NULL,

    season_id UUID,

    episode_id UUID,

    current_position_seconds INTEGER NOT NULL DEFAULT 0
        CHECK (current_position_seconds >= 0),

    total_duration_seconds INTEGER NOT NULL
        CHECK (total_duration_seconds > 0),

    progress_percentage DECIMAL(5,2) NOT NULL DEFAULT 0.00
        CHECK (progress_percentage BETWEEN 0 AND 100),

    last_watched_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_continue_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_continue_season
        FOREIGN KEY (season_id)
        REFERENCES seasons(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_continue_episode
        FOREIGN KEY (episode_id)
        REFERENCES episodes(id)
        ON DELETE CASCADE,

    CONSTRAINT chk_continue_content_type
        CHECK (content_type IN ('MOVIE', 'SERIES', 'EPISODE')),

    CONSTRAINT uq_continue_watching
        UNIQUE (user_id, content_type, content_id)
);

CREATE INDEX idx_continue_user
ON continue_watching(user_id);

CREATE INDEX idx_continue_content
ON continue_watching(content_type, content_id);

CREATE INDEX idx_continue_last_watched
ON continue_watching(last_watched_at);

CREATE INDEX idx_continue_episode
ON continue_watching(episode_id);