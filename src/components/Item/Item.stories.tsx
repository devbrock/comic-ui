import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Item, ItemDescription, ItemTitle } from "./Item";
import { Button } from "@/components/Button";

const meta = {
  component: Item,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[520px]">
        <Item {...(args as React.ComponentProps<typeof Item>)}>
          <div>
            <ItemTitle>Issue #42</ItemTitle>
            <ItemDescription>Fix story “blank” states</ItemDescription>
          </div>
          <Button type="button" size="sm" variant="outline">
            Open
          </Button>
        </Item>
      </div>
    );
  },
};
