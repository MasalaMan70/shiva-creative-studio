import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { CalEmbed } from "./cal-embed";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Schedule a free discovery call with Shiva Creative Studio. Let's talk about your brand, goals, and how we can help.",
};

export default function BookPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeading
          label="Let's Talk"
          title="Book a Discovery Call"
          description="A 15-minute call to discuss your brand, your goals, and whether we're a good fit. No pressure, no pitch — this is a conversation to understand your vision."
        />

        <div className="mx-auto max-w-3xl">
          <CalEmbed />

          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              Prefer to write?{" "}
              <a
                href="/contact"
                className="text-accent hover:text-accent-hover"
              >
                Send us a message instead
              </a>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
