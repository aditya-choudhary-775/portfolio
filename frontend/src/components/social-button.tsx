"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface SocialButtonProps {
  icon: ReactNode;
  hoverShadowColor: string;
  initialShadowColor: string;
  className?: string;
  initialRotateX?: number;
}

export const SocialButton = ({
  icon,
  hoverShadowColor,
  initialShadowColor,
  className,
  initialRotateX = 35,
}: SocialButtonProps) => {
  return (
    <motion.button
      initial={{
        rotateX: initialRotateX,
        rotateY: 20,
        boxShadow: `0px 20px 50px ${initialShadowColor}`,
      }}
      whileTap={{
        y: 0,
      }}
      whileHover={{
        rotateX: 0,
        rotateY: 0,
        boxShadow: `0px 20px 50px ${hoverShadowColor}`,
        y: -5,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn(
        "cursor-pointer rounded-xl border border-neutral-100 bg-white p-4",
        "translate-z-96 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)_inset,0px_-1px_2px_0px_rgba(0,0,0,0.1)_inset]",
        className,
      )}
    >
      {icon}
    </motion.button>
  );
};
