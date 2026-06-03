export interface ModuleData {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  features: string[];
  featuresEn?: string[];
  icon: string;
  isFavorite?: boolean;
  rating?: number;
  userRating?: number;
  status?: string;
  statusEn?: string;
  duration?: string;
  progress?: number;
  tags?: string[];
  tagsEn?: string[];
}

export interface ModuleRatingData {
  moduleId: string;
  rating: number;
  count: number;
}

export interface UserInteraction {
  moduleId: string;
  action: "view" | "favorite" | "rate" | "share";
  timestamp: number;
  data?: any;
}
