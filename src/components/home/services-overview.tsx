"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/section";

const METHODS = [
  {
    number: "01",
    title: "Videography",
    description:
      "Cinema-grade video production built around scripts that convert. Short-form, long-form, testimonials, and brand stories — all shot to sell.",
  },
  {
    number: "02",
    title: "Photography",
    description:
      "Directed, lit, and retouched brand photography. Product, lifestyle, portrait — planned around your content calendar and business goals.",
  },
  {
    number: "03",
    title: "Social Media",
    description:
      "Strategy, content creation, and platform management that turns followers into customers. Every post is scripted, not templated.",
  },
];

export function ServicesOverview() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center md:mb-16"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          What We Do
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Full-Service Creative<br /><em className="italic">Production</em>
        </h2>
      </motion.div>

      <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-16">
        {/* Left — Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[500px] overflow-hidden rounded-lg md:min-h-0"
        >
          <Image
            src="/profilepic-hq.jpg"
            alt="Shiva Pawar — Creative Director"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 800px"
            quality={90}
          />
        </motion.div>

        {/* Right — Bio + Method */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            A founder who built a brand that sells predominantly through social media,
            Shiva learned firsthand that content without strategy is noise. His approach
            now blends cinematic production with conversion-driven scripting — focusing
            on storytelling, brand identity, and revenue in equal measure.
          </p>

          <div className="mt-10 md:mt-14">
            <p className="mb-1 font-display text-lg font-semibold tracking-tight">
              The method
            </p>
            <div className="border-t border-foreground/20" />

            {METHODS.map((method) => (
              <div key={method.number}>
                <div className="flex gap-6 py-6 md:py-8">
                  <span className="shrink-0 font-display text-sm text-muted">
                    {method.number}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">
                      {method.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {method.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-foreground/10" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
