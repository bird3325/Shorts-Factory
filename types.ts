
export interface TrendingVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  views: string;
  category: string;
  categoryIcon: React.ReactNode;
  originalLength: string;
}

export interface HighlightClip {
  id: number;
  timeRange: string;
  duration: number;
  score: number;
  description: string;
}

export enum Page {
    Home,
    Processing,
    Result,
}
