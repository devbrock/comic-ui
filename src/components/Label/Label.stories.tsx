import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Label } from "./Label";
import { Input } from "@/components/Input";

const meta = {
  component: Label,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[360px] space-y-2">
        <Label htmlFor="email" {...(args as React.ComponentProps<typeof Label>)}>
          Email
        </Label>
        <Input id="email" placeholder="brock@example.com" />
      </div>
    );
  },
};
