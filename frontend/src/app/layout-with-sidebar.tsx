"use client";
import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import {
  getBackgroundPattern,
  getBackgroundPatternBold,
} from "@/lib/constants";
import { usePathname } from "next/navigation";

export function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative z-0 mb-4 flex h-[87%] w-[90%] divide-x rounded-xl border">
        <Sidebar />
        <div className={cn("relative h-full flex-1")}>
          <div
            className={cn(
              "pointer-events-none absolute -z-10 h-full w-full",
              ...(pathName === "/projects"
                ? getBackgroundPatternBold()
                : getBackgroundPattern()),
            )}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
