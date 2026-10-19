# Future Music Academy — Project Guide & Plan

A professional website for **Future Music Academy**, Model Town, Rohtak (Haryana), run by **Chika Gochwal**. The academy teaches **Guitar, Vocal, Piano and Harmonium** to children and adults. Admissions are open.
The site must feel like a modern conservatory crafted by a design studio — confident typography, real photography of students and instruments, restrained motion. Never an AI template.

Primary goal: turn visitors into **free trial class bookings** (form or WhatsApp). Secondary: build trust (faculty, results, student performances) and rank locally for "music classes near me" searches.

---

## 1. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (latest stable, App Router, Turbopack) | Server Components by default; `"use client"` only for interaction/motion |
| Language | TypeScript (strict) | No `any`; shared types live in `src/types` |
| React | React 19 (latest) | Use Server Actions for form submission where a backend is needed |
| Styling | Tailwind CSS v4 + CSS Modules | Tailwind for layout/spacing/tokens; CSS Modules for bespoke pieces (masks, keyframes, waveform visuals) |
| Motion | Motion (`motion/react`) | Fade-up reveals, hover states, tab indicators. No scroll-jacking |
| Theme | `next-themes` | Light + dark |
| Fonts | `next/font` | No layout shift |
| Images | `next/image`, local AVIF/WebP | Blur placeholders, explicit sizes |
| Icons | `lucide-react` (UI), `react-icons` (brand logos only) | No emoji icons |
| Forms | React Hook Form + Zod (`@hookform/resolvers`) | Trial-class booking, enquiry |
| Utils | `clsx` + `tailwind-merge` via `cn()` | |
| Lint/Format | ESLint (`eslint-config-next`) + Prettier | |
| Package manager | npm | |
| Deploy | Vercel | |

> This Next.js version may differ from training data. Read `node_modules/next/dist/docs/` for the relevant API before writing code and heed deprecation notices.

### Commands
```bash
npm run dev      # local dev
npm run build    # production build
npm run start    # serve build
npm run lint     # lint
```

---

## 2. Coding Rules (mandatory)

1. No comments in CSS files.
2. No unnecessary comments in code. Code explains itself through naming.
3. No inline styles (`style={{}}`). Use Tailwind classes, CSS Modules, or CSS variables set via classes. Only exception: a Motion runtime value that cannot be expressed otherwise.
4. Never put a whole feature in one file. Split into components, hooks, utils, data and types.
5. Before writing anything new, search the codebase for an existing component, hook, util or style and reuse it.
6. One component per file, PascalCase filenames, co-located `Component.module.css` when needed.
7. Content (courses, faculty, fees, testimonials, events, copy) lives in `src/content` as typed data — never hard-coded inside components.
8. Every animation respects `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` in `MotionProvider`).
9. Animate only `transform`, `opacity`, `clip-path` and `filter`. Never animate layout properties.
10. No scroll-jacking, pinned sections, smooth-scroll overrides, preloaders, custom cursors or autoplaying audio. Native scrolling only.
11. Text never sits directly on a busy photo. Use solid backgrounds or strong gradients.
12. Accessibility is part of done: semantic HTML, keyboard navigation, visible focus rings, alt text, AA contrast.

---

## 3. Design Direction — Modern conservatory

Editorial and warm, distinct from a generic "tutor" site. Think concert programme meets modern product site.

- **Palette:** paper `#f8f7f4`, surface `#efede7`, ink `#121214`, muted `#6b6a66`, line `#dcd9d2`, accent vermilion `#d9480f` (soft `#ffe1d1`), stage-night sections `#0d0d12`. Full dark mode via `.dark` token overrides in `globals.css`. Accent is used sparingly: CTAs, active states, key numbers.
- **Typography:** display headings in **Instrument Serif** (large, tight leading, italic for emphasis words); body and UI in **Geist Sans**; tabular numbers for fees and timings. Eyebrows are 12px uppercase, tracked, in accent.
- **Visual motif:** thin horizontal rules echoing a music staff; subtle waveform / equaliser details on dark sections. Keep it decorative and quiet.
- **Buttons:** pill buttons. Primary = accent fill; secondary = ink outline; `light` variant for dark sections.
- **Header:** sticky, frosted paper after scroll; logo left, nav centre, "Book a free trial" CTA right. Courses dropdown with the 4 courses as image cards.
- **Corners:** 16px (`rounded-2xl`) on cards and images; pills fully rounded.
- **Floating actions:** WhatsApp button bottom-right; mobile bottom action bar (Call · WhatsApp · Book trial).
- **Logo:** guitar-neck "F" with note head (vermilion). On the site use `components/ui/LogoMark` (inline SVG, `currentColor`, follows the theme) inside `components/ui/Logo`. Static files: `public/logo-light.{svg,png}` for light backgrounds, `public/logo-dark.{svg,png}` for dark; favicons in `src/app/icon.svg` and `src/app/apple-icon.png`. `public/logo.png` is the old original — do not use.
- **Photography:** real students, teachers and instruments in warm light. No stock clichés of headphones-on-white.
- **Avoid:** neon gradients, music-note clip art, emoji, rainbow colours, heavy animation, autoplay sound/video with audio.

---

## 4. Motion

- Primitives in `components/motion`: `Reveal` (fade-up, optional stagger via `RevealItem`) and `RevealImage` (clip-path reveal). Tokens in `src/lib/motion/tokens.ts`.
- Hover micro-interactions are CSS transitions (image scale 1.03–1.05, arrow nudge).
- Course/teacher tab indicators use Motion `layoutId`.
- Performance budget: LCP < 2.5s, CLS < 0.1, INP < 200ms.

---

## 5. Courses

**Scope is exactly these 4 courses (set by the owner). Do not add other instruments.** Each course has levels **Beginner → Intermediate → Advanced**. Ages, styles and exam tracks below are assumptions; confirm with the owner.

| Course | Slug | Category | Age | Styles |
|---|---|---|---|---|
| Guitar | `guitar` | Instruments | 7+ | Acoustic, electric, chords & strumming, Bollywood, Western |
| Piano | `piano` | Instruments | 5+ | Western classical, keyboard, Bollywood |
| Harmonium | `harmonium` | Instruments | 7+ | Hindustani, bhajan, ghazal accompaniment |
| Vocal | `vocal` | Vocals | 6+ | Hindustani classical, light/Bollywood, devotional |

Each course page shows: overview, who it's for, what you'll learn (per level), class format (1:1 / group, duration, frequency), mode (studio / online), fees from, faculty teaching it, FAQs, student results/videos, and a trial-class CTA.

### Programmes (dummy, confirm with owner)
- **Kids Batch** — foundation classes for young beginners.
- **Exam Prep** — graded exam coaching (board to confirm).
- **Adult Beginners** — weekend and evening batches.
- **Online Classes** — live 1:1 over video.

---

## 6. Brand, Social & Contact

All business details live in `src/content/site.ts`. Values marked (dummy) are placeholders until the owner provides real ones.

| Field | Value |
|---|---|
| Brand | Future Music Academy (real) |
| Founder / Teacher | Chika Gochwal (real) |
| Tagline | `When words fail, music speaks` (real) |
| Status | Admissions open (real) |
| Phone / WhatsApp | +91 70563 50917 (real) → `wa.me/917056350917` with prefilled message |
| Address | Model Town, Rohtak, Haryana, India (real; full street address to confirm) |
| Email | `hello@futuremusicacademy.in` (dummy) |
| Hours | `Mon–Sat 10:00–20:00, Sun 10:00–14:00` (dummy) |
| Instagram | https://www.instagram.com/chika_gochhwall/ (real) |

The owner's old poster (neon purple, emoji, green circle) is reference for **content only**. Do not copy its visual style; the site follows §3.

### Conversion flows
1. **Book a free trial** — `/book-trial` page and reusable `TrialBookingForm` (name, student age, course, mode, preferred slot, phone). Validated with Zod; submitted via Server Action or DA Forms embed (decide with owner). Confirmation screen offers WhatsApp follow-up.
2. **Direct WhatsApp** — floating button on every page and "Ask on WhatsApp" CTAs on course pages, built by a `buildWhatsAppLink` util that names the course.
3. **Call** — click-to-call in header (mobile) and footer.

Everything else (fees, faculty, testimonials, events, blog) is dummy content in `src/content`, easy to replace.

---

## 7. Information Architecture

```
/                       Home
/courses                All courses (filter: category, age, mode)
/courses/[slug]         Course detail
/programmes/[slug]      Little Maestros, Exam Prep, Adult Beginners, Online
/faculty                Teachers
/faculty/[slug]         Teacher profile
/fees                   Fee plans + FAQ
/events                 Recitals, workshops, results
/events/[slug]          Event detail
/gallery                Photos + performance videos
/blog                   Practice tips, guides
/blog/[slug]            Article
/about                  Story, method, values
/contact                Map, hours, enquiry
/book-trial             Free trial class booking
/credits                Photo credits (if any third-party images)
```

### Home page sections
1. Hero — serif headline, short promise, primary "Book a free trial" + secondary "Explore courses", framed photo/video of a lesson
2. Trust strip — students taught, years, exam pass rate, faculty count
3. Courses — four large cards: Guitar, Piano, Harmonium, Vocal
4. Our method — 3–4 step learning path (Trial → Plan → Learn → Perform)
5. Programmes — Little Maestros, Exam Prep, Adults, Online
6. Faculty — teacher cards carousel
7. Student spotlight — performance videos (click-to-play, no autoplay audio)
8. Testimonials — parents and students, dark stage section
9. Upcoming events / recitals
10. FAQ
11. Book-a-trial CTA card (form + WhatsApp)

---

## 8. Folder Structure

```
src/
  app/
    layout.tsx
    page.tsx
    courses/  page.tsx, [slug]/page.tsx
    programmes/[slug]/page.tsx
    faculty/  page.tsx, [slug]/page.tsx
    fees/page.tsx
    events/   page.tsx, [slug]/page.tsx
    gallery/page.tsx
    blog/     page.tsx, [slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    book-trial/page.tsx
    sitemap.ts
    robots.ts
    opengraph-image.tsx
  components/
    layout/      header/, footer/, MotionProvider, ThemeProvider, WhatsAppFloat, MobileActionBar
    ui/          Button, ButtonLink, AppImage, SectionIntro, Tabs, Accordion, Carousel, Logo, VideoPlayer
    motion/      Reveal, RevealImage
    forms/       TrialBookingForm, EnquiryForm, fields/
    cards/       CourseCard, TeacherCard, EventCard, TestimonialCard, BlogCard
    sections/    home/, course/, faculty/, shared/
  content/       site.ts, courses.ts, programmes.ts, faculty.ts, fees.ts, testimonials.ts, events.ts, faqs.ts, blog/
  lib/
    data/        courses.ts, faculty.ts, events.ts, navigation.ts
    motion/      tokens.ts
    seo/         metadata.ts, jsonLd.ts
    utils/       cn.ts, format.ts, whatsapp.ts
    validation/  trialBooking.ts
  actions/       submitTrialBooking.ts
  hooks/
  styles/        globals.css, tokens.css
  types/         course.ts, faculty.ts, event.ts, blog.ts, image.ts
public/
  images/courses/<slug>/
  images/faculty/<slug>/
  images/events/<slug>/
scripts/         image optimisation, blur placeholder generation
```

---

## 9. Data Models (initial)

```ts
type CourseCategory = "instruments" | "vocals";
type Level = "beginner" | "intermediate" | "advanced";
type ClassMode = "studio" | "online";

interface Course {
  slug: string;
  name: string;
  category: CourseCategory;
  tagline: string;
  description: string;
  minAge: number;
  modes: ClassMode[];
  levels: { level: Level; outcomes: string[] }[];
  examTracks: string[];
  format: { type: "1:1" | "group"; durationMin: number; perWeek: number }[];
  feeFromINR: number;
  facultySlugs: string[];
  faqs: { q: string; a: string }[];
  heroImage: ImageAsset;
  gallery: ImageAsset[];
}

interface Teacher {
  slug: string;
  name: string;
  role: string;
  instruments: string[];
  qualifications: string[];
  yearsTeaching: number;
  bio: string;
  photo: ImageAsset;
}

interface EventItem {
  slug: string;
  title: string;
  type: "recital" | "workshop" | "result" | "masterclass";
  date: string;
  venue: string;
  summary: string;
  cover: ImageAsset;
}

interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}
```

---

## 10. SEO

- Per-page `generateMetadata` via helpers in `src/lib/seo/metadata.ts`; canonical URLs; OG images.
- JSON-LD: `MusicSchool` / `LocalBusiness` (site-wide), `Course` (course pages), `Person` (faculty), `Event` (events), `FAQPage`, `BreadcrumbList`.
- Local SEO: target "music classes in Rohtak", "guitar / piano / harmonium / vocal classes Rohtak", "music academy Model Town Rohtak". NAP consistent with Google Business Profile, embedded map on `/contact`.
- `sitemap.ts` and `robots.ts` generated from content.

---

## 11. Roadmap

### Phase 0 — Setup
- [ ] Scaffold Next.js + TS + Tailwind v4 + ESLint/Prettier
- [ ] Install Motion, next-themes, lucide-react, react-icons, React Hook Form, Zod, clsx, tailwind-merge, sharp
- [ ] Tokens, fonts, globals, `cn` util, Theme + Motion providers

### Phase 1 — Content & Images
- [ ] Types + dummy content for courses, programmes, faculty, fees, testimonials, events, FAQs
- [ ] Source/collect photos, optimisation + blur placeholder script

### Phase 2 — Foundation Components
- [ ] Header (mega menu, mobile menu), footer, WhatsApp float, mobile action bar
- [ ] UI primitives: Button, SectionIntro, Tabs, Accordion, Carousel, AppImage, VideoPlayer
- [ ] Motion primitives: Reveal, RevealImage

### Phase 3 — Home Page
- [ ] All sections from §7, tuned for desktop and mobile

### Phase 4 — Courses, Programmes & Faculty
- [ ] Courses index with filters, course detail
- [ ] Programme pages, faculty index + profiles

### Phase 5 — Conversion & Supporting Pages
- [ ] Book-a-trial flow + Server Action, contact, fees, events, gallery, blog, about

### Phase 6 — Polish & Launch
- [ ] SEO metadata, OG images, sitemap, JSON-LD
- [ ] Accessibility pass, Lighthouse/performance pass, cross-browser + mobile testing
- [ ] Deploy to Vercel

---

## 12. Open Questions (confirm with owner)

- Logo, full street address, email, Instagram/YouTube, Google Business Profile link
- Fees (show publicly or "on request"), batch timings, class duration, online classes offered or not
- Chika Gochwal's bio, photo, qualifications; any other teachers
- Trial-booking backend: Server Action + email, Google Sheet, or DA Forms embed
- Exam boards actually offered and pass-rate stats
- Real student photos/videos and consent for use
