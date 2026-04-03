"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  featured?: boolean;
}

const FILTERS = ["All", "Videography", "Photography", "Social Media"];

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      {/* Filter buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-sm px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all",
              active === filter
                ? "bg-accent text-background"
                : "border border-border text-muted hover:border-accent/50 hover:text-accent"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title + project.category}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={project.slug === "#" ? "#" : `/work/${project.slug}`}
                className="group block"
              >
                {/* Thumbnail placeholder */}
                <div className="relative aspect-video overflow-hidden rounded-sm bg-surface">
                  <div className="absolute inset-0 flex items-center justify-center text-muted/20">
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
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-surface px-2 py-1 text-[10px] uppercase tracking-wider text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
