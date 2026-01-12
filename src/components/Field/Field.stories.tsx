import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Field } from "./Field";
import { Input } from "@/components/Input";

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
    return (
      <div className="w-[360px]">
        <Field
          label="Email"
          htmlFor="field-email"
          description="We’ll never share your email."
          required
          {...(args as React.ComponentProps<typeof Field>)}
        >
          <Input id="field-email" placeholder="brock@example.com" />
        </Field>
      </div>
    );
  },
};
