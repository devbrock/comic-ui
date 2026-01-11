/**
 * Migrated from: original_version/src/components/ui/typography.tsx
 */

import * as React from "react";

import { cn } from "@/utils/cn";

/**
 * Typography primitives for Marvelous UI.
 *
 * These are intentionally small, composable building blocks (H1/H2/P/etc.)
 * so they can be used across showcases and real app screens consistently.
 */

export const H1 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<"h1">>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn("font-display text-6xl tracking-wide text-foreground", className)}
      {...props}
    />
  ),
);
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<"h2">>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("font-display text-4xl tracking-wide text-foreground", className)}
      {...props}
    />
  ),
);
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<"h3">>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-display text-2xl tracking-wide text-foreground", className)} {...props} />
  ),
);
H3.displayName = "H3";

export const H4 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<"h4">>(
  ({ className, ...props }, ref) => (
    <h4 ref={ref} className={cn("font-display text-xl tracking-wide text-foreground", className)} {...props} />
  ),
);
H4.displayName = "H4";

export const P = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<"p">>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("font-body text-base leading-7 text-foreground", className)} {...props} />
  ),
);
P.displayName = "P";

export const Small = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<"p">>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("font-body text-sm text-muted-foreground", className)} {...props} />
  ),
);
Small.displayName = "Small";

export const Muted = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<"p">>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("font-body text-sm text-muted-foreground", className)} {...props} />
  ),
);
Muted.displayName = "Muted";

export const Lead = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<"p">>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("font-body text-lg text-muted-foreground", className)} {...props} />
  ),
);
Lead.displayName = "Lead";

export const Blockquote = React.forwardRef<HTMLQuoteElement, React.ComponentPropsWithoutRef<"blockquote">>(
  ({ className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn("border-l-4 border-hero-red pl-4 italic font-body text-foreground", className)}
      {...props}
    />
  ),
);
Blockquote.displayName = "Blockquote";

export const InlineCode = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"code">>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn("bg-muted px-2 py-1 rounded border border-ink text-sm font-mono", className)}
      {...props}
    />
  ),
);
InlineCode.displayName = "InlineCode";

export const Pre = React.forwardRef<HTMLPreElement, React.ComponentPropsWithoutRef<"pre">>(
  ({ className, ...props }, ref) => (
    <pre ref={ref} className={cn("bg-muted p-4 rounded border-2 border-ink overflow-x-auto", className)} {...props} />
  ),
);
Pre.displayName = "Pre";



