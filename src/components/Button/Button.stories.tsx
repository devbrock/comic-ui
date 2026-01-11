import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Button } from "./Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "impact",
        "hero",
        "heroBlue",
        "mutant",
        "gamma",
        "burst",
      ],
    },
    size: { control: "radio", options: ["default","sm","lg","xl","icon"] },
  },
  render: (args) => {
    return (
      <Button {...(args as React.ComponentProps<typeof Button>)}>
        {args.size === "icon" ? (
          <span aria-hidden="true" className="text-lg leading-none">
            ★
          </span>
        ) : (
          "Pow!"
        )}
      </Button>
    );
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const variants = {
  "variant": [
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
    "impact",
    "hero",
    "heroBlue",
    "mutant",
    "gamma",
    "burst"
  ],
  "size": [
    "default",
    "sm",
    "lg",
    "xl",
    "icon"
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
            <Button {...(combo as React.ComponentProps<typeof Button>)}>
              {combo.size === "icon" ? (
                <span aria-hidden="true" className="text-lg leading-none">
                  ★
                </span>
              ) : (
                "Pow!"
              )}
            </Button>
          </div>
        ))}
      </div>
    );
  },
};
