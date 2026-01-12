import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./Toast";

const meta = {
  component: Toast,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
  },
  argTypes: {
    variant: { control: "radio", options: ["default", "destructive"] },
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    return (
      <ToastProvider>
        <button className="border px-3 py-2" onClick={() => setOpen(true)}>
          Show toast
        </button>
        <Toast open={open} onOpenChange={setOpen} variant={args.variant}>
          <div className="grid gap-1">
            <ToastTitle>Scheduled</ToastTitle>
            <ToastDescription>Your meeting is set for 3pm.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => {
    const variantOptions = ["default", "destructive"] as const;
    type ToastVariant = (typeof variantOptions)[number];

    type VariantColumnSpec = {
      variant: ToastVariant;
      header: string;
    };

    type ScenarioSpec = {
      label: string;
      withAction?: boolean;
    };

    type RowSpec = {
      description: string;
      withAction?: boolean;
    };

    /**
     * Creates readable headers from `variant` ids:
     * - `default` -> `Default`
     */
    function toHeader(variant: ToastVariant): string {
      return variant.replace(/^\w/, (c) => c.toUpperCase());
    }

    function ToastPreviewCell(props: {
      variant: ToastVariant;
      withAction?: boolean;
    }) {
      const { variant, withAction } = props;
      const [open, setOpen] = React.useState(false);

      return (
        <>
          <button className="border px-3 py-2" onClick={() => setOpen(true)}>
            Show
          </button>
          <Toast open={open} onOpenChange={setOpen} variant={variant}>
            <div className="grid gap-1">
              <ToastTitle>Scheduled</ToastTitle>
              <ToastDescription>Your meeting is set for 3pm.</ToastDescription>
            </div>
            {withAction ? (
              <ToastAction altText="Undo" onClick={() => setOpen(false)}>
                Undo
              </ToastAction>
            ) : null}
            <ToastClose />
          </Toast>
        </>
      );
    }

    const columns: VariantColumnSpec[] = variantOptions.map((variant) => ({
      variant,
      header: toHeader(variant),
    }));

    const scenarioOptions: readonly ScenarioSpec[] = [
      { label: "Default" },
      { label: "with action", withAction: true },
    ];

    const rows: RowSpec[] = scenarioOptions.map((scenario) => ({
      description: scenario.label,
      withAction: scenario.withAction,
    }));

    return (
      <ToastProvider>
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
                  <div
                    key={`${row.description}:${col.variant}`}
                    className="flex items-center gap-2"
                  >
                    <ToastPreviewCell
                      variant={col.variant}
                      withAction={row.withAction}
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        <ToastViewport />
      </ToastProvider>
    );
  },
};
