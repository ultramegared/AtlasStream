export interface GenreData {
  id: number;
  name: string;
}

export default class Genre {
  id: number;
  name: string;

  constructor(data: GenreData) {
    this.id = data.id;
    this.name = data.name;
  }
}