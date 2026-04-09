import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { FeaturedWork } from "@/components/home/featured-work";
import { Difference } from "@/components/home/difference";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";
import { OneOffCallout } from "@/components/home/one-off-callout";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <OneOffCallout />
      <FeaturedWork />
      <Difference />
      <Testimonials />
      <CTA />
    </>
  );
}
