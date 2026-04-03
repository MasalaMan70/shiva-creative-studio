import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <Section>
        <div className="mx-auto max-w-3xl prose-invert">
          <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground">
                Information We Collect
              </h2>
              <p>
                When you submit a contact form or book a call, we collect the
                information you provide: name, email, phone number, business
                name, and message content. We use this information solely to
                respond to your inquiry and provide our services.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground">
                How We Use Your Information
              </h2>
              <p>
                We use your information to respond to inquiries, schedule calls,
                deliver services, and send relevant communications about our
                work. We do not sell or share your personal information with
                third parties.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground">
                Cookies & Analytics
              </h2>
              <p>
                This site may use analytics tools (such as Google Analytics) to
                understand how visitors use the site. These tools may use cookies
                to collect anonymous usage data.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground">
                Contact
              </h2>
              <p>
                If you have questions about this privacy policy, contact us at{" "}
                <a href="/contact" className="text-accent hover:text-accent-hover">
                  our contact page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
