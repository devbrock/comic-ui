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
    return <Kbd {...(args as React.ComponentProps<typeof Kbd>)} />;
  },
};
