import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Switch } from "./Switch";

const meta = {
  component: Switch,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <label className="flex items-center gap-2">
        <Switch {...(args as React.ComponentProps<typeof Switch>)} />
        <span className="text-sm">Switch</span>
      </label>
    );
  },
};
