import { getBackgroundPattern } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconClockCheck,
} from "@tabler/icons-react";

export const RecentActivity = () => {
  const recentActivities = [
    {
      id: 1,
      title: "Polished sidebar expand/collapse motion",
      timestamp: "Today",
      youtube: true,
      instagram: false,
    },
    {
      id: 2,
      title: "Adjusted motion easing for better UI feel",
      timestamp: "Today",
      youtube: false,
      instagram: true,
    },
    {
      id: 3,
      title: "Refined Control Room bento grid layout",
      timestamp: "Yesterday",
      youtube: true,
      instagram: true,
    },
    {
      id: 4,
      title: "Added pixel avatar to profile section",
      timestamp: "Yesterday",
      youtube: false,
      instagram: false,
    },
    {
      id: 5,
      title: "Finalized badge system under profile name",
      timestamp: "2 days ago",
      youtube: false,
      instagram: true,
    },
    {
      id: 6,
      title: "Implemented Recent Activity feed",
      timestamp: "2 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 7,
      title: "Cleaned up sidebar icon spacing",
      timestamp: "3 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 8,
      title: "Updated project cards content",
      timestamp: "3 days ago",
      youtube: true,
      instagram: true,
    },
    {
      id: 9,
      title: "Improved hover states across Control Room",
      timestamp: "4 days ago",
      youtube: false,
      instagram: true,
    },
    {
      id: 10,
      title: "Refactored layout structure for responsiveness",
      timestamp: "4 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 11,
      title: "Shipped portfolio v2 initial version",
      timestamp: "5 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 12,
      title: "Recorded a new YouTube dev log",
      timestamp: "6 days ago",
      youtube: false,
      instagram: true,
    },
    {
      id: 13,
      title: "Published a new Instagram reel",
      timestamp: "6 days ago",
      youtube: false,
      instagram: true,
    },
    {
      id: 14,
      title: "Planned next set of content ideas",
      timestamp: "7 days ago",
      youtube: false,
      instagram: true,
    },
    {
      id: 15,
      title: "Explored pixel avatar styles for profile",
      timestamp: "8 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 16,
      title: "Experimented with bento-style dashboards",
      timestamp: "9 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 17,
      title: "Reviewed UI motion best practices",
      timestamp: "10 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 18,
      title: "Refined personal design direction",
      timestamp: "11 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 19,
      title: "Outlined roadmap for portfolio improvements",
      timestamp: "12 days ago",
      youtube: true,
      instagram: false,
    },
    {
      id: 20,
      title: "Started rebuilding personal portfolio system",
      timestamp: "2 weeks ago",
      youtube: true,
      instagram: false,
    },
  ];

  return (
    <>
      <div
        className={cn(
          "mt-3 bg-white flex items-center gap-3 rounded-md border p-2 text-xl font-bold", getBackgroundPattern()
        )}
      >
        <IconClockCheck className="text-green-600" />
        <span className="font-mono">Activity Feed</span>
      </div>

      <div
        className={cn(
          "no-scrollbar mt-[6px] mb-3 flex w-full flex-1 flex-col gap-2 overflow-y-scroll mask-b-from-40% px-3"
        )}
      >
        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className={cn("flex items-center gap-3 rounded-md border bg-white p-2", ...getBackgroundPattern())}
          >
            <div className="size-2 shrink-0 rounded-full border bg-green-300" />
            <span className="flex-1 text-sm font-mono tracking-tighter">{activity.title}</span>
            {activity.youtube && (
              <IconBrandYoutube className="cursor-pointer text-red-500 transition-all duration-200 hover:scale-125" />
            )}
            {activity.instagram && (
              <IconBrandInstagram className="cursor-pointer text-pink-400 duration-200 hover:scale-125" />
            )}
            <span className="text-xs text-gray-500">{activity.timestamp}</span>
          </div>
        ))}
      </div>
    </>
  );
};
