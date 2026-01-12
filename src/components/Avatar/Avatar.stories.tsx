import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import heroBg from "@/assets/hero-bg.jpg";

const meta = {
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  argTypes: {},
  render: (args) => {
    return (
      <div className="flex items-center gap-4">
        <Avatar {...(args as React.ComponentProps<typeof Avatar>)}>
          <AvatarImage src={heroBg} alt="Sample avatar" />
          <AvatarFallback>CF</AvatarFallback>
        </Avatar>
        <Avatar {...(args as React.ComponentProps<typeof Avatar>)}>
          <AvatarImage src="" alt="Broken image to show fallback" />
          <AvatarFallback>CF</AvatarFallback>
        </Avatar>
      </div>
    );
  },
};
