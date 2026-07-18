CREATE TABLE profiles (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,

    display_name VARCHAR(100) NOT NULL,

    biography TEXT,

    avatar_url TEXT,

    birth_date DATE,

    gender VARCHAR(20),

    country VARCHAR(100),

    language VARCHAR(50) DEFAULT 'es',

    timezone VARCHAR(100) DEFAULT 'UTC',

    parental_control_enabled BOOLEAN NOT NULL DEFAULT FALSE,

    autoplay_enabled BOOLEAN NOT NULL DEFAULT TRUE,

    subtitles_enabled BOOLEAN NOT NULL DEFAULT FALSE,

    preferred_video_quality VARCHAR(20) DEFAULT 'AUTO',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_profiles_user
ON profiles(user_id);

CREATE INDEX idx_profiles_display_name
ON profiles(display_name);