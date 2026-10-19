import { TrialBookingForm } from "@/components/forms/trial-booking/TrialBookingForm";
import { Reveal } from "@/components/motion/Reveal";
import { TrialSteps } from "@/components/sections/book-trial/TrialSteps";
import { getCourse } from "@/lib/data/courses";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Book a Trial Class",
  description:
    "Book a trial guitar, piano, harmonium or vocal class at Future Music Academy, Model Town, Rohtak. Meet your teacher and get a learning plan.",
  path: "/book-trial",
});

export default async function BookTrialPage({ searchParams }: PageProps<"/book-trial">) {
  const { course } = await searchParams;
  const defaultCourse = typeof course === "string" && getCourse(course) ? course : undefined;

  return (
    <section className="container-x grid gap-12 pt-12 pb-section md:pt-20 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
      <Reveal onLoad>
        <p className="eyebrow text-accent-text">Book a trial</p>
        <h1 className="mt-5 text-display-xl">
          Book your <em>first lesson.</em>
        </h1>
        <p className="mt-6 max-w-md text-lead text-muted">
          Tell us a little about the student and we&apos;ll confirm a trial slot on WhatsApp.
        </p>
        <TrialSteps className="mt-12" />
      </Reveal>

      <Reveal onLoad delay={0.1} className="rounded-3xl border border-line bg-card p-6 shadow-xl shadow-black/5 sm:p-9">
        <TrialBookingForm defaultCourse={defaultCourse} />
      </Reveal>
    </section>
  );
}
