import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Checkbox } from "./Checkbox";

const meta = {
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <label className="flex items-center gap-2">
        <Checkbox {...(args as React.ComponentProps<typeof Checkbox>)} />
        <span className="text-sm">Checkbox</span>
      </label>
    );
  },
};
