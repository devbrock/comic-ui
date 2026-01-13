import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

const meta = {
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: () => {
    return (
      <Accordion type="single" collapsible className="w-[400px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Comic UI?</AccordionTrigger>
          <AccordionContent>A punchy, comic-inspired component set.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes—Radix primitives + sensible defaults.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};
