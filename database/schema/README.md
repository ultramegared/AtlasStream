# AtlasStream Database Schema

## Overview

This directory contains the logical organization of the AtlasStream database.

The schema is divided into domains instead of storing every table in a single SQL file.

Each domain represents an independent business capability.

—

## Directory Structure

```text
schema/
├── auth/
├── catalog/
├── streaming/
├── subscriptions/
├── analytics/
├── notifications/
├── shared/
├── system/
└── README.md
```

—

## Domain Responsibilities

### auth

Authentication and authorization.

Examples:

- Users
- Roles
- Permissions
- Sessions
- Refresh Tokens

—

### catalog

Streaming catalog.

Examples:

- Movies
- Series
- Seasons
- Episodes
- Genres
- Categories
- Languages

—

### streaming

Playback information.

Examples:

- Streams
- Video Sources
- Audio Tracks
- Subtitles
- Playback History
- Continue Watching

—

### subscriptions

Subscription management.

Examples:

- Plans
- Billing
- Payments
- Transactions
- Invoices

—

### analytics

Platform metrics.

Examples:

- Views
- Watch Time
- Device Statistics
- Popular Content

—

### notifications

User notifications.

Examples:

- Push Notifications
- Email Notifications
- System Messages

—

### shared

Reusable entities shared across multiple domains.

Examples:

- Countries
- Languages
- Time Zones

—

### system

Internal platform configuration.

Examples:

- Feature Flags
- Configuration
- Audit Logs
- Scheduled Jobs

—

## Design Principles

Each domain should:

- Have a single responsibility.
- Be loosely coupled.
- Minimize cross-domain dependencies.
- Be independently maintainable.

—

## Naming

Tables:

- singular
- snake_case

Columns:

- snake_case

Primary Keys:

- id

Foreign Keys:

- <table>_id

—

## Versioning

The schema describes the logical model.

Structural database changes must always be implemented through migrations.

The schema itself should never be considered executable.

—

## License

Proprietary

Author: ultramegared

Project: AtlasStream