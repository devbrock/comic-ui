import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Input } from "./Input";

const meta = {
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Input placeholder="Type…" {...(args as React.ComponentProps<typeof Input>)} />;
  },
};
