# Subscription Plan

## Descripción

Representa un plan disponible dentro de AtlasStream.

Define las características y límites que tendrá una suscripción.

—

## Responsabilidades

- Definir el nombre del plan.
- Definir el precio.
- Definir la cantidad de perfiles.
- Definir la cantidad de dispositivos simultáneos.
- Definir la calidad máxima.
- Definir si permite descargas.
- Definir si contiene publicidad.

—

## Campos

- id
- name
- price
- currency
- maxProfiles
- maxDevices
- maxQuality
- downloadsEnabled
- adsEnabled
- isActive
- createdAt
- updatedAt

—

## Relaciones

Un SubscriptionPlan puede ser utilizado por muchas Subscriptions.

—

## Reglas de negocio

- Un plan puede activarse o desactivarse.
- El precio puede cambiar sin afectar el historial de pagos.
- Las nuevas suscripciones utilizarán la configuración vigente del plan.