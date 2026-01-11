import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./Dialog";

const meta = {
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <Dialog defaultOpen>
        <DialogTrigger asChild>
          <button className="border px-3 py-2">Open</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>
            <DialogDescription>Dialog description.</DialogDescription>
          </DialogHeader>
          <div className="text-sm">Body</div>
        </DialogContent>
      </Dialog>
    );
  },
};
