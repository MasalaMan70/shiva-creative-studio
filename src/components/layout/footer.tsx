import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";
import { Camera, Video, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="SHIVA"
              width={100}
              height={40}
              className="invert"
            />
            <p className="mt-3 text-sm text-footer-text/60">
              Full stack creative studio. Videography, photography, and
              digital marketing. Content that sells.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-footer-text/40">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-footer-text/60 transition-colors hover:text-footer-text"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + Legal */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-footer-text/40">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text/60 transition-colors hover:text-footer-text"
                aria-label="Instagram"
              >
                <Camera size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text/60 transition-colors hover:text-footer-text"
                aria-label="YouTube"
              >
                <Video size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text/60 transition-colors hover:text-footer-text"
                aria-label="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
            </div>
            <div className="mt-6 flex gap-4 text-xs text-footer-text/40">
              <Link href="/privacy" className="hover:text-footer-text">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-footer-text">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-footer-text/10 pt-8 text-center text-xs text-footer-text/40">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
