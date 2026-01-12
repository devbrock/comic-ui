import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Skeleton } from "./Skeleton";

const meta = {
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[360px] space-y-3 rounded-md border-2 border-ink bg-card p-4 shadow-panel">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" {...(args as React.ComponentProps<typeof Skeleton>)} />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-32" {...(args as React.ComponentProps<typeof Skeleton>)} />
            <Skeleton className="h-4 w-48" {...(args as React.ComponentProps<typeof Skeleton>)} />
          </div>
        </div>
        <Skeleton className="h-24 w-full" {...(args as React.ComponentProps<typeof Skeleton>)} />
      </div>
    );
  },
};
