"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* IMAGE */}
      <div className="relative h-[400px] rounded overflow-hidden">
        <Image
          src="/img02.jpg"
          alt="ZENJI streetwear"
          fill
          className="object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-red-500 font-mono text-sm mb-2">ABOUT // ZENJI</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
          Born From The <br /> Warrior Spirit
        </h2>
        <p className="text-white/70 leading-relaxed mb-4">
          ZENJI began with one belief: what you wear should tell a story.
        </p>
        <p className="text-white/70 leading-relaxed">
          Inspired by samurai discipline, anime art and modern street culture,
          we create premium streetwear for those who choose their own path.
        </p>
      </motion.div>
    </section>
  );
}
