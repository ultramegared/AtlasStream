/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: index.ts
 * Path: backend/src/validators/movies/index.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Centralized exports for movie validation schemas.
 * ----------------------------------------------------------------
 */

export { default as movieIdSchema } from "./movie-id.validator";
export { default as movieSlugSchema } from "./movie-slug.validator";
export { default as movieListSchema } from "./movie-list.validator";