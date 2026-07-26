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
 * Modelo que representa el contenido multimedia.
 * ----------------------------------------------------------------
 */

import BaseModel from "./base.model";

export interface ContentData {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  poster: string;
  video: string;
  year: number;
  duration: number;
  rating: number;
  isPremium: boolean;
}

export default class Content extends BaseModel {
  public id!: number;
  public title!: string;
  public description!: string;
  public type!: string;
  public category!: string;
  public poster!: string;
  public video!: string;
  public year!: number;
  public duration!: number;
  public rating!: number;
  public isPremium!: boolean;

  constructor(data: ContentData) {
    super(data);
  }
}