import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ComicPanel } from "./ComicPanel";

const meta = {
  component: ComicPanel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ComicPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <ComicPanel {...(args as React.ComponentProps<typeof ComicPanel>)} />;
  },
};
