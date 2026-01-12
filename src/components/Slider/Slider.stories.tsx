import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Slider } from "./Slider";

const meta = {
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[360px] space-y-3">
        <div className="font-body text-sm text-muted-foreground">Drag the thumb</div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full"
          {...(args as React.ComponentProps<typeof Slider>)}
        />
      </div>
    );
  },
};
