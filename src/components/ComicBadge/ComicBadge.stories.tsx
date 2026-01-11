import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

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
    return <ComicBadge {...(args as React.ComponentProps<typeof ComicBadge>)} />;
  },
};
