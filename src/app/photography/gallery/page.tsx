import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { MasonryGallery } from "@/components/photography/masonry-gallery";
import { getAllPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the full photography portfolio — portraits, brand photography, events, and lifestyle. Click any image to view full size.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const photos = getAllPhotos();
  const { filter } = await searchParams;
  const initialFilter = filter || "all";

  return (
    <div className="pt-24">
      <Section>
        <SectionHeading
          label="Gallery"
          title="Photography Portfolio"
          description="Click any image to view full size. Use arrow keys or swipe to navigate."
        />
        <MasonryGallery photos={photos} initialFilter={initialFilter} />
      </Section>
    </div>
  );
}
