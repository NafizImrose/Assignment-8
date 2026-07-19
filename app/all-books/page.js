"use client";

import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import BookCard from "@/components/BookCard";
import CategorySidebar from "@/components/CategorySidebar";
import books from "@/data/books.json";

export default function AllBooksPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesCategory =
        activeCategory === "All" || book.category === activeCategory;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="border-b border-slate-100 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <div className="h-1 w-14 rounded-full bg-white/50" />
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              All Books
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Search our catalog and browse by category to find your perfect
              next read.
            </p>
          </div>
          <div className="relative mx-auto max-w-2xl">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or author..."
              className="w-full rounded-2xl border-0 bg-white py-4 pl-12 pr-5 text-slate-800 shadow-xl shadow-emerald-900/20 outline-none ring-2 ring-transparent transition placeholder:text-slate-400 focus:ring-emerald-300"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full shrink-0 lg:w-64">
            <CategorySidebar
              active={activeCategory}
              onSelect={setActiveCategory}
            />
          </div>

          <div className="flex-1">
            <p className="mb-6 text-sm font-medium text-slate-500">
              Showing{" "}
              <span className="text-emerald-700">{filteredBooks.length}</span>{" "}
              {filteredBooks.length === 1 ? "book" : "books"}
              {activeCategory !== "All" && (
                <>
                  {" "}
                  in <span className="text-emerald-700">{activeCategory}</span>
                </>
              )}
            </p>

            {filteredBooks.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-20 text-center">
                <p className="font-display text-xl text-slate-700">
                  No books found
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Try another category or clear your search.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                  >
                    <BookCard book={book} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
