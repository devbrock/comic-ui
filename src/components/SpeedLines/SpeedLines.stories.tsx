import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { SpeedLines } from "./SpeedLines";

const meta = {
  component: SpeedLines,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SpeedLines>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="relative h-[200px] w-[360px] overflow-hidden rounded-md border-2 border-ink bg-hero-yellow/20 shadow-panel">
        <SpeedLines direction="radial" intensity="medium" animated {...(args as React.ComponentProps<typeof SpeedLines>)} />
        <div className="relative z-10 p-4">
          <div className="font-display text-xl uppercase">Zoom!</div>
          <div className="mt-1 font-body text-sm text-muted-foreground">
            Speed lines are absolute-positioned, so they need a sized container.
          </div>
        </div>
      </div>
    );
  },
};
