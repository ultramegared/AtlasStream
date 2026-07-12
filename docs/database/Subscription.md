# Subscription

## Descripción

Representa el plan contratado por un User.

Define las capacidades disponibles para la cuenta.

—

## Responsabilidades

- Administrar el plan contratado.
- Controlar la fecha de inicio y vencimiento.
- Definir la cantidad de perfiles permitidos.
- Definir la cantidad de dispositivos simultáneos.
- Definir la calidad máxima de reproducción.

—

## Campos

- id
- userId
- planId
- status
- startDate
- endDate
- autoRenew
- createdAt
- updatedAt

—

## Relaciones

Cada Subscription pertenece a un User.

Cada Subscription utiliza un SubscriptionPlan.

—

## Reglas de negocio

- Un User solo puede tener una Subscription activa.
- Una Subscription puede renovarse automáticamente.
- Si la Subscription vence, la cuenta pierde los beneficios del plan.