/**
 * Migrated from: original_version/src/components/comic/SpeedLines.tsx
 */

import { cn } from "@/utils/cn";

interface SpeedLinesProps {
  className?: string;
  direction?: "left" | "right" | "up" | "down" | "radial";
  intensity?: "light" | "medium" | "heavy";
  animated?: boolean;
}

export function SpeedLines({
  className,
  direction = "left",
  intensity = "medium",
  animated = false,
}: SpeedLinesProps) {
  const opacities = {
    light: 0.05,
    medium: 0.1,
    heavy: 0.2,
  };

  const angles = {
    left: "90deg",
    right: "270deg",
    up: "180deg",
    down: "0deg",
    radial: "radial",
  };

  const opacity = opacities[intensity];

  if (direction === "radial") {
    return (
      <div
        className={cn(
          "absolute inset-0 pointer-events-none overflow-hidden",
          animated && "animate-pulse",
          className
        )}
        style={{
          background: `
            repeating-conic-gradient(
              from 0deg,
              hsl(var(--ink-black) / ${opacity}) 0deg 2deg,
              transparent 2deg 10deg
            )
          `,
        }}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden",
        animated && "animate-pulse",
        className
      )}
      style={{
        background: `repeating-linear-gradient(
          ${angles[direction]},
          transparent,
          transparent 3px,
          hsl(var(--ink-black) / ${opacity}) 3px,
          hsl(var(--ink-black) / ${opacity}) 4px
        )`,
      }}
    />
  );
}

