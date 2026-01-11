/**
 * Migrated from: original_version/src/components/comic/ImpactText.tsx
 */

import React from "react";
import { cn } from "@/utils/cn";

type ImpactPreset = "pow" | "bam" | "wham" | "zap" | "boom";

export interface ImpactTextProps {
  className?: string;
  /**
   * The text to display (recommended).
   *
   * If omitted, `children` is used.
   */
  text?: string;
  /**
   * Alternative to `text` for rich content.
   */
  children?: React.ReactNode;
  /**
   * Convenience preset that supplies default comic SFX text when neither `text`
   * nor `children` are provided.
   */
  preset?: ImpactPreset;
  /**
   * @deprecated Use `preset` + `text`/`children`. Kept for backwards compatibility.
   * Previously `variant` was used to select the displayed text.
   */
  variant?: ImpactPreset | "custom";
  color?: "yellow" | "red" | "blue" | "green" | "purple" | "orange";
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

export function ImpactText({
  className,
  text,
  children,
  preset,
  variant,
  color = "yellow",
  size = "md",
  animated = true,
}: ImpactTextProps) {
  const colorStyles = {
    yellow: "text-hero-yellow",
    red: "text-hero-red",
    blue: "text-hero-blue",
    green: "text-gamma-green",
    purple: "text-mutant-purple",
    orange: "text-cosmic-orange",
  };

  const sizeStyles = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
  };

  const presetTexts = {
    pow: "POW!",
    bam: "BAM!",
    wham: "WHAM!",
    zap: "ZAP!",
    boom: "BOOM!",
  };

  const legacyPreset: ImpactPreset | undefined =
    variant && variant !== "custom" ? variant : undefined;

  const content: React.ReactNode =
    text ?? children ?? (preset ? presetTexts[preset] : legacyPreset ? presetTexts[legacyPreset] : null);

  return (
    <span
      className={cn(
        "font-display uppercase tracking-wider inline-block",
        "drop-shadow-[3px_3px_0px_hsl(var(--ink-black))]",
        colorStyles[color],
        sizeStyles[size],
        animated && "animate-burst",
        className
      )}
      style={{
        WebkitTextStroke: "2px hsl(var(--ink-black))",
        paintOrder: "stroke fill",
      }}
    >
      {content}
    </span>
  );
}

