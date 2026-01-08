"use client";
import { cn } from "@/lib/utils";
import { getBackgroundPattern } from "@/lib/constants";
import Image from "next/image";
import { Badge } from "./badge";
import { GridItem } from "./grid-item";

export const ProfileCard = () => {
  return (
    <GridItem colSpan="col-span-3" rowSpan="row-span-3">
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 border rounded-md bg-white",
          ...getBackgroundPattern()
        )}
      >
        <Image
          src="/avatar1.png"
          height={50}
          width={50}
          alt="Avatar"
          className="z-5 size-20 rounded-full border border-black bg-white"
        />
        <span className="text-xl font-bold font-serif">Aditya Choudhary</span>
        <div className="mt-2 flex flex-col items-start justify-between gap-3">
          <div className="flex items-center justify-between gap-3">
            <Badge text="Builder" />
            <Badge text="Creator" />
          </div>
          <Badge text="Learning In Public" />
        </div>
      </div>
    </GridItem>
  );
};
