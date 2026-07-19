"use client";

import { FiGrid, FiBookOpen, FiCpu, FiActivity } from "react-icons/fi";

const categories = [
  { name: "All", icon: FiGrid },
  { name: "Story", icon: FiBookOpen },
  { name: "Tech", icon: FiCpu },
  { name: "Science", icon: FiActivity },
];

export default function CategorySidebar({ active = "All", onSelect }) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/50 lg:sticky lg:top-24">
      <h2 className="mb-4 font-display text-xl font-semibold text-slate-900">
        Categories
      </h2>
      <ul className="flex flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {categories.map(({ name, icon: Icon }) => {
          const selected = active === name;
          return (
            <li key={name} className="shrink-0 lg:w-full">
              <button
                type="button"
                onClick={() => onSelect?.(name)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  selected
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md shadow-emerald-500/25"
                    : "bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                <Icon className="text-lg" />
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
