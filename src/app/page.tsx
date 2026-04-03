import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { FeaturedWork } from "@/components/home/featured-work";
import { Difference } from "@/components/home/difference";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedWork />
      <Difference />
      <Testimonials />
      <CTA />
    </>
  );
}
