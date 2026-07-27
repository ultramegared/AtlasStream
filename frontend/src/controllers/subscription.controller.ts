/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: subscription.controller.ts
 * Module: Controllers
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Handles subscription-related operations by coordinating
 * frontend services and preparing data for the UI.
 * ----------------------------------------------------------------
 */

import {
  getSubscriptions,
  subscribe
} from "../services/subscription.service";

/**
 * Loads all available subscription plans.
 *
 * @returns List of subscription plans.
 */
export async function loadSubscriptions<T = unknown>(): Promise<T> {
  try {
    return await getSubscriptions<T>();
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unable to load subscriptions."
    );
  }
}

/**
 * Subscribes the authenticated user to a plan.
 *
 * @param planId Subscription plan identifier.
 * @returns Subscription response.
 */
export async function subscribeToPlan<T = unknown>(
  planId: string
): Promise<T> {
  try {
    return await subscribe<T>(planId);
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unable to subscribe."
    );
  }
}