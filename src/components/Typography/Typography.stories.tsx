import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Blockquote } from "./Typography";

const meta = {
  component: Blockquote,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="max-w-xl">
        <H1>Comic UI</H1>
        <P>Typography primitives migrated from the original version.</P>
      </div>
    );
  },
};
