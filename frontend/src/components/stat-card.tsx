import { cn } from "@/lib/utils";
import { div } from "motion/react-client";
import { ReactNode } from "react";
import { motion } from "motion/react";

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
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center rounded-md bg-gray-900",
          "perspective-distant transform-3d",
          "bg-[radial-gradient(var(--color-gray-300),_transparent_1px)]",
          "bg-size-[10px_10px]",
        )}
      >
        <motion.div
          initial={{
            rotateX: 23,
            rotateY: -23,
            rotateZ: 10,
            scale: 1,
            boxShadow: "0px 0px 0px 0px black"
          }}
          whileHover={{
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            boxShadow: "0px 0px 0px black",
            scale: 0.92,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "flex h-full w-full translate-z-22 flex-col items-center justify-center rounded-md border bg-white",
            "bg-[radial-gradient(var(--color-gray-300),_transparent_1px)]",
            "bg-size-[10px_10px]",
          )}
        >
          <span className="font-architects-daughter text-8xl">{value}</span>
          <div className="flex items-center justify-center gap-2">
            <div className="z-5 size-8">{icon}</div>
            <span className="font-bold">{label}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
