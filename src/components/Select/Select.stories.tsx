import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const meta = {
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <Select defaultValue="apple">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Pick one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
