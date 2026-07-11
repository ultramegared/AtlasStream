# AtlasStream API Design

## Authentication

POST   /api/auth/register

POST   /api/auth/login

POST   /api/auth/logout

GET    /api/auth/me

—

## Users

GET    /api/users/profile

PUT    /api/users/profile

—

## Content

GET    /api/content

GET    /api/content/:id

GET    /api/content/search

GET    /api/content/category/:category

GET    /api/content/type/:type

—

## Favorites

GET    /api/favorites

POST   /api/favorites

DELETE /api/favorites/:id

—

## Continue Watching

GET    /api/continue

POST   /api/continue

—

## History

GET    /api/history

—

## Subscription

GET    /api/subscription

POST   /api/subscription