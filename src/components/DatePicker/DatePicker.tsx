/**
 * Migrated from: original_version/src/components/ui/date-picker.tsx
 */

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import { Button } from "@/components/Button";
import { Calendar } from "@/components/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";

/**
 * Props specific to `DatePicker` (shown first in IntelliSense).
 */
export interface DatePickerOwnProps {
  value?: Date;
  /**
   * Called when a date is selected/cleared.
   *
   * Required for the component to function as a picker (this component is controlled).
   */
  onValueChange: (value: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
}

/**
 * Full props for `DatePicker`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * hundreds of HTML attributes).
 */
export type DatePickerProps = DatePickerOwnProps &
  Omit<React.ComponentPropsWithoutRef<"div">, "onChange">;

/**
 * Single-date picker (Popover + Calendar).
 */
function DatePicker({ className, value, onValueChange, placeholder = "Pick a date", disabled = false, ...props }: DatePickerProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full justify-start text-left font-body normal-case tracking-normal",
              !value && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            {value ? format(value, "PPP") : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={value} onSelect={onValueChange} initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  );
}

DatePicker.displayName = "DatePicker";

export { DatePicker };



