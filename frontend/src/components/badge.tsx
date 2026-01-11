import React from "react";
import { cn } from "@/lib/utils";

const colorClasses = {
  red: {
    container: "bg-red-50 border-red-500",
    dot: "bg-red-400",
    text: "text-red-600",
  },
  emerald: {
    container: "bg-emerald-50 border-emerald-500",
    dot: "bg-emerald-400",
    text: "text-emerald-600",
  },
  blue: {
    container: "bg-blue-50 border-blue-500",
    dot: "bg-blue-400",
    text: "text-blue-600",
  },
  teal: {
    container: "bg-teal-50 border-teal-500",
    dot: "bg-teal-400",
    text: "text-teal-600",
  },
  amber: {
    container: "bg-amber-50 border-amber-500",
    dot: "bg-amber-400",
    text: "text-amber-600",
  },
  indigo: {
    container: "bg-indigo-50 border-indigo-500",
    dot: "bg-indigo-400",
    text: "text-indigo-600",
  },
  violet: {
    container: "bg-violet-50 border-violet-500",
    dot: "bg-violet-400",
    text: "text-violet-600",
  },
  sky: {
    container: "bg-sky-50 border-sky-500",
    dot: "bg-sky-400",
    text: "text-sky-600",
  },
  cyan: {
    container: "bg-cyan-50 border-cyan-500",
    dot: "bg-cyan-400",
    text: "text-cyan-600",
  },
  slate: {
    container: "bg-slate-50 border-slate-500",
    dot: "bg-slate-400",
    text: "text-slate-600",
  },
  green: {
    container: "bg-green-50 border-green-500",
    dot: "bg-green-400",
    text: "text-green-600",
  },
  fuchsia: {
    container: "bg-fuchsia-50 border-fuchsia-500",
    dot: "bg-fuchsia-400",
    text: "text-fuchsia-600",
  },
  stone: {
    container: "bg-stone-50 border-stone-500",
    dot: "bg-stone-400",
    text: "text-stone-600",
  },
  yellow: {
    container: "bg-yellow-50 border-yellow-500",
    dot: "bg-yellow-400",
    text: "text-yellow-600",
  },
  rose: {
    container: "bg-rose-50 border-rose-500",
    dot: "bg-rose-400",
    text: "text-rose-600",
  },
} as const;

type BadgeColor = keyof typeof colorClasses;

const sizeClasses = {
  "3px": {
    dot: "size-[3px]",
    text: "text-[6px]",
  },
  "4px": {
    dot: "size-1",
    text: "text-[8px]",
  },
  "5px": {
    dot: "size-[5px]",
    text: "text-[10px]",
  },
  "6px": {
    dot: "size-1.5",
    text: "text-xs",
  },
  "8px": {
    dot: "size-2",
    text: "text-sm",
  },
  "10px": {
    dot: "size-[10px]",
    text: "text-[20px]",
  },
  "12px": {
    dot: "size-3",
    text: "text-base",
  },
  "16px": {
    dot: "size-4",
    text: "text-lg",
  },
  "20px": {
    dot: "size-5",
    text: "text-xl",
  },
} as const;

type BadgeSize = keyof typeof sizeClasses;

export const Badge = ({
  text,
  color,
  size = "6px",
  className
}: {
  text: string;
  color: BadgeColor | string;
  size?: string;
  className?: string;
}) => {
  const colors = colorClasses[color as BadgeColor] || colorClasses.red;
  const sizes = sizeClasses[size as BadgeSize] || sizeClasses["6px"];

  return (
    <div
      className={cn(
        "z-5 flex items-center justify-between gap-2 rounded-xl border px-2",
        colors.container, className
      )}
    >
      <div className={cn("rounded-full", sizes.dot, colors.dot)} />
      <span className={cn("font-mono tracking-wide", sizes.text, colors.text)}>
        {text}
      </span>
    </div>
  );
};
