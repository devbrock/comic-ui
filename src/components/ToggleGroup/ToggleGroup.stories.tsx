import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

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
    return (
      <ToggleGroup
        type="single"
        defaultValue="left"
        {...(args as React.ComponentProps<typeof ToggleGroup>)}
      >
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    );
  },
};
