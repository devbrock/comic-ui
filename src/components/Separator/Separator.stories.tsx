import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Separator } from "./Separator";

const meta = {
  component: Separator,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Separator {...(args as React.ComponentProps<typeof Separator>)} />;
  },
};
