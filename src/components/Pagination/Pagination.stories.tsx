import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Pagination } from "./Pagination";

const meta = {
  component: Pagination,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Pagination {...(args as React.ComponentProps<typeof Pagination>)} />;
  },
};
