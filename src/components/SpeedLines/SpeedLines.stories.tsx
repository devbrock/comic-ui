import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { SpeedLines } from "./SpeedLines";

const meta = {
  component: SpeedLines,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SpeedLines>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <SpeedLines {...(args as React.ComponentProps<typeof SpeedLines>)} />;
  },
};
