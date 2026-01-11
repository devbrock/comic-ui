/**
 * Migrated from: original_version/src/components/comic/ComicBadge.tsx
 */

import { cn } from "@/utils/cn";
import React from "react";

interface ComicBadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "burst" | "ribbon" | "caption";
  color?: "primary" | "secondary" | "accent" | "destructive" | "mutant" | "gamma";
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
}

export function ComicBadge({
  className,
  children,
  variant = "default",
  color = "primary",
  iconBefore,
  iconAfter,
}: ComicBadgeProps) {
  const colorStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground",
    mutant: "bg-mutant-purple text-primary-foreground",
    gamma: "bg-gamma-green text-primary-foreground",
  };

  const variantStyles = {
    default: "px-3 py-1 border-2 border-ink shadow-panel",
    burst: "px-4 py-2 border-3 border-ink shadow-impact rotate-[-3deg]",
    ribbon: "px-6 py-1 border-2 border-ink shadow-panel -skew-x-6",
    caption: "px-4 py-2 border-3 border-ink shadow-panel bg-hero-yellow text-ink",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-display text-sm uppercase tracking-wider",
        variant !== "caption" && colorStyles[color],
        variantStyles[variant],
        className
      )}
    >
      {iconBefore && <span className="flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5">{iconAfter}</span>}
    </span>
  );
}

