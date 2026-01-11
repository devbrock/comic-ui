import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { SpeechBubble } from "./SpeechBubble";

const meta = {
  component: SpeechBubble,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SpeechBubble>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <SpeechBubble {...(args as React.ComponentProps<typeof SpeechBubble>)} />;
  },
};
