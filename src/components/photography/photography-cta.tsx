"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PhotographyCTA() {
  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-sm border border-border/50 bg-background p-12 text-center md:p-20"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Let&apos;s Create
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Ready to Book
            <br />a Photoshoot?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Whether it&apos;s portraits, brand content, or something creative —
            let&apos;s make it happen.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              Book a Session
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Send an Inquiry
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
