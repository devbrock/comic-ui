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
    return (
      <ComicPanel
        variant="action"
        cornerLabel="NEW"
        headerLabel="Comic Panel"
        className="w-[420px]"
        {...(args as React.ComponentProps<typeof ComicPanel>)}
      >
        <div className="font-body text-sm text-muted-foreground">
          Panels need content to feel “alive”.
        </div>
      </ComicPanel>
    );
  },
};
