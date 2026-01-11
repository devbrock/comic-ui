import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Skeleton } from "./Skeleton";

const meta = {
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Skeleton {...(args as React.ComponentProps<typeof Skeleton>)} />;
  },
};
