import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Toggle } from "./Toggle";

const meta = {
  component: Toggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: { control: "radio", options: ["default","outline"] },
    size: { control: "radio", options: ["default","sm","lg"] },
  },
  render: (args) => {
    return (
      <Toggle {...(args as React.ComponentProps<typeof Toggle>)}>
        Toggle
      </Toggle>
    );
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => {
    const variantOptions = ["default", "outline"] as const;
    const sizeOptions = ["default", "sm", "lg"] as const;

    type ToggleVariant = (typeof variantOptions)[number];
    type ToggleSize = (typeof sizeOptions)[number];

    type VariantColumnSpec = {
      variant: ToggleVariant;
      header: string;
    };

    type ScenarioSpec = {
      label: string;
      disabled?: boolean;
      defaultPressed?: boolean;
    };

    type RowSpec = {
      description: string;
      size: ToggleSize;
      disabled?: boolean;
      defaultPressed?: boolean;
    };

    /**
     * Creates readable headers from `variant` ids:
     * - `default` -> `Default`
     */
    function toHeader(variant: ToggleVariant): string {
      return variant.replace(/^\w/, (c) => c.toUpperCase());
    }

    const columns: VariantColumnSpec[] = variantOptions.map((variant) => ({
      variant,
      header: toHeader(variant),
    }));

    const scenarioOptions: readonly ScenarioSpec[] = [
      { label: "Default" },
      { label: "pressed", defaultPressed: true },
      { label: "disabled", disabled: true },
      { label: "disabled, pressed", disabled: true, defaultPressed: true },
    ];

    const rows: RowSpec[] = sizeOptions.flatMap((size) =>
      scenarioOptions.map((scenario) => ({
        description: `${scenario.label} · size=${size}`,
        size,
        disabled: scenario.disabled,
        defaultPressed: scenario.defaultPressed,
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

              {columns.map((col) => (
                <div key={`${row.description}:${col.variant}`} className="flex items-center">
                  <Toggle
                    variant={col.variant}
                    size={row.size}
                    disabled={row.disabled}
                    defaultPressed={row.defaultPressed}
                  >
                    Toggle
                  </Toggle>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
};
