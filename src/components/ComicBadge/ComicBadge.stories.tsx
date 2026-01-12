import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { Star } from "lucide-react";

import { ComicBadge } from "./ComicBadge";

const meta = {
  component: ComicBadge,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ComicBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <ComicBadge
        variant="burst"
        color="gamma"
        iconBefore={<Star />}
        {...(args as React.ComponentProps<typeof ComicBadge>)}
      >
        Featured
      </ComicBadge>
    );
  },
};
