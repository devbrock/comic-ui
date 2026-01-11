import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Fragment, useState, type ReactElement, type ReactNode } from "react";

import { Button } from "./Button";
import type { ButtonProps, ButtonVariant } from "./Button";
import type { ButtonBaseProps } from "./ButtonBase";
import type { ButtonSize } from "./buttonSize";

const meta = {
  component: Button.Standard,
  parameters: {
    layout: "centered",
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Button.Standard>;

export default meta;

/**
 * Extra args for Storybook-only controls (not part of the public component API).
 *
 * Note: `ButtonProps` uses conditional typing for `hasUnderline` based on `variant`.
 * Storybook controls want to toggle `hasUnderline` even when `variant` is not a
 * tertiary variant; we model that here and only forward `hasUnderline` to the
 * component when it’s valid.
 */
type ButtonStoryArgs = Pick<
  ButtonBaseProps,
  "testId" | "ariaLabel" | "disabled" | "isLoading" | "onClick"
> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFluid?: boolean;
  isRound?: boolean;
  floating?: boolean;
  icon?: boolean;
  hasUnderline?: boolean;
  prefix?: boolean;
  suffix?: boolean;
};

/**
 * Convert Storybook args into strict `ButtonProps` without weakening the public API types.
 */
const toButtonProps = (
  args: Omit<ButtonStoryArgs, "prefix" | "suffix">
): ButtonProps => {
  const variant: ButtonVariant = args.variant ?? "primary";

  const common = {
    testId: args.testId,
    ariaLabel: args.ariaLabel,
    children: args.children,
    disabled: args.disabled,
    isLoading: args.isLoading,
    isFluid: args.isFluid,
    isRound: args.isRound,
    floating: args.floating,
    icon: args.icon,
    size: args.size,
    onClick: args.onClick,
  };

  if (variant === "primary") return { ...common, variant };
  if (variant === "secondary") return { ...common, variant };
  if (variant === "tertiary-brand")
    return { ...common, variant, hasUnderline: args.hasUnderline };

  return { ...common, variant, hasUnderline: args.hasUnderline };
};

type StandardStory = StoryObj<ButtonStoryArgs>;
type InverseStory = StoryObj<ButtonStoryArgs>;
type DestructiveStory = StoryObj<ButtonStoryArgs>;

const standardVariants = [
  "primary",
  "secondary",
  "tertiary-brand",
  "tertiary-neutral",
] satisfies ButtonVariant[];

const destructiveVariants = [
  "primary",
  "secondary",
  "tertiary-brand",
] satisfies ButtonVariant[];

const sizes = ["8", "10", "12"] satisfies ButtonSize[];

const ArrowLeft = () => (
  <span aria-hidden="true" className="inline-flex">
    ←
  </span>
);

const ArrowRight = () => (
  <span aria-hidden="true" className="inline-flex">
    →
  </span>
);

/**
 * Conditionally wrap a React element, while preserving Storybook's requirement that
 * story `render` functions return a `ReactElement` (not any `ReactNode`).
 */
const wrapIf = <T extends ReactElement>(
  shouldWrap: boolean,
  content: T,
  className: string
): ReactElement =>
  shouldWrap ? <div className={className}>{content}</div> : content;

const renderButtonLabel = ({
  label,
  prefix,
  suffix,
}: {
  label: ReactNode;
  prefix?: boolean;
  suffix?: boolean;
}) => (
  <>
    {prefix ? <ArrowLeft /> : null}
    {label}
    {suffix ? <ArrowRight /> : null}
  </>
);

export const StandardPlayground: StandardStory = {
  parameters: { chromatic: { disableSnapshot: true } },
  args: {
    testId: "playground-standard",
    ariaLabel: "Standard button playground",
    children: "Label",
    variant: "primary",
    size: "12",
    disabled: false,
    isLoading: false,
    isFluid: false,
    isRound: false,
    floating: false,
    icon: false,
    hasUnderline: true,
    prefix: false,
    suffix: false,
  } satisfies ButtonStoryArgs,
  argTypes: {
    variant: {
      control: "radio",
      options: standardVariants,
    },
    size: {
      control: "radio",
      options: sizes,
    },
    children: { control: "text" },
    prefix: { control: "boolean" },
    suffix: { control: "boolean" },
    hasUnderline: {
      control: "boolean",
      description:
        'Only applies to the "tertiary-brand" and "tertiary-neutral" variants.',
    },
    isLoading: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
  render: (args) => {
    const { prefix, suffix, children, ...storyArgs } = args;
    const [isLoading, setIsLoading] = useState(args.isLoading);

    const handleClick = () => {
      fn()(args);
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 5000);
    };

    return (
      <div className="flex w-screen items-center justify-center">
        <Button.Standard
          {...toButtonProps({
            ...storyArgs,
            isLoading,
            onClick: handleClick,
            children: renderButtonLabel({ label: children, prefix, suffix }),
          })}
        />
      </div>
    );
  },
};

export const InversePlayground: InverseStory = {
  parameters: { chromatic: { disableSnapshot: true } },
  args: {
    testId: "playground-inverse",
    ariaLabel: "Inverse button playground",
    children: "Label",
    variant: "primary",
    size: "12",
    disabled: false,
    isLoading: false,
    isFluid: false,
    isRound: false,
    floating: false,
    icon: false,
    hasUnderline: true,
    prefix: false,
    suffix: false,
  } satisfies ButtonStoryArgs,
  argTypes: {
    variant: {
      control: "radio",
      options: standardVariants,
    },
    size: {
      control: "radio",
      options: sizes,
    },
    children: { control: "text" },
    prefix: { control: "boolean" },
    suffix: { control: "boolean" },
    hasUnderline: {
      control: "boolean",
      description:
        'Only applies to the "tertiary-brand" and "tertiary-neutral" variants.',
    },
    isLoading: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
  render: (args) => {
    const { prefix, suffix, children, ...storyArgs } = args;
    const [isLoading, setIsLoading] = useState(args.isLoading);

    const handleClick = () => {
      fn()(args);
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 5000);
    };

    const content = (
      <Button.Inverse
        {...toButtonProps({
          ...storyArgs,
          isLoading,
          onClick: handleClick,
          children: renderButtonLabel({ label: children, prefix, suffix }),
        })}
      />
    );

    return wrapIf(
      true,
      <div className="flex w-screen items-center justify-center">
        {content}
      </div>,
      "min-h-[240px] w-full bg-neutral-950 text-white p-10"
    );
  },
};

export const DestructivePlayground: DestructiveStory = {
  parameters: { chromatic: { disableSnapshot: true } },
  args: {
    testId: "playground-destructive",
    ariaLabel: "Destructive button playground",
    children: "Delete",
    variant: "primary",
    size: "12",
    disabled: false,
    isLoading: false,
    isFluid: false,
    isRound: false,
    floating: false,
    icon: false,
    hasUnderline: true,
    prefix: false,
    suffix: false,
  } satisfies ButtonStoryArgs,
  argTypes: {
    variant: {
      control: "radio",
      options: destructiveVariants,
    },
    size: {
      control: "radio",
      options: sizes,
    },
    children: { control: "text" },
    prefix: { control: "boolean" },
    suffix: { control: "boolean" },
    hasUnderline: {
      control: "boolean",
      description: 'Only applies to the "tertiary-brand" variant.',
    },
    isLoading: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
  render: (args) => {
    const { prefix, suffix, children, ...storyArgs } = args;
    const [isLoading, setIsLoading] = useState(args.isLoading);

    const handleClick = () => {
      fn()(args);
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 5000);
    };

    return (
      <div className="flex w-screen items-center justify-center">
        <Button.Destructive
          {...toButtonProps({
            ...storyArgs,
            isLoading,
            onClick: handleClick,
            children: renderButtonLabel({ label: children, prefix, suffix }),
          })}
        />
      </div>
    );
  },
};

type PermutationRow = {
  description: string;
  disabled: boolean;
  prefix: boolean;
  suffix: boolean;
  isLoading: boolean;
  testId: string;
};

const permutations: PermutationRow[] = [
  {
    description: "Default",
    disabled: false,
    prefix: false,
    suffix: false,
    isLoading: false,
    testId: "default",
  },
  {
    description: "Disabled",
    disabled: true,
    prefix: false,
    suffix: false,
    isLoading: false,
    testId: "disabled",
  },
  {
    description: "Prefix",
    disabled: false,
    prefix: true,
    suffix: false,
    isLoading: false,
    testId: "prefix",
  },
  {
    description: "Suffix",
    disabled: false,
    prefix: false,
    suffix: true,
    isLoading: false,
    testId: "suffix",
  },
  {
    description: "Prefix + Suffix",
    disabled: false,
    prefix: true,
    suffix: true,
    isLoading: false,
    testId: "prefix-suffix",
  },
  {
    description: "Loading",
    disabled: false,
    prefix: false,
    suffix: false,
    isLoading: true,
    testId: "loading",
  },
];

const underlineRows = [
  {
    description: "default, no underline",
    disabled: false,
    testId: "default-no-underline",
  },
  {
    description: "disabled, no underline",
    disabled: true,
    testId: "disabled-no-underline",
  },
] as const;

export const StandardVariants: StandardStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <div className="text-xl font-bold">Description</div>
      <div className="text-xl font-bold">Primary</div>
      <div className="text-xl font-bold">Secondary</div>
      <div className="text-xl font-bold">Tertiary Brand</div>
      <div className="text-xl font-bold">Tertiary Neutral</div>

      {permutations.map((p) => (
        <Fragment key={p.testId}>
          <div className="flex items-center font-bold">{p.description}</div>

          {standardVariants.map((variant) => (
            <div key={`${p.testId}-${variant}`}>
              <Button.Standard
                variant={variant}
                disabled={p.disabled}
                isLoading={p.isLoading}
                onClick={fn()}
                testId={`${p.testId}-${variant}`}
                ariaLabel={`${p.testId}-${variant}`}
              >
                {p.isLoading ? (
                  "Loading"
                ) : (
                  <>
                    {p.prefix ? <ArrowLeft /> : null}
                    Label
                    {p.suffix ? <ArrowRight /> : null}
                  </>
                )}
              </Button.Standard>
            </div>
          ))}
        </Fragment>
      ))}

      {underlineRows.map((row) => (
        <Fragment key={row.testId}>
          <div className="flex items-center font-bold">{row.description}</div>
          <div />
          <div />
          <div>
            <Button.Standard
              variant="tertiary-brand"
              onClick={fn()}
              testId={`${row.testId}-tertiary-brand`}
              ariaLabel={`${row.testId}-tertiary-brand`}
              disabled={row.disabled}
              hasUnderline={false}
            >
              Label
            </Button.Standard>
          </div>
          <div>
            <Button.Standard
              variant="tertiary-neutral"
              onClick={fn()}
              testId={`${row.testId}-tertiary-neutral`}
              ariaLabel={`${row.testId}-tertiary-neutral`}
              disabled={row.disabled}
              hasUnderline={false}
            >
              Label
            </Button.Standard>
          </div>
        </Fragment>
      ))}
    </div>
  ),
};

export const InverseVariants: InverseStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="min-h-[320px] w-full bg-neutral-950 text-white p-10">
      <div className="grid grid-cols-5 gap-4">
        <div className="text-xl font-bold">Description</div>
        <div className="text-xl font-bold">Primary</div>
        <div className="text-xl font-bold">Secondary</div>
        <div className="text-xl font-bold">Tertiary Brand</div>
        <div className="text-xl font-bold">Tertiary Neutral</div>

        {permutations.map((p) => (
          <Fragment key={p.testId}>
            <div className="flex items-center font-bold">{p.description}</div>

            {standardVariants.map((variant) => (
              <div key={`${p.testId}-${variant}`}>
                <Button.Inverse
                  variant={variant}
                  disabled={p.disabled}
                  isLoading={p.isLoading}
                  onClick={fn()}
                  testId={`${p.testId}-${variant}`}
                  ariaLabel={`${p.testId}-${variant}`}
                >
                  {p.isLoading ? (
                    "Loading"
                  ) : (
                    <>
                      {p.prefix ? <ArrowLeft /> : null}
                      Label
                      {p.suffix ? <ArrowRight /> : null}
                    </>
                  )}
                </Button.Inverse>
              </div>
            ))}
          </Fragment>
        ))}

        {underlineRows.map((row) => (
          <Fragment key={row.testId}>
            <div className="flex items-center font-bold">{row.description}</div>
            <div />
            <div />
            <div>
              <Button.Inverse
                variant="tertiary-brand"
                onClick={fn()}
                testId={`${row.testId}-tertiary-brand`}
                ariaLabel={`${row.testId}-tertiary-brand`}
                disabled={row.disabled}
                hasUnderline={false}
              >
                Label
              </Button.Inverse>
            </div>
            <div>
              <Button.Inverse
                variant="tertiary-neutral"
                onClick={fn()}
                testId={`${row.testId}-tertiary-neutral`}
                ariaLabel={`${row.testId}-tertiary-neutral`}
                disabled={row.disabled}
                hasUnderline={false}
              >
                Label
              </Button.Inverse>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  ),
};

export const DestructiveVariants: DestructiveStory = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <div className="text-xl font-bold">Description</div>
      <div className="text-xl font-bold">Primary</div>
      <div className="text-xl font-bold">Secondary</div>
      <div className="text-xl font-bold">Tertiary Brand</div>

      {permutations.map((p) => (
        <Fragment key={p.testId}>
          <div className="flex items-center font-bold">{p.description}</div>

          {destructiveVariants.map((variant) => (
            <div key={`${p.testId}-${variant}`}>
              <Button.Destructive
                variant={variant}
                disabled={p.disabled}
                isLoading={p.isLoading}
                onClick={fn()}
                testId={`${p.testId}-${variant}`}
                ariaLabel={`${p.testId}-${variant}`}
              >
                {p.isLoading ? (
                  "Loading"
                ) : (
                  <>
                    {p.prefix ? <ArrowLeft /> : null}
                    Label
                    {p.suffix ? <ArrowRight /> : null}
                  </>
                )}
              </Button.Destructive>
            </div>
          ))}
        </Fragment>
      ))}

      {underlineRows.map((row) => (
        <Fragment key={row.testId}>
          <div className="flex items-center font-bold">{row.description}</div>
          <div />
          <div />
          <div>
            <Button.Destructive
              variant="tertiary-brand"
              onClick={fn()}
              testId={`${row.testId}-tertiary-brand`}
              ariaLabel={`${row.testId}-tertiary-brand`}
              disabled={row.disabled}
              hasUnderline={false}
            >
              Label
            </Button.Destructive>
          </div>
        </Fragment>
      ))}
    </div>
  ),
};

export const AllSizes: StandardStory = {
  args: {
    testId: "all-sizes",
    ariaLabel: "All sizes",
  },
  render: () => (
    <div className="flex w-56 flex-col gap-4">
      <Button.Standard
        size="8"
        onClick={fn()}
        testId="size-8"
        ariaLabel="Size 8"
      >
        Size 8
      </Button.Standard>
      <Button.Standard
        size="10"
        onClick={fn()}
        testId="size-10"
        ariaLabel="Size 10"
      >
        Size 10
      </Button.Standard>
      <Button.Standard
        size="12"
        onClick={fn()}
        testId="size-12"
        ariaLabel="Size 12"
      >
        Size 12
      </Button.Standard>
      <Button.Standard isFluid onClick={fn()} testId="fluid" ariaLabel="Fluid">
        Fluid
      </Button.Standard>
    </div>
  ),
};

export const IconOnly: StandardStory = {
  args: {
    testId: "icon-only",
    ariaLabel: "Icon only",
    variant: "secondary",
    size: "10",
    icon: true,
  },
  render: (args) => {
    return (
      <Button.Standard
        {...toButtonProps({
          ...(() => {
            const {
              children: _children,
              prefix: _prefix,
              suffix: _suffix,
              ...rest
            } = args;
            return rest;
          })(),
          children: (
            <span aria-hidden="true" className="text-lg leading-none">
              ★
            </span>
          ),
          onClick: fn(),
        })}
      />
    );
  },
};
