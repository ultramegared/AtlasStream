import content from "../data/content.json";

export interface ContentItem {
  id: number;
  type: "movie" | "series";
  title?: string;
  description?: string;
  poster?: string;
  banner?: string;
  year?: number;
  genre?: string;
  rating?: number;
  duration?: number;
  episodes?: number;
  [key: string]: any;
}

class ContentRepository {
  async getHome(): Promise<{
    trending: ContentItem[];
    movies: ContentItem[];
    series: ContentItem[];
  }> {
    return {
      trending: content.slice(0, 2) as ContentItem[],
      movies: (content as ContentItem[]).filter(
        (item) => item.type === "movie"
      ),
      series: (content as ContentItem[]).filter(
        (item) => item.type === "series"
      ),
    };
  }

  async getById(id: number | string): Promise<ContentItem | null> {
    const item = (content as ContentItem[]).find(
      (item) => item.id === Number(id)
    );

    return item ?? null;
  }
}

export default new ContentRepository();