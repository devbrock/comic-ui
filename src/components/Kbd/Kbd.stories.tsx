import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Kbd } from "./Kbd";

const meta = {
  component: Kbd,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Kbd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="flex items-center gap-2 font-body text-sm">
        <span>Press</span>
        <Kbd {...(args as React.ComponentProps<typeof Kbd>)}>⌘</Kbd>
        <Kbd {...(args as React.ComponentProps<typeof Kbd>)}>K</Kbd>
        <span>to search</span>
      </div>
    );
  },
};
