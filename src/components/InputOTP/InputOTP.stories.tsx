import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "./InputOTP";

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
    return (
      <InputOTP maxLength={6} {...(args as React.ComponentProps<typeof InputOTP>)}>
        <InputOTPGroup>
          {Array.from({ length: 6 }, (_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    );
  },
};
