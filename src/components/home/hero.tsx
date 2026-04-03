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
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-24 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-6 font-body text-sm tracking-widest text-muted">
            full stack creative studio
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            Content that
            <br />
            <em className="italic">sells.</em>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
            Cinema-grade videography, photography, and social media marketing.
            Scripted for conversion. Produced to stand out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Button href="/book" size="lg">
            Book a Discovery Call
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4 md:mt-24"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-sm bg-surface px-4 py-6 text-center md:px-8 md:py-8"
            >
              <p className="font-display text-2xl font-bold italic md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
