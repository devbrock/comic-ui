import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Badge } from "./Badge";

const meta = {
  component: Badge,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
  },
  argTypes: {
    variant: { control: "radio", options: ["default","secondary","destructive","outline"] },
  },
  render: (args) => {
    return <Badge {...(args as React.ComponentProps<typeof Badge>)}>Badge</Badge>;
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => {
    const variantOptions = ["default", "secondary", "destructive", "outline"] as const;
    type BadgeVariant = (typeof variantOptions)[number];

    type VariantColumnSpec = {
      variant: BadgeVariant;
      header: string;
    };

    type RowSpec = {
      description: string;
    };

    /**
     * Creates readable headers from `variant` ids:
     * - `default` -> `Default`
     */
    function toHeader(variant: BadgeVariant): string {
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
                  <Badge variant={col.variant}>Badge</Badge>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
};
