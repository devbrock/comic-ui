import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Collapsible } from "./Collapsible";

const meta = {
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Collapsible {...(args as React.ComponentProps<typeof Collapsible>)} />;
  },
};
