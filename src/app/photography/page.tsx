import type { Metadata } from "next";
import { PhotographyHero } from "@/components/photography/hero";
import { ShootTypes } from "@/components/photography/shoot-types";
import { HowItWorks } from "@/components/photography/how-it-works";
import { GalleryPreview } from "@/components/photography/gallery-preview";
import { PhotographyCTA } from "@/components/photography/photography-cta";
import { getAllPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Book a professional photoshoot — portraits, brand photography, events, and creative sessions. Directed, lit, and retouched to elevate your image.",
};

export default function PhotographyPage() {
  const photos = getAllPhotos();
  // Pick a strong landscape photo for the hero
  const heroImage = "/photos/full/travel/dscf3898.jpg";
  // Mix of categories for preview
  const previewPhotos = [
    ...photos.filter((p) => p.category === "portraits").slice(0, 2),
    ...photos.filter((p) => p.category === "ecommerce").slice(0, 2),
    ...photos.filter((p) => p.category === "travel").slice(0, 2),
  ];

  return (
    <div>
      <PhotographyHero heroImage={heroImage} />
      <ShootTypes />
      <HowItWorks />
      <GalleryPreview photos={previewPhotos} />
      <PhotographyCTA />
    </div>
  );
}
