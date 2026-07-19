CREATE TABLE devices (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    device_name VARCHAR(100) NOT NULL,

    device_type VARCHAR(30) NOT NULL
        CHECK (device_type IN (
            'MOBILE',
            'TABLET',
            'DESKTOP',
            'SMART_TV',
            'WEB',
            'OTHER'
        )),

    operating_system VARCHAR(100),

    app_version VARCHAR(20),

    device_identifier VARCHAR(255) NOT NULL UNIQUE,

    ip_address INET,

    last_login_at TIMESTAMP,

    is_trusted BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP,

    CONSTRAINT fk_devices_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_devices_user
ON devices(user_id);

CREATE INDEX idx_devices_type
ON devices(device_type);

CREATE INDEX idx_devices_active
ON devices(is_active);

CREATE INDEX idx_devices_last_login
ON devices(last_login_at);