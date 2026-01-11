import {
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconWorldWww,
} from "@tabler/icons-react";
import { LayoutWithSidebar } from "../layout-with-sidebar";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { TopBuilds } from "@/components/top-builds";
import { LiveBuilds } from "@/components/live-builds";
import { LabExperiments } from "@/components/lab-experiments";

export let technologies = [
  <IconBrandNextjs />,
  <IconBrandReact />,
  <IconBrandTypescript />,
  <IconBrandVercel />,
  <IconBrandTailwind />,
  <IconBrandMongodb />,
  <IconBrandNodejs />,
];

export default function ProjectsPage() {
  const badges = {
    Live: "emerald",
    "In Progress": "blue",
    Evolving: "teal",
    Rebuilding: "amber",

    Building: "indigo",
    Polishing: "violet",
    Testing: "sky",
    Shipping: "cyan",
    Paused: "slate",

    Shipped: "green",
    Experiment: "fuchsia",
    Archived: "stone",
    Replaced: "yellow",
    Abandoned: "rose",
  };

  return (
    <div className="no-scrollbar flex h-full flex-col items-center overflow-y-scroll">
      <TopBuilds />
      <LiveBuilds />
      <LabExperiments />
    </div>
  );
}
