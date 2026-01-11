import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./Table";

const meta = {
  component: Table,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <Table className="w-[420px]">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Brock</TableCell>
            <TableCell>Hero</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chuck Finley</TableCell>
            <TableCell>Sidekick</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};
