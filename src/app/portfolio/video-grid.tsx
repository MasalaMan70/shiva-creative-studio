"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = ["all", "shorts", "social-media", "campaigns"] as const;

const FILTER_LABELS: Record<string, string> = {
  all: "All",
  shorts: "Shorts",
  "social-media": "Social Media",
  campaigns: "Campaigns",
};

interface VideoItem {
  id: string;
  title: string;
  category: "shorts" | "social-media" | "campaigns";
  description: string;
  source?: { type: "local"; url: string } | { type: "instagram"; embedUrl: string };
}

// Placeholder videos — replace with real content when ready
const VIDEOS: VideoItem[] = [
  {
    id: "video-1",
    title: "Coming Soon",
    category: "shorts",
    description: "Short-form video content coming soon.",
  },
  {
    id: "video-2",
    title: "Coming Soon",
    category: "social-media",
    description: "Social media video content coming soon.",
  },
  {
    id: "video-3",
    title: "Coming Soon",
    category: "campaigns",
    description: "Campaign video content coming soon.",
  },
];

export function VideoGrid({ initialFilter = "all" }: { initialFilter?: string }) {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);

  const filtered =
    activeFilter === "all"
      ? VIDEOS
      : VIDEOS.filter((v) => v.category === activeFilter);

  return (
    <>
      {/* Filter buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all",
              activeFilter === filter
                ? "bg-accent text-background"
                : "border border-border/50 text-muted hover:border-accent/50 hover:text-foreground"
            )}
          >
            {FILTER_LABELS[filter]}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((video) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {video.source?.type === "local" ? (
                <div className="group relative aspect-[9/16] overflow-hidden rounded-sm bg-surface">
                  <video
                    src={video.source.url}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 opacity-100 transition-opacity group-hover:opacity-0">
                    <div className="rounded-full bg-background/80 p-3">
                      <Play size={20} className="text-foreground" />
                    </div>
                  </div>
                </div>
              ) : (
                /* Placeholder card */
                <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-surface">
                  <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                    <div className="rounded-full bg-border/30 p-4">
                      <Play size={24} className="text-muted/40" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        {FILTER_LABELS[video.category]}
                      </p>
                      <p className="mt-2 text-sm text-muted">{video.description}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {FILTER_LABELS[video.category]}
                </span>
                <h3 className="mt-1 font-display text-base font-semibold">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
