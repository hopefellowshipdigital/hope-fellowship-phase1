"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetIso: string;
}

interface TimeLeft {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetIso: string): TimeLeft {
  const totalMs = new Date(targetIso).getTime() - Date.now();
  const clamped = Math.max(totalMs, 0);

  return {
    totalMs,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-extrabold tabular-nums text-white sm:text-3xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-white/60 sm:text-xs">{label}</span>
    </div>
  );
}

/**
 * Live countdown to a scheduled service start. Renders nothing until
 * mounted client-side (avoiding a hydration mismatch from server/browser
 * clock skew), and handles an already-passed start time by showing a
 * "starting any moment" message instead of negative numbers.
 */
export function CountdownTimer({ targetIso }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Deferred to an effect deliberately: computing this during render
    // would use the server's clock at build/request time and mismatch
    // the browser's clock at hydration. This one-time mount read plus a
    // ticking interval is the standard SSR-safe pattern for a countdown.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(getTimeLeft(targetIso));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetIso));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetIso]);

  if (!timeLeft) {
    return <div className="h-[52px] sm:h-[60px]" aria-hidden="true" />;
  }

  if (timeLeft.totalMs <= 0) {
    return (
      <p className="text-sm font-semibold text-accent" role="status">
        Starting any moment now
      </p>
    );
  }

  return (
    <div className="flex items-start gap-4 sm:gap-6" role="timer" aria-live="off">
      {timeLeft.days > 0 && <Unit value={timeLeft.days} label="Days" />}
      <Unit value={timeLeft.hours} label="Hrs" />
      <Unit value={timeLeft.minutes} label="Min" />
      <Unit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}
