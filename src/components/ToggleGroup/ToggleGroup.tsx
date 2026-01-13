/**
 * Migrated from: original_version/src/components/ui/toggle-group.tsx
 */

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";
import { toggleVariants } from "@/components/Toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

/**
 * Props specific to `ToggleGroup` (shown first in IntelliSense).
 */
type ToggleGroupOwnProps = VariantProps<typeof toggleVariants>;

/**
 * Full props for `ToggleGroup`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * Radix/HTML props).
 */
type ToggleGroupRootProps = ToggleGroupOwnProps &
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>;

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupRootProps
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

/**
 * Props specific to `ToggleGroupItem` (shown first in IntelliSense).
 */
type ToggleGroupItemOwnProps = VariantProps<typeof toggleVariants>;

/**
 * Full props for `ToggleGroupItem`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * Radix/HTML props).
 */
type ToggleGroupItemProps = ToggleGroupItemOwnProps &
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

