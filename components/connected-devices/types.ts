export type DeviceStats = {
  connected: number;
  reconnecting: number;
  disconnected: number;
};

export type ConnectedDevicesPanelData = {
  currentScene: string;
  healthStatus: "healthy" | "warning" | "critical";
  stats: DeviceStats;
  recoveryActionLabel: string;
};
