import * as React from "react";

import { ComicPanel } from "@/components/comic";
import { Button } from "@/components/Button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/Collapsible";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/demo/CopyButton";

/**
 * A single “preview + copyable code” example used in the landing page.
 */
export type ExampleCardProps = Readonly<{
  /**
   * Stable id for anchors/search.
   */
  id: string;
  /**
   * Human-friendly title.
   */
  title: string;
  /**
   * Optional supporting text.
   */
  description?: string;
  /**
   * Copy-ready code snippet.
   */
  code: string;
  /**
   * Preview content rendered above the code block.
   */
  children: React.ReactNode;
  /**
   * Panel label shown in the corner.
   */
  cornerLabel?: string;
  /**
   * Whether the code area should be expanded by default.
   */
  defaultOpen?: boolean;
  className?: string;
}>;

export function ExampleCard({
  id,
  title,
  description,
  code,
  children,
  cornerLabel,
  defaultOpen = false,
  className,
}: ExampleCardProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <ComicPanel id={id} variant="default" cornerLabel={cornerLabel} className={cn("h-full", className)}>
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-none">{title}</h3>
            {description ? (
              <p className="mt-2 font-body text-sm text-muted-foreground">{description}</p>
            ) : null}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <CopyButton text={code} aria-label={`Copy ${title} example`} />
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" aria-label={open ? "Hide code" : "Show code"}>
                {open ? "Hide" : "Code"}
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>

        <div className="mt-6">{children}</div>

        <CollapsibleContent className="mt-6">
          <div className="rounded-md border-2 border-ink bg-background shadow-panel overflow-hidden">
            <pre className="p-4 overflow-auto">
              <code className="font-mono text-xs leading-relaxed whitespace-pre">{code}</code>
            </pre>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </ComicPanel>
  );
}


