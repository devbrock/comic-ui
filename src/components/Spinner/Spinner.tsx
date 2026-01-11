/**
 * Migrated from: original_version/src/components/ui/spinner.tsx
 */

import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/utils/cn";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Pixel size of the spinner icon.
   * @default 16
   */
  size?: number;
}

/**
 * Simple loading spinner.
 */
const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(({ className, size = 16, ...props }, ref) => (
  <span ref={ref} className={cn("inline-flex items-center justify-center", className)} {...props}>
    <Loader2 className="animate-spin" style={{ width: size, height: size }} />
  </span>
));
Spinner.displayName = "Spinner";

export { Spinner };



