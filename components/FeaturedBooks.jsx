"use client";

import { motion } from "framer-motion";
import BookCard from "./BookCard";
import SectionTitle from "./SectionTitle";

export default function FeaturedBooks({ books }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionTitle
        title="Featured Books"
        subtitle="Hand-picked titles to spark your next reading adventure."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <BookCard book={book} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
