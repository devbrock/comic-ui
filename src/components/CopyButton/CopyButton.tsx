import * as React from "react";

import { Button, type ButtonProps } from "@/components/Button";
import { sonnerToast } from "@/components/Sonner";

/**
 * Copy arbitrary text to the clipboard with user feedback.
 *
 * Uses the modern Clipboard API when available and falls back to a hidden
 * `textarea` + `document.execCommand("copy")` for older browsers.
 */
export type CopyButtonProps = Omit<ButtonProps, "onClick"> &
  Readonly<{
    /**
     * The string copied into the user's clipboard.
     */
    text: string;
    /**
     * Optional toast title shown after a successful copy.
     */
    successMessage?: string;
  }>;

export function CopyButton({
  text,
  successMessage = "Copied to clipboard",
  variant = "outline",
  size = "sm",
  children,
  disabled,
  ...props
}: CopyButtonProps) {
  const [isCopying, setIsCopying] = React.useState(false);

  const onCopy = React.useCallback(async () => {
    if (!text) return;
    setIsCopying(true);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "fixed";
        textarea.style.top = "0";
        textarea.style.left = "0";
        textarea.style.opacity = "0";
        textarea.style.pointerEvents = "none";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      sonnerToast(successMessage, {
        description: "Paste it into your app and it should just work.",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Copy failed";
      sonnerToast("Could not copy", { description: message });
    } finally {
      setIsCopying(false);
    }
  }, [successMessage, text]);

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={onCopy}
      {...props}
      disabled={isCopying || disabled}
    >
      {children ?? (isCopying ? "Copying…" : "Copy")}
    </Button>
  );
}
