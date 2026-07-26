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
 * Modelo que representa un plan de suscripción.
 * ----------------------------------------------------------------
 */

export interface Subscription {
  id?: string;
  name: string;
  price: number;
  currency: string;
  active: boolean;
  expiresAt?: Date;
}