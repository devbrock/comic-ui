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
type FieldBaseProps = Omit<FieldOwnProps, "label" | "htmlFor"> & React.ComponentPropsWithoutRef<"div">;

/**
 * `Field` prop rules:
 * - If you provide a `label`, you must provide `htmlFor` so the label is correctly associated.
 * - `Field` will attempt to attach `id` / `aria-describedby` / `aria-invalid` to the **single**
 *   child control, when possible.
 */
export type FieldProps =
  | (FieldBaseProps & { label?: undefined; htmlFor?: string })
  | (FieldBaseProps & { label: React.ReactNode; htmlFor: string });

type FieldControlAriaProps = {
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean | "true" | "false";
  "aria-required"?: boolean | "true" | "false";
  "aria-errormessage"?: string;
};

function mergeAriaDescribedBy(existing: string | undefined, next: string | undefined) {
  if (!existing) {
    return next;
  }

  if (!next) {
    return existing;
  }

  const tokens = new Set([...existing.split(/\s+/), ...next.split(/\s+/)].filter(Boolean));
  return Array.from(tokens).join(" ");
}

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

    const describedBy = [description ? descriptionId : undefined, hasError ? errorId : undefined]
      .filter(Boolean)
      .join(" ");

    const childCount = React.Children.count(children);
    const onlyChild = childCount === 1 ? (React.Children.only(children) as React.ReactNode) : null;
    const control = React.isValidElement(onlyChild) ? (onlyChild as React.ReactElement<FieldControlAriaProps>) : null;

    const controlWithAria = control
      ? React.cloneElement(control, {
          id: control.props.id ?? htmlFor,
          "aria-describedby": mergeAriaDescribedBy(control.props["aria-describedby"], describedBy || undefined),
          "aria-invalid": hasError ? true : control.props["aria-invalid"],
          "aria-required": required ? true : control.props["aria-required"],
          "aria-errormessage": hasError ? errorId : control.props["aria-errormessage"],
        })
      : null;

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label ? (
          <Label htmlFor={htmlFor} className="flex items-center gap-2">
            <span>{label}</span>
            {required ? <span className="text-hero-red font-display">*</span> : null}
          </Label>
        ) : null}

        <div>{controlWithAria ?? children}</div>

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



