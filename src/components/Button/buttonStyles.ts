const buttonVariantTemplate = {
  icon: {
    true: "",
    false: "",
  },
  floating: {
    true: "",
    false: "",
  },
  isFluid: {
    true: "",
    false: "",
  },
  isRound: {
    true: "",
    false: "",
  },
  isLoading: {
    true: "",
    false: "",
  },
  hasUnderline: {
    true: "",
    false: "",
  },
};

export type ButtonVariantTemplate = typeof buttonVariantTemplate & {
  variant: {
    primary: string[];
    secondary: string[];
    "tertiary-brand": string[];
    "tertiary-neutral"?: string[];
  };
};

/**
 * These style arrays intentionally use only Tailwind utilities (no token classes),
 * but preserve the reference component's conceptual variants and states.
 */

// Standard: Primary
const primaryButtonBaseStyles = [
  "bg-black text-white border-2 border-black",
  "disabled:bg-neutral-200 disabled:text-neutral-500 disabled:border-neutral-500",
];

export const primaryButtonStyles = [
  ...primaryButtonBaseStyles,
  "hover:enabled:bg-neutral-900",
  "active:enabled:bg-black",
];

// Standard: Secondary
const secondaryButtonBaseStyles = [
  "bg-white text-black border-2 border-black",
  "disabled:bg-white disabled:text-neutral-500 disabled:border-neutral-500",
];

export const secondaryButtonStyles = [
  ...secondaryButtonBaseStyles,
  "hover:enabled:bg-neutral-100",
  "active:enabled:bg-neutral-200",
];

// Standard: Tertiary (Brand)
const tertiaryBrandBaseStyles = [
  "bg-transparent text-black border-2 border-transparent",
  "disabled:text-neutral-500",
];

export const tertiaryBrandButtonStyles = [
  ...tertiaryBrandBaseStyles,
  "hover:enabled:bg-neutral-100",
  "active:enabled:bg-neutral-200",
];

// Standard: Tertiary (Neutral)
const tertiaryNeutralBaseStyles = [
  "bg-transparent text-neutral-800 border-2 border-transparent",
  "disabled:text-neutral-500",
];

export const tertiaryNeutralButtonStyles = [
  ...tertiaryNeutralBaseStyles,
  "hover:enabled:bg-neutral-100",
  "active:enabled:bg-neutral-200",
];

// Inverse: Primary
const primaryInverseButtonBaseStyles = [
  "bg-white text-black border-2 border-white",
  "disabled:bg-neutral-700 disabled:text-neutral-300 disabled:border-neutral-700",
];

export const primaryInverseButtonStyles = [
  ...primaryInverseButtonBaseStyles,
  "hover:enabled:bg-neutral-100",
  "active:enabled:bg-neutral-200",
];

// Inverse: Secondary
const secondaryInverseButtonBaseStyles = [
  "bg-transparent text-white border-2 border-white",
  "disabled:text-neutral-300 disabled:border-neutral-600",
];

export const secondaryInverseButtonStyles = [
  ...secondaryInverseButtonBaseStyles,
  "hover:enabled:bg-white hover:enabled:text-black",
  "active:enabled:bg-neutral-100 active:enabled:text-black",
];

// Inverse: Tertiary Brand
const tertiaryBrandInverseBaseStyles = [
  "bg-transparent text-white border-2 border-transparent",
  "disabled:text-neutral-300",
];

export const tertiaryBrandInverseButtonStyles = [
  ...tertiaryBrandInverseBaseStyles,
  "hover:enabled:bg-white/15",
  "active:enabled:bg-white/20",
];

// Inverse: Tertiary Neutral
const tertiaryNeutralInverseBaseStyles = [
  "bg-transparent text-white border-2 border-transparent",
  "disabled:text-neutral-300",
];

export const tertiaryNeutralInverseButtonStyles = [
  ...tertiaryNeutralInverseBaseStyles,
  "hover:enabled:bg-white/15",
  "active:enabled:bg-white/20",
];

// Destructive: Primary
const primaryDestructiveButtonBaseStyles = [
  "bg-red-600 text-white border-2 border-black",
  "disabled:bg-neutral-200 disabled:text-neutral-500 disabled:border-neutral-500",
];

export const primaryDestructiveButtonStyles = [
  ...primaryDestructiveButtonBaseStyles,
  "hover:enabled:bg-red-700",
  "active:enabled:bg-red-800",
];

// Destructive: Secondary
const secondaryDestructiveButtonBaseStyles = [
  "bg-white text-red-700 border-2 border-black",
  "disabled:text-neutral-500 disabled:border-neutral-500",
];

export const secondaryDestructiveButtonStyles = [
  ...secondaryDestructiveButtonBaseStyles,
  "hover:enabled:bg-red-700 hover:enabled:text-white",
  "active:enabled:bg-red-800 active:enabled:text-white",
];

// Destructive: Tertiary Brand
const tertiaryBrandDestructiveBaseStyles = [
  "bg-transparent text-red-700 border-2 border-transparent",
  "disabled:text-neutral-500",
];

export const tertiaryBrandDestructiveButtonStyles = [
  ...tertiaryBrandDestructiveBaseStyles,
  "hover:enabled:bg-red-700 hover:enabled:text-white",
  "active:enabled:bg-red-800 active:enabled:text-white",
];


