import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on content strategy, video production, social media marketing, and building brands that sell.",
};

// Blog posts — will be migrated to MDX files as content grows
const BLOG_POSTS = [
  {
    title: "Why Most Brand Content Fails (And What to Do Instead)",
    slug: "why-most-brand-content-fails",
    excerpt:
      "The difference between content that gets likes and content that generates revenue comes down to one thing: scripting.",
    category: "Content Strategy",
    date: "2026-03-30",
    readTime: "5 min",
  },
  {
    title: "The Equipment Doesn't Matter (Until It Does)",
    slug: "equipment-doesnt-matter",
    excerpt:
      "Everyone says gear doesn't matter. That's true — until you're competing for premium clients who can tell the difference.",
    category: "Production",
    date: "2026-03-28",
    readTime: "4 min",
  },
  {
    title: "How We Use The Urban Indian to Test Everything",
    slug: "testing-on-tui",
    excerpt:
      "Running a real brand alongside a creative studio means every strategy we offer clients has been battle-tested first.",
    category: "Behind the Scenes",
    date: "2026-03-25",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeading
          label="Blog"
          title="Insights & Strategy"
          description="Thoughts on content, production, and building brands that actually sell."
        />

        <div className="mx-auto max-w-3xl space-y-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-sm border border-border/50 bg-surface p-8 transition-all hover:border-accent/30"
            >
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="font-semibold uppercase tracking-[0.15em] text-accent">
                  {post.category}
                </span>
                <span>&middot;</span>
                <span>{post.readTime} read</span>
              </div>
              <h2 className="mt-3 font-display text-xl font-bold transition-colors group-hover:text-accent md:text-2xl">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Read more <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
