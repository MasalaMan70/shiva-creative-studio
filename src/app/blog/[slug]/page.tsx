import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Blog content — will migrate to MDX as content grows
const BLOG_CONTENT: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    content: string[];
  }
> = {
  "why-most-brand-content-fails": {
    title: "Why Most Brand Content Fails (And What to Do Instead)",
    category: "Content Strategy",
    date: "March 30, 2026",
    readTime: "5 min",
    content: [
      "Most brand content fails for a simple reason: it was never scripted to sell. It was created to fill a content calendar, hit a posting schedule, or look good in a portfolio. None of those goals put money in the register.",
      "The brands that win on social media understand that every piece of content is a micro sales pitch. Not in a pushy, infomercial way — in a strategic, story-driven way. There's a hook that stops the scroll. There's tension that holds attention. There's a resolution that builds trust. And there's a call to action that feels like the natural next step.",
      "This is what scripting does. It takes content from 'nice to look at' to 'built to convert.' And it's the single most underrated skill in the content creation space.",
      "Here's the thing most creators won't tell you: the visual quality of your content matters less than the words. A well-scripted video shot on a decent camera will outperform a beautifully shot video with no script every single time. The script is the strategy. The production is the amplifier.",
      "At Shiva, every project starts with a script. Not a shot list. Not a vague creative brief. A script. Because that's where the selling happens.",
    ],
  },
  "equipment-doesnt-matter": {
    title: "The Equipment Doesn't Matter (Until It Does)",
    category: "Production",
    date: "March 28, 2026",
    readTime: "4 min",
    content: [
      "You've heard it a thousand times: 'The best camera is the one you have.' And it's true — to a point. When you're starting out, when you're learning, when you're building skills. Shoot with whatever you have and focus on storytelling.",
      "But here's what nobody talks about: when you're pitching premium businesses — the ones paying $3,000 to $10,000 a month for content — they can tell the difference. They notice the shallow depth of field. They see the controlled lighting. They feel the production value, even if they can't articulate why.",
      "That's when equipment starts to matter. Not because better gear makes you more creative, but because it signals to premium clients that you operate at their level. A cinema camera with proper lighting isn't a luxury — it's a trust signal.",
      "Our setup is intentional: a cinema camera as the primary, a B-cam for multi-angle coverage, two continuous lights with a C-stand and diffusion. It's not excessive. It's exactly what you need to produce work that premium brands expect.",
    ],
  },
  "testing-on-tui": {
    title: "How We Use The Urban Indian to Test Everything",
    category: "Behind the Scenes",
    date: "March 25, 2026",
    readTime: "6 min",
    content: [
      "One of the biggest advantages we have as a studio is something most agencies don't: a real brand to test on.",
      "The Urban Indian (TUI) is a desi-inspired streetwear brand that we run alongside the studio. It's not a dummy account or a case study from five years ago. It's a real brand with real customers, real content, and real revenue.",
      "Every scripting framework, every ad strategy, every content format we recommend to clients gets tested on TUI first. When we tell a client 'this hook structure works,' it's because we've seen it perform on our own brand. When we suggest a content cadence, it's because we've measured the impact on our own engagement.",
      "This changes the client conversation completely. We're not selling theory. We're selling proven playbooks. And the proof is live, public, and verifiable.",
      "If you're building a creative agency, my biggest piece of advice is this: run your own brand. It doesn't have to be big. It just has to be real. Because nothing builds client confidence like showing them you practice what you preach.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_CONTENT[slug];
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.content[0].slice(0, 155) + "...",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_CONTENT[slug];

  if (!post) notFound();

  return (
    <div className="pt-24">
      <Section>
        <div className="mx-auto max-w-3xl">
          <a
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </a>

          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="font-semibold uppercase tracking-[0.15em] text-accent">
              {post.category}
            </span>
            <span>&middot;</span>
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime} read</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-12 space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-sm border border-border/50 bg-surface p-8 text-center">
            <h3 className="font-display text-xl font-bold">
              Want content that sells?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Book a free discovery call and let&apos;s talk about your brand.
            </p>
            <div className="mt-6">
              <Button href="/book">
                Book a Call
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
