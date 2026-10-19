export interface QuizOption {
  label: string;
  scores: Partial<Record<string, number>>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const instrumentQuiz: QuizQuestion[] = [
  {
    id: "music",
    question: "What kind of music do you love most?",
    options: [
      { label: "Bollywood & pop songs", scores: { guitar: 2, vocal: 2, piano: 1 } },
      { label: "Bhajans & devotional", scores: { harmonium: 3, vocal: 2 } },
      { label: "Classical & raag", scores: { vocal: 2, harmonium: 2, piano: 1 } },
      { label: "Western & rock", scores: { guitar: 3, piano: 2 } },
    ],
  },
  {
    id: "style",
    question: "How do you want to make music?",
    options: [
      { label: "Sing with my own voice", scores: { vocal: 4 } },
      { label: "Strum and play along with friends", scores: { guitar: 4 } },
      { label: "Play melodies and chords on keys", scores: { piano: 3, harmonium: 1 } },
      { label: "Accompany singing and kirtan", scores: { harmonium: 4 } },
    ],
  },
  {
    id: "age",
    question: "Who is learning?",
    options: [
      { label: "A child (5–8 years)", scores: { piano: 2, vocal: 1 } },
      { label: "A child (9–14 years)", scores: { guitar: 1, piano: 1, vocal: 1 } },
      { label: "A teenager", scores: { guitar: 2, vocal: 1 } },
      { label: "An adult", scores: { harmonium: 1, vocal: 1, guitar: 1 } },
    ],
  },
];
