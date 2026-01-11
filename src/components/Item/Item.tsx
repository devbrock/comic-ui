/**
 * Migrated from: original_version/src/components/ui/item.tsx
 */

import * as React from "react";

import { cn } from "@/utils/cn";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A simple list "item card" used for compact data display.
 */
const Item = React.forwardRef<HTMLDivElement, ItemProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-start justify-between gap-4 rounded-md border-2 border-ink bg-card px-4 py-3 shadow-panel",
      className,
    )}
    {...props}
  />
));
Item.displayName = "Item";

export interface ItemTitleProps extends React.HTMLAttributes<HTMLDivElement> {}
const ItemTitle = React.forwardRef<HTMLDivElement, ItemTitleProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("font-display text-base", className)} {...props} />
));
ItemTitle.displayName = "ItemTitle";

export interface ItemDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}
const ItemDescription = React.forwardRef<HTMLDivElement, ItemDescriptionProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("font-body text-sm text-muted-foreground", className)} {...props} />
));
ItemDescription.displayName = "ItemDescription";

export { Item, ItemTitle, ItemDescription };



