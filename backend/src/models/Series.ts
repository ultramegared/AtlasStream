export interface Series {
  id?: string;
  title: string;
  description: string;
  poster: string;
  backdrop: string;
  seasons: number;
  episodes: number;
  category: string;
  rating: number;
  premium: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}