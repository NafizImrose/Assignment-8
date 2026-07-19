"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiImage, FiUser } from "react-icons/fi";

export default function UpdateProfilePage() {
  return (
    <div className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/40 to-white px-4 py-16">
      <div className="pointer-events-none absolute left-1/4 top-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass w-full max-w-lg rounded-3xl p-8 shadow-2xl shadow-slate-300/40 sm:p-10"
      >
        <Link
          href="/profile"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-700"
        >
          <FiArrowLeft />
          Back to Profile
        </Link>

        <h1 className="font-display text-3xl font-semibold text-slate-900">
          Update Profile
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Refresh your display name and profile photo URL.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="profile-image"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Profile Image URL
            </label>
            <div className="relative">
              <FiImage className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="profile-image"
                type="url"
                defaultValue="https://i.pravatar.cc/300?img=12"
                placeholder="https://example.com/avatar.jpg"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="profile-name"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Name
            </label>
            <div className="relative">
              <FiUser className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="profile-name"
                type="text"
                defaultValue="Alex Rivera"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <button type="submit" className="btn-brand w-full !py-3.5">
            Update
          </button>
        </form>
      </motion.div>
    </div>
  );
}
