/**
 * Migrated from: original_version/src/components/ui/empty.tsx
 */

import * as React from "react";

import { cn } from "@/utils/cn";

export interface EmptyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Optional icon displayed above the title.
   */
  icon?: React.ReactNode;
  /**
   * Main message for the empty state.
   */
  title: React.ReactNode;
  /**
   * Supporting message under the title.
   */
  description?: React.ReactNode;
  /**
   * Optional action area (typically a Button).
   */
  action?: React.ReactNode;
}

/**
 * A reusable empty state panel.
 */
const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, icon, title, description, action, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-md border-2 border-ink bg-card p-6 text-center shadow-panel", className)}
      {...props}
    >
      {icon ? <div className="mx-auto mb-3 flex w-fit items-center justify-center">{icon}</div> : null}
      <div className="font-display text-xl">{title}</div>
      {description ? <div className="mt-2 font-body text-sm text-muted-foreground">{description}</div> : null}
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </div>
  ),
);
Empty.displayName = "Empty";

export { Empty };



