import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./Drawer";
import { Button } from "@/components/Button";

const meta = {
  component: Drawer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <Drawer {...(args as React.ComponentProps<typeof Drawer>)}>
        <DrawerTrigger asChild>
          <Button type="button" variant="outline">
            Open drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Quick action</DrawerTitle>
            <DrawerDescription>Drawers are portaled—use a trigger to see them.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 font-body text-sm">Body content</div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button type="button">Done</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};
