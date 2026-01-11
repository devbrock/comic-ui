import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Item } from "./Item";

const meta = {
  component: Item,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Item {...(args as React.ComponentProps<typeof Item>)} />;
  },
};
