import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./Tooltip";

const meta = {
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen {...(args as React.ComponentProps<typeof Tooltip>)}>
          <TooltipTrigger asChild>
            <button className="border-2 border-ink bg-card px-3 py-2 font-display uppercase shadow-panel">
              Hover target
            </button>
          </TooltipTrigger>
          <TooltipContent>
            Tip: This is a tooltip.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
