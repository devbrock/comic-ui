import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { SonnerToaster } from "./Sonner";

const meta = {
  component: SonnerToaster,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SonnerToaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <SonnerToaster {...(args as React.ComponentProps<typeof SonnerToaster>)} />;
  },
};
