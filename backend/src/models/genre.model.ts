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
 * Modelo que representa un género de contenido.
 * ----------------------------------------------------------------
 */

import BaseModel from "./base.model";

export interface GenreData {
  id: number;
  name: string;
}

export default class Genre extends BaseModel {
  public id!: number;
  public name!: string;

  constructor(data: GenreData) {
    super(data);
  }
}