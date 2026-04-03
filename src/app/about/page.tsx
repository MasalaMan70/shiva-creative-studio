import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Clapperboard, Pen, Zap, Shirt } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Shiva Pawar — founder of Shiva Creative Studio. Cinema-grade production, scripting that sells, and a real brand (The Urban Indian) as proof.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Founder Intro */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Photo placeholder */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-surface">
            <div className="absolute inset-0 flex items-center justify-center text-muted/20">
              <span className="text-sm uppercase tracking-widest">
                Founder Photo
              </span>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              The Founder
            </p>
            <h1 className="font-display text-4xl font-bold md:text-5xl">
              Shiva Pawar
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I started Shiva Creative Studio because I saw the same problem
              everywhere: businesses spending money on content that looks fine
              but doesn&apos;t sell anything. Pretty posts with no strategy.
              Videos with no script. Ads with no hook.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              I believe content should do one thing above all else:{" "}
              <span className="text-foreground font-semibold">
                drive revenue
              </span>
              . Every video I script, every shoot I direct, every campaign I
              build starts with that goal.
            </p>
            <div className="mt-8">
              <Button href="/book">Work With Me</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Strengths */}
      <Section className="bg-surface">
        <SectionHeading
          label="What I Bring"
          title="Two Things Most Creators Lack"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-sm border border-border/50 bg-background p-8">
            <Pen size={28} className="mb-4 text-accent" />
            <h3 className="font-display text-xl font-bold">
              Scripting That Sells
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I don&apos;t just shoot content — I script it. Every project
              starts with understanding the audience, structuring hooks that stop
              the scroll, building narrative tension, and landing calls to action
              that feel natural. This is the difference between content that gets
              views and content that generates revenue.
            </p>
          </div>

          <div className="rounded-sm border border-border/50 bg-background p-8">
            <Clapperboard size={28} className="mb-4 text-accent" />
            <h3 className="font-display text-xl font-bold">
              Cinema-Grade Production
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I shoot with a cinema camera and a B-cam for multi-angle coverage.
              Two continuous lights with a C-stand and diffusion give every shot
              a controlled, professional look — on location or in studio. This
              isn&apos;t iPhone content. This is the quality level premium brands
              expect.
            </p>
          </div>
        </div>
      </Section>

      {/* The Urban Indian */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Proof of Concept
            </p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              The Urban Indian
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              I also run The Urban Indian (TUI) — a desi-inspired streetwear
              brand. It&apos;s not a side project. It&apos;s my testing ground.
            </p>
            <p className="mt-4 text-muted">
              Every content strategy, every scripting approach, every ad
              technique I offer clients is tested on TUI first. When I tell a
              client &ldquo;this works,&rdquo; it&apos;s because I&apos;ve
              proven it on my own brand — not because I read it in a marketing
              blog.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <Shirt size={18} className="text-accent" />
              <span className="text-muted">Streetwear with spice.</span>
            </div>
          </div>

          {/* TUI placeholder */}
          <div className="relative aspect-square overflow-hidden rounded-sm bg-surface">
            <div className="absolute inset-0 flex items-center justify-center text-muted/20">
              <span className="text-sm uppercase tracking-widest">
                TUI Content
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* AIOS */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent/20 bg-accent/5">
            <Zap size={28} className="text-accent" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How We Operate
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            AI-Powered Operations
          </h2>
          <p className="mt-4 text-muted">
            Shiva runs on an AI Operating System that automates scheduling,
            reporting, proposals, and operational workflows. This means faster
            turnaround, more consistent delivery, and the capacity of a team
            twice our size — so more of our time goes to what actually matters:
            scripting, directing, and producing content that sells.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Let&apos;s work together.
          </h2>
          <p className="mt-4 text-muted">
            Book a free discovery call or send an inquiry.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book" size="lg">
              Book a Call
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Send Inquiry
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
