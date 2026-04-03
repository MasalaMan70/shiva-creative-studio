"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { User, ShoppingBag, Sparkles } from "lucide-react";

const SHOOT_TYPES = [
  {
    title: "Ecommerce",
    filter: "ecommerce",
    description:
      "Ecommerce, lookbook, and lifestyle product photography. Styled, directed, and retouched for your brand.",
    icon: ShoppingBag,
    image: "/photos/thumb/ecommerce/dscf5790.jpg",
  },
  {
    title: "Portraits",
    filter: "portraits",
    description:
      "Professional portraits, personal branding, and headshots. Studio or on-location with professional lighting.",
    icon: User,
    image: "/photos/thumb/portraits/b1081164.jpg",
  },
  {
    title: "Travel",
    filter: "travel",
    description:
      "Travel, street, and lifestyle photography. Candid moments and editorial compositions.",
    icon: Sparkles,
    image: "/photos/thumb/travel/dscf2416.jpg",
  },
];

export function ShootTypes() {
  return (
    <Section>
      <SectionHeading
        label="What I Shoot"
        title="Photography Services"
        description="Every session is planned, directed, and edited to deliver images that work for your brand."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SHOOT_TYPES.map((type, i) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/photography/gallery?filter=${type.filter}`}
              className="group block overflow-hidden rounded-sm border border-border/50 bg-surface transition-colors hover:border-accent/30"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <type.icon size={16} className="text-accent" />
                  <h3 className="font-display text-sm font-bold">{type.title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-muted">
                  {type.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
