"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "./badge";

export const ProfileCard = () => {
  return (
    <div className="col-span-3 row-span-3 h-full w-full p-3">
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 border rounded-md bg-white",
          "bg-[radial-gradient(var(--color-gray-300),_transparent_1px)]",
          "bg-size-[10px_10px]",
        )}
      >
          <Image
            src="/avatar1.png"
            height={50}
            width={50}
            alt="Avatar"
            className="z-5 size-20 rounded-full border border-black bg-white"
          />
          <span className="text-xl font-bold">Aditya Choudhary</span>
          <div className="mt-2 flex flex-col items-start justify-between gap-3">
            <div className="flex items-center justify-between gap-3">
              <Badge text="Builder" />
              <Badge text="Creator" />
            </div>
            <Badge text="Learning In Public" />
          </div>
      </div>
    </div>
  );
};
