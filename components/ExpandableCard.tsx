"use client";

import { useState } from "react";

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
}

export default function ExpandableCard({ title, children }: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/90 rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-white/95 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#1A3A47]">
          {title}
        </h2>
        <span className={`text-[#5BA3BF] text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-8 pb-8 pt-2 border-t border-[#D6EAF2]">
          {children}
        </div>
      </div>
    </div>
  );
}
