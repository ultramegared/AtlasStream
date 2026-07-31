/**
 * ------------------------------------------------------------------
 * Project     : AtlasStream
 * File        : auth.repository.ts
 * Path        : backend/src/repositories/auth.repository.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Repository responsible for authentication data
 *               persistence.
 * ------------------------------------------------------------------
 */

import { PoolClient } from "pg";

import { db } from "../database";
import type {
  AuthUser,
  RegisterRequest,
  UserCredentials,
} from "../models/Auth";

export class AuthRepository {
  /**
   * Finds a user by identifier.
   */
  async findUserById(
    id: string,
    client?: PoolClient,
  ): Promise<AuthUser | null> {
    throw new Error("Method not implemented.");
  }

  /**
   * Finds a user by email.
   */
  async findUserByEmail(
    email: string,
    client?: PoolClient,
  ): Promise<AuthUser | null> {
    throw new Error("Method not implemented.");
  }

  /**
   * Finds a user by username.
   */
  async findUserByUsername(
    username: string,
    client?: PoolClient,
  ): Promise<AuthUser | null> {
    throw new Error("Method not implemented.");
  }

  /**
   * Returns user credentials.
   */
  async getUserCredentials(
    userId: string,
    client?: PoolClient,
  ): Promise<UserCredentials | null> {
    throw new Error("Method not implemented.");
  }

  /**
   * Creates a new user.
   */
  async createUser(
    payload: RegisterRequest,
    passwordHash: string,
    client?: PoolClient,
  ): Promise<AuthUser> {
    throw new Error("Method not implemented.");
  }

  /**
   * Updates user's last login.
   */
  async updateLastLogin(
    userId: string,
    client?: PoolClient,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  /**
   * Checks if an email already exists.
   */
  async emailExists(
    email: string,
    client?: PoolClient,
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  /**
   * Checks if a username already exists.
   */
  async usernameExists(
    username: string,
    client?: PoolClient,
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export const authRepository = new AuthRepository();