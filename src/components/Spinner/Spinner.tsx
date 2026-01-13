/**
 * Migrated from: original_version/src/components/ui/spinner.tsx
 */

import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/utils/cn";

/**
 * Props specific to `Spinner` (shown first in IntelliSense).
 */
export interface SpinnerOwnProps {
  /**
   * Pixel size of the spinner icon.
   * @default 16
   */
  size?: number;
}

/**
 * Full props for `Spinner`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * hundreds of HTML attributes).
 */
export type SpinnerProps = SpinnerOwnProps & React.ComponentPropsWithoutRef<"span">;

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



