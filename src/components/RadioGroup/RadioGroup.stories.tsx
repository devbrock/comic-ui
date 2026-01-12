import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Label } from "@/components/Label";

const meta = {
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioGroup>;

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
        <div className="font-display uppercase text-sm">Choose one</div>
        <RadioGroup defaultValue="daily" {...(args as React.ComponentProps<typeof RadioGroup>)}>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="r-daily" value="daily" />
            <Label htmlFor="r-daily">Daily</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="r-weekly" value="weekly" />
            <Label htmlFor="r-weekly">Weekly</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="r-monthly" value="monthly" />
            <Label htmlFor="r-monthly">Monthly</Label>
          </div>
        </RadioGroup>
      </div>
    );
  },
};
