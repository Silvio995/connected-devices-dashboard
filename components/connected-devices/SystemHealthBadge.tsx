type SystemHealthBadgeProps = {
  status: "healthy" | "warning" | "critical";
};

export function SystemHealthBadge({ status }: SystemHealthBadgeProps) {
  const healthUi = {
    healthy: {
      label: "OK",
      icon: "●",
      className: "border-emerald-300 bg-emerald-50 text-emerald-900"
    },
    warning: {
      label: "Warning",
      icon: "▲",
      className: "border-amber-300 bg-amber-50 text-amber-900"
    },
    critical: {
      label: "Critical",
      icon: "■",
      className: "border-red-300 bg-red-50 text-red-900"
    }
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-bold uppercase tracking-wide ${healthUi.className}`}
      aria-label={`System health ${healthUi.label}`}
    >
      <span aria-hidden="true">{healthUi.icon}</span>
      <span>System {healthUi.label}</span>
    </span>
  );
}
