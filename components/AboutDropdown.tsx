"use client";

import { useState } from "react";

interface DropdownItem {
  title: string;
  content: React.ReactNode;
}

interface AboutDropdownProps {
  items: DropdownItem[];
}

export default function AboutDropdown({ items }: AboutDropdownProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.title} className="border border-[#D6EAF2] rounded-sm overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-[#F0F7FA] transition-colors text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#1A3A47]">
              {item.title}
            </span>
            <span
              className={`text-[#5BA3BF] text-lg transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`transition-all duration-400 ease-in-out overflow-hidden ${
              openIndex === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 pt-2 bg-[#F8FBFD] border-t border-[#D6EAF2]">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
