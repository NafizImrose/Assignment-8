"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMail,
  FiCalendar,
  FiAward,
  FiBookOpen,
  FiEdit3,
} from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { FiLock, FiUser } from "react-icons/fi";

const user = {
  name: "Alex Rivera",
  email: "alex.rivera@email.com",
  joined: "March 12, 2025",
  membership: "Premium Member",
  image: "https://i.pravatar.cc/300?img=12",
  borrowedBooks: [
    { id: "1", title: "The Whispering Forest", due: "Jul 28, 2026" },
    { id: "8", title: "Full-Stack Next.js", due: "Aug 02, 2026" },
    { id: "3", title: "Cosmos Unveiled", due: "Aug 10, 2026" },
  ],
};

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <p>loading...</p>;
  }

  if (!session) {
    return (
      <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50/40 to-white px-4">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl">
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <FiUser className="text-4xl text-emerald-600" />
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            You're not logged in
          </h1>

          {/* Description */}
          <p className="mt-3 text-slate-600">
            Please log in to view your profile, manage your borrowed books, and
            access your personal account.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              <FiLock />
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
            >
              Create Account
            </Link>
          </div>

          {/* Extra text */}
          <p className="mt-6 text-sm text-slate-500">
            Don't have an account? Create one to borrow books, save favorites,
            and manage your reading history.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="border-b border-emerald-800/10 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/40 shadow-xl"
          >
            <Image
              src={session.user.image}
              alt={user.name}
              fill
              sizes="112px"
              className="object-cover"
            />
          </motion.div>
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {session.user.name}
          </h1>
          <p className="mt-2 text-emerald-100">{session.user.email}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FiMail />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Email
                  </p>
                  <p className="font-medium">{session.user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FiCalendar />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Joined Date
                  </p>
                  <p className="font-medium">
                    {new Date(session.user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FiAward />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Membership
                  </p>
                  <p className="font-medium text-emerald-700">
                    {user.membership}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/profile/update"
              className="btn-brand shrink-0 self-start !px-5 !py-2.5 text-sm"
            >
              <FiEdit3 />
              Update Profile
            </Link>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-8">
            <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-slate-900">
              <FiBookOpen className="text-emerald-600" />
              Borrowed Books
            </h2>
            <ul className="space-y-3">
              {user.borrowedBooks.map((book) => (
                <li
                  key={book.id}
                  className="flex flex-col gap-1 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 transition-colors hover:border-emerald-200 hover:bg-emerald-50/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <Link
                    href={`/books/${book.id}`}
                    className="font-semibold text-slate-800 transition-colors hover:text-emerald-700"
                  >
                    {book.title}
                  </Link>
                  <span className="text-sm text-slate-500">Due {book.due}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
