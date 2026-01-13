"use client";
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
import React, { useEffect, useState } from "react";
import { Badge } from "./badge";
import { motion } from "motion/react";

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
  id: string;
  title: string;
  description: string;
  status: StatusKey;
  technologies: TechnologyIcon[];
  links: ProjectLink;
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
      size={size}
      color={statusBadges[status]}
      text={status}
      className={className}
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

const ProjectCard = ({
  project,
  idArray,
  goNext,
  goPrev,
}: ProjectCardProps & {
  idArray: string[];
  goNext: () => void;
  goPrev: () => void;
}) => {
  const { id, title, description, status, technologies, links } = project;

  const statusSize = "4px";
  const statusClassName = "px-1 gap-1";
  const height = "h-[290px]";
  const padding = "p-2";
  const titleSize = "text-sm";
  const titleMarginY = "my-1";
  const descriptionSize = "text-xs";
  const technologyLabelSize = "text-[10px]";
  const iconSize = "size-4";
  const viewDetailsSize = "size-4";
  const gapSize = "gap-1";
  const linksGap = "gap-2";

  const slotVariants = {
    left: {
      x: -35,
      scale: 1,
      opacity: 1,
      zIndex: 1,
    },
    center: {
      x: 0,
      scale: 1.25,
      opacity: 1,
      zIndex: 3,
    },
    right: {
      x: 35,
      scale: 1,
      opacity: 1,
      zIndex: 1,
    },
  };

  let role: "left" | "center" | "right";

  if (project.id === idArray[0]) role = "left";
  else if (project.id === idArray[1]) role = "center";
  else if (project.id === idArray[2]) role = "right";
  else return null;

  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={(_, info) => {
        if (info.offset.x < -120) goNext();
        if (info.offset.x > 120) goPrev();
      }}
      layoutId={`card-${id}`}
      animate={slotVariants[role]}
      transition={{
        duration: 0.6,
      }}
      className={`flex aspect-13/14 ${height} flex-col rounded-md border ${padding} backdrop-blur-[1px]`}
    >
      <div className="h-[50%] rounded-md border" />

      <div className={`flex items-center ${titleMarginY} ${gapSize} p-1`}>
        <span className={`${titleSize} font-bold`}>{title}</span>
        <div className="flex flex-1 items-center justify-start">
          <Status
            size={statusSize}
            status={status}
            className={statusClassName}
          />
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
    </motion.div>
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
    id: "0",
    title: "Creator OS",
    description:
      "An all-in-one workspace for YouTubers to plan, publish, and track their content",
    status: "Evolving",
    technologies: allTechnologies,
    links: {
      website: "#",
      github: "#",
      details: "#",
    },
  },
  {
    id: "1",
    title: "Portfolio V2",
    description:
      "A personal system for tracking my growth, and everything I do",
    status: "In Progress",
    technologies: allTechnologies,
    links: {
      website: "#",
      github: "#",
      details: "#",
    },
  },
  {
    id: "2",
    title: "Video Idea Bank",
    description:
      "A simple tool to capture, organize, and rate YouTube video ideas",
    status: "Rebuilding",
    technologies: allTechnologies,
    links: {
      website: "#",
      github: "#",
      details: "#",
    },
  },
];

// Main Component
export const TopBuilds = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const total = projects.length;

  const center = projects[activeIndex];
  const left = projects[(activeIndex - 1 + total) % total];
  const right = projects[(activeIndex + 1) % total];

  const projectsDisplay = [left, center, right];

  const [locked, setLocked] = useState(false);

  const goNext = () => {
    if (locked) return;
    setLocked(true);
    setActiveIndex((i) => (i + 1) % total);
    setTimeout(() => setLocked(false), 700);
  };

  const goPrev = () => {
    if (locked) return;
    setLocked(true);
    setActiveIndex((i) => (i - 1 + total) % total);
    setTimeout(() => setLocked(false), 700);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (locked) return;

    if (e.deltaX > 40) goNext();
    if (e.deltaX < -40) goPrev();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      onWheel={handleWheel}
      className="mt-5 flex flex-col items-center gap-16"
    >
      <h1 className="my-2 cursor-pointer touch-pan-x touch-pan-y overscroll-contain text-center text-3xl font-bold">
        Top Builds
      </h1>
      <div className="mt-6 flex items-center justify-center gap-3">
        {projectsDisplay.map((project) => {
          return (
            <ProjectCard
              idArray={[left.id, center.id, right.id]}
              project={project}
              key={project.id}
              goNext={goNext}
              goPrev={goPrev}
            />
          );
        })}
      </div>
    </div>
  );
};
