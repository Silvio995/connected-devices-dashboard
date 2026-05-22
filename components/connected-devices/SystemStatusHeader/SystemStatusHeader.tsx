import { SystemHealthBadge } from "../SystemHealthBadge";
import { CurrentScene } from "./currentScene";

type SystemStatusHeaderProps = {
  currentScene: string;
  healthStatus: "healthy" | "warning" | "critical";
};

export function SystemStatusHeader({
  currentScene,
  healthStatus
}: SystemStatusHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-slate-900">Connected Devices</h2>
        <CurrentScene scene={currentScene} />
      </div>
      <SystemHealthBadge status={healthStatus} />
    </header>
  );
}
