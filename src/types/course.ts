import type { Faq } from "./site";

export type CourseCategory = "instruments" | "vocals";
export type Level = "beginner" | "intermediate" | "advanced";
export type ClassMode = "studio" | "online";

export interface CourseLevel {
  level: Level;
  summary: string;
  outcomes: string[];
}

export interface Course {
  slug: string;
  name: string;
  category: CourseCategory;
  tagline: string;
  description: string;
  minAge: number;
  modes: ClassMode[];
  styles: string[];
  levels: CourseLevel[];
  forWho: string[];
  formats: string[];
  faqs: Faq[];
  heroImageId: string;
  galleryImageIds: string[];
}
