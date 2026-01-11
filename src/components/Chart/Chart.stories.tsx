import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ChartContainer } from "./Chart";

const meta = {
  component: ChartContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <ChartContainer {...(args as React.ComponentProps<typeof ChartContainer>)} />;
  },
};
