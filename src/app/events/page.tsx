import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  EVENT_TYPES,
  EVENT_PACKAGES,
  EVENT_ADDONS,
  EVENT_TESTIMONIALS,
} from "@/lib/constants";
import {
  Heart,
  Briefcase,
  Sparkles,
  Camera,
  Film,
  Check,
  Plus,
  ArrowRight,
  MessageSquare,
  CalendarCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import { EventsHero } from "./events-hero";
import { EventFAQ } from "./event-faq";

export const metadata: Metadata = {
  title: "Event Photography & Videography",
  description:
    "Wedding, corporate, and private event photography and videography. Cinematic coverage, fast delivery, transparent packages starting at $650. Check your date.",
};

const eventIconMap = {
  heart: Heart,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

const PHOTO_OFFERINGS = [
  "Full event coverage, candid and directed",
  "Group, family, and VIP portraits",
  "Detail and décor shots for vendors & press",
  "Professionally retouched, color-graded images",
  "Private online gallery with high-res downloads",
  "Print and album options à la carte",
];

const VIDEO_OFFERINGS = [
  "Cinematic highlight films (3–7 minutes)",
  "Full-length ceremony / keynote edits",
  "Vertical social cutdowns for Reels & TikTok",
  "Multi-camera and drone / aerial coverage",
  "Licensed music and pro audio capture",
  "Same-day and rush delivery on request",
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Check Your Date",
    description:
      "Send your date, location, and event type. I confirm availability and a custom quote within 48 hours.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Lock the Plan",
    description:
      "A 30% deposit secures the date. We build a timeline and shot list so nothing important gets missed.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Shoot & Deliver",
    description:
      "I capture the day professionally and discreetly, then deliver a polished gallery and film on schedule.",
    icon: Camera,
  },
];

export default function EventsPage() {
  return (
    <div>
      <EventsHero heroImage="/photos/full/travel/dscf3898.jpg" />

      {/* Event Types */}
      <Section>
        <SectionHeading
          label="What We Cover"
          title="Every Event, Beautifully Documented"
          description="One team for photo and film — so the coverage is coordinated and the story is complete. Pricing starts where your event begins."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {EVENT_TYPES.map((type) => {
            const Icon = eventIconMap[type.icon];
            return (
              <div
                key={type.title}
                className="group flex flex-col overflow-hidden rounded-sm border border-border/50 bg-surface transition-colors hover:border-accent/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                    <Icon size={16} />
                    <h3 className="font-display text-lg font-bold">
                      {type.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted">
                    {type.description}
                  </p>
                  <div className="mt-4 space-y-2">
                    {type.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        <span className="text-xs text-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                    <p className="text-sm text-muted">
                      Starting at{" "}
                      <span className="font-display text-lg font-bold text-foreground">
                        {type.startingAt}
                      </span>
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent transition-colors hover:text-accent-hover"
                    >
                      Inquire <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* What's Offered — Photo + Video */}
      <Section className="bg-surface">
        <SectionHeading
          label="Photo & Film"
          title="Two Crafts, One Team"
          description="No coordinating between separate vendors. Photography and videography are captured together, in sync, by one studio."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-border/50 bg-background p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent">
                <Camera size={20} />
              </div>
              <h3 className="font-display text-2xl font-bold">Photography</h3>
            </div>
            <div className="space-y-3">
              {PHOTO_OFFERINGS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-sm border border-border/50 bg-background p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent">
                <Film size={20} />
              </div>
              <h3 className="font-display text-2xl font-bold">Videography</h3>
            </div>
            <div className="space-y-3">
              {VIDEO_OFFERINGS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Packages */}
      <Section id="packages">
        <SectionHeading
          label="Packages"
          title="Coverage for Every Occasion"
          description="Transparent starting prices. Every package is tailored to your event — these are the foundations we build from."
        />

        <div className="grid items-start gap-6 md:grid-cols-3">
          {EVENT_PACKAGES.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-sm border p-8 transition-all",
                "featured" in tier && tier.featured
                  ? "border-accent/50 bg-background shadow-lg shadow-accent/10 md:-translate-y-2"
                  : "border-border/60 bg-surface"
              )}
            >
              {"featured" in tier && tier.featured && (
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Most Popular
                </p>
              )}
              <h3 className="font-display text-xl font-bold">{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-xs uppercase tracking-wide text-muted">
                  from
                </span>
                <span className="font-display text-3xl font-bold text-foreground">
                  {tier.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{tier.description}</p>

              <div className="mt-6 space-y-3 border-t border-border/50 pt-6">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-sm text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  href="/contact"
                  variant={
                    "featured" in tier && tier.featured ? "primary" : "outline"
                  }
                  className="w-full"
                >
                  Check Availability
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Every event is unique — prices vary by date, location, and coverage.
          A 30% deposit secures your date. Custom quotes within 48 hours.
        </p>
      </Section>

      {/* Add-ons */}
      <Section className="bg-surface">
        <SectionHeading
          label="Add-Ons"
          title="Make It Yours"
          description="Build the exact coverage you need. Add any of these to any package."
        />
        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {EVENT_ADDONS.map((addon) => (
            <div
              key={addon.label}
              className="flex items-center justify-between rounded-sm border border-border/50 bg-background px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <Plus size={15} className="shrink-0 text-accent" />
                <span className="text-sm text-foreground">{addon.label}</span>
              </div>
              <span className="font-display text-sm font-semibold text-muted">
                {addon.price}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading
          label="Process"
          title="Booking Is Simple"
          description="From first message to final gallery — clear, professional, and stress-free."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
                <step.icon size={22} className="text-accent" />
              </div>
              <p className="mb-1 font-display text-xs font-semibold text-accent">
                {step.number}
              </p>
              <h3 className="font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface">
        <SectionHeading label="Reviews" title="What Clients Say" />
        <div className="grid gap-6 md:grid-cols-3">
          {EVENT_TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-sm border border-border/50 bg-background p-8"
            >
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground">
                “{t.quote}”
              </p>
              <div className="mt-6 border-t border-border/50 pt-4">
                <p className="font-display text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading label="FAQ" title="Common Questions" />
        <div className="mx-auto max-w-3xl">
          <EventFAQ />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-surface">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Let&apos;s capture your event
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Tell me your date and what you&apos;re planning. I&apos;ll send
            availability and a custom quote within 48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Check Your Date
            </Button>
            <Button href="/book" variant="outline" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
