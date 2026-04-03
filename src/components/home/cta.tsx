"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-sm border border-border/50 bg-surface p-12 text-center md:p-20"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Ready to Start?
          </p>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Let&apos;s Build Content
            <br />
            That Drives Revenue
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Book a free discovery call. We&apos;ll talk about your brand, your
            goals, and how Shiva can help you get there.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              Book a Call
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
