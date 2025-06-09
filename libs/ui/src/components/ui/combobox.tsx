"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { cn } from "./../../lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

export interface ComboboxOption {
  value: string;
  label: string;
  [key: string]: any; // Allow additional properties
}

interface ComboboxProps {
  options: ComboboxOption[];
  placeholder?: string;
  emptyText?: string;
  searchPlaceholder?: string;
  className?: string;
  width?: string;
  value?: string;
  onChange?: (value: string) => void;
  field?: ControllerRenderProps<FieldValues, string>;
}

export function Combobox({
  options,
  placeholder = "Select an option...",
  emptyText = "No results found.",
  searchPlaceholder = "Search...",
  className,
  value: externalValue,
  onChange: externalOnChange,
  field,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [triggerWidth, setTriggerWidth] = React.useState("auto")
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const value = field?.value ?? externalValue ?? "";
  const onChange = field?.onChange ?? externalOnChange;

   React.useEffect(() => {
      if (triggerRef.current) {
        setTriggerWidth(`${triggerRef.current.offsetWidth}px`)
      }
    }, [open])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          ref={triggerRef}
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", className)}  style={{ width: triggerWidth }}  align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    onChange?.(newValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}