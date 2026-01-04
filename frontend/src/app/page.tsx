import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { ControlRoom } from "@/components/control-room";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative mb-4 flex h-[87%] w-[90%] divide-x rounded-xl border">
        <Sidebar />
        <div className={cn("relative h-full flex-1")}>
          <div
            className={cn(
              "absolute h-full w-full",
              "bg-[radial-gradient(var(--color-gray-300),_transparent_1px)]",
              "bg-size-[10px_10px]",
            )}
          />
          <ControlRoom />
        </div>
      </div>
    </div>
  );
}
