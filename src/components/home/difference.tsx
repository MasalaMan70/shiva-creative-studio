"use client";

import { motion } from "framer-motion";
import { Pen, Clapperboard, Layers } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const DIFFERENTIATORS = [
  {
    icon: Pen,
    title: "Scripted to Sell",
    description:
      "Every video, every caption, every ad starts with a script. Hooks that stop the scroll. Story structure that builds trust. CTAs that convert. Beautiful content that doesn't sell is just expensive decoration.",
  },
  {
    icon: Clapperboard,
    title: "Cinema-Grade Production",
    description:
      "Cinema camera, professional lighting with diffusion, multi-angle shooting. This isn't iPhone-on-a-tripod content. This is the quality level that premium brands expect and audiences trust.",
  },
  {
    icon: Layers,
    title: "Full-Funnel Ownership",
    description:
      "From scripting to shooting to editing to posting to running ads — one team, one point of accountability. No finger-pointing between disconnected vendors. Everything works together.",
  },
];

export function Difference() {
  return (
    <Section>
      <SectionHeading
        label="The Difference"
        title="Not Another Content Creator"
        description="Most creators choose between looking good and selling well. We do both."
      />

      <div className="grid gap-12 md:grid-cols-3">
        {DIFFERENTIATORS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-accent">
              <item.icon size={28} />
            </div>
            <h3 className="font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
