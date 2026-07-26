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
 * Modelo base para todas las entidades de AtlasStream.
 * ----------------------------------------------------------------
 */

export default abstract class BaseModel {
  protected constructor(
    data: Record<string, unknown> = {}
  ) {
    Object.assign(this, data);
  }
}