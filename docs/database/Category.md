# Category

## Descripción

Representa una categoría utilizada para organizar y presentar contenidos dentro de AtlasStream.

Las categorías agrupan contenidos según la estrategia de la plataforma y mejoran la experiencia de navegación del usuario.

—

## Responsabilidades

- Organizar el catálogo.
- Mostrar colecciones de contenido.
- Facilitar la navegación.
- Permitir contenido destacado.
- Agrupar contenido según campañas o criterios específicos.

—

## Campos

- id
- name
- description
- image
- displayOrder
- isActive
- createdAt
- updatedAt

—

## Relaciones

Una Category puede contener muchos Content.

Un Content puede pertenecer a una o varias Categories.

—

## Reglas de negocio

- El nombre de la categoría debe ser único.
- Una categoría puede estar vacía.
- Solo las categorías activas se muestran a los usuarios.
- Las categorías pueden ordenarse mediante displayOrder.