import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Link } from "./Link";

const meta = {
  component: Link,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <Link {...(args as React.ComponentProps<typeof Link>)} />;
  },
};
