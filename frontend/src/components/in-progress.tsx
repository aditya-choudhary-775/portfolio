"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Loader from "./loader";
import { getBackgroundPattern } from "@/lib/constants";

interface InProgressItem {
  icon: ReactNode;
  title: string;
  id?: string | number;
}

interface InProgressProps {
  items: InProgressItem[];
  title?: string;
  className?: string;
}

/**
 * In Progress component displaying a list of items with icons
 */
export const InProgress = ({
  items,
  title = "In Progress",
  className,
}: InProgressProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center bg-gray-100 rounded-md border px-3 gap-4",
        className, ...getBackgroundPattern()
      )}
    >
      <div className="flex items-end justify-center gap-3 mb-4 mt-8">
        <Loader size="12px" />
        <span className="text-md font-bold text-green-600 font-mono">{title}</span>
      </div>

      <div className="flex flex-col items-start justify-center gap-5">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className="flex items-center justify-center gap-4"
          >
            {item.icon}
            <span className="text-xs font-mono">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
