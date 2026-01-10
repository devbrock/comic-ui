import { cva } from "class-variance-authority";

import type { ButtonVariant } from "./Button";

export type ButtonSize = "8" | "10" | "12";

/**
 * CVA for the button outer container sizing and rounding.
 *
 * Note: the reference library uses custom typography/min-width utilities.
 * This implementation uses Tailwind defaults while keeping the same size API.
 */
const buttonSizeCva = cva("", {
  variants: {
    size: {
      "8": "",
      "10": "",
      "12": "",
    },
    variant: {
      primary: "",
      secondary: "",
      "tertiary-brand": "",
      "tertiary-neutral": "",
    },
    isIcon: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // Non-icon primary/secondary variants
    {
      size: "8",
      isIcon: false,
      variant: ["primary", "secondary"],
      class: "px-2 h-8 min-w-16 text-sm font-semibold rounded-lg",
    },
    {
      size: "10",
      isIcon: false,
      variant: ["primary", "secondary"],
      class: "px-3 h-10 min-w-20 text-sm font-semibold rounded-xl",
    },
    {
      size: "12",
      isIcon: false,
      variant: ["primary", "secondary"],
      class: "px-4 h-12 min-w-24 text-base font-semibold rounded-xl",
    },

    // Non-icon tertiary variants
    {
      size: "8",
      isIcon: false,
      variant: ["tertiary-brand", "tertiary-neutral"],
      class: "px-0 h-8 text-sm font-semibold rounded-lg",
    },
    {
      size: "10",
      isIcon: false,
      variant: ["tertiary-brand", "tertiary-neutral"],
      class: "px-0 h-10 text-sm font-semibold rounded-xl",
    },
    {
      size: "12",
      isIcon: false,
      variant: ["tertiary-brand", "tertiary-neutral"],
      class: "px-0 h-12 text-base font-semibold rounded-xl",
    },

    // Icon sizes
    {
      size: "8",
      isIcon: true,
      variant: ["primary", "tertiary-brand", "tertiary-neutral"],
      class: "p-2 h-8 w-8 rounded-lg",
    },
    {
      size: "10",
      isIcon: true,
      variant: ["primary", "tertiary-brand", "tertiary-neutral"],
      class: "p-2.5 h-10 w-10 rounded-xl",
    },
    {
      size: "12",
      isIcon: true,
      variant: ["primary", "tertiary-brand", "tertiary-neutral"],
      class: "p-3 h-12 w-12 rounded-xl",
    },

    // Icon sizes (secondary uses border, so slightly different padding)
    {
      size: "8",
      isIcon: true,
      variant: "secondary",
      class: "p-[0.375rem] h-8 w-8 rounded-lg",
    },
    {
      size: "10",
      isIcon: true,
      variant: "secondary",
      class: "p-[0.625rem] h-10 w-10 rounded-xl",
    },
    {
      size: "12",
      isIcon: true,
      variant: "secondary",
      class: "p-[0.75rem] h-12 w-12 rounded-xl",
    },
  ],
  defaultVariants: {
    size: "12",
    variant: "primary",
    isIcon: false,
  },
});

export const buttonSize = (size: ButtonSize, variant?: ButtonVariant, isIcon?: boolean) =>
  buttonSizeCva({ size, variant, isIcon });

/**
 * CVA for optional inner label padding sizing.
 * (Included for parity with the reference library; not currently used by `Button`.)
 */
const buttonLabelSizeCva = cva("", {
  variants: {
    size: {
      "8": "",
      "10": "",
      "12": "",
    },
    variant: {
      primary: "",
      secondary: "",
      "tertiary-brand": "",
      "tertiary-neutral": "",
    },
  },
  compoundVariants: [
    // Primary/secondary
    { size: ["8", "10"], variant: ["primary", "secondary"], class: "px-1" },
    { size: "12", variant: ["primary", "secondary"], class: "px-2" },
    // Tertiary
    {
      size: ["8", "10", "12"],
      variant: ["tertiary-brand", "tertiary-neutral"],
      class: "px-0",
    },
  ],
  defaultVariants: {
    size: "12",
    variant: "primary",
  },
});

export const buttonLabelSize = (size: ButtonSize, variant?: ButtonVariant) =>
  buttonLabelSizeCva({ size, variant });


