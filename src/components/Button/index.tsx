import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";

/**
 * Internal style builder for the button.
 *
 * Note: Per your constraints, this uses **only TailwindCSS classes** (no design tokens).
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 select-none",
    "rounded-md border-2 border-black font-semibold",
    "transition-[transform,box-shadow,background-color,color,opacity] duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    // "comic-book" punch
    "shadow-[3px_3px_0_0_#000]",
    "active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0_0_0_0_#000]",
  ].join(" "),
  {
    variants: {
      variant: {
        standard: "bg-white text-black hover:bg-neutral-100",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "standard",
      size: "md",
    },
  }
);

type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;

/**
 * Common props for `Button.Standard` and `Button.Destructive`.
 */
export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> & {
  /**
   * Render as a child component (e.g. a link) while keeping button styles.
   * Useful for styling `<a>` / router links as a button.
   */
  asChild?: boolean;
  /**
   * Button size preset.
   */
  size?: NonNullable<VariantProps<typeof buttonVariants>["size"]>;
};

type ButtonRootProps = ButtonProps & {
  variant: ButtonVariant;
};

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonRootProps>(
  ({ asChild = false, className, size, variant, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        // Avoid accidental form submissions unless explicitly set.
        type={asChild ? undefined : type ?? "button"}
        {...props}
      />
    );
  }
);
ButtonRoot.displayName = "ButtonRoot";

/**
 * Standard button variant.
 */
export const ButtonStandard = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonRoot ref={ref} variant="standard" {...props} />
);
ButtonStandard.displayName = "ButtonStandard";

/**
 * Danger/Destructive button variant.
 */
export const ButtonDestructive = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => <ButtonRoot ref={ref} variant="destructive" {...props} />);
ButtonDestructive.displayName = "ButtonDestructive";

export const Button = {
  Standard: ButtonStandard,
  Destructive: ButtonDestructive,
};
