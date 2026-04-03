"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  "Videography",
  "Photography",
  "Social Media Management",
  "Paid Advertising (FB/IG)",
  "Full Retainer Package",
];

const BUDGET_OPTIONS = [
  "Under $2,000/mo",
  "$2,000 – $3,500/mo",
  "$3,500 – $6,000/mo",
  "$6,000 – $10,000+/mo",
  "Not sure yet",
];

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-accent/20 bg-surface p-12 text-center">
        <CheckCircle size={48} className="mb-4 text-accent" />
        <h3 className="font-display text-2xl font-bold">Message Sent</h3>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {state.message && !state.success && (
        <div className="rounded-sm border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {state.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
            placeholder="Your name"
          />
          {state.errors?.name && (
            <p className="mt-1 text-xs text-red-400">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
            placeholder="you@company.com"
          />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-red-400">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="business" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Business Name *
          </label>
          <input
            type="text"
            id="business"
            name="business"
            required
            className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
            placeholder="Your business"
          />
          {state.errors?.business && (
            <p className="mt-1 text-xs text-red-400">{state.errors.business[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="website" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          placeholder="https://yourwebsite.com"
        />
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          Services Interested In *
        </p>
        <div className="flex flex-wrap gap-3">
          {SERVICE_OPTIONS.map((service) => (
            <label
              key={service}
              className="flex cursor-pointer items-center gap-2 rounded-sm border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors has-[:checked]:border-accent/50 has-[:checked]:text-accent"
            >
              <input
                type="checkbox"
                name="services"
                value={service}
                className="sr-only"
              />
              {service}
            </label>
          ))}
        </div>
        {state.errors?.services && (
          <p className="mt-1 text-xs text-red-400">{state.errors.services[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          Monthly Budget Range *
        </label>
        <select
          id="budget"
          name="budget"
          required
          className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {state.errors?.budget && (
          <p className="mt-1 text-xs text-red-400">{state.errors.budget[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="source" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          How Did You Find Us?
        </label>
        <input
          type="text"
          id="source"
          name="source"
          className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          placeholder="Instagram, referral, Google, etc."
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
          placeholder="Tell us about your business, your goals, and what you're looking for..."
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs text-red-400">{state.errors.message[0]}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isPending}>
        {isPending ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
