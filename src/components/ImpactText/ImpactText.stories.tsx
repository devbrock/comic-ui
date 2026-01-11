import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { ImpactText } from "./ImpactText";

const meta = {
  component: ImpactText,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ImpactText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    return <ImpactText {...(args as React.ComponentProps<typeof ImpactText>)} />;
  },
};
