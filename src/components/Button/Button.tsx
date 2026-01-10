import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { ButtonBase, type ButtonBaseProps } from "./ButtonBase";
import { buttonSize, type ButtonSize } from "./buttonSize";
import {
  primaryButtonStyles,
  primaryInverseButtonStyles,
  secondaryButtonStyles,
  secondaryInverseButtonStyles,
  tertiaryBrandButtonStyles,
  tertiaryNeutralButtonStyles,
  tertiaryBrandInverseButtonStyles,
  tertiaryNeutralInverseButtonStyles,
  primaryDestructiveButtonStyles,
  secondaryDestructiveButtonStyles,
  tertiaryBrandDestructiveButtonStyles,
  type ButtonVariantTemplate,
} from "./buttonStyles";

const standardLoadingStyles =
  "cursor-wait pointer-events-none opacity-70 enabled:hover:opacity-70";

const inverseLoadingStyles =
  "cursor-wait pointer-events-none opacity-70 enabled:hover:opacity-70";

const destructiveLoadingStyles =
  "cursor-wait pointer-events-none opacity-70 enabled:hover:opacity-70";

const baseComicPressableStyles = cn(
  "inline-flex items-center justify-center gap-2 select-none",
  "transition-[transform,box-shadow,background-color,color,opacity] duration-150",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
  "disabled:pointer-events-none disabled:opacity-50",
  // comic punch
  "shadow-[3px_3px_0_0_#000]",
  "active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0_0_0_0_#000]",
);

export const buttonStandardVariants = cva<ButtonVariantTemplate>(
  cn("w-fit flex items-center justify-center gap-1", baseComicPressableStyles),
  {
    variants: {
      variant: {
        primary: primaryButtonStyles,
        secondary: secondaryButtonStyles,
        "tertiary-brand": tertiaryBrandButtonStyles,
        "tertiary-neutral": tertiaryNeutralButtonStyles,
      },
      icon: {
        true: "",
        false: "",
      },
      floating: {
        true: "shadow-[6px_6px_0_0_#000]",
        false: "",
      },
      isFluid: {
        true: "w-full justify-center",
        false: "",
      },
      isRound: {
        true: "rounded-full h-auto",
        false: "",
      },
      isLoading: {
        true: standardLoadingStyles,
        false: "",
      },
      hasUnderline: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        variant: ["tertiary-brand", "tertiary-neutral"],
        className: "bg-transparent",
      },
      {
        hasUnderline: true,
        variant: ["tertiary-brand", "tertiary-neutral"],
        className: "underline underline-offset-4",
      },
      {
        icon: true,
        isLoading: true,
        className: standardLoadingStyles,
      },
    ],
    defaultVariants: {
      variant: "primary",
      isRound: false,
      hasUnderline: true,
    },
  },
);

const buttonLoadingSpinnerSizes: Record<ButtonSize, { outer: string; inner: string }> = {
  "8": { outer: "h-4 w-4", inner: "border-2" },
  "10": { outer: "h-4 w-4", inner: "border-2" },
  "12": { outer: "h-5 w-5", inner: "border-2" },
};

const defaultButtonSize: ButtonSize = "12";

export type ButtonVariant = VariantProps<typeof buttonStandardVariants>["variant"];

interface BaseButtonProps
  extends Omit<ButtonBaseProps, "disabled">,
    Omit<VariantProps<typeof buttonStandardVariants>, "isLoading" | "variant"> {
  children: React.ReactNode;
  disabled?: boolean;
  size?: ButtonSize;
}

export type WithConditionalUnderline<
  T extends ButtonVariant,
  Props,
> = T extends "tertiary-brand" | "tertiary-neutral"
  ? Props & { variant?: T; hasUnderline?: boolean }
  : Props & { variant?: T };

export type ButtonProps = WithConditionalUnderline<ButtonVariant, BaseButtonProps>;

export type PropsWithConditionalUnderline<Props> = WithConditionalUnderline<
  ButtonVariant,
  Props
>;

const ButtonSpinner = ({
  size,
  ariaLabel,
  variant,
}: {
  size: ButtonSize;
  ariaLabel: string;
  variant: "neutral" | "inverse";
}) => {
  const spinnerSize = buttonLoadingSpinnerSizes[size];
  const borderColor =
    variant === "inverse" ? "border-white/70 border-t-white" : "border-black/40 border-t-black";

  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={cn("inline-flex items-center justify-center", spinnerSize.outer)}
    >
      <span
        className={cn(
          "animate-spin rounded-full border-solid",
          spinnerSize.outer,
          spinnerSize.inner,
          borderColor,
        )}
      />
    </span>
  );
};

export const ButtonStandard = ({
  children,
  variant,
  className,
  size = defaultButtonSize,
  isFluid,
  isLoading,
  icon,
  isRound,
  floating,
  hasUnderline,
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase
      className={cn(
        !floating && buttonSize(size, variant, icon || false),
        buttonStandardVariants({
          variant,
          className,
          isFluid,
          icon,
          isRound,
          floating,
          isLoading,
          hasUnderline,
        }),
      )}
      isLoading={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner size={size} ariaLabel="Loading" variant="neutral" />
      ) : (
        children
      )}
    </ButtonBase>
  );
};

export const buttonInverseVariants = cva<ButtonVariantTemplate>(
  cn("w-fit flex items-center justify-center gap-1", baseComicPressableStyles),
  {
    variants: {
      variant: {
        primary: primaryInverseButtonStyles,
        secondary: secondaryInverseButtonStyles,
        "tertiary-brand": tertiaryBrandInverseButtonStyles,
        "tertiary-neutral": tertiaryNeutralInverseButtonStyles,
      },
      icon: {
        true: "",
        false: "",
      },
      floating: {
        true: "shadow-[6px_6px_0_0_#000]",
        false: "",
      },
      isFluid: {
        true: "w-full justify-center",
        false: "",
      },
      isRound: {
        true: "rounded-full h-auto",
        false: "",
      },
      isLoading: {
        true: inverseLoadingStyles,
        false: "",
      },
      hasUnderline: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        variant: ["tertiary-brand", "tertiary-neutral"],
        className: "bg-transparent",
      },
      {
        hasUnderline: true,
        variant: ["tertiary-brand", "tertiary-neutral"],
        className: "underline underline-offset-4",
      },
      {
        icon: true,
        isLoading: true,
        className: inverseLoadingStyles,
      },
    ],
    defaultVariants: {
      variant: "primary",
      isRound: false,
      hasUnderline: true,
    },
  },
);

const ButtonInverse = ({
  children,
  variant,
  className,
  size = defaultButtonSize,
  isFluid,
  isLoading,
  icon,
  isRound,
  floating,
  hasUnderline,
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase
      className={cn(
        !floating && buttonSize(size, variant, icon || false),
        buttonInverseVariants({
          variant,
          className,
          isFluid,
          icon,
          isRound,
          floating,
          isLoading,
          hasUnderline,
        }),
      )}
      isLoading={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner size={size} ariaLabel="Loading" variant="inverse" />
      ) : (
        children
      )}
    </ButtonBase>
  );
};

export const buttonDestructiveVariants = cva<ButtonVariantTemplate>(
  cn("w-fit flex items-center justify-center gap-1", baseComicPressableStyles),
  {
    variants: {
      variant: {
        primary: primaryDestructiveButtonStyles,
        secondary: secondaryDestructiveButtonStyles,
        "tertiary-brand": tertiaryBrandDestructiveButtonStyles,
      },
      icon: {
        true: "",
        false: "",
      },
      floating: {
        true: "shadow-[6px_6px_0_0_#000]",
        false: "",
      },
      isFluid: {
        true: "w-full justify-center",
        false: "",
      },
      isRound: {
        true: "rounded-full h-auto",
        false: "",
      },
      isLoading: {
        true: destructiveLoadingStyles,
        false: "",
      },
      hasUnderline: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        variant: "tertiary-brand",
        className: "bg-transparent",
      },
      {
        hasUnderline: true,
        variant: "tertiary-brand",
        className: "underline underline-offset-4",
      },
      {
        icon: true,
        isLoading: true,
        className: destructiveLoadingStyles,
      },
    ],
    defaultVariants: {
      variant: "primary",
      isRound: false,
      hasUnderline: true,
    },
  },
);

const ButtonDestructive = ({
  children,
  variant,
  className,
  size = defaultButtonSize,
  isFluid,
  isLoading,
  icon,
  isRound,
  floating,
  hasUnderline,
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase
      className={cn(
        !floating && buttonSize(size, variant, icon || false),
        buttonDestructiveVariants({
          variant,
          className,
          isFluid,
          icon,
          isRound,
          floating,
          isLoading,
          hasUnderline,
        }),
      )}
      isLoading={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner size={size} ariaLabel="Loading" variant="neutral" />
      ) : (
        children
      )}
    </ButtonBase>
  );
};

export const Button = {
  Standard: ButtonStandard,
  Inverse: ButtonInverse,
  Destructive: ButtonDestructive,
};


