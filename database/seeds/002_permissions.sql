-- ============================================================
-- Author: ultramegared
-- Project: AtlasStream
-- File: 002_permissions.sql
-- Module: Database Seeds
-- Language: PostgreSQL
-- Description:
-- Default system permissions
-- ============================================================

BEGIN;

INSERT INTO permission (
    name,
    description
)
VALUES

-- ============================================================
-- USERS
-- ============================================================

('user.create', 'Create users'),
('user.read', 'View users'),
('user.update', 'Update users'),
('user.delete', 'Delete users'),
('user.block', 'Block users'),
('user.unblock', 'Unblock users'),

-- ============================================================
-- ROLES
-- ============================================================

('role.create', 'Create roles'),
('role.read', 'View roles'),
('role.update', 'Update roles'),
('role.delete', 'Delete roles'),

-- ============================================================
-- PERMISSIONS
-- ============================================================

('permission.read', 'View permissions'),
('permission.assign', 'Assign permissions'),

-- ============================================================
-- CATALOG
-- ============================================================

('catalog.create', 'Create catalog content'),
('catalog.read', 'View catalog'),
('catalog.update', 'Update catalog'),
('catalog.delete', 'Delete catalog'),
('catalog.publish', 'Publish catalog'),
('catalog.unpublish', 'Unpublish catalog'),

-- ============================================================
-- MOVIES
-- ============================================================

('movie.create', 'Create movies'),
('movie.update', 'Update movies'),
('movie.delete', 'Delete movies'),

-- ============================================================
-- SERIES
-- ============================================================

('series.create', 'Create series'),
('series.update', 'Update series'),
('series.delete', 'Delete series'),

-- ============================================================
-- EPISODES
-- ============================================================

('episode.create', 'Create episodes'),
('episode.update', 'Update episodes'),
('episode.delete', 'Delete episodes'),

-- ============================================================
-- MEDIA
-- ============================================================

('media.upload', 'Upload media'),
('media.delete', 'Delete media'),
('media.encode', 'Encode videos'),
('media.subtitle', 'Manage subtitles'),
('media.audio', 'Manage audio tracks'),

-- ============================================================
-- STREAMING
-- ============================================================

('stream.play', 'Play content'),
('stream.stop', 'Stop playback'),
('stream.manage', 'Manage streaming'),

-- ============================================================
-- SUBSCRIPTIONS
-- ============================================================

('subscription.create', 'Create subscriptions'),
('subscription.read', 'View subscriptions'),
('subscription.update', 'Update subscriptions'),
('subscription.cancel', 'Cancel subscriptions'),

-- ============================================================
-- PAYMENTS
-- ============================================================

('payment.read', 'View payments'),
('payment.refund', 'Refund payments'),
('payment.manage', 'Manage billing'),

-- ============================================================
-- NOTIFICATIONS
-- ============================================================

('notification.send', 'Send notifications'),
('notification.read', 'Read notifications'),
('notification.manage', 'Manage notifications'),

-- ============================================================
-- ANALYTICS
-- ============================================================

('analytics.read', 'View analytics'),
('analytics.export', 'Export analytics'),

-- ============================================================
-- REPORTS
-- ============================================================

('report.generate', 'Generate reports'),
('report.download', 'Download reports'),

-- ============================================================
-- SYSTEM
-- ============================================================

('system.settings', 'Manage system settings'),
('system.logs', 'View system logs'),
('system.jobs', 'Manage background jobs'),
('system.features', 'Manage feature flags'),

-- ============================================================
-- API
-- ============================================================

('api.keys', 'Manage API keys'),

-- ============================================================
-- ADMINISTRATION
-- ============================================================

('admin.panel', 'Access administration panel'),
('admin.full', 'Full administrator access')

ON CONFLICT (name)
DO NOTHING;

COMMIT;