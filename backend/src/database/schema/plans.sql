CREATE TABLE plans (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL UNIQUE,

    description TEXT,

    price DECIMAL(10,2) NOT NULL,

    currency VARCHAR(10) NOT NULL DEFAULT 'USD',

    billing_cycle VARCHAR(20) NOT NULL,

    max_devices INTEGER NOT NULL DEFAULT 1,

    video_quality VARCHAR(20) NOT NULL DEFAULT 'HD',

    has_ads BOOLEAN NOT NULL DEFAULT FALSE,

    downloads_enabled BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_billing_cycle
        CHECK (billing_cycle IN ('MONTHLY','YEARLY'))
);

CREATE INDEX idx_plans_name
ON plans(name);

CREATE INDEX idx_plans_active
ON plans(is_active);