import { Logo } from "./logo";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg mt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 text-dim text-sm leading-relaxed max-w-sm">
              Licensed electrical contractor based in Mattawa, Ontario.
              Residential and commercial work, done clean.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-line-2 flex items-center justify-center text-dim hover:border-accent hover:text-accent transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-5">// Contact</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:6134020933" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-mute" />
                  <span className="font-mono">613.402.0933</span>
                </a>
              </li>
              <li>
                <a href="mailto:wadecollinselectric@gmail.com" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-mute" />
                  <span>wadecollinselectric@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-dim">
                <MapPin className="w-4 h-4 text-mute mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  781 Bridges St, P.O. Box 979<br />
                  Mattawa, ON&nbsp; P0H 1V0
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">// Hours</div>
            <ul className="space-y-2 text-sm font-mono">
              <li className="flex justify-between">
                <span className="text-dim">MON–FRI</span>
                <span className="text-white">08:00–17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-dim">SAT</span>
                <span className="text-accent">BY APPT</span>
              </li>
              <li className="flex justify-between">
                <span className="text-dim">SUN</span>
                <span className="text-mute">CLOSED</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono text-mute">
          <span>© {new Date().getFullYear()} WADE COLLINS ELECTRIC — ALL RIGHTS RESERVED</span>
          <span className="flex items-center gap-4">
            <Link href="/services" className="hover:text-accent">SERVICES</Link>
            <Link href="/testimonials" className="hover:text-accent">REVIEWS</Link>
            <Link href="/contact" className="hover:text-accent">CONTACT</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
