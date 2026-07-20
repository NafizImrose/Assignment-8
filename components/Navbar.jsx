"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiBookOpen } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-books", label: "All Books" },
  { href: "/profile", label: "My Profile" },
];

export default function Navbar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          toast.success("Signed Out successfully!");
        },
      },
    });
  };

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-200/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30">
            <FiBookOpen className="text-xl" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            BOOK<span className="text-emerald-600">Nest</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center space-x-3">
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center space-x-2">
                  <Link href={"/profile"}>
                    <FaUser />
                  </Link>
                  <h4 className="font-bold text-sm">
                    <Link href={"/profile"}>{user.name}</Link>
                  </h4>
                </div>

                <button
                  onClick={handleSignOut}
                  className="rounded-xl cursor-pointer bg-red-700 hidden md:flex  px-4 py-2 text-sm font-bold text-white shadow-xl transition-colors hover:bg-red-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="hidden items-center gap-3 md:flex">
                <Link
                  href="/login"
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-emerald-700"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="btn-brand !px-5 !py-2.5 text-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-200/60 bg-white/95 transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {user ? (
            <li className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-4">
              <p className="px-4 text-center font-semibold text-slate-700">
                Welcome, {user.name}
              </p>

              <button
                onClick={() => {
                  handleSignOut();
                  setOpen(false);
                }}
                className="w-full rounded-xl bg-red-700 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-4">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="btn-outline-brand w-full text-sm"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="btn-brand w-full text-sm"
              >
                Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
