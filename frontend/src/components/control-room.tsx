"use client";
import { cn } from "@/lib/utils";
import {
  IconBrandInstagramFilled,
  IconBrandYoutubeFilled,
  IconCodeCircleFilled,
} from "@tabler/icons-react";
import { ProfileCard } from "./profile-card";
import { SocialButtonsContainer } from "./social-buttons-container";
import { StatCard } from "./stat-card";
import { RecentActivity } from "./recent-activity";

export const ControlRoom = () => {
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

      <div className="col-span-6 row-span-4 h-full w-full p-3">
        <div className="flex h-full w-full flex-col items-center gap-2 rounded-md border">
          <RecentActivity />
        </div>
      </div>

      <div className="col-span-3 row-span-3 h-full w-full p-3">
        <div className="h-full w-full rounded-md border"></div>
      </div>
    </div>
  );
};
