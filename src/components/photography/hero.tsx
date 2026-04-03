"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function PhotographyHero({ heroImage }: { heroImage: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[70vh]">
      <Image
        src={heroImage}
        alt="Photography by Shiva"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            Book a
            <br />
            <span className="text-accent">Photoshoot</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70 md:text-xl">
            Portraits, brand photography, events, and creative sessions.
            Directed, lit, and retouched to elevate your image.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/book" size="lg">
            Book a Session
          </Button>
          <Button href="/photography/gallery" variant="outline" size="lg">
            View Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
