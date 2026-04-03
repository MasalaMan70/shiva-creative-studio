import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-24">
      <Section>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
