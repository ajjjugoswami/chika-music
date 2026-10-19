import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="eyebrow text-accent-text">404 · A missed note</p>
      <h1 className="mt-5 max-w-3xl text-display-xl">
        This page is <em>off the score.</em>
      </h1>
      <p className="mt-6 max-w-lg text-lead text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/courses" variant="outline">
          See courses
        </ButtonLink>
      </div>
    </section>
  );
}
