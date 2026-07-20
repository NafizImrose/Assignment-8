import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiBook } from "react-icons/fi";

const categoryStyles = {
  Story: "bg-amber-50 text-amber-700 border-amber-200",
  Tech: "bg-sky-50 text-sky-700 border-sky-200",
  Science: "bg-violet-50 text-violet-700 border-violet-200",
};

export default function BookCard({ book }) {
  return (
    <article className="card-soft group flex h-full flex-col overflow-hidden border border-slate-100">
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-emerald-200 to-emerald-600">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span
          className={`absolute left-3 top-3 rounded-lg border px-2.5 py-1 text-xs font-semibold backdrop-blur-sm ${
            categoryStyles[book.category] ||
            "border-slate-200 bg-white/90 text-slate-700"
          }`}
        >
          {book.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-slate-900 line-clamp-2 transition-colors group-hover:text-emerald-700">
          {book.title}
        </h3>
        <p className="mt-1.5 text-sm text-slate-500">by {book.author}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
            <FiBook className="text-emerald-600" />
            {book.available_quantity} available
          </span>
          <Link
            href={`/books/${book.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:shadow-emerald-500/25"
          >
            Details
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
