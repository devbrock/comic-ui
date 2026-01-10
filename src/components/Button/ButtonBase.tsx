import * as React from "react";

import { cn } from "../../utils/cn";

/**
 * Native button attributes.
 */
export type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Shared base props for all Button variants.
 *
 * Mirrors the reference implementation's expectations:
 * - `ariaLabel` and `testId` are required.
 * - `onClick` is a no-arg callback.
 * - `ref` is passed as a normal prop (not React.forwardRef).
 */
export type ButtonBaseProps = Omit<NativeButtonProps, "onClick"> & {
  /**
   * Click handler (no-arg) to match the reference component API.
   */
  onClick?: () => void;
  /**
   * Ref to the underlying `<button />`.
   */
  ref?: React.Ref<HTMLButtonElement>;
  /**
   * Accessible label for the button.
   */
  ariaLabel: string;
  /**
   * Testing id (rendered as `data-testid`).
   */
  testId: string;
  /**
   * When true, the button is non-interactive (except tabbing) and key events are blocked.
   */
  isLoading?: boolean;
};

/**
 * Internal base button element used by all public Button components.
 */
export const ButtonBase = ({
  onClick,
  children,
  ref,
  ariaLabel,
  testId,
  className,
  disabled,
  isLoading = false,
  ...props
}: ButtonBaseProps) => {
  return (
    <button
      type={props.type ?? "button"}
      onClick={onClick}
      ref={ref}
      aria-label={ariaLabel}
      data-testid={testId}
      className={cn(
        "cursor-pointer disabled:pointer-events-auto disabled:cursor-not-allowed",
        className
      )}
      disabled={disabled}
      tabIndex={isLoading ? -1 : undefined}
      onKeyDown={(e) => {
        if (isLoading && e.key !== "Tab") {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        props.onKeyDown?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
};
