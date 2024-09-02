"use client";

import { useEffect, useState } from "react";

export default function Component({
  currentCount,
  totalRequests = 100,
  size = 200,
}) {
  const [progress, setProgress] = useState(0);
  const [displayedCount, setDisplayedCount] = useState(0);
  const strokeWidth = 4;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const duration = 1000; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const initialCount = displayedCount;
    const countDifference = currentCount - initialCount;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        const newCount = Math.round(
          initialCount + (countDifference * currentStep) / steps
        );
        setDisplayedCount(newCount);
        const calculatedProgress = Math.min((newCount / totalRequests) * 100);
        setProgress(calculatedProgress);
      } else {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [currentCount, totalRequests]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-fit">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#404040"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#fff"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute w-full top-0 left-0 inset-0 flex items-center justify-center flex-col">
        <span className="text-2xl font-bold text-neutral-100">{`${displayedCount}%`}</span>
      </div>
    </div>
  );
}
