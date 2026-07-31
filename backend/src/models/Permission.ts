/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : Permission.ts
 * Path        : backend/src/models/Permission.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authorization domain models used by the
 *               authentication and access control module.
 * ------------------------------------------------------------
 */

/**
 * System permission.
 */
export interface Permission {
  id: string;
  name: string;
  code: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * System role.
 */
export interface Role {
  id: string;
  name: string;
  code: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Role-permission relationship.
 */
export interface RolePermission {
  roleId: string;
  permissionId: string;
  createdAt: Date;
}

/**
 * User-role relationship.
 */
export interface UserRole {
  userId: string;
  roleId: string;
  assignedAt: Date;
  assignedBy: string | null;
}

/**
 * Permission assigned to the authenticated user.
 */
export interface AuthPermission {
  code: string;
  granted: boolean;
}

/**
 * Role assigned to the authenticated user.
 */
export interface AuthRole {
  id: string;
  name: string;
  code: string;
  permissions: AuthPermission[];
}

/**
 * Authorization context.
 */
export interface AuthorizationContext {
  userId: string;
  roles: AuthRole[];
  permissions: AuthPermission[];
}