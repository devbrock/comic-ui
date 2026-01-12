import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { AspectRatio } from "./AspectRatio";
import heroBg from "@/assets/hero-bg.jpg";

const meta = {
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[360px]">
        <AspectRatio ratio={16 / 9} {...(args as React.ComponentProps<typeof AspectRatio>)}>
          <img
            src={heroBg}
            alt="Example content inside AspectRatio"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    );
  },
};
