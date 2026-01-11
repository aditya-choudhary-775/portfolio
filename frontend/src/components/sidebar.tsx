"use client";
import { cn } from "@/lib/utils";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconMoodWink2,
  IconQuestionMark,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SidebarToggle } from "./icons";

const COLLAPSED = 90;
const EXPANDED = 210;

type SidebarItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

const sidebarItems: SidebarItem[] = [
  {
    label: "Control Panel",
    href: "/",
    imageSrc: "/overview-2.svg",
    imageAlt: "Control Room",
    className: "mt-8",
  },
  {
    label: "Projects",
    href: "/projects",
    imageSrc: "/projects.svg",
    imageAlt: "Projects",
  },
  {
    label: "Skills",
    href: "/skills",
    imageSrc: "/skills.svg",
    imageAlt: "Skills",
  },
  {
    label: "Timeline",
    href: "/timeline",
    imageSrc: "/timeline.svg",
    imageAlt: "Timeline",
  },
  { label: "Brain Dump", href: "/what-i-think", icon: IconQuestionMark },
  { label: "Say Hi", href: "/lets-talk", icon: IconMoodWink2 },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <motion.div
      animate={{
        width: open ? EXPANDED : COLLAPSED,
      }}
      transition={{
        duration: open ? 0.35 : 0.2,
        ease: "easeInOut",
      }}
      className={cn(
        "relative flex h-full flex-col gap-2 p-4 transition-transform duration-200",
      )}
    >
      {sidebarItems.map((item, index) => (
        <SidebarItemComponent
          className={item.className || ""}
          open={open}
          key={index}
          item={item}
          isActive={pathname === item.href}
        />
      ))}

      <div
        onClick={() => setOpen(!open)}
        className={cn("absolute top-2 right-4 z-50 h-7 w-7 cursor-pointer")}
      >
        <SidebarToggle open={open} className={cn("h-7 w-7")} />
      </div>
    </motion.div>
  );
};

const SidebarItemComponent = ({
  item,
  open,
  className,
  isActive,
}: {
  item: SidebarItem;
  open: Boolean;
  className?: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-xl border p-2 transition-all duration-200 hover:bg-gray-100 hover:shadow-xl",
        isActive
          ? "border-green-500 bg-green-50 hover:bg-green-100"
          : "border-neutral-200",
        className,
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
            className={cn(
              "flex-1 overflow-hidden px-2 font-medium whitespace-nowrap transition-all duration-300",
              isActive && "text-green-700",
            )}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
};
