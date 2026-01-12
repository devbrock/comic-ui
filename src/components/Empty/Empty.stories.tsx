import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Empty } from "./Empty";
import { Button } from "@/components/Button";

const meta = {
  component: Empty,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[420px]">
        <Empty
          title="No issues found"
          description="Try changing your filters or create a new issue."
          action={<Button type="button">Create issue</Button>}
          {...(args as React.ComponentProps<typeof Empty>)}
        />
      </div>
    );
  },
};
