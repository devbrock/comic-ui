import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

const meta = {
  component: Popover,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: () => {
    return (
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button className="border px-3 py-2">Open</button>
        </PopoverTrigger>
        <PopoverContent className="w-56">Popover content</PopoverContent>
      </Popover>
    );
  },
};
