# AtlasStream Database Seeds

## Overview

This directory contains the initial data required by AtlasStream after the database schema has been created.

Unlike migrations, seeds populate the database with default or reference data.

—

## Objectives

Seeds are used to create:

- Default roles
- Default permissions
- Countries
- Languages
- Genres
- Categories
- Age ratings
- Subscription plans
- Feature flags
- Initial system configuration

—

## Rules

- Seeds must be idempotent whenever possible.
- Running the same seed multiple times should not create duplicates.
- Seeds must never remove production data.
- Use UPSERT (`INSERT ... ON CONFLICT`) whenever appropriate.

—

## Folder Structure

```
seeds/
│
├── README.md
├── 001_roles.sql
├── 002_permissions.sql
├── 003_countries.sql
├── 004_languages.sql
├── 005_genres.sql
├── 006_categories.sql
├── 007_age_ratings.sql
├── 008_subscription_plans.sql
├── 009_feature_flags.sql
├── 010_system_settings.sql
└── seed_all.sql
```

—

## Execution Order

Execute the files in the following order:

```
001_roles.sql
002_permissions.sql
003_countries.sql
004_languages.sql
005_genres.sql
006_categories.sql
007_age_ratings.sql
008_subscription_plans.sql
009_feature_flags.sql
010_system_settings.sql
```

or simply execute:

```
seed_all.sql
```

—

## Best Practices

- Keep each seed focused on one domain.
- Never combine unrelated data.
- Use transactions.
- Keep files deterministic.
- Store only application defaults.
- Do not insert user-generated data.

—

## Production

Seeds should be executed only:

- During first deployment.
- During local development.
- During automated testing.

Production user data must never be seeded.

—

## Version Control

Every new seed file must be committed to Git.

Example:

```
001_roles.sql
002_permissions.sql
003_countries.sql
011_new_permissions.sql
012_new_genres.sql
```

Existing seed files should not be modified after deployment unless absolutely necessary.