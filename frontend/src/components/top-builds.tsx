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
  IconWorldWww,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Badge } from "./badge";

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

interface ProjectLink {
  website?: string;
  github?: string;
  details?: string;
}

interface Project {
  title: string;
  description: string;
  status: StatusKey;
  statusSize: string;
  statusClassName?: string,
  technologies: TechnologyIcon[];
  links: ProjectLink;
  height: string;
  padding: string;
  titleSize: string;
  titleMarginY: string;
  descriptionSize: string;
  technologyLabelSize: string;
  iconSize: string;
  viewDetailsSize: string;
  gapSize: string;
  linksGap: string;
}

// Components
const Status = ({ status, size, className }: { status: StatusKey; size: string, className?: string }) => {
  return <Badge size={size} color={statusBadges[status]} text={status} className={className} />;
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

const ProjectLinks = ({
  links,
  iconSize,
  linksGap,
}: {
  links: ProjectLink;
  iconSize: string;
  linksGap: string;
}) => {
  if (!links.website && !links.github) return null;

  return (
    <div className={`flex items-center justify-end ${linksGap}`}>
      {links.website && (
        <Link href={links.website}>
          <IconWorldWww className={iconSize} />
        </Link>
      )}
      {links.github && (
        <Link href={links.github}>
          <IconBrandGithub className={iconSize} />
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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    title,
    description,
    status,
    statusSize,
    statusClassName,
    technologies,
    links,
    height,
    padding,
    titleSize,
    titleMarginY,
    descriptionSize,
    technologyLabelSize,
    iconSize,
    viewDetailsSize,
    gapSize,
    linksGap,
  } = project;

  return (
    <div
      className={`flex aspect-13/14 ${height} flex-col rounded-md border ${padding} backdrop-blur-[1px]`}
    >
      <div className="h-[50%] rounded-md border" />

      <div className={`flex items-center ${titleMarginY} ${gapSize} p-1`}>
        <span className={`${titleSize} font-bold`}>{title}</span>
        <div className="flex flex-1 items-center justify-start">
          <Status size={statusSize} status={status} className={statusClassName} />
        </div>
        <ProjectLinks links={links} iconSize={iconSize} linksGap={linksGap} />
      </div>

      <p className={`p-1 ${descriptionSize} text-gray-600`}>{description}</p>

      <div
        className={`flex flex-1 flex-col justify-end ${gapSize} px-1 text-gray-500`}
      >
        <span className={technologyLabelSize}>Technologies</span>
        <div className="flex items-center gap-1">
          <TechnologyIcons technologies={technologies} iconSize={iconSize} />
          <ViewDetailsLink
            href={links.details}
            size={viewDetailsSize}
            textSize={technologyLabelSize}
          />
        </div>
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

const projects: Project[] = [
  {
    title: "Creator OS",
    description:
      "An all-in-one workspace for YouTubers to plan, publish, and track their content",
    status: "Evolving",
    statusSize: "4px",
    statusClassName: "px-1 gap-1",
    technologies: allTechnologies,
    links: {
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[290px]",
    padding: "p-2",
    titleSize: "text-sm",
    titleMarginY: "my-1",
    descriptionSize: "text-xs",
    technologyLabelSize: "text-[10px]",
    iconSize: "size-4",
    viewDetailsSize: "size-4",
    gapSize: "gap-1",
    linksGap: "gap-2",
  },
  {
    title: "Portfolio V2",
    description:
      "A personal system for tracking my growth, and everything I do",
    status: "In Progress",
    statusSize: "6px",
    technologies: allTechnologies,
    links: {
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[380px]",
    padding: "p-3",
    titleSize: "text-xl",
    titleMarginY: "my-2",
    descriptionSize: "text-sm",
    technologyLabelSize: "text-xs",
    iconSize: "size-5",
    viewDetailsSize: "size-5",
    gapSize: "gap-2",
    linksGap: "gap-3",
  },
  {
    title: "Video Idea Bank",
    description:
      "A simple tool to capture, organize, and rate YouTube video ideas",
    status: "Rebuilding",
    statusSize: "4px",
    statusClassName: "px-1 gap-1",
    technologies: allTechnologies,
    links: {
      website: "#",
      github: "#",
      details: "#",
    },
    height: "h-[290px]",
    padding: "p-2",
    titleSize: "text-sm",
    titleMarginY: "my-1",
    descriptionSize: "text-xs",
    technologyLabelSize: "text-[10px]",
    iconSize: "size-4",
    viewDetailsSize: "size-4",
    gapSize: "gap-1",
    linksGap: "gap-2",
  },
];

// Main Component
export const TopBuilds = () => {
  return (
    <>
      <h1 className="my-2 text-center text-3xl font-bold">Top Builds</h1>
      <div className="mt-6 flex items-center justify-center gap-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};
