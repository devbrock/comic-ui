/**
 * Migrated from: original_version/src/components/ui/button.tsx
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-display text-lg uppercase tracking-wide ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-3 border-ink shadow-ink hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:animate-impact",
        destructive:
          "bg-destructive text-destructive-foreground border-3 border-ink shadow-ink hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        outline:
          "border-3 border-ink bg-background hover:bg-muted shadow-panel hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground border-3 border-ink shadow-ink hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground border-3 border-transparent hover:border-ink",
        link: 
          "text-primary underline-offset-4 hover:underline font-body normal-case tracking-normal",
        // Comic Book Special Variants
        impact:
          "bg-hero-yellow text-ink border-4 border-ink shadow-impact hover:animate-shake active:animate-impact relative overflow-hidden",
        hero:
          "bg-hero-red text-primary-foreground border-4 border-ink shadow-impact hover:bg-hero-red/90 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:animate-impact",
        heroBlue:
          "bg-hero-blue text-secondary-foreground border-4 border-ink shadow-impact hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
        mutant:
          "bg-mutant-purple text-primary-foreground border-4 border-ink shadow-impact hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
        gamma:
          "bg-gamma-green text-primary-foreground border-4 border-ink shadow-impact hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
        burst:
          "bg-gradient-to-br from-hero-yellow via-cosmic-orange to-hero-red text-ink border-4 border-ink shadow-impact hover:animate-pulse-glow",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-base",
        lg: "h-14 px-10 text-xl",
        xl: "h-16 px-12 text-2xl",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Props specific to `Button` (shown first in IntelliSense).
 */
export interface ButtonOwnProps extends VariantProps<typeof buttonVariants> {
  /**
   * When true, renders a Radix `Slot` so you can pass another component as the child.
   */
  asChild?: boolean;
}

/**
 * Full props for `Button`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * hundreds of native button attributes).
 */
export type ButtonProps = ButtonOwnProps & React.ComponentPropsWithoutRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

