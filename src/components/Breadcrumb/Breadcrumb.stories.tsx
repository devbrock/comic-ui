import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Breadcrumb } from "./Breadcrumb";

const meta = {
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Breadcrumb {...(args as React.ComponentProps<typeof Breadcrumb>)} />;
  },
};
