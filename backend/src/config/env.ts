/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: env.ts
 * Path: backend/src/config/env.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Environment variables validation and configuration.
 * ----------------------------------------------------------------
 */

import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
    NODE_ENV: z
        .enum([
            "development",
            "production",
            "test"
        ])
        .default("development"),

    PORT: z.coerce
        .number()
        .int()
        .positive()
        .default(3000),

    APP_NAME: z
        .string()
        .default("AtlasStream"),

    APP_VERSION: z
        .string()
        .default("1.0.0"),

    API_PREFIX: z
        .string()
        .default("/api"),

    DB_HOST: z.string(),

    DB_PORT: z.coerce
        .number()
        .default(5432),

    DB_NAME: z.string(),

    DB_USER: z.string(),

    DB_PASSWORD: z.string(),

    DB_SSL: z
        .string()
        .default("false")
        .transform(value => value === "true"),

    JWT_SECRET: z.string(),

    JWT_EXPIRES_IN: z
        .string()
        .default("7d"),

    JWT_REFRESH_SECRET: z.string(),

    JWT_REFRESH_EXPIRES_IN: z
        .string()
        .default("30d"),

    CORS_ORIGIN: z
        .string()
        .default("*"),

    LOG_LEVEL: z
        .string()
        .default("info"),

    BCRYPT_SALT_ROUNDS: z.coerce
        .number()
        .default(12)
});

export const env = envSchema.parse(process.env);

export default env;