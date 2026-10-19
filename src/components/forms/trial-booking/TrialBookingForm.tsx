"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa6";
import { buttonClassName } from "@/components/ui/ButtonLink";
import { getAllCourses } from "@/lib/data/courses";
import { buildWhatsAppMessageLink } from "@/lib/utils/whatsapp";
import {
  AGE_GROUPS,
  TIME_SLOTS,
  trialBookingSchema,
  type TrialBookingInput,
} from "@/lib/validation/trialBooking";
import { ChoiceGroup } from "../fields/ChoiceGroup";
import { FieldShell } from "../fields/FieldShell";
import { inputClassName, textareaClassName } from "../fields/fieldStyles";
import { SelectField } from "../fields/SelectField";
import { buildTrialMessage } from "./trialMessage";
import { TrialSuccess } from "./TrialSuccess";

const SLOT_OPTIONS = TIME_SLOTS.map((slot) => ({ value: slot, label: slot }));
const AGE_OPTIONS = AGE_GROUPS.map((group) => ({ value: group, label: group }));

export function TrialBookingForm({ defaultCourse }: { defaultCourse?: string }) {
  const courseOptions = getAllCourses().map((course) => ({ value: course.slug, label: course.name }));
  const [sentLink, setSentLink] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TrialBookingInput>({
    resolver: zodResolver(trialBookingSchema),
    defaultValues: { course: defaultCourse ?? "", message: "" },
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
          <Controller
            control={control}
            name="course"
            render={({ field }) => (
              <SelectField
                id="course"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                options={courseOptions}
                placeholder="Choose a course"
                invalid={!!errors.course}
                describedBy={describedBy("course")}
              />
            )}
          />
        </FieldShell>

        <FieldShell id="ageGroup" label="Student age" error={errors.ageGroup?.message}>
          <Controller
            control={control}
            name="ageGroup"
            render={({ field }) => (
              <SelectField
                id="ageGroup"
                value={field.value ?? ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                options={AGE_OPTIONS}
                placeholder="Choose an age group"
                invalid={!!errors.ageGroup}
                describedBy={describedBy("ageGroup")}
              />
            )}
          />
        </FieldShell>
      </div>

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
