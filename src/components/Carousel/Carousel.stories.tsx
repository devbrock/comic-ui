import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";

const meta = {
  component: Carousel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    const slides = ["Pow!", "Bam!", "Zap!"] as const;
    return (
      <div className="w-[360px]">
        <Carousel {...(args as React.ComponentProps<typeof Carousel>)}>
          <CarouselContent>
            {slides.map((text) => (
              <CarouselItem key={text}>
                <div className="rounded-md border-2 border-ink bg-card p-10 shadow-panel">
                  <div className="font-display text-4xl uppercase">{text}</div>
                  <div className="mt-2 font-body text-sm text-muted-foreground">
                    Use the arrows to move between slides.
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  },
};
