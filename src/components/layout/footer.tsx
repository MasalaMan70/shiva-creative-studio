import Link from "next/link";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";
import { Camera, Video, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold tracking-widest">
              {SITE_NAME}
            </p>
            <p className="mt-3 text-sm text-muted">
              Retainer-based videography, photography, and social media
              marketing. Content that sells.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + Legal */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label="Instagram"
              >
                <Camera size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label="YouTube"
              >
                <Video size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
            </div>
            <div className="mt-6 flex gap-4 text-xs text-muted">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
