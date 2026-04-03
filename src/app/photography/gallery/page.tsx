import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { MasonryGallery } from "@/components/photography/masonry-gallery";
import { getAllPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the full photography portfolio — portraits, brand photography, events, and lifestyle. Click any image to view full size.",
};

export default function GalleryPage() {
  const photos = getAllPhotos();

  return (
    <div className="pt-24">
      <Section>
        <SectionHeading
          label="Gallery"
          title="Photography Portfolio"
          description="Click any image to view full size. Use arrow keys or swipe to navigate."
        />
        <MasonryGallery photos={photos} />
      </Section>
    </div>
  );
}
