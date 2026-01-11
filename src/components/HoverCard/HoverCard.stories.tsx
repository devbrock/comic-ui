import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";

const meta = {
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <HoverCard open>
        <HoverCardTrigger asChild>
          <a href="#" onClick={(e) => e.preventDefault()} className="underline">Hover me</a>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">Hover card content</HoverCardContent>
      </HoverCard>
    );
  },
};
