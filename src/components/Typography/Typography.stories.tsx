import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Blockquote, H1, H2, InlineCode, P, Pre, Small } from "./Typography";

const meta = {
  component: Blockquote,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return (
      <div className="max-w-xl">
        <H1>Comic UI</H1>
        <P>Typography primitives migrated from the original version.</P>
        <H2 className="mt-6">Example</H2>
        <P className="mt-2">
          Here’s some inline code: <InlineCode>pnpm build</InlineCode>
        </P>
        <Blockquote className="mt-6" {...(args as React.ComponentProps<typeof Blockquote>)}>
          “A good UI reads like a comic panel: clear, bold, and sequential.”
        </Blockquote>
        <Small className="mt-4">Small helper text</Small>
        <Pre className="mt-4">{`export function pow() {\n  return "POW!";\n}`}</Pre>
      </div>
    );
  },
};
