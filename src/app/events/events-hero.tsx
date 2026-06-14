"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { EVENT_STATS } from "@/lib/constants";

export function EventsHero({ heroImage }: { heroImage: string }) {
  return (
    <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden md:min-h-[78vh]">
      <Image
        src={heroImage}
        alt="Event photography and videography by Shiva"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D2A26]/70 via-[#2D2A26]/45 to-[#2D2A26]/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Event Photography &amp; Videography
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
            Moments worth
            <br />
            <em className="italic">reliving</em>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/75 md:text-xl">
            Weddings, corporate events, and private celebrations — captured at a
            cinematic level and delivered fast. Photo and film, one team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" size="lg">
            Check Your Date
          </Button>
          <Button href="#packages" variant="outline" size="lg" className="!text-white !border-white/40 hover:!border-white hover:!text-white">
            View Packages
          </Button>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {EVENT_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
