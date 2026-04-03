import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { PortfolioGrid } from "./portfolio-grid";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See our portfolio of videography, photography, and social media marketing work. Real brands, real results.",
};

// Portfolio data — replace with MDX content system as projects grow
export const PROJECTS = [
  {
    title: "The Urban Indian",
    slug: "the-urban-indian",
    category: "Brand Content",
    tags: ["Videography", "Photography", "Social Media"],
    description:
      "Full creative production for a desi-inspired streetwear brand. Video, photo, social strategy, and brand storytelling.",
    featured: true,
  },
  {
    title: "Coming Soon",
    slug: "#",
    category: "Video Production",
    tags: ["Videography"],
    description: "New project showcase coming soon.",
    featured: false,
  },
  {
    title: "Coming Soon",
    slug: "#",
    category: "Photography",
    tags: ["Photography"],
    description: "New project showcase coming soon.",
    featured: false,
  },
  {
    title: "Coming Soon",
    slug: "#",
    category: "Social Media",
    tags: ["Social Media"],
    description: "New project showcase coming soon.",
    featured: false,
  },
];

export default function WorkPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeading
          label="Portfolio"
          title="Selected Work"
          description="Real brands. Real content. Real results. Every project starts with a script and ends with impact."
        />

        <PortfolioGrid projects={PROJECTS} />
      </Section>

      <CTA />
    </div>
  );
}
