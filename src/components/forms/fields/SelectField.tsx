"use client";

import { Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useId, useRef, useState, type KeyboardEvent } from "react";
import { useDismiss } from "@/hooks/useDismiss";
import { CUBIC } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils/cn";
import { inputClassName } from "./fieldStyles";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: SelectOption[];
  placeholder: string;
  invalid?: boolean;
  describedBy?: string;
}

export function SelectField({
  id,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  invalid,
  describedBy,
}: SelectFieldProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const selected = options.find((option) => option.value === value);

  const close = useCallback(() => {
    setOpen(false);
    onBlur?.();
  }, [onBlur]);

  useDismiss(rootRef, open, close);

  const openList = () => {
    setHighlighted(Math.max(0, options.findIndex((option) => option.value === value)));
    setOpen(true);
  };

  const choose = (option: SelectOption) => {
    onChange(option.value);
    close();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = options.length - 1;
    const moves: Record<string, () => void> = {
      ArrowDown: () => (open ? setHighlighted((index) => Math.min(last, index + 1)) : openList()),
      ArrowUp: () => (open ? setHighlighted((index) => Math.max(0, index - 1)) : openList()),
      Home: () => setHighlighted(0),
      End: () => setHighlighted(last),
      Enter: () => (open ? choose(options[highlighted]) : openList()),
      " ": () => (open ? choose(options[highlighted]) : openList()),
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    move();
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-${highlighted}` : undefined}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        onClick={() => (open ? close() : openList())}
        onKeyDown={onKeyDown}
        className={cn(inputClassName, "flex items-center justify-between gap-3 text-left", open && "border-accent ring-2 ring-accent/20")}
      >
        <span className={cn("truncate", !selected && "text-muted/70")}>{selected?.label ?? placeholder}</span>
        <ChevronDown
          aria-hidden
          className={cn("size-4 shrink-0 text-muted transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.2, ease: CUBIC.outExpo }}
            className="absolute inset-x-0 top-full z-30 mt-2 origin-top overflow-hidden rounded-xl border border-line bg-card p-1.5 shadow-float"
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={option.value}
                  id={`${listId}-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  onPointerEnter={() => setHighlighted(index)}
                  onClick={() => choose(option)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] transition-colors",
                    index === highlighted && "bg-surface",
                    isSelected && "font-medium text-accent-text",
                  )}
                >
                  {option.label}
                  {isSelected && <Check className="size-4 shrink-0" aria-hidden />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
