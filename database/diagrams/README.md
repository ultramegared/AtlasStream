# AtlasStream Database Diagrams

## Overview

This directory contains the Entity Relationship Diagrams (ERD) for the AtlasStream database.

The diagrams provide a visual representation of the database structure, table relationships, and module boundaries.

—

## Goals

- Document the complete database architecture.
- Simplify onboarding for developers.
- Improve maintainability.
- Assist database reviews.
- Support backend development.
- Serve as the canonical reference for relationships.

—

## Diagram Organization

```text
diagrams/

README.md

atlasstream-erd.mmd

auth.mmd

catalog.mmd

streaming.mmd

subscriptions.mmd

notifications.mmd

analytics.mmd

system.mmd
```

—

## Main Diagram

### atlasstream-erd.mmd

Contains the complete Entity Relationship Diagram for the entire AtlasStream platform.

Includes every table and the relationships between modules.

—

## Module Diagrams

### auth.mmd

Authentication and authorization.

Tables include:

- role
- permission
- role_permission
- app_user
- user_role
- user_session
- password_reset
- email_verification

—

### catalog.mmd

Content management.

Tables include:

- country
- language
- genre
- category
- age_rating
- person
- studio
- content
- season
- episode
- content_genre
- content_category
- content_cast
- content_crew

—

### streaming.mmd

Streaming platform.

Tables include:

- video_asset
- video_quality
- subtitle_track
- audio_track
- playback_history
- watchlist
- favorite
- viewing_progress
- streaming_session

—

### subscriptions.mmd

Billing and subscriptions.

Tables include:

- subscription_plan
- user_subscription
- payment_method
- payment
- invoice
- coupon
- coupon_redemption
- profile

—

### notifications.mmd

Notification system.

Tables include:

- notification_type
- notification_template
- notification_preference
- notification
- push_device
- email_queue
- notification_log

—

### analytics.mmd

Analytics and auditing.

Tables include:

- analytics_event
- content_daily_stat
- user_daily_stat
- search_analytics
- api_request_log
- audit_log
- device_analytics
- revenue_daily_stat

—

### system.mmd

Platform configuration.

Tables include:

- system_setting
- feature_flag
- user_feature_flag
- application_version
- maintenance_window
- blocked_ip
- api_key
- background_job
- system_log

—

## Mermaid

All diagrams are written using Mermaid ER syntax.

They can be rendered in:

- GitHub
- GitLab
- VS Code
- Mermaid Live Editor
- Obsidian
- JetBrains IDEs

—

## Updating Diagrams

Whenever the schema changes:

1. Update the SQL schema.
2. Update the corresponding Mermaid diagram.
3. Update the global ER diagram.
4. Commit both changes together.

—

## Naming Convention

Each module owns its own diagram.

The global ERD references every table in the database.

—

## Status

Current database modules:

- Authentication
- Catalog
- Streaming
- Subscriptions
- Notifications
- Analytics
- System

This documentation should always match the SQL schema.