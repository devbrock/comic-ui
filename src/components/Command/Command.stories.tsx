import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./Command";

const meta = {
  component: Command,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="w-[420px] rounded-md border-2 border-ink bg-card shadow-panel">
        <Command {...(args as React.ComponentProps<typeof Command>)}>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Shortcuts">
              <CommandItem>Open palette</CommandItem>
              <CommandItem>Create issue</CommandItem>
              <CommandItem>Invite teammate</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    );
  },
};
