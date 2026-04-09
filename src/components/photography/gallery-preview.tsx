"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Photo } from "@/lib/photos";

export function GalleryPreview({ photos }: { photos: Photo[] }) {
  return (
    <Section>
      <SectionHeading
        label="Gallery"
        title="Recent Work"
        description="A selection from recent shoots. Click below to browse the full gallery."
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {photos.slice(0, 6).map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-sm"
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: photo.aspectRatio }}
            >
              <Image
                src={photo.thumbPath}
                alt={`Photography by Shiva — ${photo.category}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/portfolio?tab=photo" variant="outline" size="lg">
          View Full Gallery
          <ArrowRight size={14} className="ml-2" />
        </Button>
      </div>
    </Section>
  );
}
