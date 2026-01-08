"use client";
import { cn } from "@/lib/utils";
import {
  IconBrandInstagramFilled,
  IconBrandYoutubeFilled,
  IconCode,
  IconCodeCircleFilled,
} from "@tabler/icons-react";
import { ProfileCard } from "./profile-card";
import { SocialButtonsContainer } from "./social-buttons-container";
import { StatCard } from "./stat-card";
import { RecentActivity } from "./recent-activity";
import { InProgress } from "./in-progress";
import { GridItem } from "./grid-item";

export const ControlRoom = () => {
  const inProgressItems = [
    {
      id: 1,
      icon: <IconBrandYoutubeFilled className="shrink-0 text-red-500" />,
      title: "Point Zero",
    },
    {
      id: 2,
      icon: <IconBrandInstagramFilled className="shrink-0 text-pink-400" />,
      title: "The Art Of Remembering Names",
    },
    {
      id: 3,
      icon: <IconCode className="shrink-0 text-indigo-400" />,
      title: "Portfolio Website",
    },
  ];

  return (
    <div className={cn("grid h-full grid-cols-12 grid-rows-6")}>
      <StatCard
        value="5"
        icon={<IconCodeCircleFilled className="z-5 size-8" />}
        label="Projects Shipped"
      />

      <StatCard
        value="8"
        icon={<IconBrandYoutubeFilled className="z-5 size-8" />}
        label="Videos Published"
      />

      <StatCard
        value="12"
        icon={<IconBrandInstagramFilled className="z-5 size-8" />}
        label="Reels Published"
      />

      <ProfileCard />

      <SocialButtonsContainer />

      <GridItem colSpan="col-span-6" rowSpan="row-span-4">
        <div className="flex h-full w-full flex-col items-center gap-2 rounded-md border">
          <RecentActivity />
        </div>
      </GridItem>

      <GridItem colSpan="col-span-3" rowSpan="row-span-3">
        <InProgress items={inProgressItems} />
      </GridItem>
    </div>
  );
};
