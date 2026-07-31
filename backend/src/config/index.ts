/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: index.ts
 * Path: backend/src/config/index.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Centralized configuration exports.
 * ----------------------------------------------------------------
 */

export { default as env } from "./env";
export { default as logger } from "./logger";
export { default as pool } from "./database";

export { testDatabaseConnection } from "./database";