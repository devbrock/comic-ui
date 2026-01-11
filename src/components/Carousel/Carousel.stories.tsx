import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Carousel } from "./Carousel";

const meta = {
  component: Carousel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Carousel {...(args as React.ComponentProps<typeof Carousel>)} />;
  },
};
