import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ResizableHandle } from "./Resizable";

const meta = {
  component: ResizableHandle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ResizableHandle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <ResizableHandle {...(args as React.ComponentProps<typeof ResizableHandle>)} />;
  },
};
