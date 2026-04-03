import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Section, SectionHeading } from "@/components/ui/section";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shiva Creative Studio. Send us an inquiry about videography, photography, or social media marketing retainer services.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeading
          label="Get in Touch"
          title="Start a Conversation"
          description="Tell us about your business and what you're looking for. We'll get back to you within 24 hours."
        />

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 text-accent">
                <Mail size={20} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Email
                </span>
              </div>
              <p className="mt-2 text-muted">hello@example.com</p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-accent">
                <Phone size={20} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Phone
                </span>
              </div>
              <p className="mt-2 text-muted">Available upon request</p>
            </div>
            <div>
              <div className="flex items-center gap-3 text-accent">
                <MapPin size={20} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Location
                </span>
              </div>
              <p className="mt-2 text-muted">Available for on-location shoots</p>
            </div>

            <div className="rounded-sm border border-border/50 bg-surface p-6">
              <p className="font-display text-sm font-semibold">
                Prefer to talk?
              </p>
              <p className="mt-2 text-sm text-muted">
                Skip the form and book a free 15-minute discovery call.
              </p>
              <a
                href="/book"
                className="mt-4 inline-block text-sm font-semibold text-accent hover:text-accent-hover"
              >
                Book a Call &rarr;
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
