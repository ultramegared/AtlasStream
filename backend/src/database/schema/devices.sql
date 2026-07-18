CREATE TABLE devices (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    device_name VARCHAR(100) NOT NULL,

    device_type VARCHAR(50) NOT NULL,

    operating_system VARCHAR(100),

    app_version VARCHAR(50),

    device_identifier VARCHAR(255) NOT NULL UNIQUE,

    ip_address VARCHAR(45),

    last_login_at TIMESTAMP,

    last_activity_at TIMESTAMP,

    is_trusted BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_devices_user
ON devices(user_id);

CREATE INDEX idx_devices_type
ON devices(device_type);

CREATE INDEX idx_devices_active
ON devices(is_active);

CREATE INDEX idx_devices_last_activity
ON devices(last_activity_at);