import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { CopyButton } from "./CopyButton";

const meta = {
  component: CopyButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CopyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    text: "pnpm add @devbrock/marvelous-ui",
    successMessage: "Copied!",
  },
  render: (args) => <CopyButton {...(args as React.ComponentProps<typeof CopyButton>)} />,
};


