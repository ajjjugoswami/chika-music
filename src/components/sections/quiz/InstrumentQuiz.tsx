"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { instrumentQuiz } from "@/content/quiz";
import { CUBIC } from "@/lib/motion/tokens";
import { rankCourses } from "@/lib/quiz/rankCourses";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestionStep } from "./QuizQuestionStep";
import { QuizResult } from "./QuizResult";

export function InstrumentQuiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const step = answers.length;
  const done = step >= instrumentQuiz.length;

  return (
    <div className="rounded-panel border border-line bg-card p-5 shadow-card sm:p-8">
      <QuizProgress current={Math.min(step, instrumentQuiz.length)} total={instrumentQuiz.length} />
      <AnimatePresence mode="wait">
        <motion.div
          key={done ? "result" : step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.35, ease: CUBIC.outExpo }}
          className="mt-6"
        >
          {done ? (
            <QuizResult course={rankCourses(answers)[0]} onRestart={() => setAnswers([])} />
          ) : (
            <QuizQuestionStep
              question={instrumentQuiz[step]}
              onAnswer={(index) => setAnswers((current) => [...current, index])}
              onBack={step > 0 ? () => setAnswers((current) => current.slice(0, -1)) : undefined}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
