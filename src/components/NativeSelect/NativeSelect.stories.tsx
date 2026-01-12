import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { NativeSelect } from "./NativeSelect";

const meta = {
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[360px] space-y-2">
        <div className="font-body text-sm text-muted-foreground">Pick a flavor</div>
        <NativeSelect defaultValue="cherry" {...(args as React.ComponentProps<typeof NativeSelect>)}>
          <option value="cherry">Cherry</option>
          <option value="cola">Cola</option>
          <option value="grape">Grape</option>
        </NativeSelect>
      </div>
    );
  },
};
