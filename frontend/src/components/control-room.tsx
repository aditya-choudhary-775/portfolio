"use client";
import { cn } from "@/lib/utils";
import {
  IconBrandInstagramFilled,
  IconBrandYoutubeFilled,
  IconCodeCircleFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { Instagram, YouTube } from "./icons";
import Link from "next/link";
import { motion } from "motion/react";
import { Badge } from "./badge";

export const ControlRoom = () => {
  return (
    <div className={cn("grid h-full grid-cols-12 grid-rows-6")}>
      <div className="col-span-3 row-span-2 h-full w-full p-3">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md border">
          <span className="font-architects-daughter text-8xl">5</span>
          <div className="flex items-center justify-center gap-2">
            <IconCodeCircleFilled className="z-5 size-8" />
            <span className="font-bold">Projects Shipped</span>
          </div>
        </div>
      </div>

      <div className="col-span-3 row-span-2 h-full w-full p-3">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md border">
          <span className="font-architects-daughter text-8xl">8</span>
          <div className="flex items-center justify-center gap-2">
            <IconBrandYoutubeFilled className="z-5 size-8" />
            <span className="font-bold">Videos Published</span>
          </div>
        </div>
      </div>

      <div className="col-span-3 row-span-2 h-full w-full p-3">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md border">
          <span className="font-architects-daughter text-8xl">12</span>
          <div className="flex items-center justify-center gap-2">
            <IconBrandInstagramFilled className="z-5 size-8" />
            <span className="font-bold">Reels Published</span>
          </div>
        </div>
      </div>

      <div className="col-span-3 row-span-3 h-full w-full p-3">
        <div
          className={cn(
            "flex h-full w-full flex-col items-center justify-center gap-3 rounded-md bg-gray-900", "transform-3d perspective-distant","bg-[radial-gradient(var(--color-gray-300),_transparent_1px)]",
              "bg-size-[10px_10px]",
          )}
        >
          <motion.div
            initial={{
              rotateX: 23,
              rotateY: -23,
              rotateZ: 15,
            }}
            whileHover={{
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "flex h-full w-full scale-94 flex-col items-center border justify-center gap-3 rounded-md bg-white z-5 translate-z-22",
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
          </motion.div>
        </div>
      </div>

      <div className="col-span-3 row-span-4 h-full w-full p-3">
        <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-md border perspective-distant transform-3d">
          <motion.button
            initial={{
              rotateX: 35,
              rotateY: 20,
              boxShadow: "0px 20px 50px var(--color-red-400)",
            }}
            whileTap={{
              y: 0,
            }}
            whileHover={{
              rotateX: 0,
              rotateY: 0,
              boxShadow: "0px 20px 50px var(--color-red-600)",
              y: -5,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "cursor-pointer rounded-xl border border-neutral-100 bg-white p-4",
              "translate-z-96 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)_inset,0px_-1px_2px_0px_rgba(0,0,0,0.1)_inset]",
            )}
          >
            <YouTube className={cn("h-10")} />
          </motion.button>

          <motion.button
            initial={{
              rotateX: 40,
              rotateY: 20,
              boxShadow: "0px 20px 50px var(--color-purple-400)",
            }}
            whileTap={{
              y: 0,
            }}
            whileHover={{
              rotateX: 0,
              rotateY: 0,
              boxShadow: "0px 20px 50px var(--color-purple-600)",
              y: -5,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "cursor-pointer rounded-xl border border-neutral-100 bg-white p-3",
              "translate-z-96 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)_inset,0px_-1px_2px_0px_rgba(0,0,0,0.1)_inset]",
            )}
          >
            <Image
              src="/instagram.png"
              height={24}
              width={24}
              alt="Instagram"
              className={cn("size-14 shrink-0")}
            />
          </motion.button>
        </div>
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
