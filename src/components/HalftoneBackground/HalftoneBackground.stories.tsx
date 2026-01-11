import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { HalftoneBackground } from "./HalftoneBackground";

const meta = {
  component: HalftoneBackground,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HalftoneBackground>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <HalftoneBackground {...(args as React.ComponentProps<typeof HalftoneBackground>)} />;
  },
};
