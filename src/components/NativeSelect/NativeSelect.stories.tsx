import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { NativeSelect } from "./NativeSelect";

const meta = {
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <NativeSelect {...(args as React.ComponentProps<typeof NativeSelect>)} />;
  },
};
