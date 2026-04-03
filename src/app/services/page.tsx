import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { SERVICES, PRICING_TIERS } from "@/lib/constants";
import { Video, Camera, Share2, Target, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FAQ } from "./faq";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Videography, photography, social media marketing, and paid advertising — all under one retainer. See our packages and pricing.",
};

const iconMap = {
  video: Video,
  camera: Camera,
  share2: Share2,
  target: Target,
};

const SERVICE_DETAILS = [
  {
    ...SERVICES[0],
    details: [
      "Short-form content (Reels, TikTok, Shorts) scripted for hooks and conversions",
      "Brand story videos and mini-documentaries",
      "Testimonial and case study videos",
      "Product and service showcase videos",
      "Event coverage with same-day highlight edits",
      "Cinema camera + B-cam, professional lighting, professional audio",
    ],
  },
  {
    ...SERVICES[1],
    details: [
      "Brand lifestyle and product photography",
      "Team and founder headshots/portraits",
      "Location and event photography",
      "Content library builds (quarterly or monthly)",
      "Delivered retouched and formatted for web, social, and print",
    ],
  },
  {
    ...SERVICES[2],
    details: [
      "Custom content strategy and monthly calendars",
      "Copywriting for every post (scripted, not templated)",
      "Platform management: Instagram, Facebook, TikTok, LinkedIn",
      "Community management and engagement",
      "Monthly reporting tied to business goals",
    ],
  },
  {
    ...SERVICES[3],
    details: [
      "Campaign strategy and audience building",
      "Ad creative production (video and static)",
      "A/B testing and retargeting funnels",
      "Budget optimization",
      "Transparent performance reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Services Detail */}
      <Section>
        <SectionHeading
          label="Services"
          title="All Things Digital Marketing"
          description="Four core capabilities, one integrated team. Every service is designed to work together as a single content engine."
        />

        <div className="space-y-16">
          {SERVICE_DETAILS.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className={cn(
                  "grid gap-8 md:grid-cols-2",
                  i % 2 === 1 && "md:direction-rtl"
                )}
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-2xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted">{service.description}</p>
                </div>
                <div className="space-y-3">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span className="text-sm text-muted">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-surface">
        <SectionHeading
          label="Pricing"
          title="Retainer Packages"
          description="Predictable monthly investment. No project-based surprises. All packages include strategy calls, performance reporting, and a dedicated content workflow."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-sm border p-8 transition-all",
                "featured" in tier && tier.featured
                  ? "border-accent/50 bg-background shadow-lg shadow-accent/5"
                  : "border-border/50 bg-background"
              )}
            >
              {"featured" in tier && tier.featured && (
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Most Popular
                </p>
              )}
              <h3 className="font-display text-xl font-bold">{tier.name}</h3>
              <div className="mt-2">
                <span className="font-display text-3xl font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-muted">{tier.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted">{tier.description}</p>

              <div className="mt-6 space-y-3 border-t border-border/50 pt-6">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span className="text-sm text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  href="/book"
                  variant={"featured" in tier && tier.featured ? "primary" : "outline"}
                  className="w-full"
                >
                  Get Started
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted">
          <p>
            All retainers require a 3-month minimum. Annual contracts get 10%
            off. Ad spend billed separately.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading label="FAQ" title="Common Questions" />
        <div className="mx-auto max-w-3xl">
          <FAQ />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-muted">
            Book a free discovery call or send us an inquiry.
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
