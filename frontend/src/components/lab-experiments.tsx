import React from "react";
import { Badge } from "./badge";
import Link from "next/link";
import {
  IconArrowNarrowRight,
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandYoutube,
  IconWorldWww,
} from "@tabler/icons-react";

// Types
const statusBadges = {
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
} as const;

export type StatusKey = keyof typeof statusBadges;

type TechnologyIcon = React.ComponentType<{ className?: string }>;

interface ExperimentLink {
  youtube?: string;
  website?: string;
  github?: string;
  details?: string;
}

interface Experiment {
  title: string;
  description: string;
  status: StatusKey;
  statusSize: string;
  statusClassName: string;
  technologies: TechnologyIcon[];
  links: ExperimentLink;
  height: string;
  iconSize: string;
  viewDetailsSize: string;
  textSize: string;
}

// Components
const Status = ({
  status,
  size,
  className,
}: {
  status: StatusKey;
  size: string;
  className?: string;
}) => {
  return (
    <Badge
      className={className}
      size={size}
      color={statusBadges[status]}
      text={status}
    />
  );
};

const TechnologyIcons = ({
  technologies,
  iconSize,
}: {
  technologies: TechnologyIcon[];
  iconSize: string;
}) => {
  return (
    <div className="flex flex-1 items-center gap-1">
      {technologies.map((Icon, index) => (
        <Icon key={index} className={iconSize} />
      ))}
    </div>
  );
};

const ExperimentLinks = ({ links }: { links: ExperimentLink }) => {
  if (!links.youtube && !links.website && !links.github) return null;

  return (
    <div className="flex items-center gap-2">
      {links.youtube && (
        <Link href={links.youtube}>
          <IconBrandYoutube />
        </Link>
      )}
      {links.website && (
        <Link href={links.website}>
          <IconWorldWww />
        </Link>
      )}
      {links.github && (
        <Link href={links.github}>
          <IconBrandGithub />
        </Link>
      )}
    </div>
  );
};

const ViewDetailsLink = ({
  href,
  size,
  textSize,
}: {
  href?: string;
  size: string;
  textSize: string;
}) => {
  if (!href) return null;

  return (
    <Link href={href} className="group flex items-center gap-px">
      <span className={`${textSize} text-cyan-500`}>View Details</span>
      <IconArrowNarrowRight
        className={`${size} text-cyan-500 transition-all duration-300 ease-in-out group-hover:translate-x-2`}
      />
    </Link>
  );
};

interface ExperimentCardProps {
  experiment: Experiment;
}

const ExperimentCard = ({ experiment }: ExperimentCardProps) => {
  const {
    title,
    description,
    status,
    statusSize,
    statusClassName,
    technologies,
    links,
    height,
    iconSize,
    viewDetailsSize,
    textSize,
  } = experiment;

  return (
    <div
      className={`mx-auto flex aspect-19/20 ${height} flex-col gap-1 rounded-md border backdrop-blur-[1px]`}
    >
      <h1 className="p-2 text-center font-bold">{title}</h1>
      <div className="flex items-center px-2 py-1">
        <div className="flex flex-1 items-center">
          <Status
            size={statusSize}
            status={status}
            className={statusClassName}
          />
        </div>
        <ExperimentLinks links={links} />
      </div>
      <p className="px-2 py-4 text-xs text-gray-600">{description}</p>

      <div className="flex flex-col gap-1 p-2 text-gray-500">
        <span className="text-[10px]">Technologies</span>
        <TechnologyIcons technologies={technologies} iconSize={iconSize} />
      </div>

      <div className="flex flex-1 items-end justify-end pr-2 pb-3">
        <ViewDetailsLink
          href={links.details}
          size={viewDetailsSize}
          textSize={textSize}
        />
      </div>
    </div>
  );
};

// Data
const allTechnologies: TechnologyIcon[] = [
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandNodejs,
];

const experiments: Experiment[] = [
  {
    title: "Subtitle Generator",
    description:
      "Generate clean subtitles for short-form videos from plain text",
    status: "Live",
    statusSize: "5px",
    statusClassName: "gap-[6px] px-[6px]",
    technologies: allTechnologies,
    links: {
      youtube: "#",
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[240px]",
    iconSize: "size-4",
    viewDetailsSize: "size-5",
    textSize: "text-xs",
  },
  {
    title: "Tweet to Reel",
    description: "Turn a tweet into a vertical Instagram reel layout",
    status: "Live",
    statusSize: "5px",
    statusClassName: "gap-[6px] px-[6px]",
    technologies: allTechnologies,
    links: {
      youtube: "#",
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[240px]",
    iconSize: "size-4",
    viewDetailsSize: "size-5",
    textSize: "text-xs",
  },
  {
    title: "Video Title Tester",
    description: "Compare multiple YouTube titles to see which reads better",
    status: "Building",
    statusSize: "5px",
    statusClassName: "gap-[6px] px-[6px]",
    technologies: allTechnologies,
    links: {
      youtube: "#",
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[240px]",
    iconSize: "size-4",
    viewDetailsSize: "size-5",
    textSize: "text-xs",
  },
  {
    title: "Daily Goal Tracker",
    description:
      "Generate clean subtitles for short-form videos from plain text",
    status: "Archived",
    statusSize: "5px",
    statusClassName: "gap-[6px] px-[6px]",
    technologies: allTechnologies,
    links: {
      youtube: "#",
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[240px]",
    iconSize: "size-4",
    viewDetailsSize: "size-5",
    textSize: "text-xs",
  },
  {
    title: "Link in Bio Builder",
    description:
      "Create a simple mobile-friendly link page for social profiles",
    status: "Abandoned",
    statusSize: "5px",
    statusClassName: "gap-[6px] px-[6px]",
    technologies: allTechnologies,
    links: {
      youtube: "#",
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[240px]",
    iconSize: "size-4",
    viewDetailsSize: "size-5",
    textSize: "text-xs",
  },
  {
    title: "Script Timer",
    description: "Estimate how long a video script will take to read",
    status: "Shipped",
    statusSize: "5px",
    statusClassName: "gap-[6px] px-[6px]",
    technologies: allTechnologies,
    links: {
      youtube: "#",
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[240px]",
    iconSize: "size-4",
    viewDetailsSize: "size-5",
    textSize: "text-xs",
  },
];

// Main Component
export const LabExperiments = () => {
  return (
    <div className="mb-30">
      <h1 className="mb-16 text-center text-3xl font-bold">
        The Lab Experiments
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {experiments.map((experiment, index) => (
          <ExperimentCard key={index} experiment={experiment} />
        ))}
      </div>
    </div>
  );
};
