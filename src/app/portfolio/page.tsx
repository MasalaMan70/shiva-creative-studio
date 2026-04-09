import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { getAllPhotos } from "@/lib/photos";
import { PROJECTS } from "@/data/projects";
import { PortfolioTabs } from "./portfolio-tabs";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Shiva's portfolio — photography, video content, and branded campaigns. Real work, real brands, real results.",
};

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; filter?: string }>;
}) {
  const photos = getAllPhotos();
  const { tab, filter } = await searchParams;
  const initialTab = tab || "photo";
  const initialFilter = filter || "all";

  return (
    <div className="pt-24">
      <Section>
        <div className="mb-10 text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Selected Work
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Photography, video, and branded content — all produced to drive real results.
          </p>
        </div>

        <PortfolioTabs
          photos={photos}
          projects={PROJECTS}
          initialTab={initialTab}
          initialFilter={initialFilter}
        />
      </Section>

      <CTA />
    </div>
  );
}
