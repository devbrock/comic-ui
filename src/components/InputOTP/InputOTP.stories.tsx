import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { InputOTP } from "./InputOTP";

const meta = {
  component: InputOTP,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <InputOTP {...(args as React.ComponentProps<typeof InputOTP>)} />;
  },
};
