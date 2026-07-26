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
 * Servicio para el registro e inicio de sesión de usuarios.
 * ----------------------------------------------------------------
 */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import pool from "../config/database";
import { User } from "../models/user.model";

const SALT_ROUNDS = 10;

/**
 * ----------------------------------------------------------------
 * Register User
 * ----------------------------------------------------------------
 * Registra un nuevo usuario.
 * ----------------------------------------------------------------
 */
export async function registerUser(
  user: User
): Promise<User> {
  const usernameExists = await pool.query(
    "SELECT id FROM users WHERE username = $1",
    [user.username]
  );

  if (usernameExists.rows.length > 0) {
    throw new Error("El nombre de usuario ya existe.");
  }

  const emailExists = await pool.query(
    "SELECT id FROM users WHERE email = $1",
    [user.email]
  );

  if (emailExists.rows.length > 0) {
    throw new Error("El correo electrónico ya está registrado.");
  }

  const passwordHash = await bcrypt.hash(
    user.password,
    SALT_ROUNDS
  );

  const result = await pool.query(
    `
      INSERT INTO users (
        username,
        email,
        password,
        first_name,
        last_name,
        avatar
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING
        id,
        username,
        email,
        first_name,
        last_name,
        avatar,
        role,
        is_active,
        created_at,
        updated_at
    `,
    [
      user.username,
      user.email,
      passwordHash,
      user.firstName ?? null,
      user.lastName ?? null,
      user.avatar ?? null,
    ]
  );

  return result.rows[0];
}

/**
 * ----------------------------------------------------------------
 * Login User
 * ----------------------------------------------------------------
 * Inicia sesión de un usuario.
 * ----------------------------------------------------------------
 */
export async function loginUser(
  email: string,
  password: string
): Promise<{
  token: string;
  user: Omit<User, "password">;
}> {
  const result = await pool.query(
    `
      SELECT
        id,
        username,
        email,
        password,
        first_name,
        last_name,
        avatar,
        role,
        is_active,
        created_at,
        updated_at
      FROM users
      WHERE email = $1
        AND is_active = TRUE
    `,
    [email]
  );

  if (result.rows.length === 0) {
    throw new Error("Correo o contraseña incorrectos.");
  }

  const user = result.rows[0];

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Correo o contraseña incorrectos.");
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET no está configurado.");
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    secret,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      avatar: user.avatar,
      role: user.role,
      isActive: user.is_active,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    },
  };
}