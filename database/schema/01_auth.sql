-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 01_auth.sql
-- Module: Database Schema
-- Language: PostgreSQL
-- Description:
-- Authentication and Authorization Schema
-- ============================================================

BEGIN;

-- ============================================================
-- Roles
-- ============================================================

CREATE TABLE role (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL,
    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_role_name UNIQUE (name)
);

-- ============================================================
-- Permissions
-- ============================================================

CREATE TABLE permission (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(150) NOT NULL,
    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_permission_name UNIQUE (name)
);

-- ============================================================
-- Role Permissions
-- ============================================================

CREATE TABLE role_permission (
    role_id UUID NOT NULL,
    permission_id UUID NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    PRIMARY KEY (role_id, permission_id),

    CONSTRAINT fk_role_permission_role
        FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_role_permission_permission
        FOREIGN KEY (permission_id)
        REFERENCES permission(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Users
-- ============================================================

CREATE TABLE app_user (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    username CITEXT NOT NULL,
    email CITEXT NOT NULL,

    password_hash TEXT NOT NULL,

    first_name VARCHAR(150),
    last_name VARCHAR(150),

    avatar_url TEXT,

    email_verified BOOLEAN NOT NULL DEFAULT FALSE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    last_login_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ,

    CONSTRAINT uq_user_username UNIQUE(username),
    CONSTRAINT uq_user_email UNIQUE(email)
);

-- ============================================================
-- User Roles
-- ============================================================

CREATE TABLE user_role (
    user_id UUID NOT NULL,
    role_id UUID NOT NULL,

    assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    PRIMARY KEY (user_id, role_id),

    CONSTRAINT fk_user_role_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_user_role_role
        FOREIGN KEY(role_id)
        REFERENCES role(id)
        ON DELETE CASCADE
);

-- ============================================================
-- User Sessions
-- ============================================================

CREATE TABLE user_session (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    refresh_token TEXT NOT NULL,

    ip_address INET,

    user_agent TEXT,

    expires_at TIMESTAMPTZ NOT NULL,

    revoked_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_session_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Password Reset Tokens
-- ============================================================

CREATE TABLE password_reset (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    token TEXT NOT NULL,

    expires_at TIMESTAMPTZ NOT NULL,

    used_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_password_reset_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE
);

-- ============================================================
-- Email Verification Tokens
-- ============================================================

CREATE TABLE email_verification (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    token TEXT NOT NULL,

    expires_at TIMESTAMPTZ NOT NULL,

    verified_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_email_verification_user
        FOREIGN KEY(user_id)
        REFERENCES app_user(id)
        ON DELETE CASCADE
);

COMMIT;