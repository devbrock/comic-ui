import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Calendar } from "./Calendar";

const meta = {
  component: Calendar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

function CalendarPlayground() {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date());
  return (
    <div className="rounded-md border-2 border-ink bg-card shadow-panel">
      <Calendar mode="single" selected={selected} onSelect={setSelected} className="p-3" />
    </div>
  );
}

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: () => <CalendarPlayground />,
};
