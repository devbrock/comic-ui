import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Empty } from "./Empty";

const meta = {
  component: Empty,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Empty {...(args as React.ComponentProps<typeof Empty>)} />;
  },
};
