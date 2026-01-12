import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Combobox } from "./Combobox";

const meta = {
  component: Combobox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    const items = [
      { value: "spiderman", label: "Spider-Man" },
      { value: "storm", label: "Storm" },
      { value: "wolverine", label: "Wolverine" },
      { value: "deadpool", label: "Deadpool", disabled: true },
    ] as const;

    const [value, setValue] = React.useState<string | undefined>("spiderman");

    return (
      <div className="w-[360px]">
        <Combobox
          items={items}
          value={value}
          onValueChange={setValue}
          placeholder="Pick a hero..."
          {...(args as React.ComponentProps<typeof Combobox>)}
        />
      </div>
    );
  },
};
