/**
 * Migrated from: original_version/src/components/ui/field.tsx
 */

import * as React from "react";

import { cn } from "@/utils/cn";
import { Label } from "@/components/Label";

/**
 * Props specific to `Field` (shown first in IntelliSense).
 */
export interface FieldOwnProps {
  /**
   * Label content shown above the field.
   */
  label?: React.ReactNode;
  /**
   * The id of the associated input/control.
   */
  htmlFor?: string;
  /**
   * Helper text shown below the control (when no error is present).
   */
  description?: React.ReactNode;
  /**
   * Error text shown below the control.
   */
  error?: React.ReactNode;
  /**
   * Marks the label as required (visual only).
   */
  required?: boolean;
}

/**
 * Full props for `Field`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * hundreds of HTML attributes).
 */
export type FieldProps = FieldOwnProps & React.ComponentPropsWithoutRef<"div">;

/**
 * Simple form field wrapper (label + control slot + description/error).
 *
 * Think of it like a comic panel caption: it frames the input so the user
 * understands what they're about to type.
 */
const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, htmlFor, description, error, required = false, children, ...props }, ref) => {
    const descriptionId = React.useId();
    const errorId = React.useId();

    const hasError = Boolean(error);
    const describedBy = hasError ? errorId : description ? descriptionId : undefined;

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label ? (
          <Label htmlFor={htmlFor} className="flex items-center gap-2">
            <span>{label}</span>
            {required ? <span className="text-hero-red font-display">*</span> : null}
          </Label>
        ) : null}

        <div aria-describedby={describedBy}>{children}</div>

        {hasError ? (
          <p id={errorId} className="text-sm text-destructive font-body">
            {error}
          </p>
        ) : description ? (
          <p id={descriptionId} className="text-sm text-muted-foreground font-body">
            {description}
          </p>
        ) : null}
      </div>
    );
  },
);
Field.displayName = "Field";

export { Field };



