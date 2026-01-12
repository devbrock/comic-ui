import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Progress } from "./Progress";

const meta = {
  component: Progress,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[360px] space-y-3">
        <div className="flex items-center justify-between font-body text-sm">
          <span>Loading</span>
          <span className="text-muted-foreground">65%</span>
        </div>
        <Progress value={65} {...(args as React.ComponentProps<typeof Progress>)} />
      </div>
    );
  },
};
