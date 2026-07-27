/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: subscription.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides subscription-related services for retrieving
 * available subscription plans and subscribing the
 * authenticated user through the AtlasStream backend API.
 * ----------------------------------------------------------------
 */

import { apiFetch } from "./apiFetch.service";

/**
 * Retrieves all available subscription plans.
 *
 * @returns List of subscription plans.
 */
export async function getSubscriptions<T = unknown>(): Promise<T> {
  return apiFetch<T>("/subscriptions");
}

/**
 * Subscribes the authenticated user to a subscription plan.
 *
 * @param planId Subscription plan identifier.
 * @returns API response.
 */
export async function subscribe<T = unknown>(
  planId: string
): Promise<T> {
  return apiFetch<T>("/subscriptions", {
    method: "POST",
    body: JSON.stringify({
      planId,
    }),
  });
}