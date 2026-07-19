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
        profile_image,
        phone,
        birth_date,
        role_id,
        country_id,
        language_id,
        is_active,
        is_verified,
        created_at,
        updated_at,
        last_login_at
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
    phone?: string;
    birthDate?: string;
    profileImage?: string;
    countryId?: string;
    languageId?: string;
  }
) {
  const result = await pool.query(
    `
      UPDATE users
      SET
        first_name = COALESCE($2, first_name),
        last_name = COALESCE($3, last_name),
        phone = COALESCE($4, phone),
        birth_date = COALESCE($5, birth_date),
        profile_image = COALESCE($6, profile_image),
        country_id = COALESCE($7, country_id),
        language_id = COALESCE($8, language_id),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING
        id,
        username,
        email,
        first_name,
        last_name,
        profile_image,
        phone,
        birth_date,
        role_id,
        country_id,
        language_id,
        updated_at
    `,
    [
      userId,
      data.firstName ?? null,
      data.lastName ?? null,
      data.phone ?? null,
      data.birthDate ?? null,
      data.profileImage ?? null,
      data.countryId ?? null,
      data.languageId ?? null,
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
      SELECT password_hash
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
    user.password_hash
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
        password_hash = $2,
        password_changed_at = CURRENT_TIMESTAMP,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
    `,
    [userId, passwordHash]
  );

  return true;
}