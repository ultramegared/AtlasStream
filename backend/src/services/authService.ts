import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/database";
import { User } from "../models/User";

const SALT_ROUNDS = 10;

export async function registerUser(user: User) {
  // Verificar username
  const usernameExists = await pool.query(
    "SELECT id FROM users WHERE username = $1",
    [user.username]
  );

  if (usernameExists.rows.length > 0) {
    throw new Error("El nombre de usuario ya existe.");
  }

  // Verificar email
  const emailExists = await pool.query(
    "SELECT id FROM users WHERE email = $1",
    [user.email]
  );

  if (emailExists.rows.length > 0) {
    throw new Error("El correo electrónico ya está registrado.");
  }

  // Encriptar contraseña
  const passwordHash = await bcrypt.hash(user.password, SALT_ROUNDS);

  // Guardar usuario
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

export async function loginUser(
  email: string,
  password: string
) {
  const result = await pool.query(
    `
      SELECT *
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