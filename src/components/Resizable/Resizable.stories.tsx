import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./Resizable";

const meta = {
  component: ResizablePanelGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="h-[220px] w-[520px] rounded-md border-2 border-ink bg-card shadow-panel">
        <ResizablePanelGroup direction="horizontal" {...(args as React.ComponentProps<typeof ResizablePanelGroup>)}>
          <ResizablePanel defaultSize={40} className="p-4">
            <div className="font-display uppercase">Left panel</div>
            <div className="mt-2 font-body text-sm text-muted-foreground">
              Drag the handle to resize.
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60} className="p-4">
            <div className="font-display uppercase">Right panel</div>
            <div className="mt-2 font-body text-sm text-muted-foreground">
              This panel grows and shrinks.
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};
