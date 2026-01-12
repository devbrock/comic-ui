import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { HalftoneBackground } from "./HalftoneBackground";

const meta = {
  component: HalftoneBackground,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HalftoneBackground>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <HalftoneBackground
        className="h-[200px] w-[360px] overflow-hidden rounded-md border-2 border-ink bg-card shadow-panel"
        variant="dots"
        color="ink"
        opacity={0.12}
        {...(args as React.ComponentProps<typeof HalftoneBackground>)}
      >
        <div className="p-4">
          <div className="font-display text-xl uppercase">Pow!</div>
          <div className="mt-1 font-body text-sm text-muted-foreground">
            Halftone pattern behind normal content.
          </div>
        </div>
      </HalftoneBackground>
    );
  },
};
