/**
 * Migrated from: original_version/src/components/ui/sonner.tsx
 */

import * as React from "react";
import { Toaster as Sonner, toast as sonnerToast } from "sonner";

type SonnerToasterProps = React.ComponentProps<typeof Sonner>;

export type ToasterProps = Omit<SonnerToasterProps, "theme"> & {
  /**
   * Toast theme.
   *
   * This is intentionally passed in as a prop so Marvelous UI has **no**
   * framework dependency on theme libraries (e.g. `next-themes`).
   */
  theme?: SonnerToasterProps["theme"];
};

/**
 * Sonner toaster wrapper without framework dependencies.
 */
export const SonnerToaster = ({ theme = "system", ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { sonnerToast };

