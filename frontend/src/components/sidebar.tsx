"use client";
import { cn } from "@/lib/utils";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconMoodWink2,
  IconQuestionMark,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { SideBarToggle } from "./icons";
import { AnimatePresence, motion } from "motion/react";

const COLLAPSED = 90;
const EXPANDED = 210;

type SidebarItem = {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageSrc?: string;
  imageAlt?: string;
};

const sidebarItems: SidebarItem[] = [
  {
    label: "Control Room",
    imageSrc: "/overview-2.png",
    imageAlt: "Control Room",
  },
  { label: "Projects", imageSrc: "/projects.png", imageAlt: "Projects" },
  { label: "Skills", imageSrc: "/skills.png", imageAlt: "Skills" },
  { label: "Timeline", imageSrc: "/timeline.png", imageAlt: "Timeline" },
  { label: "What I Think", icon: IconQuestionMark },
  { label: "Let's Talk", icon: IconMoodWink2 },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      animate={{
        width: open ? EXPANDED : COLLAPSED,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn(
        "relative flex h-full flex-col gap-2 p-4 transition-transform duration-200",
      )}
    >
      {sidebarItems.map((item, index) => (
        <SidebarItemComponent open={open} key={index} item={item} />
      ))}
      <div
        onClick={() => setOpen(!open)}
        className={cn("absolute top-1 -right-12 m-2 h-7 w-7 cursor-pointer")}
      >
        <SideBarToggle className={cn("m-2 h-7 w-7")} />
      </div>
    </motion.div>
  );
};

const SidebarItemComponent = ({
  item,
  open,
}: {
  item: SidebarItem;
  open: Boolean;
}) => {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-xl border border-neutral-200 p-2 transition-shadow duration-200 hover:bg-gray-100 hover:shadow-xl",
      )}
    >
      {item.imageSrc ? (
        <Image
          src={item.imageSrc}
          alt={item.imageAlt || item.label}
          width={50}
          height={50}
          className="h-10 w-10 shrink-0"
        />
      ) : (
        item.icon && <item.icon className="h-10 w-10 shrink-0" />
      )}

      <AnimatePresence>
        {open && (
          <motion.span
            initial={{
              scale: 0.98,
              filter: "blur(10px)",
              opacity: 0,
            }}
            animate={{
              scale: 1,
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{
              scale: 0.98,
              filter: "blur(10px)",
              opacity: 0,
            }}
            transition={{
              duration: open ? 0.35 : 0.2,
            }}
            className={cn("flex-1 px-2 whitespace-nowrap overflow-hidden")}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
