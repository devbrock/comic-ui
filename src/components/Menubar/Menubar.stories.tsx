import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./Menubar";

const meta = {
  component: Menubar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Menubar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};
