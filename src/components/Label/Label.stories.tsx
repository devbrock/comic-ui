import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Label } from "./Label";

const meta = {
  component: Label,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Label {...(args as React.ComponentProps<typeof Label>)} />;
  },
};
