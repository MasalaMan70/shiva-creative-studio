"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        label="Testimonials"
        title="What Clients Say"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-sm border border-border/50 bg-background p-8"
          >
            <Quote size={24} className="mb-4 text-accent/30" />
            <p className="text-sm leading-relaxed text-muted">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 border-t border-border/50 pt-4">
              <p className="font-display text-sm font-semibold">
                {testimonial.name}
              </p>
              <p className="text-xs text-muted">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
