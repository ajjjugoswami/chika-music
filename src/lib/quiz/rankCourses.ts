import { instrumentQuiz } from "@/content/quiz";
import { getAllCourses } from "@/lib/data/courses";
import type { Course } from "@/types/course";

export function rankCourses(answers: number[]): Course[] {
  const totals = new Map<string, number>();

  answers.forEach((optionIndex, questionIndex) => {
    const option = instrumentQuiz[questionIndex]?.options[optionIndex];
    Object.entries(option?.scores ?? {}).forEach(([slug, score]) => {
      totals.set(slug, (totals.get(slug) ?? 0) + (score ?? 0));
    });
  });

  return [...getAllCourses()].sort((a, b) => (totals.get(b.slug) ?? 0) - (totals.get(a.slug) ?? 0));
}
