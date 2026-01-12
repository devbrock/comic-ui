import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ExampleCard } from "./ExampleCard";
import { Button } from "../Button/Button";

const meta = {
  component: ExampleCard,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ExampleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    id: "example-card",
    title: "ExampleCard",
    description: "Preview + copyable code in a Collapsible inside a ComicPanel.",
    code: `<Button variant="hero">Click me</Button>`,
    cornerLabel: "DEMO",
    defaultOpen: true,
  },
  render: (args) => {
    return (
      <div className="max-w-2xl">
        <ExampleCard {...(args as React.ComponentProps<typeof ExampleCard>)}>
          <div className="flex gap-2">
            <Button>Default</Button>
            <Button variant="hero">Hero</Button>
          </div>
        </ExampleCard>
      </div>
    );
  },
};


