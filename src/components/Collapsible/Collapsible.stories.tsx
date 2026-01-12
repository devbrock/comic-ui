import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./Collapsible";
import { Button } from "@/components/Button";

const meta = {
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[360px] rounded-md border-2 border-ink bg-card p-4 shadow-panel">
        <Collapsible defaultOpen {...(args as React.ComponentProps<typeof Collapsible>)}>
          <div className="flex items-center justify-between gap-3">
            <div className="font-display uppercase">Details</div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                Toggle
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-3 space-y-2">
            <div className="font-body text-sm text-muted-foreground">
              This content expands/collapses.
            </div>
            <div className="rounded-md border border-border bg-background px-3 py-2 font-body text-sm">
              Panel line item
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};
