export interface Series {
  id: string;

  title: string;
  description: string;

  poster: string;
  backdrop: string;

  seasons: number;
  episodes: number;

  categoryId: string;

  rating: number;

  premium: boolean;

  createdAt?: string;
}