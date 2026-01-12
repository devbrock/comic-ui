import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { SonnerToaster, sonnerToast } from "./Sonner";
import { Button } from "@/components/Button";

const meta = {
  component: SonnerToaster,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SonnerToaster>;

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
            sonnerToast("Issue saved", {
              description: "Your changes were published.",
            });
          }}
        >
          Show toast
        </Button>
        <SonnerToaster {...(args as React.ComponentProps<typeof SonnerToaster>)} />
      </>
    );
  },
};
