export interface Movie {
  id: string;

  title: string;
  description: string;

  poster: string;
  backdrop: string;

  trailer?: string;
  videoUrl: string;

  categoryId: string;

  duration: number;
  year: number;

  rating: number;

  featured: boolean;
  premium: boolean;

  createdAt?: string;
}