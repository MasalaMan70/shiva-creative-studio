"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { MessageSquare, ClipboardList, Camera } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Inquire",
    description:
      "Reach out with your vision. Tell me about the shoot — purpose, vibe, timeline.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We nail down the details — location, wardrobe direction, shot list, and schedule.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Shoot & Deliver",
    description:
      "Professional shoot day. Fully retouched images delivered within 7–10 business days.",
    icon: Camera,
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        label="Process"
        title="How It Works"
        description="Simple, professional, and stress-free from start to finish."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
              <step.icon size={22} className="text-accent" />
            </div>
            <p className="mb-1 font-display text-xs font-semibold text-accent">
              {step.number}
            </p>
            <h3 className="font-display text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
