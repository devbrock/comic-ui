import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Textarea } from "./Textarea";

const meta = {
  component: Textarea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Textarea placeholder="Type…" {...(args as React.ComponentProps<typeof Textarea>)} />;
  },
};
