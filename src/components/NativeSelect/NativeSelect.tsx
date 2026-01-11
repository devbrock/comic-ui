/**
 * Migrated from: original_version/src/components/ui/native-select.tsx
 */

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/cn";

export type NativeSelectProps = React.ComponentPropsWithoutRef<"select">;

/**
 * Styled native `<select>` (useful when you want the platform behavior).
 */
const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(({ className, children, ...props }, ref) => (
  <div className="relative w-full">
    <select
      ref={ref}
      className={cn(
        "flex h-10 w-full appearance-none items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
  </div>
));
NativeSelect.displayName = "NativeSelect";

export { NativeSelect };



