CREATE TABLE continue_watching (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    content_type VARCHAR(20) NOT NULL,

    content_id UUID NOT NULL,

    season_id UUID REFERENCES seasons(id) ON DELETE CASCADE,

    episode_id UUID REFERENCES episodes(id) ON DELETE CASCADE,

    current_position_seconds INTEGER NOT NULL DEFAULT 0,

    total_duration_seconds INTEGER NOT NULL,

    progress_percentage DECIMAL(5,2) NOT NULL DEFAULT 0.00,

    last_watched_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_continue_content_type
        CHECK (content_type IN ('MOVIE', 'SERIES', 'EPISODE')),

    CONSTRAINT unique_continue_watching
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