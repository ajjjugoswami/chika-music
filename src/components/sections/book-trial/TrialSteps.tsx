import { cn } from "@/lib/utils/cn";

const STEPS = [
  { title: "Send your request", description: "Fill in the form — it opens WhatsApp with your details ready to send." },
  { title: "We confirm a slot", description: "We'll reply with a trial time that suits you." },
  { title: "Meet your teacher", description: "Try the instrument, share your goals and get a learning plan." },
];

export function TrialSteps({ className }: { className?: string }) {
  return (
    <ol className={cn("space-y-7", className)}>
      {STEPS.map((step, index) => (
        <li key={step.title} className="flex gap-5">
          <span className="tabular grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-[14px] font-semibold text-accent-text">
            {index + 1}
          </span>
          <div>
            <p className="text-[16.5px] font-medium">{step.title}</p>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
