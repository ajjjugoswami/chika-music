import type { Course } from "@/types/course";

export const courses: Course[] = [
  {
    slug: "guitar",
    name: "Guitar",
    category: "instruments",
    tagline: "From your first chord to songs you love to play.",
    description:
      "Learn acoustic and electric guitar with a clear, song-first approach. We build strong fundamentals — posture, chords, strumming and picking — and quickly put them to work on Bollywood, pop and Western tracks you actually want to play.",
    minAge: 7,
    modes: ["studio", "online"],
    styles: ["Acoustic", "Electric", "Bollywood", "Western pop", "Fingerstyle"],
    forWho: [
      "Complete beginners who have never held a guitar",
      "Self-taught players who want proper technique",
      "Students who want to accompany their own singing",
    ],
    formats: ["One-to-one classes", "Small batches", "Weekday and weekend slots"],
    levels: [
      {
        level: "beginner",
        summary: "Hold, tune and play with confidence.",
        outcomes: ["Open chords and smooth changes", "Basic strumming patterns", "Your first five complete songs"],
      },
      {
        level: "intermediate",
        summary: "Sound fuller and play more freely.",
        outcomes: ["Barre chords and power chords", "Fingerpicking and arpeggios", "Rhythm, timing and playing along with tracks"],
      },
      {
        level: "advanced",
        summary: "Lead, improvise and perform.",
        outcomes: ["Scales, lead lines and solos", "Song arrangement and covers", "Stage and recording readiness"],
      },
    ],
    faqs: [
      {
        question: "Acoustic or electric — which should I start with?",
        answer:
          "Most students begin on acoustic because it builds finger strength and suits singing along. If you mainly love rock or lead playing, electric is a great start too. We'll help you choose in the trial class.",
      },
      {
        question: "Do I need my own guitar?",
        answer:
          "You can use an academy guitar in class. For daily practice at home you'll want your own — we're happy to suggest a good beginner instrument for your budget.",
      },
    ],
    motif: "strings",
    tone: "walnut",
  },
  {
    slug: "piano",
    name: "Piano",
    category: "instruments",
    tagline: "Read, play and understand music at the keys.",
    description:
      "Piano is the best way to understand how music works. Lessons combine technique, reading notation and playing by ear, with repertoire ranging from Western classical to Bollywood melodies on piano and keyboard.",
    minAge: 5,
    modes: ["studio", "online"],
    styles: ["Western classical", "Keyboard", "Bollywood", "Pop", "Music theory"],
    forWho: [
      "Young children starting their musical journey",
      "Adults who always wanted to learn piano",
      "Keyboard players ready for proper technique",
    ],
    formats: ["One-to-one classes", "Small batches", "Weekday and weekend slots"],
    levels: [
      {
        level: "beginner",
        summary: "Find your way around the keyboard.",
        outcomes: ["Hand position and finger numbers", "Reading simple notation", "Melodies with both hands"],
      },
      {
        level: "intermediate",
        summary: "Play with expression and independence.",
        outcomes: ["Scales, chords and inversions", "Hand independence and dynamics", "Classical and film pieces"],
      },
      {
        level: "advanced",
        summary: "Interpret, arrange and perform.",
        outcomes: ["Advanced repertoire", "Accompaniment and arranging", "Performance and exam preparation"],
      },
    ],
    faqs: [
      {
        question: "What is the right age to start piano?",
        answer:
          "Children can start from around five, once they can sit and focus for a short lesson. There's no upper limit — many of our students start as adults.",
      },
      {
        question: "Can I practise on a keyboard at home?",
        answer:
          "Yes. A 61-key keyboard is fine for beginners. As you progress, a weighted 88-key digital piano helps build proper technique.",
      },
    ],
    motif: "keys",
    tone: "stage",
  },
  {
    slug: "harmonium",
    name: "Harmonium",
    category: "instruments",
    tagline: "The heart of Indian classical and devotional music.",
    description:
      "Learn harmonium the traditional way — sargam, alankars and raag basics — while building the skills to accompany bhajans, ghazals and classical vocals. A perfect companion to vocal training.",
    minAge: 7,
    modes: ["studio"],
    styles: ["Hindustani classical", "Bhajan", "Ghazal", "Devotional", "Accompaniment"],
    forWho: [
      "Vocal students who want to accompany themselves",
      "Devotional singers and kirtan groups",
      "Anyone drawn to Indian classical music",
    ],
    formats: ["One-to-one classes", "Small batches", "Weekday and weekend slots"],
    levels: [
      {
        level: "beginner",
        summary: "Bellows, sargam and steady sur.",
        outcomes: ["Bellow control and posture", "Sargam and basic alankars", "Simple bhajans"],
      },
      {
        level: "intermediate",
        summary: "Raag foundations and taal.",
        outcomes: ["Introductory raags", "Playing in taal with a tabla track", "Accompanying a singer"],
      },
      {
        level: "advanced",
        summary: "Expressive, confident accompaniment.",
        outcomes: ["Ornamentation and meend", "Ghazal and semi-classical repertoire", "Live accompaniment"],
      },
    ],
    faqs: [
      {
        question: "Should I learn harmonium along with vocals?",
        answer:
          "It's an ideal pairing. Harmonium trains your ear to stay in sur, and you'll be able to accompany your own singing. Many students take both.",
      },
      {
        question: "Do I need to know music already?",
        answer: "Not at all. We start from sargam and build up step by step.",
      },
    ],
    motif: "reeds",
    tone: "rosewood",
  },
  {
    slug: "vocal",
    name: "Vocal",
    category: "vocals",
    tagline: "Find your voice — in tune, in time, with feeling.",
    description:
      "Vocal training grounded in Hindustani classical technique — riyaz, sur and taal — applied to the music you love, from light classical and devotional to Bollywood. Every lesson is tailored to your voice and range.",
    minAge: 6,
    modes: ["studio", "online"],
    styles: ["Hindustani classical", "Light classical", "Bollywood", "Devotional", "Ghazal"],
    forWho: [
      "Children who love to sing",
      "Adults who want to sing in tune with confidence",
      "Singers preparing for stage, competitions or recordings",
    ],
    formats: ["One-to-one classes", "Small batches", "Weekday and weekend slots"],
    levels: [
      {
        level: "beginner",
        summary: "Breath, sur and a steady voice.",
        outcomes: ["Breathing and voice warm-ups", "Sargam and pitch accuracy", "Simple songs in tune"],
      },
      {
        level: "intermediate",
        summary: "Range, control and raag basics.",
        outcomes: ["Alankars and range building", "Introductory raags and taal", "Expression in film and light songs"],
      },
      {
        level: "advanced",
        summary: "Your own style, ready to perform.",
        outcomes: ["Murki, meend and taan", "Classical and semi-classical repertoire", "Stage presence and mic technique"],
      },
    ],
    faqs: [
      {
        question: "I can't sing in tune. Can I still learn?",
        answer:
          "Yes. Pitch is a skill, not a gift. With regular riyaz and guided ear training, almost every student improves noticeably within a few months.",
      },
      {
        question: "Will I only learn classical songs?",
        answer:
          "Classical technique is the foundation, but you'll apply it to the songs you love — Bollywood, devotional, ghazal and more.",
      },
    ],
    motif: "wave",
    tone: "midnight",
  },
];
