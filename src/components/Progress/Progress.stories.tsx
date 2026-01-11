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
    return <Progress {...(args as React.ComponentProps<typeof Progress>)} />;
  },
};
