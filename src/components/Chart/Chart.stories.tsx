import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./Chart";

const meta = {
  component: ChartContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    const data = [
      { month: "Jan", visitors: 120 },
      { month: "Feb", visitors: 210 },
      { month: "Mar", visitors: 160 },
      { month: "Apr", visitors: 260 },
      { month: "May", visitors: 220 },
    ] as const;

    return (
      <div className="w-[520px] rounded-md border-2 border-ink bg-card p-4 shadow-panel">
        <div className="mb-3 font-display uppercase">Visitors</div>
        <ChartContainer
          config={{
            visitors: { label: "Visitors", color: "hsl(var(--primary))" },
          }}
          {...(args as React.ComponentProps<typeof ChartContainer>)}
        >
          <LineChart data={data} margin={{ left: 8, right: 8 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="var(--color-visitors)"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    );
  },
};
