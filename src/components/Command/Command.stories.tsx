import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Command } from "./Command";

const meta = {
  component: Command,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Command {...(args as React.ComponentProps<typeof Command>)} />;
  },
};
