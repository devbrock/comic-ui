import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Toaster } from "./Toaster";

const meta = {
  component: Toaster,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Toaster {...(args as React.ComponentProps<typeof Toaster>)} />;
  },
};
