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

export default class Content {
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

  constructor(data: ContentData) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.type = data.type;
    this.category = data.category;
    this.poster = data.poster;
    this.video = data.video;
    this.year = data.year;
    this.duration = data.duration;
    this.rating = data.rating;
    this.isPremium = data.isPremium;
  }
}