import { siteConfig } from "@/content/site";
import { getCourse } from "@/lib/data/courses";
import type { TrialBookingInput } from "@/lib/validation/trialBooking";

export function buildTrialMessage(input: TrialBookingInput) {
  const courseName = getCourse(input.course)?.name ?? input.course;
  const lines = [
    `Hi ${siteConfig.name}! I'd like to book a trial class.`,
    "",
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Course: ${courseName}`,
    `Age group: ${input.ageGroup}`,
    `Preferred time: ${input.slot}`,
  ];

  if (input.message) lines.push(`Note: ${input.message}`);

  return lines.join("\n");
}
