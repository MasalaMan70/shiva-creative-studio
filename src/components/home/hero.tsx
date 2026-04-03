"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "50+", label: "projects delivered" },
  { value: "3x", label: "average ROI" },
  { value: "100%", label: "client retention" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        {/* Video with overlay text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-lg md:rounded-xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[4/5] w-full object-cover sm:aspect-[16/9] md:aspect-[2/1]"
          >
            <source src="/hero-reel.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D2A26]/50 via-[#2D2A26]/30 to-[#2D2A26]/60" />

          {/* Text overlay — heading + CTA only on mobile, full text on desktop */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p
              className="mb-3 text-xs tracking-widest text-white/70 md:mb-4 md:text-sm"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              full stack creative studio
            </p>

            <h1
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              Content that
              <br />
              <em className="italic">sells.</em>
            </h1>

            {/* Subtitle — hidden on mobile, shown on desktop */}
            <p
              className="mx-auto mt-4 hidden max-w-md text-base text-white/80 md:block"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              Cinema-grade videography, photography, and social media marketing.
              Scripted for conversion. Produced to stand out.
            </p>

            <div className="mt-6 md:mt-8">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-sm bg-white/90 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#2D2A26] shadow-lg backdrop-blur-sm transition-all hover:bg-white md:px-8 md:py-3 md:text-sm"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </motion.div>

        {/* Subtitle — shown on mobile only, below the video */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-center text-sm leading-relaxed text-muted md:hidden"
        >
          Cinema-grade videography, photography, and social media marketing.
          Scripted for conversion. Produced to stand out.
        </motion.p>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 grid grid-cols-3 gap-3 pb-10 md:mt-8 md:gap-4 md:pb-16"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-surface px-3 py-4 text-center md:rounded-xl md:px-8 md:py-8"
            >
              <p className="font-display text-lg font-bold italic md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[9px] leading-tight text-muted md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
