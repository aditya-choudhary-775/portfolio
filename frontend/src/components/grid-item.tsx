import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridItemProps {
  children: ReactNode;
  colSpan?: string;
  rowSpan?: string;
  className?: string;
}

/**
 * Reusable grid item wrapper component for common grid layout patterns
 * Handles the standard col-span/row-span wrapper with padding
 */
export const GridItem = ({
  children,
  colSpan = "col-span-3",
  rowSpan = "row-span-2",
  className,
}: GridItemProps) => {
  return (
    <div className={cn(colSpan, rowSpan, "h-full w-full p-3", className)}>
      {children}
    </div>
  );
};
