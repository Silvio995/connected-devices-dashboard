import type { DeviceStats } from "../types";
import { StatCard } from "./StatCard";

type DeviceStatsGridProps = {
  stats: DeviceStats;
};

export function DeviceStatsGrid({ stats }: DeviceStatsGridProps) {
  return (
    <section className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Device Status
      </h3>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Connected" value={stats.connected} tone="neutral" />
        <StatCard label="Reconnecting" value={stats.reconnecting} tone="warning" />
        <StatCard label="Disconnected" value={stats.disconnected} tone="critical" />
      </div>
    </section>
  );
}
