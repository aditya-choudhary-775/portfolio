import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatCardProps {
  value: string;
  icon: ReactNode;
  label: string;
  colSpan?: string;
  rowSpan?: string;
}

export const StatCard = ({
  value,
  icon,
  label,
  colSpan = "col-span-3",
  rowSpan = "row-span-2",
}: StatCardProps) => {
  return (
    <div className={cn(colSpan, rowSpan, "h-full w-full p-3")}>
      <div className="flex h-full w-full flex-col items-center justify-center rounded-md border">
        <span className="font-architects-daughter text-8xl">{value}</span>
        <div className="flex items-center justify-center gap-2">
          <div className="z-5 size-8">{icon}</div>
          <span className="font-bold">{label}</span>
        </div>
      </div>
    </div>
  );
};
