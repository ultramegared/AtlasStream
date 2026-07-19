CREATE TABLE profiles (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    name VARCHAR(100) NOT NULL,

    avatar_url TEXT,

    is_kids_profile BOOLEAN NOT NULL DEFAULT FALSE,

    language_id UUID,

    pin VARCHAR(255),

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_profiles_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_profiles_language
        FOREIGN KEY (language_id)
        REFERENCES languages(id),

    CONSTRAINT uq_profiles_user_name
        UNIQUE (user_id, name)

);

CREATE INDEX idx_profiles_user
ON profiles(user_id);

CREATE INDEX idx_profiles_language
ON profiles(language_id);

CREATE INDEX idx_profiles_active
ON profiles(is_active);