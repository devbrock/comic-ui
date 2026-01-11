/**
 * Migrated from: original_version/src/components/comic/SpeechBubble.tsx
 */

import { cn } from "@/utils/cn";

interface SpeechBubbleProps {
  className?: string;
  children: React.ReactNode;
  variant?: "speech" | "thought" | "shout" | "narration";
  tailPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right" | "none";
}

export function SpeechBubble({
  className,
  children,
  variant = "speech",
  tailPosition = "bottom-left",
}: SpeechBubbleProps) {
  const baseStyles = "relative p-4 font-body";

  const variantStyles = {
    speech:
      "bg-card border-3 border-ink rounded-speech shadow-panel",
    thought:
      "bg-card border-3 border-ink rounded-full shadow-panel",
    shout:
      "bg-hero-yellow border-4 border-ink shadow-impact font-display uppercase text-ink",
    narration:
      "bg-hero-yellow border-3 border-ink shadow-panel",
  };

  const tailStyles = {
    "bottom-left": "after:absolute after:bottom-0 after:left-6 after:translate-y-full after:border-[12px] after:border-transparent after:border-t-ink after:border-t-[14px] before:absolute before:bottom-0 before:left-[26px] before:translate-y-[calc(100%-3px)] before:border-[10px] before:border-transparent before:border-t-card before:border-t-[12px] before:z-10",
    "bottom-right": "after:absolute after:bottom-0 after:right-6 after:translate-y-full after:border-[12px] after:border-transparent after:border-t-ink after:border-t-[14px] before:absolute before:bottom-0 before:right-[26px] before:translate-y-[calc(100%-3px)] before:border-[10px] before:border-transparent before:border-t-card before:border-t-[12px] before:z-10",
    "top-left": "after:absolute after:top-0 after:left-6 after:-translate-y-full after:border-[12px] after:border-transparent after:border-b-ink after:border-b-[14px] before:absolute before:top-0 before:left-[26px] before:-translate-y-[calc(100%-3px)] before:border-[10px] before:border-transparent before:border-b-card before:border-b-[12px] before:z-10",
    "top-right": "after:absolute after:top-0 after:right-6 after:-translate-y-full after:border-[12px] after:border-transparent after:border-b-ink after:border-b-[14px] before:absolute before:top-0 before:right-[26px] before:-translate-y-[calc(100%-3px)] before:border-[10px] before:border-transparent before:border-b-card before:border-b-[12px] before:z-10",
    "none": "",
  };

  // Thought bubbles get dots instead of tail
  const thoughtDots = variant === "thought" && tailPosition !== "none" && (
    <div className="absolute -bottom-8 left-8 flex gap-2">
      <div className="w-4 h-4 bg-card border-2 border-ink rounded-full" />
      <div className="w-3 h-3 bg-card border-2 border-ink rounded-full translate-y-2" />
      <div className="w-2 h-2 bg-card border-2 border-ink rounded-full translate-y-4" />
    </div>
  );

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== "thought" && variant !== "shout" && tailStyles[tailPosition],
        variant === "shout" && "clip-path-burst",
        className
      )}
    >
      {children}
      {thoughtDots}
    </div>
  );
}

