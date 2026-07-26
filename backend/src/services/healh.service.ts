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
 * Servicio para obtener el estado de la API.
 * ----------------------------------------------------------------
 */

export interface HealthStatus {
  name: string;
  version: string;
  status: "running";
  timestamp: Date;
  language: string;
  author: string;
}

class HealthService {
  /**
   * Obtiene el estado actual de la API.
   *
   * @returns Estado del servidor.
   */
  public getStatus(): HealthStatus {
    return {
      name: "AtlasStream API",
      version: "1.0.0",
      status: "running",
      timestamp: new Date(),
      language: "es",
      author: "ultramegared",
    };
  }
}

const healthService = new HealthService();

export default healthService;