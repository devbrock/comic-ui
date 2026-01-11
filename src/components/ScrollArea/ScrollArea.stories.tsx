import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ScrollArea } from "./ScrollArea";

const meta = {
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <ScrollArea {...(args as React.ComponentProps<typeof ScrollArea>)} />;
  },
};
