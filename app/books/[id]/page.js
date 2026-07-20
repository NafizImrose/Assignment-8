"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiBook,
  FiUser,
  FiTag,
  FiShoppingBag,
} from "react-icons/fi";
import books from "@/data/books.json";
import { authClient } from "@/lib/auth-client";

const categoryStyles = {
  Story: "bg-amber-50 text-amber-700 border-amber-200",
  Tech: "bg-sky-50 text-sky-700 border-sky-200",
  Science: "bg-violet-50 text-violet-700 border-violet-200",
};

export default function BookDetailsPage() {
  const { data: session, isPending } = authClient.useSession();
  const params = useParams();
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-3xl font-semibold text-slate-900">
          Book not found
        </h1>
        <p className="mt-2 text-slate-600">
          This title may have been removed from the catalog.
        </p>
        <Link href="/all-books" className="btn-brand mt-6">
          <FiArrowLeft />
          Back to All Books
        </Link>
      </div>
    );
  }

  const handleBorrow = () => {
    toast.info("Borrow feature coming soon");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <Link
          href="/all-books"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-700"
        >
          <FiArrowLeft />
          Back to All Books
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl shadow-slate-300/60 lg:mx-0 lg:max-w-none"
          >
            <Image
              src={book.image_url}
              alt={book.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span
              className={`mb-4 inline-flex w-fit items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold ${
                categoryStyles[book.category] ||
                "border-slate-200 bg-slate-50 text-slate-700"
              }`}
            >
              <FiTag />
              {book.category}
            </span>

            <h1 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {book.title}
            </h1>

            <p className="mt-4 flex items-center gap-2 text-lg text-slate-600">
              <FiUser className="text-emerald-600" />
              by{" "}
              <span className="font-semibold text-slate-800">
                {book.author}
              </span>
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {book.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-800">
                <FiBook />
                {book.available_quantity} available
              </span>
            </div>
            {/* Modal */}
            <dialog id="login_modal" className="modal">
              <div className="modal-box bg-gradient-to-br from-emerald-100 to-emerald-300">
                <h3 className="text-2xl text-emerald-700 font-bold">
                  Login Required
                </h3>

                <p className="py-4">Please log in to borrow this book.</p>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cancel</button>
                  </form>

                  <Link href="/login" className="btn btn-success">
                    Login
                  </Link>
                </div>
              </div>
            </dialog>

            {/* conditinal rendaring */}
            {session ? (
              <button
                type="button"
                onClick={handleBorrow}
                className="btn-brand cursor-pointer mt-8 w-full max-w-xs !py-3.5 text-base"
              >
                <FiShoppingBag className="text-lg" />
                Borrow
              </button>
            ) : (
              <button
                onClick={() =>
                  document.getElementById("login_modal").showModal()
                }
                type="button"
                // onClick={handleBorrow}
                className="btn-brand mt-8 w-full cursor-pointer max-w-xs !py-3.5 text-base"
              >
                <FiShoppingBag className="text-lg" />
                Borrow
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
