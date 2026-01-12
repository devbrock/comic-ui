import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";

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
    type Row = {
      name: string;
      role: string;
      issues: number;
    };

    const columns: Array<ColumnDef<Row, string | number>> = [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "role", header: "Role" },
      { accessorKey: "issues", header: "Open Issues" },
    ];

    const data: Row[] = [
      { name: "Brock", role: "Editor-in-Chief", issues: 3 },
      { name: "Chuck", role: "Senior TS Dev", issues: 7 },
      { name: "Kit", role: "Colorist", issues: 1 },
    ];

    return (
      <div className="w-[720px] max-w-full">
        <DataTable
          columns={columns}
          data={data}
          filterColumnId="name"
          filterPlaceholder="Filter by name..."
          {...(args as React.ComponentProps<typeof DataTable>)}
        />
      </div>
    );
  },
};
