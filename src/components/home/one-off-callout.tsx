"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function OneOffCallout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-foreground/10 py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
        <p className="text-muted text-sm md:text-base">
          Don&apos;t need the full content stack?
        </p>
        <Button variant="outline" size="sm" href="/contact">
          Book a one-off shoot
        </Button>
      </div>
    </motion.div>
  );
}
