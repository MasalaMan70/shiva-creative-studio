"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";

const FEATURED_PROJECTS = [
  {
    title: "The Urban Indian",
    category: "Brand Content",
    description: "Full creative production for a desi-inspired streetwear brand. Video, photo, and social media strategy.",
    tags: ["Videography", "Photography", "Social Media"],
    slug: "the-urban-indian",
  },
  {
    title: "Project Two",
    category: "Video Production",
    description: "Coming soon — a showcase of cinematic brand storytelling.",
    tags: ["Videography", "Scripting"],
    slug: "#",
  },
  {
    title: "Project Three",
    category: "Social Media",
    description: "Coming soon — results-driven social media management.",
    tags: ["Social Media", "Paid Ads"],
    slug: "#",
  },
];

export function FeaturedWork() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        label="Selected Work"
        title="Projects That Prove It"
        description="Real work. Real brands. Real results."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {FEATURED_PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={project.slug === "#" ? "#" : `/work/${project.slug}`}
              className="group block"
            >
              {/* Placeholder thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface-light">
                <div className="absolute inset-0 flex items-center justify-center text-muted/30">
                  <span className="text-sm uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-accent/0 transition-all duration-300 group-hover:bg-accent/5" />
                <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight size={20} className="text-accent" />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-surface-light px-2 py-1 text-[10px] uppercase tracking-wider text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-hover"
        >
          View All Work
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
