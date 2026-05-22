type StatCardProps = {
  label: string;
  value: number;
  tone?: "neutral" | "warning" | "critical";
};

export function StatCard({ label, value, tone = "neutral" }: StatCardProps) {
  const toneClasses = {
    neutral: "border-slate-300",
    warning: "border-amber-300",
    critical: "border-red-300"
  }[tone];

  return (
    <article className={`rounded-lg border-2 bg-white p-4 ${toneClasses}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold leading-none text-slate-900">{value}</p>
    </article>
  );
}
