/**
 * Migrated from: original_version/src/components/ui/input-group.tsx
 */

import * as React from "react";

import { cn } from "@/utils/cn";
import { Input } from "@/components/Input";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

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

export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLSpanElement> {}

const InputGroupAddon = React.forwardRef<HTMLSpanElement, InputGroupAddonProps>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-input-group-addon
    className={cn("rounded-md first:rounded-r-none last:rounded-l-none", className)}
    {...props}
  />
));
InputGroupAddon.displayName = "InputGroupAddon";

export interface InputGroupInputProps extends InputProps {
  /**
   * Adjusts rounding/borders when used inside an `InputGroup`.
   * @default "middle"
   */
  position?: "left" | "middle" | "right";
}

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



