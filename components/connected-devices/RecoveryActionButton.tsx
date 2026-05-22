"use client";

import { useEffect, useState } from "react";

type RecoveryActionButtonProps = {
  label: string;
};

export function RecoveryActionButton({ label }: RecoveryActionButtonProps) {
  const [isRecovering, setIsRecovering] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!showSuccess) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowSuccess(false);
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [showSuccess]);

  const handleRecovery = async () => {
    setIsRecovering(true);
    setShowSuccess(false);

    await new Promise((resolve) => window.setTimeout(resolve, 1600));

    setIsRecovering(false);
    setShowSuccess(true);
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleRecovery}
        disabled={isRecovering}
        className="inline-flex min-h-11 items-center rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isRecovering ? "Running Recovery..." : label}
      </button>
      <p className="min-h-5 text-sm text-emerald-700" role="status" aria-live="polite">
        {showSuccess ? "Recovery sequence completed successfully." : ""}
      </p>
    </div>
  );
}
