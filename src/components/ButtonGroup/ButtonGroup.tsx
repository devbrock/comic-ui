/**
 * Migrated from: original_version/src/components/ui/button-group.tsx
 */

import * as React from "react";

import { cn } from "@/utils/cn";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Groups multiple buttons into a single segmented control.
 *
 * Note: This component is intentionally "dumb" (layout-only). You supply the `Button`s.
 */
const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    className={cn(
      "inline-flex w-fit [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:ml-[-3px]",
      className,
    )}
    {...props}
  />
));
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };



