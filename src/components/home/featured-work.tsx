"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";

const FEATURED_PROJECTS = [
  {
    title: "The Cricket Collection",
    category: "Brand Content",
    description:
      "Directed and shot the Cricket Collection campaign for The Urban Indian — merging classic cricket aesthetics with streetwear identity.",
    tags: ["Photography", "Art Direction"],
    image: "/photos/full/ecommerce/7.jpg",
    slug: "the-urban-indian",
  },
  {
    title: "TUI Lifestyle Campaign",
    category: "Social Media",
    description:
      "Lifestyle content strategy and production for TUI's social channels. Scripted, shot, and posted to drive engagement and sales.",
    tags: ["Social Media", "Photography"],
    image: "/photos/full/ecommerce/dscf7129.jpg",
    slug: "the-urban-indian",
  },
  {
    title: "The Flowers of India",
    category: "Product Photography",
    description:
      "Product and lookbook photography for TUI's Flowers of India collection — hand-embroidered pieces shot for ecommerce and social.",
    tags: ["Photography", "Ecommerce"],
    image: "/photos/full/ecommerce/dscf8885.jpg",
    slug: "the-urban-indian",
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
              href={`/work/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/5" />
                <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight size={20} className="text-white drop-shadow-md" />
                </div>
              </div>

              <div className="mt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {project.category}
                </span>
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
