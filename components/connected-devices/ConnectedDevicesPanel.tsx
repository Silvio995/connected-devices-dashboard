import type { ConnectedDevicesPanelData } from "./types";
import { DeviceStatsGrid } from "./DeviceStatsGrid/DeviceStatsGrid";
import { RecoveryActionButton } from "./RecoveryActionButton";
import { SystemStatusHeader } from "./SystemStatusHeader/SystemStatusHeader";

type ConnectedDevicesPanelProps = {
  data: ConnectedDevicesPanelData;
};

export function ConnectedDevicesPanel({ data }: ConnectedDevicesPanelProps) {
  return (
    <section className="w-full max-w-3xl rounded-xl border border-slate-300 bg-slate-100 p-4 sm:p-6">
      <div className="space-y-5">
        <SystemStatusHeader
          currentScene={data.currentScene}
          healthStatus={data.healthStatus}
        />
        <DeviceStatsGrid stats={data.stats} />
        <RecoveryActionButton label={data.recoveryActionLabel} />
      </div>
    </section>
  );
}
