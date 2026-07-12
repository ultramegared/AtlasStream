# AtlasStream Backend Architecture

## Arquitectura

AtlasStream utiliza una arquitectura por capas para mantener el proyecto organizado, escalable y fácil de mantener.

—

## Estructura

backend/

src/

config/

controllers/

middleware/

models/

routes/

services/

utils/

server.ts

—

## Flujo

Cliente

↓

Routes

↓

Controllers

↓

Services

↓

Models

↓

PostgreSQL

—

## Responsabilidades

Routes

Reciben las peticiones HTTP.

Controllers

Validan la petición y llaman a los servicios.

Services

Contienen la lógica de negocio.

Models

Acceden a la base de datos.

Config

Configuración del sistema.

Middleware

Autenticación, autorización y validaciones.

Utils

Funciones reutilizables.

—

## Objetivos

Separación de responsabilidades.

Escalabilidad.

Mantenibilidad.

Código reutilizable.

Facilidad para realizar pruebas.