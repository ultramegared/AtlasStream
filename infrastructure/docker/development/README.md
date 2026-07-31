# AtlasStream Docker Development

This directory contains the Docker configuration used for the local development environment.

## Requirements

Before starting, make sure you have installed:

- Docker Desktop (Windows/macOS)
- Docker Engine + Docker Compose (Linux)

Verify your installation:

```bash
docker —version
docker compose version
```

—

## Setup

Copy the example environment file:

```bash
cp .env.example .env
```

—

## Start Services

```bash
docker compose up -d
```

—

## Stop Services

```bash
docker compose down
```

—

## Stop and Remove Volumes

```bash
docker compose down -v
```

—

## View Running Containers

```bash
docker compose ps
```

—

## View Logs

All services:

```bash
docker compose logs -f
```

Specific service:

```bash
docker compose logs -f postgres
```

```bash
docker compose logs -f redis
```

—

## Restart Services

```bash
docker compose restart
```

—

## Current Services

| Service | Description | Port |
|-———|-————|——:|
| PostgreSQL | Main relational database | 5432 |
| Redis | Cache and session storage | 6379 |

—

## Environment Variables

Configuration is stored in:

```text
.env
```

Use:

```text
.env.example
```

as the template for creating your local environment.

—

## Notes

- Do not commit `.env`.
- Do not modify `docker-compose.yml` for local machine settings.
- Keep secrets outside version control.
- Use Docker volumes to preserve local data.

—

## License

Proprietary

Author: ultramegared

Project: AtlasStream