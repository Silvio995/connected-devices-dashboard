import type { ConnectedDevicesPanelData } from "@/components/connected-devices/types";

export const connectedDevicesMock: ConnectedDevicesPanelData = {
  currentScene: "Stage A / Entrance Cameras",
  healthStatus: "warning",
  stats: {
    connected: 42,
    reconnecting: 3,
    disconnected: 5
  },
  recoveryActionLabel: "Run Recovery Protocol"
};
