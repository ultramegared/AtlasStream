CREATE TABLE watch_history (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    content_type VARCHAR(20) NOT NULL,

    content_id UUID NOT NULL,

    watched_seconds INTEGER NOT NULL DEFAULT 0,

    total_duration INTEGER NOT NULL,

    completed BOOLEAN NOT NULL DEFAULT FALSE,

    started_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    finished_at TIMESTAMP,

    last_watched_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_watch_history_content_type
        CHECK (content_type IN ('MOVIE', 'SERIES', 'EPISODE'))
);

CREATE INDEX idx_watch_history_user
ON watch_history(user_id);

CREATE INDEX idx_watch_history_content
ON watch_history(content_type, content_id);

CREATE INDEX idx_watch_history_last_watched
ON watch_history(last_watched_at);

CREATE INDEX idx_watch_history_completed
ON watch_history(completed);