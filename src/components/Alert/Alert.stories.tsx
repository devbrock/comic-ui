import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Alert, AlertDescription, AlertTitle } from "./Alert";

const meta = {
  component: Alert,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
  },
  argTypes: {
    variant: { control: "radio", options: ["default","destructive"] },
  },
  render: (args) => {
    return (
      <Alert {...(args as React.ComponentProps<typeof Alert>)}>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>This is an alert message.</AlertDescription>
      </Alert>
    );
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => {
    const variantOptions = ["default", "destructive"] as const;
    type AlertVariant = (typeof variantOptions)[number];

    type VariantColumnSpec = {
      variant: AlertVariant;
      header: string;
    };

    type RowSpec = {
      description: string;
    };

    /**
     * Creates readable headers from `variant` ids:
     * - `default` -> `Default`
     */
    function toHeader(variant: AlertVariant): string {
      return variant.replace(/^\w/, (c) => c.toUpperCase());
    }

    const columns: VariantColumnSpec[] = variantOptions.map((variant) => ({
      variant,
      header: toHeader(variant),
    }));

    const rows: RowSpec[] = [{ description: "Default" }];

    return (
      <div className="max-w-full overflow-x-auto">
        <div
          className="grid gap-x-10 gap-y-6 items-center"
          style={{
            gridTemplateColumns: `240px repeat(${columns.length}, minmax(180px, 1fr))`,
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
                  <Alert variant={col.variant}>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>This is an alert message.</AlertDescription>
                  </Alert>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
};
