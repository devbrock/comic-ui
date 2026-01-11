import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { InputGroup } from "./InputGroup";

const meta = {
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <InputGroup {...(args as React.ComponentProps<typeof InputGroup>)} />;
  },
};
