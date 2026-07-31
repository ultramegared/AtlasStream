# AtlasStream Docker Infrastructure

## Overview

This directory contains all Docker resources used by the AtlasStream platform.

Docker configurations are organized by environment to keep development and production isolated while allowing shared resources to be reused.

—

## Directory Structure

```text
docker/
├── development/
│   ├── docker-compose.yml
│   ├── .env.example
│   └── README.md
│
├── production/
│   ├── docker-compose.yml
│   ├── .env.example
│   └── README.md
│
├── shared/
│   └── README.md
│
├── .dockerignore
└── README.md
```

—

## Environments

### Development

Contains everything required for local development.

Current services include:

- PostgreSQL
- Redis

Additional services will be added as the platform evolves.

—

### Production

Contains the production deployment configuration.

Production emphasizes:

- Security
- Isolation
- Environment variables
- Persistent storage
- Reproducible deployments

—

### Shared

Contains Docker resources shared between environments.

Examples:

- Base Dockerfiles
- Shared scripts
- Healthcheck scripts
- Compose fragments

Only place files here when they are reused by multiple environments.

—

## Philosophy

AtlasStream follows these Docker principles:

- Environment isolation
- Infrastructure as Code
- Minimal duplication
- Immutable deployments
- Security by default
- Reproducible environments

—

## Development Workflow

1. Copy the environment template.

```bash
cp .env.example .env
```

2. Start the infrastructure.

```bash
docker compose up -d
```

3. Verify the running services.

```bash
docker compose ps
```

4. Stop the environment.

```bash
docker compose down
```

—

## Production Workflow

1. Create the production environment.

2. Configure secrets.

3. Pull the latest images.

```bash
docker compose pull
```

4. Deploy.

```bash
docker compose up -d
```

—

## Current Services

| Service | Development | Production |
|-———|:————:|:-———:|
| PostgreSQL | ✅ | ✅ |
| Redis | ✅ | ✅ |
| Backend API | ⏳ | ⏳ |
| Reverse Proxy | ⏳ | ⏳ |
| Monitoring | ⏳ | ⏳ |

—

## Future Roadmap

Future Docker resources may include:

- Backend container
- Frontend container
- NGINX
- MinIO
- Prometheus
- Grafana
- Loki
- Tempo
- Object Storage

These components will be incorporated only when they become necessary.

—

## License

Proprietary

Author: ultramegared

Project: AtlasStream