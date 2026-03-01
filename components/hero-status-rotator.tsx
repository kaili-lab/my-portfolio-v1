"use client";

import { useEffect, useState } from "react";

const STATUSES = [
  "Analyzing Context...",
  "Optimizing Logic...",
  "Generating Agent...",
  "Syncing Neural Net...",
  "Ready to Deploy",
];

export default function HeroStatusRotator() {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    // 用固定节奏轮播状态文案，既保留“核心在运行”的反馈，也避免过快切换造成阅读压力。
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUSES.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      key={statusIndex}
      aria-live="polite"
      className="mt-1 inline-block text-[11px] text-foreground/55 motion-safe:animate-[fade-in_260ms_ease-out]"
    >
      {STATUSES[statusIndex]}
    </span>
  );
}
