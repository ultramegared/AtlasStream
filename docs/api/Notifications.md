# Notifications API

## Descripción

Este módulo administra las notificaciones del usuario.

—

## Endpoints

### GET /notifications

Obtiene todas las notificaciones del perfil.

—

### PATCH /notifications/:id/read

Marcar una notificación como leída.

—

### DELETE /notifications/:id

Eliminar una notificación.

—

### DELETE /notifications

Eliminar todas las notificaciones.

—

## Tipos

- Nuevo contenido
- Nueva temporada
- Recomendaciones
- Cambios de suscripción
- Promociones
- Seguridad de la cuenta

—

## Reglas

- Las notificaciones pertenecen al usuario.
- Pueden sincronizarse entre todos los dispositivos.