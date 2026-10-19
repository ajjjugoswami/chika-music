import { z } from "zod";

export const AGE_GROUPS = ["5–8 years", "9–12 years", "13–17 years", "18+ (adult)"] as const;
export const TIME_SLOTS = ["Morning", "Afternoon", "Evening", "Weekend"] as const;
export const CLASS_MODES = ["studio", "online"] as const;

export const trialBookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter the student's name"),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/, "Enter a valid 10-digit Indian mobile number"),
  course: z.string().min(1, "Choose a course"),
  ageGroup: z.enum(AGE_GROUPS, { error: "Choose an age group" }),
  mode: z.enum(CLASS_MODES),
  slot: z.enum(TIME_SLOTS, { error: "Choose a preferred time" }),
  message: z.string().trim().max(500, "Keep it under 500 characters").optional(),
});

export type TrialBookingInput = z.infer<typeof trialBookingSchema>;
