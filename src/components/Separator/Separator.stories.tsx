import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Separator } from "./Separator";

const meta = {
  component: Separator,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-6 w-[360px]">
        <div className="rounded-md border-2 border-ink bg-card p-4 shadow-panel">
          <div className="font-display">Section A</div>
          <Separator className="my-3" {...(args as React.ComponentProps<typeof Separator>)} />
          <div className="font-display">Section B</div>
        </div>

        <div className="flex items-stretch justify-between rounded-md border-2 border-ink bg-card p-4 shadow-panel">
          <div className="font-display">Left</div>
          <Separator
            orientation="vertical"
            className="mx-4"
            {...(args as React.ComponentProps<typeof Separator>)}
          />
          <div className="font-display">Right</div>
        </div>
      </div>
    );
  },
};
