/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: subscription.model.ts
 * Module: Models
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the Subscription model used
 * throughout the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Represents a subscription plan.
 */
export interface Subscription {
  /**
   * Unique subscription identifier.
   */
  id: string;

  /**
   * Subscription name.
   */
  name: string;

  /**
   * Subscription description.
   */
  description?: string;

  /**
   * Subscription price.
   */
  price: number;

  /**
   * ISO 4217 currency code.
   * Example: USD, EUR, MXN.
   */
  currency: string;

  /**
   * Billing period.
   */
  billingCycle?: "monthly" | "yearly";

  /**
   * Indicates whether the subscription
   * is currently active.
   */
  active: boolean;

  /**
   * Indicates whether the subscription
   * includes premium access.
   */
  premium?: boolean;

  /**
   * Subscription expiration date.
   */
  expiresAt?: string;

  /**
   * Creation date.
   */
  createdAt?: string;

  /**
   * Last update date.
   */
  updatedAt?: string;
}