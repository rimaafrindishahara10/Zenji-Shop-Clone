"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-end overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-fallback.jpg"
      >
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY SO TEXT STAYS READABLE */}
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-8 md:p-16"
      >
        <p className="text-red-500 font-mono text-sm mb-3">
          ● THE_ORIGIN_DROP // LIVE
        </p>
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6">
          Wear Your <br /> Story
        </h1>
        <a
          href="#products"
          className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white font-bold px-8 py-4"
        >
          SHOP THE DROP →
        </a>
      </motion.div>
    </section>
  );
}
