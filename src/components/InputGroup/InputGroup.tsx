/**
 * Migrated from: original_version/src/components/ui/input-group.tsx
 */

import * as React from "react";

import { cn } from "@/utils/cn";
import { Input } from "@/components/Input";

/**
 * Full props for `InputGroup`.
 */
export type InputGroupProps = React.ComponentPropsWithoutRef<"div">;

/**
 * Groups inputs with leading/trailing addons (icons/text).
 */
const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full items-stretch [&_[data-input-group-addon]]:flex [&_[data-input-group-addon]]:items-center [&_[data-input-group-addon]]:border [&_[data-input-group-addon]]:border-input [&_[data-input-group-addon]]:bg-muted [&_[data-input-group-addon]]:px-3 [&_[data-input-group-addon]]:text-sm [&_[data-input-group-addon]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));
InputGroup.displayName = "InputGroup";

/**
 * Full props for `InputGroupAddon`.
 */
export type InputGroupAddonProps = React.ComponentPropsWithoutRef<"span">;

const InputGroupAddon = React.forwardRef<HTMLSpanElement, InputGroupAddonProps>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-input-group-addon
    className={cn("rounded-md first:rounded-r-none last:rounded-l-none", className)}
    {...props}
  />
));
InputGroupAddon.displayName = "InputGroupAddon";

/**
 * Props specific to `InputGroupInput` (shown first in IntelliSense).
 */
export interface InputGroupInputOwnProps {
  /**
   * Adjusts rounding/borders when used inside an `InputGroup`.
   * @default "middle"
   */
  position?: "left" | "middle" | "right";
}

/**
 * Full props for `InputGroupInput`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * hundreds of native input attributes).
 */
export type InputGroupInputProps = InputGroupInputOwnProps & InputProps;

const InputGroupInput = React.forwardRef<HTMLInputElement, InputGroupInputProps>(
  ({ className, position = "middle", ...props }, ref) => {
    const positionClasses =
      position === "left"
        ? "rounded-r-none border-r-0"
        : position === "right"
          ? "rounded-l-none border-l-0"
          : "rounded-none";

    return <Input ref={ref} className={cn(positionClasses, className)} {...props} />;
  },
);
InputGroupInput.displayName = "InputGroupInput";

export { InputGroup, InputGroupAddon, InputGroupInput };

type InputProps = React.ComponentPropsWithoutRef<"input">;



