"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-display text-xl font-bold tracking-widest">
          {SITE_NAME}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/book" size="sm">
            Book a Call
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-4 border-t border-border/50 bg-background px-6 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-muted transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/book" className="mt-2 w-full">
            Book a Call
          </Button>
        </nav>
      </div>
    </header>
  );
}
