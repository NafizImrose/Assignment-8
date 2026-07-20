"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&h=1080&fit=crop",
    alt: "Library shelves filled with books",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&h=1080&fit=crop",
    alt: "Open book with soft light",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop",
    alt: "Stack of books on a table",
  },
];

export default function Banner() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="banner-swiper absolute inset-0 h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[88vh] w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-emerald-950/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none bg-gradient-to-br from-emerald-200 to-emerald-600 relative z-10 flex min-h-[88vh] items-center">
        <div className="pointer-events-auto mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="mb-4 font-display text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
              BOOK<span className="text-emerald-700">Nest</span>
            </p>
            <h1 className="font-display text-3xl font-medium leading-tight text-white/95 sm:text-4xl lg:text-5xl">
              Find Your Next Read
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-emereald-700 sm:text-lg">
              Browse curated stories, tech manuals, and science titles — then
              borrow with ease from our premium digital library.
            </p>
            <Link
              href="/all-books"
              className="btn-brand mt-8 !px-8 !py-3.5 text-base"
            >
              Browse Now
              <FiArrowRight className="text-lg" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
