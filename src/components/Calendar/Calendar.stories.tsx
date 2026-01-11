import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Calendar } from "./Calendar";

const meta = {
  component: Calendar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Calendar {...(args as React.ComponentProps<typeof Calendar>)} />;
  },
};
