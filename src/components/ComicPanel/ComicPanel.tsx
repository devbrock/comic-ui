/**
 * Migrated from: original_version/src/components/comic/ComicPanel.tsx
 */

import * as React from "react";
import { cn } from "@/utils/cn";

export type ComicPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Visual treatment of the panel border/shadow.
   */
  variant?: "default" | "thick" | "double" | "action";
  /**
   * Optional label rendered near the top-left corner.
   */
  cornerLabel?: string;
  /**
   * Optional header strip rendered across the top.
   */
  headerLabel?: string;
};

export function ComicPanel({
  className,
  children,
  variant = "default",
  cornerLabel,
  headerLabel,
  ...props
}: ComicPanelProps) {
  const variantStyles = {
    default: "border-3 border-ink shadow-panel",
    thick: "border-4 border-ink shadow-impact",
    double:
      "border-4 border-ink shadow-impact ring-2 ring-ink ring-offset-2 ring-offset-background",
    action:
      "border-4 border-ink shadow-impact bg-gradient-to-br from-hero-yellow/20 to-transparent",
  };

  return (
    <div
      className={cn("relative bg-card", variantStyles[variant], className)}
      {...props}
    >
      {cornerLabel && (
        <div className="pointer-events-none absolute -top-4 -left-2 bg-hero-yellow border-2 border-ink px-3 py-1 font-display text-sm text-ink shadow-panel z-10">
          {cornerLabel}
        </div>
      )}
      {headerLabel && (
        <div
          className={cn(
            "bg-ink text-background px-4 py-2 font-display text-lg uppercase tracking-wider",
            cornerLabel && "pl-12"
          )}
        >
          {headerLabel}
        </div>
      )}
      <div className={cn("p-4", cornerLabel && "pt-10")}>{children}</div>
    </div>
  );
}
