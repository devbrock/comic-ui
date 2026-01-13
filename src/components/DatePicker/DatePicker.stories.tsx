import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { DatePicker } from "./DatePicker";

const meta = {
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

function DatePickerPlayground() {
  const [value, setValue] = React.useState<Date | undefined>(new Date());
  return (
    <div className="w-[320px]">
      <DatePicker value={value} onValueChange={setValue} />
    </div>
  );
}

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: () => <DatePickerPlayground />,
};
