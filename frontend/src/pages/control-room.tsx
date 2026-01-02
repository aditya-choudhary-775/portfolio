import { cn } from "@/lib/utils";
import React from "react";

export const ControlRoom = () => {
  return (
    <div className={cn("grid h-full grid-cols-12 grid-rows-6")}>
      <div className="col-span-3 row-span-2 h-full w-full p-3">
        <div className="h-full w-full rounded-md border"></div>
      </div>
      <div className="col-span-3 row-span-2 h-full w-full p-3">
        <div className="h-full w-full rounded-md border"></div>
      </div>
      <div className="col-span-3 row-span-2 h-full w-full p-3">
        <div className="h-full w-full rounded-md border"></div>
      </div>

      <div className="col-span-3 row-span-3 h-full w-full p-3">
        <div className="h-full w-full rounded-md border"></div>
      </div>

      <div className="col-span-3 row-span-4 h-full w-full p-3">
        <div className="h-full w-full rounded-md border"></div>
      </div>
      <div className="col-span-6 row-span-4 h-full w-full p-3">
        <div className="h-full w-full rounded-md border"></div>
      </div>
      <div className="col-span-3 row-span-3 h-full w-full p-3">
        <div className="h-full w-full rounded-md border"></div>
      </div>
    </div>
  );
};
