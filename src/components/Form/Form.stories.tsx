import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Form } from "./Form";

const meta = {
  component: Form,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Form {...(args as React.ComponentProps<typeof Form>)} />;
  },
};
