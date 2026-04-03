"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "What's included in a retainer?",
    answer:
      "Every retainer includes a dedicated content strategy, monthly planning sessions, content creation and production, scheduling and publishing, and performance reporting. The specific deliverables (number of posts, videos, photo shoots) depend on your package tier.",
  },
  {
    question: "How long is the commitment?",
    answer:
      "We require a 3-month minimum to give the strategy time to work and show results. After that, it's month-to-month. Annual contracts get a 10% discount.",
  },
  {
    question: "Do you handle ad spend?",
    answer:
      "We manage the campaigns, but ad spend is billed separately and goes directly to the platform (Facebook/Instagram). We manage it transparently — you always know exactly where your money is going.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Two things: scripting and production quality. Every piece of content starts with a script built around sales psychology — hooks, story structure, and calls to action. And we shoot with a cinema camera and professional lighting, not a phone. Most creators do one or the other. We do both.",
  },
  {
    question: "Can I start with one service and add more later?",
    answer:
      "Absolutely. Many clients start with our Starter package and upgrade as they see results. We'll recommend the right starting point on our discovery call.",
  },
  {
    question: "How fast can you start?",
    answer:
      "Once the retainer is signed, we begin with a brand immersion week. Content production typically starts in week 3. The first month is about building the foundation for everything that follows.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border/50">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="font-display text-base font-semibold pr-4">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                "shrink-0 text-muted transition-transform duration-200",
                openIndex === i && "rotate-180 text-accent"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === i ? "mt-3 max-h-96" : "max-h-0"
            )}
          >
            <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
