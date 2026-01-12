import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ScrollArea } from "./ScrollArea";

const meta = {
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
    return (
      <ScrollArea
        className="h-[220px] w-[320px] rounded-md border-2 border-ink bg-card p-3 shadow-panel"
        {...(args as React.ComponentProps<typeof ScrollArea>)}
      >
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item} className="rounded-md border border-border bg-background px-3 py-2 font-body text-sm">
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
    );
  },
};
