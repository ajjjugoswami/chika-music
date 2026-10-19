interface CourseFact {
  label: string;
  value: string;
}

export function CourseFacts({ facts }: { facts: CourseFact[] }) {
  return (
    <dl className="mt-4 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-card">
      {facts.map((fact) => (
        <div key={fact.label} className="px-4 py-4 sm:px-5">
          <dt className="text-[12px] font-medium tracking-[0.12em] text-muted uppercase">{fact.label}</dt>
          <dd className="mt-1 text-[15px] font-medium sm:text-[16px]">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
