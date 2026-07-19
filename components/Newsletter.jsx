"use client";

import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 px-6 py-14 shadow-2xl shadow-emerald-600/20 sm:px-10 lg:px-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-300/20 blur-2xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
            <FiMail className="text-2xl" />
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-3 text-base text-emerald-50/90 sm:text-lg">
            Get new arrivals, reading tips, and exclusive member offers —
            delivered straight to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="w-full flex-1 rounded-xl border-0 bg-white/95 px-5 py-3.5 text-slate-800 shadow-lg outline-none ring-2 ring-transparent transition placeholder:text-slate-400 focus:ring-white/50"
            />
            <button type="submit" className="btn-brand shrink-0 !bg-slate-900 !from-slate-900 !to-slate-800 !shadow-black/20 hover:!shadow-black/30">
              Subscribe
              <FiSend />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
