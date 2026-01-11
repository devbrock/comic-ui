import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

const meta = {
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Avatar {...(args as React.ComponentProps<typeof Avatar>)} />;
  },
};
