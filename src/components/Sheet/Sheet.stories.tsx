import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./Sheet";

const meta = {
  component: Sheet,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    side: "top",
  },
  argTypes: {
    side: { control: "radio", options: ["top","bottom","left","right"] },
  },
  render: (args) => {
    return (
      <Sheet defaultOpen>
        <SheetTrigger asChild>
          <button className="border px-3 py-2">Open</button>
        </SheetTrigger>
        <SheetContent side={args.side}>
          <SheetHeader>
            <SheetTitle>Sheet</SheetTitle>
            <SheetDescription>Slide-over content.</SheetDescription>
          </SheetHeader>
          <div className="text-sm">Body</div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true }, layout: "padded" },
  render: () => {
    const sideOptions = ["top", "bottom", "left", "right"] as const;
    type SheetSide = (typeof sideOptions)[number];

    type VariantColumnSpec = {
      side: SheetSide;
      header: string;
    };

    type RowSpec = {
      description: string;
    };

    /**
     * Creates readable headers from `side` ids:
     * - `top` -> `Top`
     */
    function toHeader(side: SheetSide): string {
      return side.replace(/^\w/, (c) => c.toUpperCase());
    }

    function SheetPreviewCell(props: { side: SheetSide }) {
      const { side } = props;
      const [open, setOpen] = React.useState(false);

      return (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="border px-3 py-2">Open</button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet</SheetTitle>
              <SheetDescription>Slide-over content.</SheetDescription>
            </SheetHeader>
            <div className="text-sm">Body</div>
          </SheetContent>
        </Sheet>
      );
    }

    const columns: VariantColumnSpec[] = sideOptions.map((side) => ({
      side,
      header: toHeader(side),
    }));

    const rows: RowSpec[] = [{ description: "Preview (click Open)" }];

    return (
      <div className="max-w-full overflow-x-auto">
        <div
          className="grid gap-x-10 gap-y-6 items-center"
          style={{
            gridTemplateColumns: `240px repeat(${columns.length}, minmax(160px, 1fr))`,
          }}
        >
          <div className="text-base font-semibold">Description</div>
          {columns.map((col) => (
            <div key={col.side} className="text-base font-semibold">
              {col.header}
            </div>
          ))}

          {rows.map((row) => (
            <React.Fragment key={row.description}>
              <div className="text-sm font-semibold">{row.description}</div>
              {columns.map((col) => (
                <div key={`${row.description}:${col.side}`} className="flex items-center">
                  <SheetPreviewCell side={col.side} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
};
