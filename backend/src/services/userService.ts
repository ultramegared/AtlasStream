import bcrypt from "bcrypt";
import pool from "../config/database";

const SALT_ROUNDS = 10;

export async function getProfile(userId: string) {
  const result = await pool.query(
    `
      SELECT
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
      FROM users
      WHERE id = $1
      LIMIT 1
    `,
    [userId]
  );

  if (result.rows.length === 0) {
    throw new Error("Usuario no encontrado.");
  }

  return result.rows[0];
}

export async function updateProfile(
  userId: string,
  data: {
    firstName?: string;
    lastName?: string;
    avatar?: string;
  }
) {
  const result = await pool.query(
    `
      UPDATE users
      SET
        first_name = COALESCE($2, first_name),
        last_name = COALESCE($3, last_name),
        avatar = COALESCE($4, avatar),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
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
      userId,
      data.firstName ?? null,
      data.lastName ?? null,
      data.avatar ?? null,
    ]
  );

  if (result.rows.length === 0) {
    throw new Error("Usuario no encontrado.");
  }

  return result.rows[0];
}

export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string
) {
  const result = await pool.query(
    `
      SELECT password
      FROM users
      WHERE id = $1
    `,
    [userId]
  );

  if (result.rows.length === 0) {
    throw new Error("Usuario no encontrado.");
  }

  const user = result.rows[0];

  const validPassword = await bcrypt.compare(
    currentPassword,
    user.password
  );

  if (!validPassword) {
    throw new Error("La contraseña actual es incorrecta.");
  }

  const passwordHash = await bcrypt.hash(
    newPassword,
    SALT_ROUNDS
  );

  await pool.query(
    `
      UPDATE users
      SET
        password = $2,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
    `,
    [userId, passwordHash]
  );

  return true;
}