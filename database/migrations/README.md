# AtlasStream Database Migrations

## Overview

This directory contains every database migration executed against the AtlasStream PostgreSQL database.

The goal is to provide a deterministic, version-controlled, reproducible database evolution.

—

## Principles

- Never modify an existing migration after it has been executed.
- Every schema change requires a new migration.
- Migrations are immutable.
- Migrations are executed sequentially.
- Rollbacks should be created as new migrations whenever possible.
- Production databases must always be migrated using versioned migration files.

—

## Naming Convention

```
0001_initial_schema.sql
0002_add_profiles.sql
0003_add_indexes.sql
0004_add_notifications.sql
...
```

Migration numbers are always incremental.

—

## Migration Structure

Each migration should follow this template:

```sql
BEGIN;

— migration SQL

COMMIT;
```

—

## Recommended Workflow

1. Create a new migration.
2. Review locally.
3. Execute on development.
4. Execute on staging.
5. Execute on production.

Never skip environments.

—

## Best Practices

- Use transactions whenever possible.
- Keep migrations focused.
- Avoid mixing unrelated changes.
- Test every migration before production.
- Never delete historical migrations.

—

## Folder Structure

```
migrations/
│
├── README.md
├── 0001_initial_schema.sql
├── 0002_xxxxx.sql
├── 0003_xxxxx.sql
└── ...
```

—

## Current Migration Plan

```
0001_initial_schema.sql
```

This migration will execute:

- 00_extensions.sql
- 01_auth.sql
- 02_catalog.sql
- 03_streaming.sql
- 04_subscriptions.sql
- 05_notifications.sql
- 06_analytics.sql
- 07_system.sql
- 99_indexes.sql

—

## Versioning

Database versions should always match the Git repository history.

Example:

```
Git Commit
↓

Migration
↓

Database Version
```

This ensures full traceability of every schema modification.