import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Slider } from "./Slider";

const meta = {
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Slider {...(args as React.ComponentProps<typeof Slider>)} />;
  },
};
