import React from "react";

export const Badge = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-between gap-2 bg-neutral-100 z-5 border rounded-xl px-2">
      <div className="rounded-full bg-green-400 size-2" />
      <span className="text-xs font-bold tracking-wide font-mono">{text}</span>
    </div>
  );
};
