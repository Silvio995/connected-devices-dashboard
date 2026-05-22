import { ConnectedDevicesPanel } from "@/components/connected-devices/ConnectedDevicesPanel";
import { connectedDevicesMock } from "@/data/connectedDevicesMock";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <ConnectedDevicesPanel data={connectedDevicesMock} />
    </main>
  );
}
