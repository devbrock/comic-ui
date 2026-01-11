import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { RadioGroup } from "./RadioGroup";

const meta = {
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <RadioGroup {...(args as React.ComponentProps<typeof RadioGroup>)} />;
  },
};
