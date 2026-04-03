"use client";

import { motion } from "framer-motion";
import { Video, Camera, Share2, Target } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  video: Video,
  camera: Camera,
  share2: Share2,
  target: Target,
};

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeading
        label="What We Do"
        title="Full-Service Creative Production"
        description="Strategy, scripting, production, and distribution — all under one roof. Every piece of content is built to move your audience toward a buying decision."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-sm border border-border/50 bg-surface p-8 transition-all duration-300 hover:border-accent/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
