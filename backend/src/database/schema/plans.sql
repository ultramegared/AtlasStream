CREATE TABLE plans (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL UNIQUE,

    description TEXT,

    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    currency VARCHAR(3) NOT NULL DEFAULT 'USD',

    duration_days INTEGER NOT NULL,

    max_profiles INTEGER NOT NULL DEFAULT 1,

    max_devices INTEGER NOT NULL DEFAULT 1,

    video_quality VARCHAR(20) NOT NULL DEFAULT 'HD'
        CHECK (video_quality IN ('SD', 'HD', 'FULL_HD', 'UHD_4K')),

    has_ads BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP
);

CREATE INDEX idx_plans_name
ON plans(name);

CREATE INDEX idx_plans_price
ON plans(price);

CREATE INDEX idx_plans_active
ON plans(is_active);