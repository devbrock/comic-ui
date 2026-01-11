import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Spinner } from "./Spinner";

const meta = {
  component: Spinner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Spinner {...(args as React.ComponentProps<typeof Spinner>)} />;
  },
};
