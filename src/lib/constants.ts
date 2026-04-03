export const SITE_NAME = "SHIVA";
export const SITE_TAGLINE = "Creative Studio";
export const SITE_DESCRIPTION =
  "Retainer-based videography, photography, and social media marketing. Content that sells, produced at a cinematic level.";
export const FOUNDER_NAME = "Shiva Pawar";

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Videography",
    description:
      "Cinema-grade video production. Every project starts with a script built to convert — not just look good.",
    icon: "video" as const,
  },
  {
    title: "Photography",
    description:
      "Professional brand, product, and lifestyle photography. Planned, directed, and retouched to build your visual identity.",
    icon: "camera" as const,
  },
  {
    title: "Social Media",
    description:
      "Strategy, scripting, creation, and management. Content designed to drive real business outcomes, not vanity metrics.",
    icon: "share2" as const,
  },
  {
    title: "Paid Ads",
    description:
      "Facebook and Instagram ad campaigns with in-house creative. The person who scripts it manages the spend.",
    icon: "target" as const,
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$2,000 – $3,500",
    period: "/mo",
    description: "For local businesses ready for professional content",
    features: [
      "8–12 social media posts per month",
      "1–2 short-form videos",
      "Basic content strategy",
      "Monthly strategy call",
      "Performance reporting",
    ],
  },
  {
    name: "Growth",
    price: "$3,500 – $6,000",
    period: "/mo",
    description: "For established brands scaling their online presence",
    features: [
      "16–20 social media posts per month",
      "3–4 videos per month",
      "Quarterly photo shoot",
      "FB/IG ad management",
      "Monthly strategy call",
      "Detailed performance reporting",
    ],
    featured: true,
  },
  {
    name: "Partner",
    price: "$6,000 – $10,000+",
    period: "/mo",
    description: "For brands that need a full creative team",
    features: [
      "Full content calendar",
      "Weekly video production",
      "Monthly photo shoots",
      "Full ad strategy + management",
      "Priority scheduling",
      "Dedicated account management",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Shiva transformed our social media presence. The video content alone has generated more leads than our previous agency did in a year.",
    name: "Sample Client",
    role: "Business Owner",
    company: "Example Business",
  },
  {
    quote:
      "The scripting is what sets Shiva apart. Every piece of content has purpose and direction. Our engagement tripled in three months.",
    name: "Sample Client",
    role: "Marketing Director",
    company: "Example Brand",
  },
  {
    quote:
      "Having one team handle everything from strategy to shooting to ads means nothing falls through the cracks. It just works.",
    name: "Sample Client",
    role: "Founder",
    company: "Example Co",
  },
] as const;
