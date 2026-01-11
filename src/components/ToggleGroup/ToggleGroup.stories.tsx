import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ToggleGroup } from "./ToggleGroup";

const meta = {
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <ToggleGroup {...(args as React.ComponentProps<typeof ToggleGroup>)} />;
  },
};
