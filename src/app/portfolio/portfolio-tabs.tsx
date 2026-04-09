"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Video, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { MasonryGallery } from "@/components/photography/masonry-gallery";
import { PortfolioGrid } from "@/app/work/portfolio-grid";
import { VideoGrid } from "./video-grid";
import type { Photo } from "@/lib/photos";
import type { Project } from "@/data/projects";

const TABS = [
  { id: "photo", label: "Photo", icon: Camera },
  { id: "video", label: "Video", icon: Video },
  { id: "branded", label: "Branded Content", icon: Briefcase },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function PortfolioTabs({
  photos,
  projects,
  initialTab,
  initialFilter,
}: {
  photos: Photo[];
  projects: Project[];
  initialTab: string;
  initialFilter: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>(
    (TABS.find((t) => t.id === initialTab)?.id) ?? "photo"
  );

  function switchTab(tab: TabId) {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    params.delete("filter");
    router.replace(`/portfolio?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      {/* Tab bar */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all",
                activeTab === tab.id
                  ? "bg-accent text-background"
                  : "border border-border text-muted hover:border-accent/50 hover:text-accent"
              )}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "photo" && (
            <MasonryGallery photos={photos} initialFilter={initialFilter} />
          )}
          {activeTab === "video" && (
            <VideoGrid initialFilter={initialFilter} />
          )}
          {activeTab === "branded" && (
            <PortfolioGrid projects={projects} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
