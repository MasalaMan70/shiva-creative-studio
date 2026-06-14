export const SITE_NAME = "SHIVA";
export const SITE_TAGLINE = "Creative Studio";
export const SITE_DESCRIPTION =
  "Retainer-based videography, photography, and social media marketing. Content that sells, produced at a cinematic level.";
export const FOUNDER_NAME = "Shiva Pawar";

export const NAV_LINKS = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Events", href: "/events" },
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

// ── Events (one-off photo + video coverage) ──────────────────────────────
// Pricing is positioned "starting at" and sits inside researched 2025–26 US
// market ranges. Tune the numbers as the portfolio and review base deepen.

export const EVENT_TYPES = [
  {
    title: "Weddings",
    startingAt: "$2,500",
    icon: "heart" as const,
    image: "/photos/events/wedding.jpg",
    imagePos: "object-[center_25%]",
    description:
      "Full-day photo and film coverage of your day — getting ready to the last dance. Documentary moments with editorial polish.",
    includes: [
      "Up to 8 hours of coverage",
      "Lead photographer + second shooter",
      "250+ retouched images",
      "Optional cinematic highlight film",
    ],
  },
  {
    title: "Corporate & Conferences",
    startingAt: "$900",
    icon: "briefcase" as const,
    image: "/photos/full/travel/dscf2416.jpg",
    description:
      "Conferences, galas, product launches, and brand activations — captured for marketing, press, and recap reels with fast turnaround.",
    includes: [
      "Half-day or full-day coverage",
      "Same-day social selects available",
      "Branded, usage-ready files",
      "24–72 hour delivery options",
    ],
  },
  {
    title: "Private Celebrations",
    startingAt: "$500",
    icon: "sparkles" as const,
    image: "/photos/full/travel/dscf3898.jpg",
    description:
      "Birthdays, anniversaries, engagements, and family gatherings — relaxed, candid coverage that keeps the memories without the fuss.",
    includes: [
      "Hourly or package coverage",
      "80–150 edited images per event",
      "Private online gallery",
      "1–2 week delivery",
    ],
  },
] as const;

export const EVENT_PACKAGES = [
  {
    name: "Essential",
    price: "$650",
    period: "starting",
    description: "Short private events and quick corporate coverage.",
    features: [
      "Up to 3 hours of coverage",
      "One photographer",
      "150+ professionally edited images",
      "Private online gallery + downloads",
      "2-week delivery",
    ],
  },
  {
    name: "Signature",
    price: "$2,400",
    period: "starting",
    description: "Weddings and full-day conferences — our most-booked package.",
    features: [
      "Up to 8 hours of coverage",
      "Lead photographer + second shooter",
      "250+ professionally edited images",
      "3–5 minute highlight video",
      "Sneak-peek gallery within 48 hours",
      "3–4 week delivery",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$5,000",
    period: "starting",
    description: "Luxury weddings, brand films, and multi-cam productions.",
    features: [
      "Full-day coverage",
      "Lead + second shooter + videographer",
      "400+ professionally edited images",
      "Full film + highlight reel + 3 social cutdowns",
      "Drone / aerial coverage",
      "Priority 2-week delivery",
    ],
  },
] as const;

export const EVENT_ADDONS = [
  { label: "Additional hour", price: "$150/hr" },
  { label: "Second shooter", price: "$400" },
  { label: "Cinematic highlight film", price: "from $350" },
  { label: "Same-day social edits", price: "$175" },
  { label: "Drone / aerial coverage", price: "from $400" },
  { label: "Rush 48-hour delivery", price: "$300" },
  { label: "Album & fine-art prints", price: "à la carte" },
  { label: "Original RAW files", price: "on request" },
] as const;

export const EVENT_STATS = [
  { value: "48 hr", label: "Inquiry response" },
  { value: "2 wk", label: "Standard delivery" },
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
