"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "How do I check if my date is available?",
    answer:
      "Send an inquiry with your event date, location, and type. I respond within 48 hours with availability and a custom quote. Dates are held only once a deposit is received — popular weekends book months ahead, so reach out early.",
  },
  {
    question: "What deposit is required to book?",
    answer:
      "A 30% non-refundable retainer secures your date and is applied to your total. The remaining balance is due one week before the event. Weddings can be split into a payment plan on request.",
  },
  {
    question: "How long until I get my photos and video?",
    answer:
      "Standard delivery is two weeks for most events and three to four weeks for weddings. A sneak-peek gallery goes out within 48 hours on Signature and Premium packages. Corporate clients can add same-day social selects or 48-hour rush delivery.",
  },
  {
    question: "Do you travel for events?",
    answer:
      "Yes. Local events within 30 miles are included. Beyond that, travel is billed at cost, and destination weddings are quoted with travel and lodging bundled in. Tell me where you're headed and I'll put together a flat travel quote.",
  },
  {
    question: "Can I get both photo and video?",
    answer:
      "Absolutely — that's the advantage of one team handling both. The Signature and Premium packages bundle photo and film together, so the coverage is coordinated and nothing gets missed. You can also add a highlight film to any package.",
  },
  {
    question: "What happens if something goes wrong on the day?",
    answer:
      "I carry backup cameras, lenses, lighting, and dual memory-card recording on every shoot, so your images are never riding on a single point of failure. In the rare case of an emergency, I maintain a network of trusted professional shooters as backup.",
  },
];

export function EventFAQ() {
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
