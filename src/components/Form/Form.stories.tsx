import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./Form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

const meta = {
  component: Form,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
  },
  argTypes: {
  },
  render: (args) => {
    type Values = { email: string };
    const form = useForm<Values>({
      defaultValues: { email: "" },
      mode: "onChange",
    });

    return (
      <div className="w-[420px] rounded-md border-2 border-ink bg-card p-4 shadow-panel">
        <Form {...form} {...(args as React.ComponentProps<typeof Form>)}>
          <form
            onSubmit={form.handleSubmit(() => {
              // no-op: story demo
            })}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required.",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="brock@example.com" {...field} />
                  </FormControl>
                  <FormDescription>We’ll never share your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    );
  },
};
