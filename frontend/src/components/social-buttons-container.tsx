"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SocialButton } from "./social-button";
import { YouTube } from "./icons";
import { GridItem } from "./grid-item";
import { getBackgroundPattern } from "@/lib/constants";

export const SocialButtonsContainer = () => {
  return (
    <GridItem colSpan="col-span-3" rowSpan="row-span-4">
      <div className={cn("flex h-full w-full bg-gray-100 flex-col items-center justify-center gap-5 rounded-md border perspective-distant transform-3d", ...getBackgroundPattern())}>
        <SocialButton
          icon={<YouTube className={cn("h-10")} />}
          hoverShadowColor="var(--color-red-600)"
          initialShadowColor="var(--color-red-400)"
        />
        <SocialButton
          icon={
            <Image
              src="/instagram.png"
              height={24}
              width={24}
              alt="Instagram"
              className={cn("size-14 shrink-0")}
            />
          }
          hoverShadowColor="var(--color-purple-600)"
          initialShadowColor="var(--color-purple-400)"
          className="p-3"
          initialRotateX={40}
        />
      </div>
    </GridItem>
  );
};
