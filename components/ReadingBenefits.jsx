"use client";

import { motion } from "framer-motion";
import {
  HiOutlineCollection,
  HiOutlineLightningBolt,
  HiOutlineBadgeCheck,
  HiOutlineGift,
} from "react-icons/hi";
import SectionTitle from "./SectionTitle";

const benefits = [
  {
    icon: HiOutlineCollection,
    title: "Huge Collection",
    description:
      "Thousands of carefully curated titles across Story, Tech, and Science — always growing.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Easy Borrowing",
    description:
      "Find a book, tap borrow, and start reading. Simple steps with a seamless experience.",
  },
  {
    icon: HiOutlineBadgeCheck,
    title: "Trusted Authors",
    description:
      "Every title is selected for quality writing, accuracy, and lasting reading value.",
  },
  {
    icon: HiOutlineGift,
    title: "Free Membership",
    description:
      "Join LibraNest at no cost and unlock borrowing privileges across our catalog.",
  },
];

export default function ReadingBenefits() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/40 to-white py-16 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Our Library"
          subtitle="Built for curious minds who want a premium, effortless borrowing experience."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-md shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/25 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="text-2xl" />
              </span>
              <h3 className="font-display text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
