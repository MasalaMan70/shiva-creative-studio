import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="pt-24">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground">
                Services
              </h2>
              <p>
                Shiva Creative Studio provides videography, photography, social
                media marketing, and paid advertising services on a retainer
                basis. All services are subject to the terms outlined in
                individual client agreements.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground">
                Retainer Terms
              </h2>
              <p>
                All retainer engagements require a minimum 3-month commitment.
                After the initial term, retainers continue on a month-to-month
                basis with 30 days written notice required for cancellation.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground">
                Intellectual Property
              </h2>
              <p>
                Upon full payment, clients receive a license to use all
                deliverables for their business purposes. Shiva Creative Studio
                retains the right to use work samples in our portfolio unless
                otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground">
                Contact
              </h2>
              <p>
                For questions about these terms, please{" "}
                <a href="/contact" className="text-accent hover:text-accent-hover">
                  contact us
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
