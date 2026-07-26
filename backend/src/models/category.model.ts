/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Modelo que representa una categoría de contenido.
 * ----------------------------------------------------------------
 */

export interface Category {
  id?: string;
  name: string;
  image?: string;
  createdAt?: Date;
}