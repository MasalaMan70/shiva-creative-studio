export interface Project {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "The Urban Indian",
    slug: "the-urban-indian",
    category: "Brand Content",
    tags: ["Videography", "Photography", "Social Media"],
    description:
      "Full creative production for a desi-inspired streetwear brand. Video, photo, social strategy, and brand storytelling.",
    featured: true,
  },
  {
    title: "Coming Soon",
    slug: "#",
    category: "Video Production",
    tags: ["Videography"],
    description: "New project showcase coming soon.",
    featured: false,
  },
  {
    title: "Coming Soon",
    slug: "#",
    category: "Photography",
    tags: ["Photography"],
    description: "New project showcase coming soon.",
    featured: false,
  },
  {
    title: "Coming Soon",
    slug: "#",
    category: "Social Media",
    tags: ["Social Media"],
    description: "New project showcase coming soon.",
    featured: false,
  },
];
