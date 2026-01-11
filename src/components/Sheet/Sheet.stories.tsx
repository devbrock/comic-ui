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
        <SheetContent>
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
  parameters: { controls: { disable: true } },
  render: () => {
    const variants = {
  "side": [
    "top",
    "bottom",
    "left",
    "right"
  ]
};
    const keys = Object.keys(variants);

    /** @type {Array<Record<string, string>>} */
    const combos = [];

    const build = (idx, acc) => {
      if (idx >= keys.length) {
        combos.push(acc);
        return;
      }
      const key = keys[idx];
      const opts = variants[key] ?? [];
      for (const opt of opts) {
        build(idx + 1, { ...acc, [key]: opt });
      }
    };

    build(0, {});

    return (
      <div className="flex flex-col gap-4">
        {combos.map((combo) => (
          <div key={JSON.stringify(combo)} className="flex items-center gap-4">
            <div className="w-64 font-mono text-xs">{JSON.stringify(combo)}</div>
            <Sheet {...(combo as React.ComponentProps<typeof Sheet>)} />
          </div>
        ))}
      </div>
    );
  },
};
