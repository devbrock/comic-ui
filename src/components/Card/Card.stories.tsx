import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";

const meta = {
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle>Panel Title</CardTitle>
          <CardDescription>Short description.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm">Content goes here.</div>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">Footer</div>
        </CardFooter>
      </Card>
    );
  },
};
