# AtlasStream Database Backups

## Overview

This directory stores database backup files and backup-related documentation for AtlasStream.

Backups are intended for disaster recovery, migration, testing, and environment restoration.

—

## Objectives

- Protect production data.
- Support disaster recovery.
- Enable environment replication.
- Preserve historical snapshots.
- Simplify database restoration.

—

## Directory Structure

```text
backups/

README.md

development/

staging/

production/
```

—

## Environment Layout

### development/

Local development backups.

Examples:

```text
development/

atlasstream-dev-2026-07-30.sql

atlasstream-dev-2026-08-15.sql
```

—

### staging/

Pre-production backups.

Examples:

```text
staging/

atlasstream-stage-2026-08-01.sql
```

—

### production/

Production backups.

Examples:

```text
production/

atlasstream-prod-2026-08-01.sql.gz

atlasstream-prod-2026-08-08.sql.gz
```

—

## Naming Convention

```
atlasstream-<environment>-YYYY-MM-DD.sql
```

Compressed backups:

```
atlasstream-<environment>-YYYY-MM-DD.sql.gz
```

Examples:

```
atlasstream-dev-2026-08-10.sql

atlasstream-stage-2026-08-10.sql

atlasstream-prod-2026-08-10.sql.gz
```

—

## Backup Commands

### Plain SQL

```bash
pg_dump \
  —format=plain \
  —clean \
  —if-exists \
  —no-owner \
  —no-privileges \
  atlasstream \
  > atlasstream-dev.sql
```

—

### Custom Format

```bash
pg_dump \
  —format=custom \
  atlasstream \
  > atlasstream.backup
```

—

## Restore Commands

### SQL

```bash
psql atlasstream < atlasstream-dev.sql
```

—

### Custom Backup

```bash
pg_restore \
  —clean \
  —if-exists \
  —dbname=atlasstream \
  atlasstream.backup
```

—

## Backup Policy

Development

- Manual backups.
- Before schema changes.
- Before destructive migrations.

Staging

- Before every deployment.
- Daily snapshots.

Production

- Daily backups.
- Weekly full backup.
- Retention according to operational policy.

—

## Security

Production backups should:

- Be encrypted at rest.
- Be stored securely.
- Have restricted access.
- Never be committed to Git.

—

## Git

Backup files must not be versioned.

Only this documentation should exist in the repository.

Actual backup files should be ignored using `.gitignore`.

—

## Status

Backup strategy documented.

Backup files are generated during deployment and maintenance operations, not stored in the source repository.