import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Toggle } from "./Toggle";

const meta = {
  component: Toggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: { control: "radio", options: ["default","outline"] },
    size: { control: "radio", options: ["default","sm","lg"] },
  },
  render: (args) => {
    return <Toggle {...(args as React.ComponentProps<typeof Toggle>)} />;
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const variants = {
  "variant": [
    "default",
    "outline"
  ],
  "size": [
    "default",
    "sm",
    "lg"
  ]
};
    const keys = Object.keys(variants);

    /** @type {Array<Record<string, string>>} */
    const combos = [];

    const build = (idx, acc) => {
      if (idx >= keys.length) {
        combos.push(acc);
        return;
      }
      const key = keys[idx];
      const opts = variants[key] ?? [];
      for (const opt of opts) {
        build(idx + 1, { ...acc, [key]: opt });
      }
    };

    build(0, {});

    return (
      <div className="flex flex-col gap-4">
        {combos.map((combo) => (
          <div key={JSON.stringify(combo)} className="flex items-center gap-4">
            <div className="w-64 font-mono text-xs">{JSON.stringify(combo)}</div>
            <Toggle {...(combo as React.ComponentProps<typeof Toggle>)} />
          </div>
        ))}
      </div>
    );
  },
};
