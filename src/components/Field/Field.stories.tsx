import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Field } from "./Field";

const meta = {
  component: Field,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Field {...(args as React.ComponentProps<typeof Field>)} />;
  },
};
