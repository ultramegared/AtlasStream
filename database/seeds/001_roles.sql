-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 001_roles.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default system roles
-- ============================================================

BEGIN;

INSERT INTO role (
    name,
    description
)
VALUES

(
    'super_admin',
    'Full access to the entire platform.'
),

(
    'admin',
    'Platform administrator.'
),

(
    'content_manager',
    'Manages movies, series and catalog.'
),

(
    'editor',
    'Edits catalog metadata.'
),

(
    'moderator',
    'Moderates reports and user activity.'
),

(
    'support',
    'Customer support operator.'
),

(
    'analytics',
    'Access to reports and analytics.'
),

(
    'billing',
    'Subscription and payment management.'
),

(
    'developer',
    'Internal development and testing.'
),

(
    'user',
    'Default application user.'
)

ON CONFLICT (name)
DO NOTHING;

COMMIT;