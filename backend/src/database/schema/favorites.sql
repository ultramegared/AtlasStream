CREATE TABLE favorites (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    content_type VARCHAR(20) NOT NULL,

    content_id UUID NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_favorites_content_type
        CHECK (content_type IN ('MOVIE', 'SERIES')),

    CONSTRAINT unique_favorite
        UNIQUE (user_id, content_type, content_id)
);

CREATE INDEX idx_favorites_user
ON favorites(user_id);

CREATE INDEX idx_favorites_content
ON favorites(content_type, content_id);

CREATE INDEX idx_favorites_created
ON favorites(created_at);