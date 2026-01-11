/**
 * Migrated from: original_version/src/components/ui/kbd.tsx
 */

import * as React from "react";

import { cn } from "@/utils/cn";

/**
 * `Kbd` renders keyboard keys like "⌘K" or "Ctrl+P" with a consistent style.
 */
const Kbd = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"kbd">>(({ className, ...props }, ref) => (
  <kbd
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-md border-2 border-ink bg-muted px-2 py-0.5 font-mono text-xs text-foreground shadow-panel",
      className,
    )}
    {...props}
  />
));
Kbd.displayName = "Kbd";

export { Kbd };



