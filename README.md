
# Connected Devices Dashboard

A lightweight operator dashboard built with **Next.js + TypeScript + TailwindCSS** for monitoring and controlling a real-time live audience system.

The component simulates a control interface used during live events where thousands of audience devices may connect, disconnect, or reconnect in real time. The focus of this project is not visual design, but **operational clarity, usability under stress, and fast decision-making**.

---

## 🧠 Design Focus

This dashboard was designed with a live operator context in mind:

* Information must be readable in under 2 seconds
* System health must be immediately visible
* Critical states (disconnects, failures) are visually prioritized
* Actions must be minimal and unambiguous
* Layout optimized for live, high-pressure environments

---

## ✨ Key Features

* Real-time style **system health indicator** (OK / Warning / Critical)
* Live device status overview:

  * Connected devices
  * Reconnecting devices
  * Disconnected devices
* Operator-focused **recovery action button** with simulated async behavior
* Clear visual hierarchy optimized for fast scanning
* Mobile-friendly responsive layout
* Mock data-driven implementation (no backend required)

---

## ⚙️ Tech Stack

* Next.js (App Router)
* TypeScript
* TailwindCSS
* React functional components

---

## 📁 Structure

* `ConnectedDevicesPanel` – main container
* `SystemStatusHeader` – live system context
* `SystemHealthBadge` – system state indicator
* `DeviceStatsGrid` – device overview section
* `StatCard` – reusable metric display component
* `RecoveryActionButton` – operator control action
* `data/connectedDevicesMock.ts` – mock dataset

---

## ▶️ Run locally

```bash
npm install
npm run dev
```

Then open: http://localhost:3000

---

## 🎯 Goal of this exercise

The goal was to demonstrate:

* how I structure UI components for real-world systems
* how I prioritize information in time-critical interfaces
* how I approach UX design for operator-facing tools
* how I balance simplicity with functional realism

The focus was intentionally kept on **clarity and usability rather than visual complexity or feature completeness**.
