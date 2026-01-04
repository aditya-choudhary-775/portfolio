"use client";
import { motion } from "motion/react";

export const SidebarToggle = ({
  className,
  open,
}: {
  className: string;
  open: Boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M9 4v16" />
      <motion.path
        animate={{
          rotate: open ? 0 : 900,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        d="M15 10l-2 2l2 2"
      />
    </svg>
  );
};

export const YouTube = ({ className }: { className: string }) => {
  return (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 160 110"
      className={className}
    >
      <path
        fill="#FF0000"
        d="M154.3,17.5c-1.8-6.7-7.1-12-13.8-13.8c-12.1-3.3-60.8-3.3-60.8-3.3S31,0.5,18.9,3.8
			c-6.7,1.8-12,7.1-13.8,13.8C1.9,29.7,1.9,55,1.9,55s0,25.3,3.3,37.5c1.8,6.7,7.1,12,13.8,13.8c12.1,3.3,60.8,3.3,60.8,3.3
			s48.7,0,60.8-3.3c6.7-1.8,12-7.1,13.8-13.8c3.3-12.1,3.3-37.5,3.3-37.5S157.6,29.7,154.3,17.5z"
      ></path>
      <polygon fill="#FFFFFF" points="64.2,78.4 104.6,55 64.2,31.6"></polygon>
    </svg>
  );
};

export const Instagram = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-8 w-8"
    >
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="30%" stopColor="#DD2A7B" />
          <stop offset="60%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>

      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
        fill="url(#igGradient)"
      />

      <circle cx="12" cy="12" r="4" fill="#fff" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
    </svg>
  );
};
