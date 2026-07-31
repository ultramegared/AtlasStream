/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : AuthDevice.ts
 * Path        : backend/src/models/AuthDevice.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication device domain models and
 *               contracts used by the Auth module.
 * ------------------------------------------------------------
 */

/**
 * Supported device types.
 */
export enum DeviceType {
  TV = "TV",
  MOBILE = "MOBILE",
  WEB = "WEB",
  DESKTOP = "DESKTOP",
  UNKNOWN = "UNKNOWN",
}

/**
 * Device trust status.
 */
export enum DeviceTrustStatus {
  TRUSTED = "TRUSTED",
  UNTRUSTED = "UNTRUSTED",
  BLOCKED = "BLOCKED",
}

/**
 * Registered authentication device.
 */
export interface AuthDevice {
  id: string;
  userId: string;
  deviceId: string;
  deviceName: string;
  deviceType: DeviceType;
  operatingSystem: string;
  operatingSystemVersion: string | null;
  applicationVersion: string | null;
  language: string | null;
  timezone: string | null;
  ipAddress: string;
  userAgent: string;
  trustStatus: DeviceTrustStatus;
  lastLoginAt: Date;
  lastSeenAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Device registration request.
 */
export interface RegisterDeviceRequest {
  userId: string;
  deviceId: string;
  deviceName: string;
  deviceType: DeviceType;
  operatingSystem: string;
  operatingSystemVersion?: string | null;
  applicationVersion?: string | null;
  language?: string | null;
  timezone?: string | null;
  ipAddress: string;
  userAgent: string;
}

/**
 * Device update request.
 */
export interface UpdateDeviceRequest {
  deviceName?: string;
  applicationVersion?: string | null;
  language?: string | null;
  timezone?: string | null;
  ipAddress?: string;
  userAgent?: string;
  lastSeenAt?: Date;
  trustStatus?: DeviceTrustStatus;
}

/**
 * Device summary.
 */
export interface AuthDeviceSummary {
  id: string;
  deviceName: string;
  deviceType: DeviceType;
  operatingSystem: string;
  lastSeenAt: Date;
  trustStatus: DeviceTrustStatus;
}