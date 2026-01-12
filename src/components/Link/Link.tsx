/**
 * Migrated from: original_version/src/components/ui/link.tsx
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";

/**
 * Framework-agnostic link.
 *
 * This component intentionally does **not** depend on any router library.
 * If you want to use React Router / Next.js / Remix, render their link via `asChild`.
 */
export type LinkState = Readonly<{
  /**
   * Optional "active" state controlled by the consumer.
   * Useful when integrating with router libraries.
   */
  isActive?: boolean;
  /**
   * Optional "pending" state controlled by the consumer.
   * Useful when integrating with router libraries.
   */
  isPending?: boolean;
}>;

export type LinkClassName = string | ((state: LinkState) => string);

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  /**
   * When true, renders a Radix `Slot` so you can pass a router link component as the child.
   */
  asChild?: boolean;

  /**
   * Optional router state (provided by the consumer).
   */
  isActive?: boolean;
  isPending?: boolean;

  /**
   * Class name or a function that can react to active/pending state.
   */
  className?: LinkClassName;

  /**
   * Convenience class names appended when active/pending.
   */
  activeClassName?: string;
  pendingClassName?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      asChild = false,
      className,
      activeClassName,
      pendingClassName,
      isActive,
      isPending,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "a";
    const state: LinkState = { isActive, isPending };

    const resolvedClassName =
      typeof className === "function" ? className(state) : className;

    return (
      <Comp
        ref={ref}
        className={cn(
          "cursor-pointer font-display uppercase tracking-wide underline-offset-4 hover:underline",
          resolvedClassName,
          isActive && activeClassName,
          isPending && pendingClassName
        )}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

