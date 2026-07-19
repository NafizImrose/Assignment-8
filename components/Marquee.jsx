"use client";

import { FiZap } from "react-icons/fi";

const messages = [
  "New Arrivals",
  "Special Membership Discount",
  "Explore Science Books",
  "Best Selling Tech Books",
  "Free Membership Available",
  "Trusted Authors Collection",
];

export default function Marquee() {
  const items = [...messages, ...messages];

  return (
    <div className="relative overflow-hidden border-y border-emerald-800/20 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 py-3.5">
      <div className="animate-marquee flex w-max gap-0 whitespace-nowrap">
        {items.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="inline-flex items-center gap-3 px-6 text-sm font-semibold tracking-wide text-white sm:text-base"
          >
            <FiZap className="text-emerald-200" />
            {text}
            <span className="text-emerald-200/70">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
