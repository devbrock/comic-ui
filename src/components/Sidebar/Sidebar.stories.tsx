import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { SidebarMenuButton, SidebarProvider } from "./Sidebar";

const meta = {
  component: SidebarMenuButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SidebarMenuButton>;

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
      <SidebarProvider>
        <SidebarMenuButton {...(args as React.ComponentProps<typeof SidebarMenuButton>)}>
          Inbox
        </SidebarMenuButton>
      </SidebarProvider>
    );
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => {
    const variantOptions = ["default", "outline"] as const;
    const sizeOptions = ["default", "sm", "lg"] as const;

    type SidebarMenuButtonVariant = (typeof variantOptions)[number];
    type SidebarMenuButtonSize = (typeof sizeOptions)[number];

    type VariantColumnSpec = {
      variant: SidebarMenuButtonVariant;
      header: string;
    };

    type ScenarioSpec = {
      label: string;
      disabled?: boolean;
      isActive?: boolean;
    };

    type RowSpec = {
      description: string;
      size: SidebarMenuButtonSize;
      disabled?: boolean;
      isActive?: boolean;
    };

    /**
     * Creates readable headers from `variant` ids:
     * - `default` -> `Default`
     */
    function toHeader(variant: SidebarMenuButtonVariant): string {
      return variant.replace(/^\w/, (c) => c.toUpperCase());
    }

    const columns: VariantColumnSpec[] = variantOptions.map((variant) => ({
      variant,
      header: toHeader(variant),
    }));

    const scenarioOptions: readonly ScenarioSpec[] = [
      { label: "Default" },
      { label: "active", isActive: true },
      { label: "disabled", disabled: true },
      { label: "disabled, active", disabled: true, isActive: true },
    ];

    const rows: RowSpec[] = sizeOptions.flatMap((size) =>
      scenarioOptions.map((scenario) => ({
        description: `${scenario.label} · size=${size}`,
        size,
        disabled: scenario.disabled,
        isActive: scenario.isActive,
      }))
    );

    return (
      <SidebarProvider>
        <div className="max-w-full overflow-x-auto">
          <div
            className="grid gap-x-10 gap-y-6 items-center"
            style={{
              gridTemplateColumns: `240px repeat(${columns.length}, minmax(220px, 1fr))`,
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
                    <SidebarMenuButton
                      variant={col.variant}
                      size={row.size}
                      disabled={row.disabled}
                      isActive={row.isActive}
                    >
                      Inbox
                    </SidebarMenuButton>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SidebarProvider>
    );
  },
};
