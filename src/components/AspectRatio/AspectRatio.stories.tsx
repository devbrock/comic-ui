import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { AspectRatio } from "./AspectRatio";

const meta = {
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <AspectRatio {...(args as React.ComponentProps<typeof AspectRatio>)} />;
  },
};
