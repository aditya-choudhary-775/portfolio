import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftExpand } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      
      <div className="border h-[87%] rounded-xl mb-4 w-[90%] relative flex divide-x">
        <Sidebar />
        <div className={cn("h-full flex-1")}>
          
        </div>
      </div>

    </div>
  );
}
