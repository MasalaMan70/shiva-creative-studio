import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Case study data — will be migrated to MDX as portfolio grows
const CASE_STUDIES: Record<
  string,
  {
    title: string;
    category: string;
    client: string;
    description: string;
    challenge: string;
    approach: string;
    results: string[];
  }
> = {
  "the-urban-indian": {
    title: "The Urban Indian",
    category: "Brand Content",
    client: "The Urban Indian (TUI)",
    description:
      "Full creative production for a desi-inspired streetwear brand — video, photography, social media strategy, and brand storytelling.",
    challenge:
      "TUI needed a complete visual identity and content system that captured the energy of desi culture blended with streetwear. The content had to build brand recognition, drive engagement, and convert followers into buyers — all while standing out in a crowded streetwear market.",
    approach:
      "We built a content engine starting with a clear brand narrative: streetwear with spice. Every video was scripted with hooks designed for the target audience — young, culture-proud, fashion-forward. Photo shoots were planned around lifestyle moments, not just product shots. Social media strategy focused on storytelling content that built community, not just reach.",
    results: [
      "Complete brand visual identity established",
      "Content system producing consistent, on-brand output",
      "Scripting framework tested and refined on a real audience",
      "Living proof of concept for prospective clients",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) return { title: "Not Found" };
  return {
    title: study.title,
    description: study.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) notFound();

  return (
    <div className="pt-24">
      {/* Hero */}
      <Section>
        <a
          href="/work"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to Work
        </a>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {study.category}
        </p>
        <h1 className="font-display text-4xl font-bold md:text-6xl">
          {study.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{study.description}</p>

        {/* Hero media placeholder */}
        <div className="mt-12 aspect-video overflow-hidden rounded-sm bg-surface">
          <div className="flex h-full items-center justify-center text-muted/20">
            <span className="text-sm uppercase tracking-widest">
              Project Media
            </span>
          </div>
        </div>
      </Section>

      {/* The Challenge */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The Challenge
          </p>
          <p className="text-lg leading-relaxed text-muted">{study.challenge}</p>
        </div>
      </Section>

      {/* The Approach */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The Approach
          </p>
          <p className="text-lg leading-relaxed text-muted">{study.approach}</p>
        </div>
      </Section>

      {/* Results */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The Results
          </p>
          <div className="space-y-4">
            {study.results.map((result) => (
              <div key={result} className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <p className="text-lg text-muted">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold">
            Want results like this?
          </h2>
          <p className="mt-4 text-muted">
            Let&apos;s talk about what Shiva can do for your brand.
          </p>
          <div className="mt-8">
            <Button href="/book" size="lg">
              Book a Call
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
