"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CATEGORY_LABELS, type Photo } from "@/lib/photos";
import { Lightbox } from "./lightbox";

const FILTERS = ["all", "ecommerce", "portraits", "travel"] as const;

export function MasonryGallery({
  photos,
  initialFilter = "all",
}: {
  photos: Photo[];
  initialFilter?: string;
}) {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

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
            {filter === "all" ? "All" : CATEGORY_LABELS[filter] || filter}
          </button>
        ))}
      </div>

      {/* Masonry grid — key forces full remount on filter change */}
      <div key={activeFilter} className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((photo, i) => (
          <div
            key={photo.id}
            className="mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-sm"
            onClick={() => setLightboxIndex(i)}
          >
            <div className="group relative">
              <Image
                src={photo.thumbPath}
                alt={`Photography by Shiva — ${CATEGORY_LABELS[photo.category] || photo.category}`}
                width={photo.width}
                height={photo.height}
                className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
