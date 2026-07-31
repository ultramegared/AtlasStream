# AtlasStream Docker Shared

## Overview

This directory contains Docker resources shared across multiple environments.

Unlike the `development` and `production` directories, this location is intended for reusable assets that should not be duplicated.

—

## Purpose

Examples of shared resources include:

- Base Dockerfiles
- Common environment templates
- Shared shell scripts
- Docker Compose fragments
- Healthcheck scripts
- Common configuration files

—

## Directory Structure

```text
shared/
└── README.md
```

Additional files and directories should only be added when they are reused by two or more environments.

—

## Guidelines

Avoid duplicating Docker resources.

If a file is identical for development and production, move it here instead of maintaining two copies.

Examples:

```text
shared/
├── Dockerfile.node
├── Dockerfile.backend
├── healthcheck.sh
├── wait-for-db.sh
└── compose.common.yml
```

—

## Principles

Shared resources should be:

- Reusable
- Environment agnostic
- Well documented
- Version controlled
- Independent from application code

—

## License

Proprietary

Author: ultramegared

Project: AtlasStream