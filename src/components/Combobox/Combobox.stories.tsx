import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Combobox } from "./Combobox";

const meta = {
  component: Combobox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Combobox {...(args as React.ComponentProps<typeof Combobox>)} />;
  },
};
