/**
 * Migrated from: original_version/src/components/ui/label.tsx
 */

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

/**
 * Full props for `Label`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * Radix/HTML props).
 */
type LabelProps = VariantProps<typeof labelVariants> &
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

