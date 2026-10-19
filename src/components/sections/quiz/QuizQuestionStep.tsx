import { ArrowLeft, ChevronRight } from "lucide-react";
import type { QuizQuestion } from "@/content/quiz";

interface QuizQuestionStepProps {
  question: QuizQuestion;
  onAnswer: (optionIndex: number) => void;
  onBack?: () => void;
}

export function QuizQuestionStep({ question, onAnswer, onBack }: QuizQuestionStepProps) {
  return (
    <div>
      <h3 className="text-[1.375rem] leading-snug tracking-[-0.03em] sm:text-[1.625rem]">{question.question}</h3>
      <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {question.options.map((option, index) => (
          <button
            key={option.label}
            type="button"
            onClick={() => onAnswer(index)}
            className="group flex items-center justify-between gap-3 rounded-card border border-line bg-surface px-4.5 py-4 text-left text-[15px] font-medium transition-colors hover:border-accent hover:bg-accent-soft"
          >
            {option.label}
            <ChevronRight
              aria-hidden
              className="size-4 shrink-0 text-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent-text"
            />
          </button>
        ))}
      </div>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back
        </button>
      )}
    </div>
  );
}
