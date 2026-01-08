import { cn } from "@/lib/utils";
import { getBackgroundPattern } from "@/lib/constants";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { GridItem } from "./grid-item";

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
    <GridItem colSpan={colSpan} rowSpan={rowSpan}>
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center rounded-md bg-gray-900",
          "perspective-distant transform-3d",
          ...getBackgroundPattern()
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
            ...getBackgroundPattern()
          )}
        >
          <span className="font-architects-daughter text-8xl">{value}</span>
          <div className="flex items-center justify-center gap-2">
            <div className="z-5 size-8">{icon}</div>
            <span className="font-bold font-">{label}</span>
          </div>
        </motion.div>
      </div>
    </GridItem>
  );
};
