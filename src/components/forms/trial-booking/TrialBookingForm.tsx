"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa6";
import { buttonClassName } from "@/components/ui/ButtonLink";
import { getAllCourses, MODE_LABELS } from "@/lib/data/courses";
import { buildWhatsAppMessageLink } from "@/lib/utils/whatsapp";
import {
  AGE_GROUPS,
  CLASS_MODES,
  TIME_SLOTS,
  trialBookingSchema,
  type TrialBookingInput,
} from "@/lib/validation/trialBooking";
import { ChoiceGroup } from "../fields/ChoiceGroup";
import { FieldShell } from "../fields/FieldShell";
import { inputClassName, textareaClassName } from "../fields/fieldStyles";
import { buildTrialMessage } from "./trialMessage";
import { TrialSuccess } from "./TrialSuccess";

const MODE_OPTIONS = CLASS_MODES.map((mode) => ({ value: mode, label: MODE_LABELS[mode] }));
const SLOT_OPTIONS = TIME_SLOTS.map((slot) => ({ value: slot, label: slot }));

export function TrialBookingForm({ defaultCourse }: { defaultCourse?: string }) {
  const courses = getAllCourses();
  const [sentLink, setSentLink] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TrialBookingInput>({
    resolver: zodResolver(trialBookingSchema),
    defaultValues: { course: defaultCourse ?? "", mode: "studio", message: "" },
  });

  const onSubmit = (values: TrialBookingInput) => {
    const link = buildWhatsAppMessageLink(buildTrialMessage(values));
    window.open(link, "_blank", "noopener,noreferrer");
    setSentLink(link);
  };

  if (sentLink) {
    return (
      <TrialSuccess
        whatsappLink={sentLink}
        onReset={() => {
          reset();
          setSentLink(null);
        }}
      />
    );
  }

  const describedBy = (field: keyof TrialBookingInput) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FieldShell id="name" label="Student name" error={errors.name?.message}>
          <input
            id="name"
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={inputClassName}
            {...register("name")}
          />
        </FieldShell>

        <FieldShell id="phone" label="Mobile number" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone")}
            className={inputClassName}
            {...register("phone")}
          />
        </FieldShell>

        <FieldShell id="course" label="Course" error={errors.course?.message}>
          <select
            id="course"
            aria-invalid={!!errors.course}
            aria-describedby={describedBy("course")}
            className={inputClassName}
            {...register("course")}
          >
            <option value="" disabled>
              Choose a course
            </option>
            {courses.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.name}
              </option>
            ))}
          </select>
        </FieldShell>

        <FieldShell id="ageGroup" label="Student age" error={errors.ageGroup?.message}>
          <select
            id="ageGroup"
            defaultValue=""
            aria-invalid={!!errors.ageGroup}
            aria-describedby={describedBy("ageGroup")}
            className={inputClassName}
            {...register("ageGroup")}
          >
            <option value="" disabled>
              Choose an age group
            </option>
            {AGE_GROUPS.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </FieldShell>
      </div>

      <FieldShell id="mode" as="fieldset" label="Where would you like to learn?" error={errors.mode?.message}>
        <ChoiceGroup name="mode" options={MODE_OPTIONS} registration={register("mode")} />
      </FieldShell>

      <FieldShell id="slot" as="fieldset" label="Preferred time" error={errors.slot?.message}>
        <ChoiceGroup name="slot" options={SLOT_OPTIONS} registration={register("slot")} columns={4} />
      </FieldShell>

      <FieldShell id="message" label="Anything we should know? (optional)" error={errors.message?.message}>
        <textarea
          id="message"
          rows={3}
          placeholder="Previous experience, goals, preferred days…"
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          className={textareaClassName}
          {...register("message")}
        />
      </FieldShell>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted">Your details open in WhatsApp so you can review and send them.</p>
        <button type="submit" disabled={isSubmitting} className={buttonClassName("primary", "sm:min-w-56")}>
          <FaWhatsapp className="size-4" />
          Send booking request
        </button>
      </div>
    </form>
  );
}
