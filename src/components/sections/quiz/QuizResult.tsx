import { RotateCcw, Sparkles } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getImage } from "@/lib/data/images";
import type { Course } from "@/types/course";

interface QuizResultProps {
  course: Course;
  onRestart: () => void;
}

export function QuizResult({ course, onRestart }: QuizResultProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-[11rem_1fr] sm:items-center">
      <div className="relative aspect-4/3 overflow-hidden rounded-card bg-surface sm:aspect-square">
        <AppImage image={getImage(course.heroImageId)} sizes="200px" />
      </div>
      <div>
        <p className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-text">
          <Sparkles className="size-4" aria-hidden />
          Your best match
        </p>
        <h3 className="mt-2 text-[1.75rem] leading-tight tracking-[-0.03em]">{course.name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{course.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <ButtonLink href={`/book-trial?course=${course.slug}`} size="md">
            Book a {course.name.toLowerCase()} trial
          </ButtonLink>
          <ButtonLink href={`/courses/${course.slug}`} variant="outline" size="md">
            View course
          </ButtonLink>
        </div>
        <button
          type="button"
          onClick={onRestart}
          className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted hover:text-ink"
        >
          <RotateCcw className="size-3.5" aria-hidden />
          Retake quiz
        </button>
      </div>
    </div>
  );
}
