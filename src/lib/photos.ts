import photosData from "@/data/photos.json";

export interface Photo {
  id: string;
  filename: string;
  category: string;
  thumbPath: string;
  fullPath: string;
  width: number;
  height: number;
  aspectRatio: number;
}

export const CATEGORY_LABELS: Record<string, string> = {
  ecommerce: "Ecommerce",
  portraits: "Portraits",
  travel: "Travel",
};

export function getAllPhotos(): Photo[] {
  return photosData as Photo[];
}

export function getPhotosByCategory(category: string): Photo[] {
  return (photosData as Photo[]).filter((p) => p.category === category);
}

export function getPhotoCategories(): string[] {
  const cats = new Set((photosData as Photo[]).map((p) => p.category));
  return Array.from(cats);
}
