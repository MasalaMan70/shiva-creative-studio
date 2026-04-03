"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "50+", label: "projects delivered" },
  { value: "3x", label: "average ROI" },
  { value: "100%", label: "client retention" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-28 md:pb-16 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-sm tracking-widest text-muted md:mb-6">
            full stack creative studio
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            Content that
            <br />
            <em className="italic">sells.</em>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base text-muted md:mt-6 md:text-lg">
            Cinema-grade videography, photography, and social media marketing.
            Scripted for conversion. Produced to stand out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-center md:mt-10"
        >
          <Button href="/book" size="lg">
            Book a Discovery Call
          </Button>
        </motion.div>

        {/* Hero video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 md:mt-14"
        >
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover"
            >
              <source src="/hero-reel.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 grid grid-cols-3 gap-3 md:mt-8 md:gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-surface px-4 py-5 text-center md:rounded-xl md:px-8 md:py-8"
            >
              <p className="font-display text-xl font-bold italic md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] text-muted md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
