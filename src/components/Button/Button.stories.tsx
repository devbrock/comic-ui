import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Button } from "./Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "impact",
        "hero",
        "heroBlue",
        "mutant",
        "gamma",
        "burst",
      ],
    },
    size: { control: "radio", options: ["default", "sm", "lg", "xl", "icon"] },
  },
  render: (args) => {
    return (
      <Button {...(args as React.ComponentProps<typeof Button>)}>
        {args.size === "icon" ? (
          <span aria-hidden="true" className="text-lg leading-none">
            ★
          </span>
        ) : (
          "Pow!"
        )}
      </Button>
    );
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => {
    const variantOptions = [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
      "impact",
      "hero",
      "heroBlue",
      "mutant",
      "gamma",
      "burst",
    ] as const;

    const sizeOptions = ["default", "sm", "lg", "xl", "icon"] as const;

    type ButtonVariant = (typeof variantOptions)[number];
    type ButtonSize = (typeof sizeOptions)[number];

    type VariantColumnSpec = {
      variant: ButtonVariant;
      header: string;
    };

    type RowSpec = {
      description: string;
      size: ButtonSize;
      disabled?: boolean;
      prefix?: boolean;
      suffix?: boolean;
      isLoading?: boolean;
      /**
       * Only visually affects the `link` variant (others ignore it safely).
       */
      noUnderline?: boolean;
    };

    /**
     * Renders button label content with optional prefix/suffix “icons”.
     * We use simple arrows so the story stays dependency-free.
     */
    function ButtonLabel(props: {
      prefix?: boolean;
      suffix?: boolean;
      children?: React.ReactNode;
    }) {
      const { prefix, suffix, children } = props;
      return (
        <>
          {prefix ? (
            <span aria-hidden="true" className="-ml-1 text-xl leading-none">
              ←
            </span>
          ) : null}
          <span>{children}</span>
          {suffix ? (
            <span aria-hidden="true" className="-mr-1 text-xl leading-none">
              →
            </span>
          ) : null}
        </>
      );
    }

    function LoadingGlyph() {
      return (
        <span
          aria-hidden="true"
          className="inline-block size-5 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      );
    }

    /**
     * Creates readable headers from `variant` ids:
     * - `heroBlue` -> `Hero Blue`
     * - `gamma` -> `Gamma`
     */
    function toHeader(variant: ButtonVariant): string {
      return variant
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/^\w/, (c) => c.toUpperCase());
    }

    const columns: VariantColumnSpec[] = variantOptions.map((variant) => ({
      variant,
      header: toHeader(variant),
    }));

    /**
     * A single, widened shape for scenario rows.
     *
     * Without this, TypeScript infers a union of object literals (because some
     * entries omit keys), which makes reads like `scenario.disabled` fail.
     */
    type ScenarioOption = {
      label: string;
      disabled?: boolean;
      prefix?: boolean;
      suffix?: boolean;
      isLoading?: boolean;
      noUnderline?: boolean;
    };

    const scenarioOptions: readonly ScenarioOption[] = [
      {
        label: "disabled, prefix, suffix",
        disabled: true,
        prefix: true,
        suffix: true,
      },
      { label: "disabled, prefix", disabled: true, prefix: true },
      { label: "disabled, suffix", disabled: true, suffix: true },
      { label: "disabled", disabled: true },
      { label: "prefix, suffix", prefix: true, suffix: true },
      { label: "prefix", prefix: true },
      { label: "suffix", suffix: true },
      { label: "Default" },
      { label: "isLoading", isLoading: true },
      { label: "default, no underline", noUnderline: true },
      { label: "disabled, no underline", disabled: true, noUnderline: true },
    ];

    const rows: RowSpec[] = sizeOptions.flatMap((size) =>
      scenarioOptions.map((scenario) => ({
        description: `${scenario.label} · size=${size}`,
        size,
        disabled: scenario.disabled,
        prefix: scenario.prefix,
        suffix: scenario.suffix,
        isLoading: scenario.isLoading,
        noUnderline: scenario.noUnderline,
      }))
    );

    return (
      <div className="max-w-full overflow-x-auto">
        <div
          className="grid gap-x-10 gap-y-6 items-center"
          style={{
            gridTemplateColumns: `240px repeat(${columns.length}, minmax(140px, 1fr))`,
          }}
        >
          <div className="text-base font-semibold">Description</div>
          {columns.map((col) => (
            <div key={col.variant} className="text-base font-semibold">
              {col.header}
            </div>
          ))}

          {rows.map((row) => (
            <React.Fragment key={row.description}>
              <div className="text-sm font-semibold">{row.description}</div>

              {columns.map((col) => {
                const linkUnderlineClass =
                  row.noUnderline && col.variant === "link"
                    ? "no-underline hover:no-underline"
                    : undefined;

                const disabled = Boolean(row.disabled || row.isLoading);
                const ariaBusy = row.isLoading ? true : undefined;

                return (
                  <div
                    key={`${row.description}:${col.variant}`}
                    className="flex items-center"
                  >
                    <Button
                      variant={col.variant}
                      size={row.size}
                      disabled={disabled}
                      aria-busy={ariaBusy}
                      className={linkUnderlineClass}
                    >
                      {row.isLoading ? (
                        <LoadingGlyph />
                      ) : (
                        <ButtonLabel prefix={row.prefix} suffix={row.suffix}>
                          {row.size === "icon" ? (
                            <span
                              aria-hidden="true"
                              className="text-lg leading-none"
                            >
                              ★
                            </span>
                          ) : (
                            "Label"
                          )}
                        </ButtonLabel>
                      )}
                    </Button>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
};
