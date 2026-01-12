import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Toaster } from "./Toaster";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/Button";

const meta = {
  component: Toaster,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            toast({
              title: "Saved",
              description: "Your panel layout was updated.",
            });
          }}
        >
          Show toast
        </Button>
        <Toaster {...(args as React.ComponentProps<typeof Toaster>)} />
      </>
    );
  },
};
