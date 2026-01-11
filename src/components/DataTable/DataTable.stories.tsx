import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { DataTable } from "./DataTable";

const meta = {
  component: DataTable,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <DataTable {...(args as React.ComponentProps<typeof DataTable>)} />;
  },
};
