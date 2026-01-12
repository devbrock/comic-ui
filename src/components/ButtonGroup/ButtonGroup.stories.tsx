import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ButtonGroup } from "./ButtonGroup";
import { Button } from "@/components/Button";

const meta = {
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <ButtonGroup {...(args as React.ComponentProps<typeof ButtonGroup>)}>
        <Button variant="outline">Left</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Right</Button>
      </ButtonGroup>
    );
  },
};
